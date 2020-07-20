const mysql = require("mysql");
const { Sequelize } = require("sequelize");

module.exports = new Sequelize("creative_meet", "root", "Mwd768!!!", {
  host: "localhost",
  dialect: 'mysql',
});
