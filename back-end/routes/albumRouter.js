const { Router } = require('express');

const { ENDPOINT } = require('../config/strings');

const {
  findAll,
  findAllComplete,
  findOneById,
  create,
  update,
  deleteById,
} = require('../controllers/albumController');

const albumRouter = Router();

// GET METHODS
albumRouter.get(ENDPOINT.FIND.ALL, findAll);
albumRouter.get(ENDPOINT.FIND.ALL_COMPLETE, findAllComplete);
albumRouter.get(ENDPOINT.FIND.ID, findOneById);

// POST METHODS
albumRouter.post(ENDPOINT.CREATE, create);

// PUT METHODS
albumRouter.put(ENDPOINT.UPDATE, update);

// DELETE METHODS
albumRouter.delete(ENDPOINT.DELETE, deleteById);

module.exports = albumRouter;
