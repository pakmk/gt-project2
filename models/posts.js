// Creating our Post model

module.exports = function (sequelize, DataTypes) {
  var Posts = sequelize.define("Post", {
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
    //   type moved to media table
    /* type: {
            type: DataTypes.STRING,
            allowNull: false,
          }, */
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Posts;
};
