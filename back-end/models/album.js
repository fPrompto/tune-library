const associate = (models) => {
  models.Album.hasMany(models.Music, {
    foreignKey: 'album_id',
    as: 'musics',
  });
};

module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define(
    'Album',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      artist: DataTypes.STRING,
      launch_date: DataTypes.DATE,
      active: DataTypes.BOOLEAN,
    },
    { tableName: 'Albums' },
  );

  Album.associate = associate;

  return Album;
};
