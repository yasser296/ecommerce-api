const { getMessage } = require('../utils/messages');

module.exports = (req, res, next) => {
  const lang = req.language || 'en';

  return res.status(404).json({
    code: 'PATH_NOT_FOUND',
    message: getMessage(lang, 'PATH_NOT_FOUND')
  });
};