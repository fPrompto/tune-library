const { Router } = require('express');

const { MUSIC_ROUTE } = require('../config/strings');
const { findAll, findAllActive } = require('../controllers/musicController');

const musicRouter = Router();

musicRouter.get(MUSIC_ROUTE.FIND.ALL, findAll);
musicRouter.get(MUSIC_ROUTE.FIND.ACTIVE, findAllActive);

module.exports = musicRouter;