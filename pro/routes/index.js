// index.js
var express = require("express");
var router = express.Router();
// 访问  ‘/’
router.get("/", function (req, res, next) {
  res.send("index");
});

module.exports = router;
