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

const create = async (req, res) => {
  const { name, artist, launch_date, album_id } = req.body;
  const newMusic = await musicService.create({
    name,
    artist,
    launch_date,
    album_id,
  });
  return res.status(newMusic.status).json(newMusic.data);
};

const update = async (req, res) => {
  const { id, name, artist, launch_date, album_id, active } = req.body;
  const edit = await musicService.update({
    id,
    name,
    artist,
    launch_date,
    album_id,
    active,
  });
  return res.status(edit.status).json(edit.data);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const del = await musicService.deleteById(id);
  return res.status(del.status).json(del.data);
};

module.exports = {
  findAll,
  findAllActive,
  findOneById,
  create,
  update,
  deleteById,
};
