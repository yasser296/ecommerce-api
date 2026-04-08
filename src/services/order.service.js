const { randomUUID } = require('crypto');
const pool = require('../config/db');
const orderRepository = require('../repositories/order.repository');

async function getAllOrders(filters) {
  return orderRepository.findAll(filters);
}

async function getOrderById(id) {
  return orderRepository.findById(id);
}

async function createOrder(payload) {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const newOrder = {
      id: randomUUID(),
      customerName: payload.customerName,
      totalAmount: payload.totalAmount,
      status: 'pending',
      shippingAddress: payload.shippingAddress,
      products: (payload.products || []).map((productId) => ({
        id: randomUUID(),
        productId,
        quantity: 1
      }))
    };

    const createdOrder = await orderRepository.create(newOrder, client);

    await client.query('COMMIT');
    return createdOrder;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

async function updateOrderStatus(id, status) {
  return orderRepository.updateStatus(id, status);
}

async function deleteOrder(id) {
  return orderRepository.remove(id);
}

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrderStatus,
  deleteOrder
};