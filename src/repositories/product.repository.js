const pool = require('../config/db');

async function findAll(options = {}) {
  const {
    page = 1,
    limit = 10,
    offset = 0,
    search = null,
    category = null,
    sellerId = null,
    minPrice = null,
    maxPrice = null,
    sortBy = 'createdAt',
    order = 'desc'
  } = options;

  const whereClauses = [];
  const values = [];

  if (search) {
    values.push(`%${search}%`);
    whereClauses.push(`(
      p.name ILIKE $${values.length}
      OR p.description ILIKE $${values.length}
    )`);
  }

  if (category) {
    values.push(category);
    whereClauses.push(`c.name ILIKE $${values.length}`);
  }

  if (sellerId) {
    values.push(sellerId);
    whereClauses.push(`p.seller_id = $${values.length}`);
  }

  if (minPrice !== null && !Number.isNaN(minPrice)) {
    values.push(minPrice);
    whereClauses.push(`p.price >= $${values.length}`);
  }

  if (maxPrice !== null && !Number.isNaN(maxPrice)) {
    values.push(maxPrice);
    whereClauses.push(`p.price <= $${values.length}`);
  }

  const whereSQL =
    whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';

  let sortColumn = 'p.created_at';
  if (sortBy === 'price') sortColumn = 'p.price';
  if (sortBy === 'name') sortColumn = 'p.name';

  const sortOrder = order === 'asc' ? 'ASC' : 'DESC';

  const countQuery = `
    SELECT COUNT(*) AS total
    FROM products p
    JOIN categories c ON c.id = p.category_id
    ${whereSQL}
  `;

  const countResult = await pool.query(countQuery, values);
  const total = Number(countResult.rows[0].total);

  values.push(limit);
  values.push(offset);

  const dataQuery = `
    SELECT
      p.id,
      p.name,
      p.price,
      p.thumbnail,
      c.name AS category,
      p.created_at AS "createdAt"
    FROM products p
    JOIN categories c ON c.id = p.category_id
    ${whereSQL}
    ORDER BY ${sortColumn} ${sortOrder}
    LIMIT $${values.length - 1}
    OFFSET $${values.length}
  `;

  const result = await pool.query(dataQuery, values);

  return {
    data: result.rows.map((row) => ({
      id: row.id,
      name: row.name,
      price: Number(row.price),
      thumbnail: row.thumbnail,
      category: row.category,
      createdAt: row.createdAt
    })),
    total,
    page,
    limit
  };
}

async function findById(id) {
  const result = await pool.query(
    `
    SELECT
      p.id,
      p.name,
      p.description,
      p.price,
      p.currency,
      p.stock,
      p.thumbnail,
      p.created_at AS "createdAt",
      c.id AS "categoryId",
      c.name AS "categoryName",
      s.id AS "sellerId",
      s.store_name AS "storeName",
      s.rating AS "sellerRating"
    FROM products p
    JOIN categories c ON c.id = p.category_id
    JOIN sellers s ON s.id = p.seller_id
    WHERE p.id = $1
    `,
    [id]
  );

  const row = result.rows[0];
  if (!row) return null;

  return {
    id: row.id,
    name: row.name,
    description: row.description,
    price: Number(row.price),
    currency: row.currency,
    stock: row.stock,
    images: row.thumbnail ? [row.thumbnail] : [],
    category: {
      id: row.categoryId,
      name: row.categoryName
    },
    createdAt: row.createdAt,
    seller: {
      id: row.sellerId,
      storeName: row.storeName,
      rating: Number(row.sellerRating)
    }
  };
}

async function create(product) {
  const result = await pool.query(
    `
    INSERT INTO products (
      id, name, description, price, currency, stock,
      thumbnail, category_id, seller_id
    )
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
    RETURNING id
    `,
    [
      product.id,
      product.name,
      product.description,
      product.price,
      product.currency,
      product.stock,
      product.thumbnail,
      product.categoryId,
      product.sellerId
    ]
  );

  return findById(result.rows[0].id);
}

async function updateAllowedFields(id, updates) {
  const fields = [];
  const values = [];
  let index = 1;

  if (updates.price !== undefined) {
    fields.push(`price = $${index++}`);
    values.push(updates.price);
  }

  if (updates.stock !== undefined) {
    fields.push(`stock = $${index++}`);
    values.push(updates.stock);
  }

  if (fields.length === 0) {
    return findById(id);
  }

  values.push(id);

  const result = await pool.query(
    `
    UPDATE products
    SET ${fields.join(', ')}
    WHERE id = $${index}
    RETURNING id
    `,
    values
  );

  if (result.rowCount === 0) return null;

  return findById(id);
}

async function remove(id) {
  const result = await pool.query(
    `DELETE FROM products WHERE id = $1`,
    [id]
  );

  return result.rowCount > 0;
}

async function findAllBySellerId(sellerId) {
  const result = await pool.query(
    `
    SELECT
      p.id,
      p.name,
      p.price,
      p.thumbnail,
      c.name AS category,
      p.created_at AS "createdAt"
    FROM products p
    JOIN categories c ON c.id = p.category_id
    WHERE p.seller_id = $1
    ORDER BY p.created_at DESC
    `,
    [sellerId]
  );

  return result.rows.map((row) => ({
    id: row.id,
    name: row.name,
    price: Number(row.price),
    thumbnail: row.thumbnail,
    category: row.category,
    createdAt: row.createdAt
  }));
}

async function findAllByCategoryId(categoryId) {
  const result = await pool.query(
    `
    SELECT
      p.id,
      p.name,
      p.price,
      p.thumbnail,
      c.name AS category,
      p.created_at AS "createdAt"
    FROM products p
    JOIN categories c ON c.id = p.category_id
    WHERE p.category_id = $1
    ORDER BY p.created_at DESC
    `,
    [categoryId]
  );

  return result.rows.map((row) => ({
    id: row.id,
    name: row.name,
    price: Number(row.price),
    thumbnail: row.thumbnail,
    category: row.category,
    createdAt: row.createdAt
  }));
}

async function findSellerByProductId(productId) {
  const result = await pool.query(
    `
    SELECT
      s.id,
      s.store_name AS "storeName",
      s.email,
      s.phone,
      s.street,
      s.city,
      s.country,
      s.zip_code AS "zipCode",
      s.rating,
      s.created_at AS "createdAt"
    FROM products p
    JOIN sellers s ON s.id = p.seller_id
    WHERE p.id = $1
    `,
    [productId]
  );

  const seller = result.rows[0];
  if (!seller) return null;

  return {
    id: seller.id,
    storeName: seller.storeName,
    email: seller.email,
    phone: seller.phone,
    address: {
      street: seller.street,
      city: seller.city,
      country: seller.country,
      zipCode: seller.zipCode
    },
    rating: Number(seller.rating),
    createdAt: seller.createdAt
  };
}

async function findCategoryByProductId(productId) {
  const result = await pool.query(
    `
    SELECT
      c.id,
      c.name
    FROM products p
    JOIN categories c ON c.id = p.category_id
    WHERE p.id = $1
    `,
    [productId]
  );

  return result.rows[0] || null;
}

module.exports = {
  findAll,
  findById,
  create,
  updateAllowedFields,
  remove,
  findAllBySellerId,
  findAllByCategoryId,
  findSellerByProductId,
  findCategoryByProductId
};