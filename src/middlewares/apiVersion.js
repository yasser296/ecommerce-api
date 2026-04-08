const AppError = require('../utils/appError');

module.exports = (req, res, next) => {
  const acceptHeader = req.headers.accept || '';

  // Accept: application/vnd.ecommerce.v1+json
  // Accept: application/vnd.ecommerce.v2+json

  if (acceptHeader.includes('application/vnd.ecommerce.v1+json')) {
    req.apiVersion = 'v1';
    return next();
  }

  if (acceptHeader.includes('application/vnd.ecommerce.v2+json')) {
    req.apiVersion = 'v2';
    return next();
  }

  if (
    acceptHeader &&
    acceptHeader.includes('application/vnd.ecommerce')
  ) {
    return next(
      new AppError(
        'BODY_NOT_VALID',
        400,
        'Unsupported API version in Accept header'
      )
    );
  }

  req.apiVersion = 'v1';
  next();
};