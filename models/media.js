// Creating our Media model

module.exports = function (sequelize, DataTypes) {
  var Media = sequelize.define("Media", {
    // The email cannot be null, and must be a proper email before creation
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Media;
};
