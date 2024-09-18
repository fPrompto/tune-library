const { Router } = require('express');

const { MUSIC_ROUTE } = require('../config/strings');
const {
  findAll,
  findAllActive,
  findOneById,
} = require('../controllers/musicController');

const musicRouter = Router();

musicRouter.get(MUSIC_ROUTE.FIND.ALL, findAll);
musicRouter.get(MUSIC_ROUTE.FIND.ACTIVE, findAllActive);
musicRouter.get(MUSIC_ROUTE.FIND.ID, findOneById);

module.exports = musicRouter;
