const categoryService = require('../services/category.service');
const { enrichCategory } = require('../utils/hateoas');
const { sendFormattedResponse } = require('../utils/formatResponse');

async function getAllCategories(req, res, next) {
  try {
    const categories = await categoryService.getAllCategories();
    const enrichedCategories = categories.map((category) => enrichCategory(req, category));

    return sendFormattedResponse(
    req,
    res.status(200),
    { data: enrichedCategories },
    'categories'
    );
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllCategories
};