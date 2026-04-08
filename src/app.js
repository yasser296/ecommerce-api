const express = require('express');
const compression = require('compression');
const corsConfig = require('./config/cors');
const routes = require('./routes');
const apiVersion = require('./middlewares/apiVersion');
const contentNegotiation = require('./middlewares/contentNegotiation');
const cacheHeaders = require('./middlewares/cacheHeaders');
const language = require('./middlewares/language');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');
const setupSwagger = require('./config/swagger');

const app = express();

setupSwagger(app);
app.set('etag', 'strong');

app.use(corsConfig);
app.use(express.json());
app.use(cacheHeaders);
app.use(language);

app.use(
  compression({
    filter: (req, res) => {
      if (req.method !== 'GET') {
        return false;
      }

      return compression.filter(req, res);
    }
  })
);

app.get('/', (req, res) => {
  res.json({ message: 'E-Commerce API is running' });
});

app.use('/api/v1', contentNegotiation, routes);
app.use('/api', apiVersion, contentNegotiation, routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;