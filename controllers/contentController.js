const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
    db.Creatives.create(req.body)
      .then((result) => {
        res.json({
          error: false,
          data: result,
          message: "New bio created",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "No bio created",
        });
      });
  });

  // /api/cards/:id
router.put("/:id", (req, res) => {
    res.json({
      message: "Put route",
    });
  });
  
  // /api/cards/:id
  router.delete("/:id", (req, res) => {
    res.json({
      message: "Delete route",
    });
  });
  
  module.exports = router;