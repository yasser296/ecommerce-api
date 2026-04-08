const express = require('express');
const categoryController = require('../controllers/category.controller');
const productController = require('../controllers/product.controller');
const validateParams = require('../middlewares/validateParams');

const router = express.Router();

router.get('/', categoryController.getAllCategories);

router.get(
  '/:categoryId/products',
  validateParams(['categoryId']),
  productController.getProductsByCategoryId
);

module.exports = router;