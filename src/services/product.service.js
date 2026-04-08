const { randomUUID } = require('crypto');
const productRepository = require('../repositories/product.repository');
const { parsePagination, parseProductFilters } = require('../utils/apiFeatures');

async function getAllProducts(query = {}) {
  const pagination = parsePagination(query);
  const filters = parseProductFilters(query);

  return productRepository.findAll({
    ...pagination,
    ...filters
  });
}

async function getProductById(id) {
  return productRepository.findById(id);
}

async function createProduct(payload) {
  const newProduct = {
    id: randomUUID(),
    name: payload.name,
    description: payload.description,
    price: payload.price,
    currency: payload.currency,
    stock: payload.stock,
    thumbnail: payload.thumbnail || null,
    categoryId: payload.categoryId,
    sellerId: payload.sellerId
  };

  return productRepository.create(newProduct);
}

async function updateProduct(id, updates) {
  return productRepository.updateAllowedFields(id, updates);
}

async function deleteProduct(id) {
  return productRepository.remove(id);
}

async function getProductsBySellerId(sellerId) {
  return productRepository.findAllBySellerId(sellerId);
}

async function getProductsByCategoryId(categoryId) {
  return productRepository.findAllByCategoryId(categoryId);
}

async function getSellerByProductId(productId) {
  return productRepository.findSellerByProductId(productId);
}

async function getCategoryByProductId(productId) {
  return productRepository.findCategoryByProductId(productId);
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