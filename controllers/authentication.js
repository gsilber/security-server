const   jwt = require('jsonwebtoken'),
        crypto = require('crypto'),
        config = require('../config/main');

//========================================
// Login Route
//========================================
exports.login = function(req, res, next) {
    return res.status(200).send({ok: true});
}
    
    
//========================================
// Registration Route
//========================================
exports.register = function(req, res, next) {  
    return res.status(422).send({ error: 'You must enter an email address.'});
}
//========================================
// Authorization Middleware
//========================================

// Role authorization check
exports.roleAuthorization = function(role) {  
    return function(req, res, next) {
        return next('Unauthorized');
    }
}