const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require('express-handlebars')
const { extname } = require('path')

const app = express();
const port = 3000;

app.use(morgan("combined")); // check whether request is sent to server?

// Template engine
app.engine("hbs", engine({
  extname: '.hbs' // Định nghĩa lại cho đuôi .handlebars
})); // Định nghĩa handlebars = handlebars function
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

app.get("/", (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
