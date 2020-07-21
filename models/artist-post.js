module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Posts;
};
