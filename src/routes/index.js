const express = require('express');
const productRoutes = require('./product.routes');
const sellerRoutes = require('./seller.routes');
const orderRoutes = require('./order.routes');
const categoryRoutes = require('./category.routes');

const router = express.Router();

router.use('/products', productRoutes);
router.use('/sellers', sellerRoutes);
router.use('/orders', orderRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;