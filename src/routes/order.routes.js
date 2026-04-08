const express = require('express');
const orderController = require('../controllers/order.controller');
const validateParams = require('../middlewares/validateParams');
const validateBody = require('../middlewares/validateBody');

const router = express.Router();

router.get('/', orderController.getAllOrders);

router.get(
  '/:id',
  validateParams(['id']),
  orderController.getOrderById
);

router.post(
  '/',
  validateBody('createOrder'),
  orderController.createOrder
);

router.patch(
  '/:id/status',
  validateParams(['id']),
  validateBody('updateOrderStatus'),
  orderController.updateOrderStatus
);

router.delete(
  '/:id',
  validateParams(['id']),
  orderController.deleteOrder
);

module.exports = router;