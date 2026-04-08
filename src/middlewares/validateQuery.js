const AppError = require('../utils/appError');

module.exports = (req, res, next) => {
  const { page, limit, minPrice, maxPrice, sortBy, order } = req.query;

  if (page !== undefined && (!Number.isInteger(Number(page)) || Number(page) < 1)) {
    return next(new AppError('BODY_NOT_VALID', 400, 'page must be an integer >= 1'));
  }

  if (limit !== undefined && (!Number.isInteger(Number(limit)) || Number(limit) < 1)) {
    return next(new AppError('BODY_NOT_VALID', 400, 'limit must be an integer >= 1'));
  }

  if (minPrice !== undefined && Number.isNaN(Number(minPrice))) {
    return next(new AppError('BODY_NOT_VALID', 400, 'minPrice must be a valid number'));
  }

  if (maxPrice !== undefined && Number.isNaN(Number(maxPrice))) {
    return next(new AppError('BODY_NOT_VALID', 400, 'maxPrice must be a valid number'));
  }

  if (
    sortBy !== undefined &&
    !['createdAt', 'price', 'name'].includes(sortBy)
  ) {
    return next(
      new AppError(
        'BODY_NOT_VALID',
        400,
        'sortBy must be one of: createdAt, price, name'
      )
    );
  }

  if (
    order !== undefined &&
    !['asc', 'desc'].includes(order.toLowerCase())
  ) {
    return next(
      new AppError('BODY_NOT_VALID', 400, 'order must be asc or desc')
    );
  }

  next();
};