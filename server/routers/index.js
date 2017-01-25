const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
    res.render('index', { });
});

router.all('/*', require('./user'), function(req, res, next) {
    next();
});

export default router;
