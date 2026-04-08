const productService = require('../services/product.service');
const AppError = require('../utils/appError');
const { sendFormattedResponse } = require('../utils/formatResponse');
const { formatDatesInObject } = require('../utils/dateFormatter');
const {
  enrichProduct,
  enrichProductList
} = require('../utils/hateoas');

async function getAllProducts(req, res, next) {
  try {
    const products = await productService.getAllProducts(req.query);
    const localizedProducts = formatDatesInObject(products, req.language);
    const hateoasProducts = enrichProductList(req, localizedProducts);
    return sendFormattedResponse(req, res.status(200), hateoasProducts, 'products');
  } catch (error) {
    next(error);
  }
}

async function getProductById(req, res, next) {
  try {
    const product = await productService.getProductById(req.params.id);

    if (!product) {
      return next(new AppError('RESOURCE_NOT_FOUND', 404));
    }

    const localizedProduct = formatDatesInObject(product, req.language);
    const hateoasProduct = enrichProduct(req, localizedProduct);
    return sendFormattedResponse(req, res.status(200), hateoasProduct, 'product');
  } catch (error) {
    next(error);
  }
}

async function createProduct(req, res, next) {
  try {
    const product = await productService.createProduct(req.body);
    const localizedProduct = formatDatesInObject(product, req.language);
    const hateoasProduct = enrichProduct(req, localizedProduct);

    return sendFormattedResponse(req, res.status(201), hateoasProduct, 'product');
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  try {
    const updatedProduct = await productService.updateProduct(req.params.id, req.body);

    if (!updatedProduct) {
      return next(new AppError('RESOURCE_NOT_FOUND', 404));
    }

    const localizedProduct = formatDatesInObject(updatedProduct, req.language);
    const hateoasProduct = enrichProduct(req, localizedProduct);

    return sendFormattedResponse(req, res.status(200), hateoasProduct, 'product');
  } catch (error) {
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  try {
    const deleted = await productService.deleteProduct(req.params.id);

    if (!deleted) {
      return next(new AppError('RESOURCE_NOT_FOUND', 404));
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

async function getProductsBySellerId(req, res, next) {
  try {
    const products = await productService.getProductsBySellerId(req.params.sellerId);
    return sendFormattedResponse(req, res.status(200), products, 'products');
  } catch (error) {
    next(error);
  }
}

async function getProductsByCategoryId(req, res, next) {
  try {
    const products = await productService.getProductsByCategoryId(req.params.categoryId);
    return sendFormattedResponse(req, res.status(200), products, 'products');
  } catch (error) {
    next(error);
  }
}

async function getSellerByProductId(req, res, next) {
  try {
    const seller = await productService.getSellerByProductId(req.params.id);

    if (!seller) {
      return next(new AppError('RESOURCE_NOT_FOUND', 404));
    }

    res.status(200).json(seller);
  } catch (error) {
    next(error);
  }
}

async function getCategoryByProductId(req, res, next) {
  try {
    const category = await productService.getCategoryByProductId(req.params.id);

    if (!category) {
      return next(new AppError('RESOURCE_NOT_FOUND', 404));
    }

    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsBySellerId,
  getProductsByCategoryId,
  getSellerByProductId,
  getCategoryByProductId
};