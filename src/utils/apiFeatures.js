function parsePagination(query) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.max(parseInt(query.limit, 10) || 10, 1);
  const offset = (page - 1) * limit;

  return { page, limit, offset };
}

function parseProductFilters(query) {
  const allowedSortFields = ['createdAt', 'price', 'name'];
  const allowedOrders = ['asc', 'desc'];

  const sortBy = allowedSortFields.includes(query.sortBy)
    ? query.sortBy
    : 'createdAt';

  const order = allowedOrders.includes((query.order || '').toLowerCase())
    ? query.order.toLowerCase()
    : 'desc';

  return {
    search: query.search?.trim() || null,
    category: query.category?.trim() || null,
    sellerId: query.sellerId?.trim() || null,
    minPrice: query.minPrice !== undefined ? Number(query.minPrice) : null,
    maxPrice: query.maxPrice !== undefined ? Number(query.maxPrice) : null,
    sortBy,
    order
  };
}

module.exports = {
  parsePagination,
  parseProductFilters
};