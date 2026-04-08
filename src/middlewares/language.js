module.exports = (req, res, next) => {
  const acceptLanguage = (req.headers['accept-language'] || '').toLowerCase();

  if (acceptLanguage.startsWith('fr')) {
    req.language = 'fr';
  } else {
    req.language = 'en';
  }

  next();
};