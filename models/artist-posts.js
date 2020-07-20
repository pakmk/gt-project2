// Creating our Post model

module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    // The email cannot be null, and must be a proper email before creation
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Post;
};
