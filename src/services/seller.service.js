const { randomUUID } = require('crypto');
const sellerRepository = require('../repositories/seller.repository');

async function getAllSellers() {
  return sellerRepository.findAll();
}

async function getSellerById(id) {
  return sellerRepository.findById(id);
}

async function createSeller(payload) {
  const newSeller = {
    id: randomUUID(),
    storeName: payload.storeName,
    email: payload.email,
    phone: payload.phone,
    address: payload.address,
    rating: payload.rating ?? 0
  };

  return sellerRepository.create(newSeller);
}

async function updateSeller(id, updates) {
  return sellerRepository.updateAllowedFields(id, updates);
}

async function deleteSeller(id) {
  return sellerRepository.remove(id);
}

module.exports = {
  getAllSellers,
  getSellerById,
  createSeller,
  updateSeller,
  deleteSeller
};