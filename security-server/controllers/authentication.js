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
    } else if (!req.body.clientid) {
        res.status(400).json({ error: "bad data" });
    } else if (req.user.auths.clients.filter(function(item){return item===req.body.clientid;}).length===0){
    res.status(400).json({ error: "client not authorized" });
    } else {
        let user = new User({
            email: req.user.email,
            password: req.user.password,
            provider: req.user.provider,
            profile: { firstName: req.user.firstName, lastName: req.user.lastName }
        });
        let userInfo = user.toJson();

        res.status(200).json({
            token: 'Bearer ' + generateToken(userInfo),
            user: userInfo
        });
    }
}

exports.googleProcessLoginSuccess=function (req,res,next){
    res.status(400).json({error:"bad data"});
}
exports.googleProcessLoginFailure=function (req,res,next){
    res.status(400).json({error:"bad data"});
}

exports.validate = function (req, res, next) {
    return res.status(200).json({
        validated: true
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
    const clientid = req.body.clientid;
    let authAPIs = req.body.authAPIs;

    if (!authAPIs)
        authAPIs = [];
    if (!clientid)
        return res.status(422).send({ error: 'No clientid passed to register against.' })
    if (!email) {
        return res.status(422).send({ error: 'You must enter an email address.' });
    }
    if (!firstName || !lastName) {
        return res.status(422).send({ error: 'You must enter your full name.' });
    }
    if (!password) {
        return res.status(422).send({ error: 'You must enter a password.' });
    }

    User.findOne({ email: email }, function (err, existingUser) {
        if (err) { return next(err); }
        if (existingUser) {
            if (existingUser.auths.clients.filter(function (item) { return item === clientid }).length > 0) {
                return res.status(422).send({ error: 'That email address is already in use for this client.' });
            } else {
                existingUser.auths.clients.push(clientid);
                for (i=0;i<authAPIs.length;i++){
                    if (existingUser.auths.apis.filter(function(item){
                        return item===authAPIs[i]}).length==0){
                        existingUser.auths.apis.push(authAPIs[i]);
                    }
                }
                existingUser.save(function (err, user) {
                    if (err) { return next(err); }
                    let userInfo = existingUser.toJson();
                    res.status(201).json({
                        token: 'JWT ' + generateToken(userInfo),
                        user: userInfo
                    });
                });
            }

        } else {
            let user = new User({
                email: email,
                password: password,
                provider: 'local',
                roles: ['User'],
                auths: { clients: [clientid], apis: authAPIs },
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
        }
    });
}

