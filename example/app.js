const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");

// Database
const db = require("./config/config");

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error " + err));

const app = express();

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

//Set static folder for css to use
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.render("index", { layout: "landing" }));

// Creatives route
app.use("/creatives", require("./routes/creatives"));
const PORT = 8080;

app.listen(PORT, console.log(`Server listening on: http://localhost:${PORT}`));
