const express = require('express');
const productController = require('../controllers/product.controller');
const validateParams = require('../middlewares/validateParams');
const validateBody = require('../middlewares/validateBody');
const validateQuery = require('../middlewares/validateQuery');

const router = express.Router();

router.get(
  '/',
  validateQuery,
  productController.getAllProducts
);

router.get(
  '/:id',
  validateParams(['id']),
  productController.getProductById
);

router.get(
  '/:id/seller',
  validateParams(['id']),
  productController.getSellerByProductId
);

router.get(
  '/:id/category',
  validateParams(['id']),
  productController.getCategoryByProductId
);

router.post(
  '/',
  validateBody('createProduct'),
  productController.createProduct
);

router.patch(
  '/:id',
  validateParams(['id']),
  validateBody('updateProduct'),
  productController.updateProduct
);

router.delete(
  '/:id',
  validateParams(['id']),
  productController.deleteProduct
);

module.exports = router;