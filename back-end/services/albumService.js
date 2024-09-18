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

const create = async ({ name, artist, launch_date }) => {
  try {
    const newAlbum = Album.create({
      name,
      artist,
      launch_date,
      active: true,
    });

    return {
      status: STATUS_CODE.CREATED,
      data: newAlbum,
    };
  } catch (error) {
    return {
      status: STATUS_CODE.BAD_REQUEST,
      data: error,
    };
  }
};

const update = async ({ id, name, artist, launch_date, active }) => {
  try {
    const edit = Album.update(
      {
        name,
        artist,
        launch_date,
        active,
      },
      { where: { id } },
    );

    return {
      status: STATUS_CODE.OK,
      data: edit,
    };
  } catch (error) {
    return {
      status: STATUS_CODE.BAD_REQUEST,
      data: error,
    };
  }
};

const deleteById = async (id) => {
  try {
    const del = await Album.destroy({
      where: { id },
    });

    if (del === 0) {
      return {
        status: STATUS_CODE.NOT_FOUND,
        data: '',
      };
    }

    return {
      status: STATUS_CODE.OK,
      data: del,
    };
  } catch (error) {
    return {
      status: STATUS_CODE.SERVER_ERROR,
      data: error,
    };
  }
};

module.exports = {
  findAll,
  findAllComplete,
  findOneById,
  create,
  update,
  deleteById,
};
