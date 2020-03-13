const hbs = require("express-handlebars"); // imported all modules
const path = require("path");
const express = require("express");

const app = express(); //  express set up

require("dotenv").config(); //set up dotenv

const getWeather = require("./lib/getWeather");

app.use(express.static(path.join(__dirname, "public"))); // use path to join these two paths - anything put in public will be sent across.

app.engine(
  // set the view engine to handlebars
  ".hbs",
  hbs({
    defaultLayout: "layout", // set the layout files as layout.hbs
    extname: ".hbs" // set the extension name to .hbs
  })
);

app.set("view engine", ".hbs"); // tell express to use this engine

app.get("/", async (req, res) => {
  let data = await getWeather();
  console.log(data);
  res.render("index", { data: "Hello from express" }); // render the index.hbs page
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
