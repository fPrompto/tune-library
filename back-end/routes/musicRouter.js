const { Router } = require('express');

const { MUSIC_ROUTE } = require('../config/strings');
const {
  findAll,
  findAllActive,
  findOneById,
  create,
  update,
} = require('../controllers/musicController');

const musicRouter = Router();

// GET METHODS
musicRouter.get(MUSIC_ROUTE.FIND.ALL, findAll);
musicRouter.get(MUSIC_ROUTE.FIND.ACTIVE, findAllActive);
musicRouter.get(MUSIC_ROUTE.FIND.ID, findOneById);

// POST METHODS
musicRouter.post(MUSIC_ROUTE.CREATE, create);

// PUT METHODS
musicRouter.put(MUSIC_ROUTE.UPDATE, update);

module.exports = musicRouter;
