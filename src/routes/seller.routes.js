const express = require('express');
const sellerController = require('../controllers/seller.controller');
const productController = require('../controllers/product.controller');
const validateParams = require('../middlewares/validateParams');
const validateBody = require('../middlewares/validateBody');

const router = express.Router();

router.get('/', sellerController.getAllSellers);

router.get(
  '/:id',
  validateParams(['id']),
  sellerController.getSellerById
);

router.get(
  '/:sellerId/products',
  validateParams(['sellerId']),
  productController.getProductsBySellerId
);

router.post(
  '/',
  validateBody('createSeller'),
  sellerController.createSeller
);

router.patch(
  '/:id',
  validateParams(['id']),
  validateBody('updateSeller'),
  sellerController.updateSeller
);

router.delete(
  '/:id',
  validateParams(['id']),
  sellerController.deleteSeller
);

module.exports = router;