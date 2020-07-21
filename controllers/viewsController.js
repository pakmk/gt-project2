const express = require("express");
const router = express.Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");
var connection = require("../config/config.json");
var sequelize = require("sequelize");
const db = require("../models");

router.get("/", (req, res) => {
  db.Artists.findAll({}).then(function (dbArtists) {
    res.render("index", {artists: dbArtists});
  });
});

router.get("/", (req, res) => {
  db.Media.findAll({}).then(function (dbMedia) {
    res.render("index", {media: dbMedia});
  });
});

router.get("/", (req, res) => {
  db.Post.findAll({}).then(function (dbPost) {
    
    res.render("index", {post: dbPost});
  });
});

router.get("/index", (req, res) => {
  res.render("index");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

// router.get("/login", (req, res) => {
//   res.render("login");
// });

router.get("/artist-dash", (req, res) => {
  res.render("artist-dash");
});

router.get("/artist-post", (req, res) => {
  res.render("artist-post");
});

router.get("/login", function (req, res) {
  console.log(req.user);
  // If the user already has an account send them to the members page
  console.log("route worked");
  if (req.user) {
    res.render("artist-dash");
  }
  res.render("login");
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/artist-dash", isAuthenticated, function (req, res) {
  res.render("/artist-dash");
});

module.exports = router;
