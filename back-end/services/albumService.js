const { Music, Album } = require('../models');
const { STATUS_CODE } = require('../config/strings');

const findAll = async () => {
  const find = await Album.findAll();

  return {
    status: STATUS_CODE.OK,
    data: find,
  };
};

const findAllComplete = async () => {
  const find = await Album.findAll({
    include: [
      {
        model: Music,
        as: 'musics',
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
    const find = await Album.findOne({
      include: [
        {
          model: Music,
          as: 'musics',
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
  findAllComplete,
  findOneById,
};
