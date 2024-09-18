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

const create = async (req, res) => {
  const { name, artist, launch_date } = req.body;
  const newAlbum = await albumService.create({
    name,
    artist,
    launch_date,
  });
  return res.status(newAlbum.status).json(newAlbum.data);
};

const update = async (req, res) => {
  const { id, name, artist, launch_date, active } = req.body;
  const edit = await albumService.update({
    id,
    name,
    artist,
    launch_date,
    active,
  });
  return res.status(edit.status).json(edit.data);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const del = await albumService.deleteById(id);
  return res.status(del.status).json(del.data);
};

module.exports = {
  findAll,
  findAllComplete,
  findOneById,
  create,
  update,
  deleteById,
};
