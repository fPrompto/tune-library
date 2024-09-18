const albumService = require('../services/albumService');

const findAll = async (_req, res) => {
  const find = await albumService.findAll();
  return res.status(find.status).json(find.data);
};

module.exports = { findAll };
