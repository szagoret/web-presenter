const express = require('express');
const router = express.Router();
const robot = require("robotjs");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Web Presenter'});
});

/* GET home page. */
router.get('/key/:key', function (req, res, next) {
    const key = req.params.key;
    console.log("key to press: " + key);
    robot.keyTap(key);
    res.send('respond with a resource success');
});

module.exports = router;
