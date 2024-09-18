const { Router } = require('express');

const { ENDPOINT } = require('../config/strings');

const { findAll, findAllComplete, findOneById } = require('../controllers/albumController');

const albumRouter = Router();

// GET METHODS
albumRouter.get(ENDPOINT.FIND.ALL, findAll);
albumRouter.get(ENDPOINT.FIND.ALL_COMPLETE, findAllComplete);
albumRouter.get(ENDPOINT.FIND.ID, findOneById);

module.exports = albumRouter;
