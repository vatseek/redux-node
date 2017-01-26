global.Promise = require('bluebird');
const path = require('path');
const express = require('express');
const engine = require('ejs-mate');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
import config from 'config';
import { mongoDb } from 'storage';
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
import router from 'routers/index';

const app = express();
app.use(express.static('.'));
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: config.get('session:secret'),
    key: config.get('session:key'),
    cookie: config.get('session:cookie'),
    resave: false,
    store: new MongoStore({ mongooseConnection: mongoDb.connection }),
    saveUninitialized: true
}));
app.use(require('middlewares/loadUser'));

app.use('/', router);
app.use(function(err, req, res, next) {
    if (!err) next();
    res.status(err.status || 500);
    if (req.headers['x-requested-with'] == 'XMLHttpRequest' || err.responseType === 'json') {
        res.send({ error: err.message });
    } else {
        res.render('error', { message: err.message });
    }
});
app.use(function(req, res) {
    res.status(404).send('Not Found')
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    const host = '127.0.0.1';
    console.log("Example app listening at http://%s:%s", host, PORT);
});

module.exports = server;