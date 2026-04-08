function getBasePath(req) {
  if (req.baseUrl && req.baseUrl.startsWith('/api/v1')) {
    return '/api/v1';
  }

  if (req.apiVersion === 'v1') {
    return '/api';
  }

  return '/api/v1';
}

function productLinks(req, productId) {
  const base = getBasePath(req);

  return {
    self: { href: `${base}/products/${productId}`, method: 'GET' },
    collection: { href: `${base}/products`, method: 'GET' },
    seller: { href: `${base}/products/${productId}/seller`, method: 'GET' },
    category: { href: `${base}/products/${productId}/category`, method: 'GET' },
    update: { href: `${base}/products/${productId}`, method: 'PATCH' },
    delete: { href: `${base}/products/${productId}`, method: 'DELETE' }
  };
}

function sellerLinks(req, sellerId) {
  const base = getBasePath(req);

  return {
    self: { href: `${base}/sellers/${sellerId}`, method: 'GET' },
    collection: { href: `${base}/sellers`, method: 'GET' },
    products: { href: `${base}/sellers/${sellerId}/products`, method: 'GET' },
    update: { href: `${base}/sellers/${sellerId}`, method: 'PATCH' },
    delete: { href: `${base}/sellers/${sellerId}`, method: 'DELETE' }
  };
}

function categoryLinks(req, categoryId) {
  const base = getBasePath(req);

  return {
    self: { href: `${base}/categories/${categoryId}`, method: 'GET' },
    collection: { href: `${base}/categories`, method: 'GET' },
    products: { href: `${base}/categories/${categoryId}/products`, method: 'GET' }
  };
}

function orderLinks(req, orderId) {
  const base = getBasePath(req);

  return {
    self: { href: `${base}/orders/${orderId}`, method: 'GET' },
    collection: { href: `${base}/orders`, method: 'GET' },
    updateStatus: { href: `${base}/orders/${orderId}/status`, method: 'PATCH' },
    delete: { href: `${base}/orders/${orderId}`, method: 'DELETE' }
  };
}

function enrichProduct(req, product) {
  return {
    ...product,
    _links: productLinks(req, product.id)
  };
}

function enrichSeller(req, seller) {
  return {
    ...seller,
    _links: sellerLinks(req, seller.id)
  };
}

function enrichCategory(req, category) {
  if (typeof category === 'string') {
    return {
      name: category,
      _links: {
        collection: {
          href: `${getBasePath(req)}/categories`,
          method: 'GET'
        }
      }
    };
  }

  return {
    ...category,
    _links: categoryLinks(req, category.id)
  };
}

function enrichOrder(req, order) {
  return {
    ...order,
    _links: orderLinks(req, order.id)
  };
}

function enrichProductList(req, payload) {
  return {
    ...payload,
    data: (payload.data || []).map((product) => enrichProduct(req, product)),
    _links: {
      self: {
        href: req.originalUrl,
        method: 'GET'
      },
      create: {
        href: `${getBasePath(req)}/products`,
        method: 'POST'
      }
    }
  };
}

module.exports = {
  productLinks,
  sellerLinks,
  categoryLinks,
  orderLinks,
  enrichProduct,
  enrichSeller,
  enrichCategory,
  enrichOrder,
  enrichProductList
};