import {ValidationError, HttpError} from '../errors';
import {checkAuth} from '../middlewares';
import User from '../models/user';
const express = require('express');
const router = express.Router();

router.get('/dashboard', checkAuth, function (req, res) {
    return res.send({});
});

router.post('/register', require('../forms/registerUserForm'), function (req, res, next) {
    if (req.session && req.session.user) {
        return next(new ValidationError(400, 'Already signed in'));
    }

    if (!req.form.isValid) {
        return next(new ValidationError(400, 'Already signed in'), { form: req.form });
    }

    User.getUserByEmailOrLogin(req.form.email, req.form.login).then(user => {
        if (user) {
            return res.send({
                form: req.form,
                errors: {
                    user: ['User already exists']
                }
            }, 'register_user');
        }
        User.addUser(req.form).then(user => {
            req.session.user = user;
            return res.return(user, null, '/dashboard');
        }).catch(err => next(err));
    }).catch(err => next(err));
});

router.post('/login', require('../forms/loginForm'), function (req, res, next) {
    if (req.session && req.session.user) {
        return next(new ValidationError(400, 'Already signed in'));
    }

    if (!req.form.isValid) {
        return next(new ValidationError(400, 'invalid params'))
    }
    User.authorize(req.form.login, req.form.password).then(user => {
        req.session.user = user;
        return res.send({ user: user});
    }).catch(err => {
        next(err);
    })

});

router.post('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            return next(err);
        }
        res.send({ redirectTo: '/' });
    });
});

module.exports = router;
