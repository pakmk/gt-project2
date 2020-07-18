const sequelize = require("./index.js").sequelize;
const test_db = require("../config/config.json");
const mysql = require("mysql2");

const Creatives = sequelize.define(
  "creatives",
  {
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
  }
  // { sequelize }
);
sequelize.models.creatives;

return Creatives;
module.exports = Creatives;
