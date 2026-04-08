const sellerService = require('../services/seller.service');
const AppError = require('../utils/appError');
const { formatDatesInObject } = require('../utils/dateFormatter');
const { enrichSeller } = require('../utils/hateoas');

async function getAllSellers(req, res, next) {
  try {
    //const sellers = await sellerService.getAllSellers();
    //res.status(200).json(sellers);
    const sellers = await sellerService.getAllsellers(req.query);
    const localizedSellers = formatDatesInObject(sellers, req.language);
    //return sendFormattedResponse(req, res.status(200), localizedSellers, 'sellers');
    const hateoasSellers = enrichSeller(req, localizedSellers);

    return sendFormattedResponse(req, res.status(200), hateoasSellers, 'sellers');
  } catch (error) {
    next(error);
  }
}

async function getSellerById(req, res, next) {
  try {
    const seller = await sellerService.getSellerById(req.params.id);

    if (!seller) {
      return next(new AppError('RESOURCE_NOT_FOUND', 404));
    }

    const localizedSeller = formatDatesInObject(seller, req.language);
    const hateoasSeller = enrichSeller(req, localizedSeller);

    return sendFormattedResponse(req, res.status(200), hateoasSeller, 'seller');
  } catch (error) {
    next(error);
  }
}

async function createSeller(req, res, next) {
  try {
    const seller = await sellerService.createSeller(req.body);
    const localizedSeller = formatDatesInObject(seller, req.language);
    const hateoasSeller = enrichSeller(req, localizedSeller);

    return sendFormattedResponse(req, res.status(201), hateoasSeller, 'seller');
  } catch (error) {
    next(error);
  }
}

async function updateSeller(req, res, next) {
  try {
    const updatedSeller = await sellerService.updateSeller(req.params.id, req.body);

    if (!updatedSeller) {
      return next(new AppError('RESOURCE_NOT_FOUND', 404));
    }

    const localizedSeller = formatDatesInObject(updatedSeller, req.language);
    const hateoasSeller = enrichSeller(req, localizedSeller);

    return sendFormattedResponse(req, res.status(200), hateoasSeller, 'seller');
  } catch (error) {
    next(error);
  }
}

async function deleteSeller(req, res, next) {
  try {
    const deleted = await sellerService.deleteSeller(req.params.id);

    if (!deleted) {
      return next(new AppError('RESOURCE_NOT_FOUND', 404));
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllSellers,
  getSellerById,
  createSeller,
  updateSeller,
  deleteSeller
};