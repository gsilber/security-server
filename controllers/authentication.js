const jwt = require('jsonwebtoken'),
    crypto = require('crypto'),
    config = require('../config/main');

function generateToken(user) {
    return jwt.sign(user, config.secret, {
        expiresIn: 10080 // in seconds
    });
}
// Set user info from request
function setUserInfo(request) {
    return {
        _id: request._id,
        firstName: request.profile.firstName,
        lastName: request.profile.lastName,
        email: request.email,
        role: request.role,
    };
}

//========================================
// Login Route
//========================================
exports.login = function (req, res, next) {
    if (!req.user) {
        res.status(400).json({error : "bad data"});
    } else {
        let userInfo = setUserInfo(req.user);

        res.status(200).json({
            token: 'JWT ' + generateToken(userInfo),
            user: userInfo
        });
    }
}


//========================================
// Registration Route
//========================================
exports.register = function (req, res, next) {
    return res.status(422).send({ error: 'You must enter an email address.' });
}
//========================================
// Authorization Middleware
//========================================

// Role authorization check
exports.roleAuthorization = function (role) {
    return function (req, res, next) {
        return next('Unauthorized');
    }
}