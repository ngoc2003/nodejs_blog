const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const route = require("./routes");
const app = express();
const port = 3001;

// Cấu hình file Static(img...)
// public: thư mục gốc cần tìm
app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined")); // check whether request is sent to server?

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs", // Định nghĩa lại cho đuôi .handlebars
  })
); // Định nghĩa handlebars = handlebars function
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.use(express.urlencoded({ extended: true })); // xử lí dữ liệu từ form submit HTML
app.use(express.json()); // xử lí dữ liẹu từ code JS

const db = require("./config/db/index");
// Connect db
db.connect();
// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
