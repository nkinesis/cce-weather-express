var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
    return "{ message: \"This is the newsletters route\" }"
});

module.exports = router;
