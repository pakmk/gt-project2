const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
  res.json({
    message: "Post route",
  });
});

router.put("/:id", (req, res) => {
  res.json({
    message: "Put route",
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    message: "Delete route",
  });
});

module.exports = router;
