const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/index", (req, res) => {
  res.render("index");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/artist-dash", (req, res) => {
  res.render("artist-dash");
});

router.get("/newest", (req, res) => {
  res.render("newest");
});
module.exports = router;