var express = require('express');
var weatherRecords = require('../data/weatherRecords');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send(JSON.stringify(weatherRecords));
});

module.exports = router;
