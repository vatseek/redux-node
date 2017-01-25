const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.locals.test = null;
    res.render('index', { });
});

router.all('/*', require('./user'), function(req, res, next) {
    next();
});

export default router;
