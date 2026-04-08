const AppError = require('../utils/appError');

const uuidRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const allowedOrderStatuses = ['pending', 'paid', 'shipped', 'delivered'];

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isPositiveNumber(value) {
  return typeof value === 'number' && Number.isFinite(value) && value > 0;
}

function isNonNegativeNumber(value) {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0;
}

function isValidAddress(address) {
  return (
    address &&
    typeof address === 'object' &&
    isNonEmptyString(address.street) &&
    isNonEmptyString(address.city) &&
    isNonEmptyString(address.country) &&
    isNonEmptyString(address.zipCode)
  );
}

function validateBody(schemaName) {
  return (req, res, next) => {
    const body = req.body;

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return next(
        new AppError('BODY_NOT_VALID', 400, 'Request body must be a JSON object')
      );
    }

    switch (schemaName) {
      case 'createSeller': {
        const allowedKeys = ['storeName', 'email', 'phone', 'address', 'rating'];
        const bodyKeys = Object.keys(body);
        const invalidKeys = bodyKeys.filter((key) => !allowedKeys.includes(key));

        if (invalidKeys.length > 0) {
          return next(
            new AppError(
              'BODY_NOT_VALID',
              400,
              `Invalid keys: ${invalidKeys.join(', ')}`
            )
          );
        }

        if (
          !isNonEmptyString(body.storeName) ||
          !isNonEmptyString(body.email) ||
          !isNonEmptyString(body.phone) ||
          !isValidAddress(body.address)
        ) {
          return next(
            new AppError(
              'BODY_NOT_VALID',
              400,
              'storeName, email, phone and full address are required'
            )
          );
        }

        if (
          body.rating !== undefined &&
          (typeof body.rating !== 'number' || body.rating < 0 || body.rating > 5)
        ) {
          return next(
            new AppError('BODY_NOT_VALID', 400, 'rating must be between 0 and 5')
          );
        }

        return next();
      }

      case 'updateSeller': {
        const allowedKeys = ['storeName', 'phone', 'address', 'rating'];
        const bodyKeys = Object.keys(body);
        const invalidKeys = bodyKeys.filter((key) => !allowedKeys.includes(key));

        if (invalidKeys.length > 0) {
          return next(
            new AppError(
              'BODY_NOT_VALID',
              400,
              `Only storeName, phone, address and rating can be updated`
            )
          );
        }

        if (bodyKeys.length === 0) {
          return next(new AppError('BODY_NOT_VALID', 400, 'Body cannot be empty'));
        }

        if (
          body.storeName !== undefined &&
          !isNonEmptyString(body.storeName)
        ) {
          return next(
            new AppError('BODY_NOT_VALID', 400, 'storeName must be a non-empty string')
          );
        }

        if (
          body.phone !== undefined &&
          !isNonEmptyString(body.phone)
        ) {
          return next(
            new AppError('BODY_NOT_VALID', 400, 'phone must be a non-empty string')
          );
        }

        if (
          body.rating !== undefined &&
          (typeof body.rating !== 'number' || body.rating < 0 || body.rating > 5)
        ) {
          return next(
            new AppError('BODY_NOT_VALID', 400, 'rating must be between 0 and 5')
          );
        }

        if (body.address !== undefined) {
          if (!body.address || typeof body.address !== 'object' || Array.isArray(body.address)) {
            return next(
              new AppError('BODY_NOT_VALID', 400, 'address must be an object')
            );
          }

          const allowedAddressKeys = ['street', 'city', 'country', 'zipCode'];
          const addressKeys = Object.keys(body.address);
          const invalidAddressKeys = addressKeys.filter(
            (key) => !allowedAddressKeys.includes(key)
          );

          if (invalidAddressKeys.length > 0) {
            return next(
              new AppError(
                'BODY_NOT_VALID',
                400,
                `Invalid address keys: ${invalidAddressKeys.join(', ')}`
              )
            );
          }
        }

        return next();
      }

      case 'createProduct': {
        const allowedKeys = [
          'name',
          'description',
          'price',
          'currency',
          'stock',
          'thumbnail',
          'categoryId',
          'sellerId'
        ];
        const bodyKeys = Object.keys(body);
        const invalidKeys = bodyKeys.filter((key) => !allowedKeys.includes(key));

        if (invalidKeys.length > 0) {
          return next(
            new AppError(
              'BODY_NOT_VALID',
              400,
              `Invalid keys: ${invalidKeys.join(', ')}`
            )
          );
        }

        if (
          !isNonEmptyString(body.name) ||
          body.name.trim().length < 3 ||
          body.name.trim().length > 100
        ) {
          return next(
            new AppError('BODY_NOT_VALID', 400, 'name must be between 3 and 100 characters')
          );
        }

        if (
          !isNonEmptyString(body.description) ||
          body.description.trim().length < 10 ||
          body.description.trim().length > 2000
        ) {
          return next(
            new AppError(
              'BODY_NOT_VALID',
              400,
              'description must be between 10 and 2000 characters'
            )
          );
        }

        if (!isPositiveNumber(body.price)) {
          return next(
            new AppError('BODY_NOT_VALID', 400, 'price must be a positive number')
          );
        }

        if (
          !isNonEmptyString(body.currency) ||
          body.currency.trim().length !== 3
        ) {
          return next(
            new AppError('BODY_NOT_VALID', 400, 'currency must be a 3-letter ISO code')
          );
        }

        if (
          !Number.isInteger(body.stock) ||
          body.stock < 0
        ) {
          return next(
            new AppError('BODY_NOT_VALID', 400, 'stock must be an integer >= 0')
          );
        }

        if (
          body.thumbnail !== undefined &&
          body.thumbnail !== null &&
          !isNonEmptyString(body.thumbnail)
        ) {
          return next(
            new AppError('BODY_NOT_VALID', 400, 'thumbnail must be a non-empty string')
          );
        }

        if (!uuidRegex.test(body.categoryId || '')) {
          return next(
            new AppError('BODY_NOT_VALID', 400, 'categoryId must be a valid UUID')
          );
        }

        if (!uuidRegex.test(body.sellerId || '')) {
          return next(
            new AppError('BODY_NOT_VALID', 400, 'sellerId must be a valid UUID')
          );
        }

        return next();
      }

      case 'updateProduct': {
        const allowedKeys = ['price', 'stock'];
        const bodyKeys = Object.keys(body);
        const invalidKeys = bodyKeys.filter((key) => !allowedKeys.includes(key));

        if (invalidKeys.length > 0) {
          return next(
            new AppError(
              'BODY_NOT_VALID',
              400,
              'Only price and stock can be updated'
            )
          );
        }

        if (bodyKeys.length === 0) {
          return next(new AppError('BODY_NOT_VALID', 400, 'Body cannot be empty'));
        }

        if (
          body.price !== undefined &&
          !isPositiveNumber(body.price)
        ) {
          return next(
            new AppError('BODY_NOT_VALID', 400, 'price must be a positive number')
          );
        }

        if (
          body.stock !== undefined &&
          (!Number.isInteger(body.stock) || body.stock < 0)
        ) {
          return next(
            new AppError('BODY_NOT_VALID', 400, 'stock must be an integer >= 0')
          );
        }

        return next();
      }

      case 'createOrder': {
        const allowedKeys = [
          'customerName',
          'products',
          'totalAmount',
          'shippingAddress'
        ];
        const bodyKeys = Object.keys(body);
        const invalidKeys = bodyKeys.filter((key) => !allowedKeys.includes(key));

        if (invalidKeys.length > 0) {
          return next(
            new AppError(
              'BODY_NOT_VALID',
              400,
              `Invalid keys: ${invalidKeys.join(', ')}`
            )
          );
        }

        if (!isNonEmptyString(body.customerName)) {
          return next(
            new AppError('BODY_NOT_VALID', 400, 'customerName is required')
          );
        }

        if (!Array.isArray(body.products) || body.products.length === 0) {
          return next(
            new AppError('BODY_NOT_VALID', 400, 'products must be a non-empty array')
          );
        }

        for (const productId of body.products) {
          if (!uuidRegex.test(productId || '')) {
            return next(
              new AppError(
                'BODY_NOT_VALID',
                400,
                'Each product id must be a valid UUID'
              )
            );
          }
        }

        if (!isNonNegativeNumber(body.totalAmount)) {
          return next(
            new AppError('BODY_NOT_VALID', 400, 'totalAmount must be >= 0')
          );
        }

        if (!isValidAddress(body.shippingAddress)) {
          return next(
            new AppError(
              'BODY_NOT_VALID',
              400,
              'shippingAddress must contain street, city, country and zipCode'
            )
          );
        }

        return next();
      }

      case 'updateOrderStatus': {
        const allowedKeys = ['status'];
        const bodyKeys = Object.keys(body);
        const invalidKeys = bodyKeys.filter((key) => !allowedKeys.includes(key));

        if (invalidKeys.length > 0) {
          return next(
            new AppError(
              'BODY_NOT_VALID',
              400,
              'Only status can be updated'
            )
          );
        }

        if (!allowedOrderStatuses.includes(body.status)) {
          return next(
            new AppError(
              'BODY_NOT_VALID',
              400,
              `status must be one of: ${allowedOrderStatuses.join(', ')}`
            )
          );
        }

        return next();
      }

      default:
        return next();
    }
  };
}

module.exports = validateBody;