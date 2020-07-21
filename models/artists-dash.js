// Creating our Creative model 

module.exports = function(sequelize, DataTypes) {
  var Artists = sequelize.define("Artists", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      works:  {
        type: DataTypes.STRING,
        allowNull: false,
      }
  });
  return Artists;
};
