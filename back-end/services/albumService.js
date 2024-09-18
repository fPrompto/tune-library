const { Music, Album } = require('../models');
const { STATUS_CODE } = require('../config/strings');

const findAll = async () => {
  const find = await Album.findAll();

  return {
    status: STATUS_CODE.OK,
    data: find,
  };
};

const findAllWithMusics = async () => {
  const find = await Album.findAll();

  return {
    status: STATUS_CODE.OK,
    data: find,
  };
};

module.exports = { findAll, find };
