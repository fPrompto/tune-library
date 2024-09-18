const albumService = require('../services/albumService');

const findAll = async (_req, res) => {
  const find = await albumService.findAll();
  return res.status(find.status).json(find.data);
};

const findAllComplete = async (_req, res) => {
  const find = await albumService.findAllComplete();
  return res.status(find.status).json(find.data);
};

const findOneById = async (req, res) => {
  const { id } = req.params;
  const find = await albumService.findOneById(id);
  return res.status(find.status).json(find.data);
};

module.exports = { findAll, findAllComplete, findOneById };
