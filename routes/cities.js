var express = require('express');
var cities = require('../data/cities');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send(JSON.stringify(cities));
});

module.exports = router;
