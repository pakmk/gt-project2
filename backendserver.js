// Requiring necessary npm packages
var express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
var bcryptjs = require("bcryptjs");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models/Index");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
// Handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
const ViewsController = require("./controllers/viewsController.js");
const APIController = require("./controllers/apiController");
const UsersController = require("./controllers/usersController");
// Routes
app.use(ViewsController);
app.use(APIController);
app.use("/api/users", UsersController);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
