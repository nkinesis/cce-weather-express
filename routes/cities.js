var express = require('express');
var router = express.Router();

router.get('/', async function (req, res, next) {
  var testData = { message: "This is the cities route" }
  res.send(JSON.stringify(testData))
});

module.exports = router;
