var express = require('express');
const weatherRecord = require("../controllers/weatherRecord.controller.js");
var router = express.Router();

router.get('/', async function(req, res, next) {
  var result = await weatherRecord.findAll();
  res.send(JSON.stringify(result));
});

module.exports = router;
