const path = require('path');
const express = require('express');
const rootDir = require('../utils/pathUtils');
const { getHome, getBookings, getIndex, getFavouriteList, geHomeDetails, postAddToFavourite, postRemoveFavourite } = require('../controllers/storeControler');




const storeRouter = express.Router();

storeRouter.get('/',getIndex)

storeRouter.get('/home',getHome)

storeRouter.get('/booking',getBookings)


storeRouter.get('/favourites',getFavouriteList)

storeRouter.get('/homes/:homeId',geHomeDetails)
storeRouter.post('/favourites',postAddToFavourite)
storeRouter.post('/favourite/delete/:homeId',postRemoveFavourite)

module.exports = storeRouter