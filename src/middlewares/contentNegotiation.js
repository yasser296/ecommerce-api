const AppError = require('../utils/appError');

module.exports = (req, res, next) => {
  const acceptHeader = req.headers.accept || '*/*';

  if (
    acceptHeader === '*/*' ||
    acceptHeader.includes('application/json') ||
    acceptHeader.includes('application/xml') ||
    acceptHeader.includes('application/vnd.ecommerce.v1+json') ||
    acceptHeader.includes('application/vnd.ecommerce.v2+json')
  ) {
    return next();
  }

  return next(
    new AppError(
      'BODY_NOT_VALID',
      406,
      'Supported formats: application/json, application/xml'
    )
  );
};