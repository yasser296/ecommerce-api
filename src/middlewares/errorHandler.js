const { getMessage } = require('../utils/messages');

module.exports = (err, req, res, next) => {
  console.error('Error middleware caught:', err);

  const lang = req.language || 'en';

  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({
      code: 'BODY_NOT_VALID',
      message: getMessage(lang, 'BODY_NOT_VALID'),
      details:
        lang === 'fr'
          ? "L'origine du client n'est pas autorisée par CORS"
          : 'Client origin is not allowed by CORS'
    });
  }

  if (err.isOperational) {
    return res.status(err.statusCode).json({
      code: err.message,
      message: getMessage(lang, err.message),
      ...(err.details ? { details: err.details } : {})
    });
  }

  return res.status(500).json({
    code: 'SERVER_ERROR',
    message: getMessage(lang, 'SERVER_ERROR')
  });
};