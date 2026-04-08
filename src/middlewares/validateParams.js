const AppError = require('../utils/appError');

const uuidRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function validateParams(paramNames = []) {
  return (req, res, next) => {
    for (const paramName of paramNames) {
      const value = req.params[paramName];

      if (!value || !uuidRegex.test(value)) {
        return next(
          new AppError(
            'PARAMS_NOT_VALID',
            400,
            `${paramName} must be a valid UUID`
          )
        );
      }
    }

    next();
  };
}

module.exports = validateParams;