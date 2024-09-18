const associate = (models) => {
  models.Music.belongsTo(models.Album, {
    foreignKey: 'album_id',
    as: 'album',
  });
};

module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define(
    'Music',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      artist: DataTypes.STRING,
      launch_date: DataTypes.DATE,
      album_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      active: DataTypes.BOOLEAN,
    },
    { tableName: 'Musics' },
  );

  Music.associate = associate;

  return Music;
};
