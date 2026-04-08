const orderService = require('../services/order.service');
const AppError = require('../utils/appError');
const { enrichOrder } = require('../utils/hateoas');
const { formatDatesInObject } = require('../utils/dateFormatter');
const { sendFormattedResponse } = require('../utils/formatResponse');

async function getAllOrders(req, res, next) {
  try {
    const orders = await orderService.getAllOrders({
      productId: req.query.productId,
      customerName: req.query.customerName
    });

    //res.status(200).json(orders);
    const localizedOrder = formatDatesInObject(orders, req.language);
    const hateoasOrder = enrichOrder(req, localizedOrder);

    return sendFormattedResponse(req, res.status(200), hateoasOrder, 'orders');
  } catch (error) {
    next(error);
  }
}

async function getOrderById(req, res, next) {
  try {
    const order = await orderService.getOrderById(req.params.id);

    if (!order) {
      return next(new AppError('RESOURCE_NOT_FOUND', 404));
    }

    const localizedOrder = formatDatesInObject(order, req.language);
    const hateoasOrder = enrichOrder(req, localizedOrder);

    return sendFormattedResponse(req, res.status(200), hateoasOrder, 'order');
  } catch (error) {
    next(error);
  }
}

async function createOrder(req, res, next) {
  try {
    const order = await orderService.createOrder(req.body);
    const localizedOrder = formatDatesInObject(order, req.language);
    const hateoasOrder = enrichOrder(req, localizedOrder);

    return sendFormattedResponse(req, res.status(201), hateoasOrder, 'order');
  } catch (error) {
    next(error);
  }
}

async function updateOrderStatus(req, res, next) {
  try {
    const updatedOrder = await orderService.updateOrderStatus(
      req.params.id,
      req.body.status
    );

    if (!updatedOrder) {
      return next(new AppError('RESOURCE_NOT_FOUND', 404));
    }

    const localizedOrder = formatDatesInObject(updatedOrder, req.language);
    const hateoasOrder = enrichOrder(req, localizedOrder);

    return sendFormattedResponse(req, res.status(200), hateoasOrder, 'order');
  } catch (error) {
    next(error);
  }
}

async function deleteOrder(req, res, next) {
  try {
    const deleted = await orderService.deleteOrder(req.params.id);

    if (!deleted) {
      return next(new AppError('RESOURCE_NOT_FOUND', 404));
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrderStatus,
  deleteOrder
};