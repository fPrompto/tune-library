const { Router } = require('express');

const { ENDPOINT } = require('../config/strings');

const { findAll } = require('../controllers/albumController');

const albumRouter = Router();

// GET METHODS
albumRouter.get(ENDPOINT.FIND.ALL, findAll);

module.exports = albumRouter;
