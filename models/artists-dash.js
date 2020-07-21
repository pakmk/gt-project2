// Creating our Creative model 

module.exports = function(sequelize, DataTypes) {
  var Artists = sequelize.define("Artists", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //   type: { type: DataTypes.STRING }, move to media table
      bio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // post_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      // works_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
  });
  return Artists;
};
