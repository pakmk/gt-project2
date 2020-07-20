// Creating our Creative model
const Sequelize = require("Sequelize");
const db = require("../config/config");

const Creative = db.define("Creative", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //   type: { type: DataTypes.STRING }, move to media table
  bio: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  post_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  media_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
module.exports = Creative;
