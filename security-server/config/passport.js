// Importing Passport, strategies, and config
const passport = require('passport'),
    User = require('../model/user'),
    passport_local = require('../security/passport/passport-local'),
    passport_jwt = require('../security/passport/passport-jwt'),
    passport_google=require('../security/passport/passport-google');

passport.use(passport_local.Login);
passport.use(passport_jwt.Login);
passport.use(passport_google.Login);

exports.requireAuth = passport.authenticate('jwt', { session: false });       
exports.requireLogin = passport.authenticate('local', { session: false });  
exports.requireGoogleLogin = passport.authenticate('google', { scope: 
      	[ 'https://www.googleapis.com/auth/plus.login',
      	, 'https://www.googleapis.com/auth/plus.profile.emails.read' ] }
    );
exports.requireGoogleCallback = passport.authenticate( 'google'
//  ,{ 
//              successRedirect: 'google-success',
//              failureRedirect: 'google-failure'
//      }
)
