const sequelize = require("sequelize");
const userDb = require("../config/config.json");

const Creative = userDb.define(["creatives"], {
  id: { type: sequelize.INTEGER },
  name: { type: sequelize.STRING },
  bio: { type: sequelize.STRING },
  post_id: { type: sequelize.INTEGER },
  media_id: { type: sequelize.INTEGER },
});
module.exports = Creative;
