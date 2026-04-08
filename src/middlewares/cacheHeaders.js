module.exports = (req, res, next) => {
  if (req.method !== 'GET') {
    return next();
  }

  const now = new Date();

  res.set({
    'Cache-Control': 'public, max-age=60, must-revalidate',
    'Last-Modified': now.toUTCString(),
    'Expires': new Date(now.getTime() + 60 * 1000).toUTCString(),
    Vary: 'Accept, Accept-Encoding'
  });

  next();
};