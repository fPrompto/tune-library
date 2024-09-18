const { Router } = require('express');

const { ENDPOINT } = require('../config/strings');

const { findAll, findAllComplete } = require('../controllers/albumController');

const albumRouter = Router();

// GET METHODS
albumRouter.get(ENDPOINT.FIND.ALL, findAll);
albumRouter.get(ENDPOINT.FIND.ALL_COMPLETE, findAllComplete);

module.exports = albumRouter;
