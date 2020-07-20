const express = require("express");
const router = express.Router();
const db = require("../config/config");
const Creative = require("../models/Creatives");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//Get creative list
router.get("/", (req, res) =>
  Creative.findAll()
    .then((creatives) => {
      //   console.log(creative);
      //   res.sendStatus(200);
      res.render("creatives", {
        creatives: creatives,
      });
    })
    .catch((err) => console.log(err))
);

//Display the dd creative form
router.get("/add", (req, res) => res.render("add"));

//add a creative
router.post("/add", (req, res) => {
  let { id, name, bio, post_id, media_id } = data;

  //Insert data into table
  Creative.create({
    id,
    name,
    bio,
    post_id,
    media_id,
  })
    .then(res.redirect("/creatives"))
    .catch((err) => console.log("err"));
});

router.get("/search", (req, res) => {
  const { term } = req.query;
  Creative.findAll({ where: { [Op.like]: "%" + term + "%" } })
    .then((creatives) =>
      res.render("creatives", {
        creatives
      })
    )
    .catch((err) => console.log(err));
});

module.exports = router;
