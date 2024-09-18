const musicService = require('../services/musicService');

const findAll = async (_req, res) => {
  const find = await musicService.findAll();
  return res.status(find.status).json(find.data);
};

module.exports = {
  findAll,
};
