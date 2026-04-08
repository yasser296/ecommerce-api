const categoryRepository = require('../repositories/category.repository');

async function getAllCategories() {
  return categoryRepository.findAll();
}

module.exports = {
  getAllCategories
};