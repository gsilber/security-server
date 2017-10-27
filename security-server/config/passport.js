// Importing Passport, strategies, and config
const passport = require('passport'),
    User = require('../model/user'),
    passport_jwt = require('../security/passport/passport-jwt');

passport.use(passport_jwt.Login);
 
exports.requireAuth = passport.authenticate('jwt', { session: false });       
