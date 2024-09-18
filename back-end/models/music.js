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

  return Music;
};
