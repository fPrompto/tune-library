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
    data: find,
  };
};

const findOneById = async (id) => {
  try {
    const find = await Music.findOne({
      include: [
        {
          model: Album,
          as: 'album',
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      ],
      where: { id },
    });
    return {
      status: STATUS_CODE.OK,
      data: find.dataValues,
    };
  } catch (e) {
    return {
      status: STATUS_CODE.BAD_REQUEST,
      data: e,
    };
  }
};

module.exports = {
  findAll,
  findAllActive,
  findOneById,
};
