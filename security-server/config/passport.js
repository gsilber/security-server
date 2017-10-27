// Importing Passport, strategies, and config
const passport = require('passport'),
    User = require('../model/user'),
    passport_local = require('../security/passport/passport-local'),
    passport_jwt = require('../security/passport/passport-jwt');

passport.use(passport_local.Login);
passport.use(passport_jwt.Login);
 
exports.requireAuth = passport.authenticate('jwt', { session: false });       
exports.requireLogin = passport.authenticate('local', { session: false });  
