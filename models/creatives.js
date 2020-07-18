// Creating our User model 

module.exports = function(sequelize, DataTypes) {
  var Creatives = sequelize.define("Creative", {
    // The email cannot be null, and must be a proper email before creation
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: sequelize.STRING,
        allowNull: false,
      },
      //   type: { type: sequelize.STRING }, move to media table
      bio: {
        type: sequelize.STRING,
        allowNull: false,
      },
      post_id: {
        type: sequelize.INTEGER,
        allowNull: false,
      },
      media_id: {
        type: sequelize.INTEGER,
        allowNull: false,
      },
  });
  return Creatives;
};
