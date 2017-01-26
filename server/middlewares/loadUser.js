import User from '../models/user'

module.exports = function(req, res, next) {
    if (process.env.NODE_ENV !== 'production') {
        res.locals.assetsDomain = 'http://localhost:8050';
    } else {
        res.locals.assetsDomain = '.';
    }

    req.user = res.locals.user = null;
    if (!req.session.user) {
        return next();
    }
    User.findById(req.session.user).then(
        user => {
            if (!user) {
                req.session.delete();
                next(new Error('Session exists but user not found'))
            }
            req.user = res.locals.user = user;
            next();
        }
    ).catch(err => {
        next(err);
    });
};