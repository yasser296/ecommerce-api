const pool = require('../config/db');

async function findAll() {
  const result = await pool.query(`
    SELECT
      id,
      store_name AS "storeName",
      email,
      phone,
      street,
      city,
      country,
      zip_code AS "zipCode",
      rating,
      created_at AS "createdAt"
    FROM sellers
    ORDER BY created_at DESC
  `);

  return result.rows.map((seller) => ({
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
  }));
}

async function findById(id) {
  const result = await pool.query(
    `
    SELECT
      id,
      store_name AS "storeName",
      email,
      phone,
      street,
      city,
      country,
      zip_code AS "zipCode",
      rating,
      created_at AS "createdAt"
    FROM sellers
    WHERE id = $1
    `,
    [id]
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

async function create(seller) {
  if (!seller.address) {
    throw new Error('BODY_NOT_VALID: address is required');
  }

  const result = await pool.query(
    `
    INSERT INTO sellers (
      id, store_name, email, phone, street, city, country, zip_code, rating
    )
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
    RETURNING id
    `,
    [
      seller.id,
      seller.storeName,
      seller.email,
      seller.phone,
      seller.address.street,
      seller.address.city,
      seller.address.country,
      seller.address.zipCode,
      seller.rating
    ]
  );

  return findById(result.rows[0].id);
}

async function updateAllowedFields(id, updates) {
  const fields = [];
  const values = [];
  let index = 1;

  if (updates.storeName !== undefined) {
    fields.push(`store_name = $${index++}`);
    values.push(updates.storeName);
  }

  if (updates.phone !== undefined) {
    fields.push(`phone = $${index++}`);
    values.push(updates.phone);
  }

  if (updates.rating !== undefined) {
    fields.push(`rating = $${index++}`);
    values.push(updates.rating);
  }

  if (updates.address?.street !== undefined) {
    fields.push(`street = $${index++}`);
    values.push(updates.address.street);
  }

  if (updates.address?.city !== undefined) {
    fields.push(`city = $${index++}`);
    values.push(updates.address.city);
  }

  if (updates.address?.country !== undefined) {
    fields.push(`country = $${index++}`);
    values.push(updates.address.country);
  }

  if (updates.address?.zipCode !== undefined) {
    fields.push(`zip_code = $${index++}`);
    values.push(updates.address.zipCode);
  }

  if (fields.length === 0) {
    return findById(id);
  }

  values.push(id);

  const result = await pool.query(
    `
    UPDATE sellers
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
    `DELETE FROM sellers WHERE id = $1`,
    [id]
  );

  return result.rowCount > 0;
}

module.exports = {
  findAll,
  findById,
  create,
  updateAllowedFields,
  remove
};