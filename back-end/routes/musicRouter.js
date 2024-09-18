const { Router } = require('express');

const { MUSIC_ROUTE } = require('../config/strings');
const { findAll } = require('../controllers/musicController');

const musicRouter = Router();

musicRouter.get(MUSIC_ROUTE.FIND.ALL, findAll);

module.exports = musicRouter;