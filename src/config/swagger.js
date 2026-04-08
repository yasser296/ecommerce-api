const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

module.exports = setupSwagger;