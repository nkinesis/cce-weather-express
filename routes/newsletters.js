var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
    var testData = { message: "This is the newsletters route" }
    res.send(JSON.stringify(testData))
});

router.post('/add', async function(req, res, next) {
    try {
        // TODO: call a function in the newsletter controller that adds a new record on the database
        const successCode = 404
        res.status(successCode).send({ message: "Add a message" })
    } catch(e) {
        const errorCode = 404
        res.status(errorCode).send({ message: e })
    }
});

module.exports = router;
