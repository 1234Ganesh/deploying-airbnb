//core module
const path = require('path')
//external module
const express = require('express');
const rootDir = require('../utils/pathUtils');
const { getaddHome, getHostHomes, getEditHome, postEditHome, postAddHome, postDeleteHome } = require('../controllers/hostControler');



const hostRouter = express.Router();

hostRouter.get('/host/add-home',getaddHome)



hostRouter.post('/host/add-home',postAddHome)
hostRouter.get('/host-home-list',getHostHomes)
hostRouter.get("/host/edit-home/:homeId",getEditHome)

hostRouter.post('/host/edit-home',postEditHome)
hostRouter.post('/host/delete-home/:homeId',postDeleteHome)


module.exports = hostRouter

