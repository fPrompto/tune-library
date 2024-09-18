const musicService = require('../services/musicService');

const findAll = async (_req, res) => {
  const find = await musicService.findAll();
  return res.status(find.status).json(find.data);
};

const findAllActive = async (_req, res) => {
  const find = await musicService.findAllActive();
  return res.status(find.status).json(find.data);
};
const findOneById = async (req, res) => {
  const { id } = req.params;
  const find = await musicService.findOneById(id);
  return res.status(find.status).json(find.data);
};

module.exports = {
  findAll,
  findAllActive,
  findOneById,
};
