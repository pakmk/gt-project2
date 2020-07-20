// Requiring necessary npm packages
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
const bcryptjs = require("bcryptjs");

const ViewsController = require("./controllers/viewsController.js");
// const APIController = require("./controllers/apiController");
// const UsersController = require("./controllers/usersController")

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const app = express();
const db = require("./models");
// const ViewsController = require("./controllers/viewsController.js");
const APIController = require("./controllers/apiController");
const usersController = require("./controllers/usersController");

// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
// Handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./controllers/apiController.js");
// console.log(router);
app.use(router);

// We need to use sessions to keep track of our user's login status
// app.use(
//   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// Requiring our routes
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

app.use(ViewsController);
// app.use(APIController);
// app.use("/api/users", UsersController);

// Syncing our database and logging a message to the user upon success
db.sequelize
  .sync({ force: true })
  .then(() => {
  app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.log("Error connecting to the database.");
  console.log(err);
});
