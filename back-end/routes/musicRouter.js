const { Router } = require('express');

const { ENDPOINT } = require('../config/strings');
const {
  findAll,
  findAllActive,
  findOneById,
  create,
  update,
  deleteById,
} = require('../controllers/musicController');

const musicRouter = Router();

// GET METHODS
musicRouter.get(ENDPOINT.FIND.ALL, findAll);
musicRouter.get(ENDPOINT.FIND.ACTIVE, findAllActive);
musicRouter.get(ENDPOINT.FIND.ID, findOneById);

// POST METHODS
musicRouter.post(ENDPOINT.CREATE, create);

// PUT METHODS
musicRouter.put(ENDPOINT.UPDATE, update);

// DELETE METHODS
musicRouter.delete(ENDPOINT.DELETE, deleteById);

module.exports = musicRouter;
