var express = require('express');
const weatherRecords = require("../controllers/weatherRecords.controller.js");
var router = express.Router();

router.get('/', async function(req, res, next) {
  var result = await weatherRecords.findAll();
  res.send(JSON.stringify(result));
});

module.exports = router;
