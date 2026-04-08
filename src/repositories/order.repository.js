const pool = require('../config/db');

async function findAll({ productId, customerName }) {
  let query = `
    SELECT DISTINCT
      o.id,
      o.customer_name AS "customerName",
      o.total_amount AS "totalAmount",
      o.status,
      o.created_at AS "createdAt"
    FROM orders o
  `;

  const conditions = [];
  const values = [];

  if (productId) {
    query += ` JOIN order_items oi ON oi.order_id = o.id `;
    values.push(productId);
    conditions.push(`oi.product_id = $${values.length}`);
  }

  if (customerName) {
    values.push(customerName);
    conditions.push(`o.customer_name ILIKE $${values.length}`);
  }

  if (conditions.length > 0) {
    query += ` WHERE ` + conditions.join(' AND ');
  }

  query += ` ORDER BY o.created_at DESC`;

  const result = await pool.query(query, values);

  return result.rows.map((row) => ({
    id: row.id,
    customerName: row.customerName,
    totalAmount: Number(row.totalAmount),
    status: row.status,
    createdAt: row.createdAt
  }));
}

async function findById(id, client = pool) {
  const orderResult = await client.query(
    `
    SELECT
      o.id,
      o.customer_name AS "customerName",
      o.total_amount AS "totalAmount",
      o.status,
      o.created_at AS "createdAt"
    FROM orders o
    WHERE o.id = $1
    `,
    [id]
  );

  if (orderResult.rowCount === 0) return null;

  const order = orderResult.rows[0];

  const itemsResult = await client.query(
    `
    SELECT
      p.id,
      p.name,
      p.price,
      p.thumbnail,
      c.name AS category
    FROM order_items oi
    JOIN products p ON p.id = oi.product_id
    JOIN categories c ON c.id = p.category_id
    WHERE oi.order_id = $1
    `,
    [id]
  );

  return {
    id: order.id,
    customerName: order.customerName,
    products: itemsResult.rows.map((row) => ({
      id: row.id,
      name: row.name,
      price: Number(row.price),
      thumbnail: row.thumbnail,
      category: row.category
    })),
    totalAmount: Number(order.totalAmount),
    status: order.status,
    createdAt: order.createdAt
  };
}

async function create(order, client = pool) {
  await client.query(
    `
    INSERT INTO orders (
      id, customer_name, total_amount, status,
      shipping_street, shipping_city, shipping_country, shipping_zip_code
    )
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    `,
    [
      order.id,
      order.customerName,
      order.totalAmount,
      order.status,
      order.shippingAddress.street,
      order.shippingAddress.city,
      order.shippingAddress.country,
      order.shippingAddress.zipCode
    ]
  );

  for (const item of order.products) {
    await client.query(
      `
      INSERT INTO order_items (id, order_id, product_id, quantity)
      VALUES ($1,$2,$3,$4)
      `,
      [item.id, order.id, item.productId, item.quantity]
    );
  }

  return findById(order.id, client);
}

async function updateStatus(id, status) {
  const result = await pool.query(
    `
    UPDATE orders
    SET status = $1
    WHERE id = $2
    RETURNING id
    `,
    [status, id]
  );

  if (result.rowCount === 0) return null;

  return findById(id);
}

async function remove(id) {
  const result = await pool.query(
    `DELETE FROM orders WHERE id = $1`,
    [id]
  );

  return result.rowCount > 0;
}

module.exports = {
  findAll,
  findById,
  create,
  updateStatus,
  remove
};