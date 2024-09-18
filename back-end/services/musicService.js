const { Music, Album } = require('../models');
const { STATUS_CODE } = require('../config/strings');

const findAll = async () => {
  const find = await Music.findAll({
    include: [
      {
        model: Album,
        as: 'album',
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
    ],
  });

  return {
    status: STATUS_CODE.OK,
    message: '',
    data: find,
  };
};

const findAllActive = async () => {
  const find = await Music.findAll({
    where: {
      active: true,
    },
    include: [
      {
        model: Album,
        as: 'album',
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
    ],
  });

  return {
    status: STATUS_CODE.OK,
    message: '',
    data: find,
  };
};

module.exports = {
  findAll,
  findAllActive,
};
