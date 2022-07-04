const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.get("/:slug", newsController.show);

router.get("/", newsController.index);
// để tuyến đường chính dưới cùng

module.exports = router;
