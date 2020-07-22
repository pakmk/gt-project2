// Requiring necessary npm packages
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
const bcryptjs = require("bcryptjs");

const handlebars = require("handlebars");
const ViewsController = require("./controllers/viewsController.js");


// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const app = express();
const db = require("./models");

const APIController = require("./controllers/apiController");
const usersController = require("./controllers/usersController");

// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Handlebars setup
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

const router = require("./controllers/apiController.js");

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

app.use(ViewsController);

// Syncing our database and logging a message to the user upon success
db.sequelize
  .sync({force: true})
  .then(function () {
    app.listen(PORT, function () {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  })
  .catch((err) => {
    console.log("Error connecting to the database.");
    console.log(err);
  });
