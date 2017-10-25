const jwt = require('jsonwebtoken'),
    crypto = require('crypto'),
    User = require('../model/user'),
    config = require('../config/config');

function generateToken(user) {
    return jwt.sign(user, config.secret, {
        expiresIn: 10080 // in seconds
    });
}

//========================================
// Login Route
//========================================
exports.login = function (req, res, next) {
    if (!req.user) {
        res.status(400).json({ error: "bad data" });
    } else {
        let user = new User({
            email: req.user.email,
            password: req.user.password,
            provider: req.user.provider,
            profile: { firstName: req.user.firstName, lastName: req.user.lastName }
        });
        let userInfo = user.toJson();

        res.status(200).json({
            token: 'JWT ' + generateToken(userInfo),
            user: userInfo
        });
    }
}

exports.validate = function(req,res,next){
    return res.status(200).json({
        validated:true
    })
}
//========================================
// Registration Route
//========================================
exports.register = function (req, res, next) {
    // Check for registration errors
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    // Return error if no email provided
    if (!email) {
        return res.status(422).send({ error: 'You must enter an email address.' });
    }

    // Return error if full name not provided
    if (!firstName || !lastName) {
        return res.status(422).send({ error: 'You must enter your full name.' });
    }

    // Return error if no password provided
    if (!password) {
        return res.status(422).send({ error: 'You must enter a password.' });
    }

    User.findOne({ email: email }, function (err, existingUser) {
        if (err) { return next(err); }
        // If user is not unique, return error
        if (existingUser) {
            return res.status(422).send({ error: 'That email address is already in use.' });
        }
        // If email is unique and password was provided, create account
        let user = new User({
            email: email,
            password: password,
            provider: 'local',
            profile: { firstName: firstName, lastName: lastName }
        });
        user.save(function (err, user) {
            if (err) { return next(err); }
            let userInfo = user.toJson();
            res.status(201).json({
                token: 'JWT ' + generateToken(userInfo),
                user: userInfo
            });
        });
    });
}

