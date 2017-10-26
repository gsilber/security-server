const User = require('../../model/user'),
    GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const googleOptions = {
     clientID:"448357945989-vrof69c5lajnt2k99l5d7cv4rqdlnkbq.apps.googleusercontent.com",
     clientSecret:"1GAlR_Q1DDENIyuWjMrT4045",
     callbackURL:"http://localhost:3000/api/auth/google-callback",
     passReqToCallback : true
};

// Setting up JWT login strategy
exports.Login = new GoogleStrategy(googleOptions, 
    function(request, accessToken, refreshToken, profile, done) {
        //lookup user, if found, redirect with token back to calling application if authorized, otherwise add authorization for this client
        //if not found, create, then redirect with token back to calling applicaiton
        //calling application should retrieve token and get the user profile information to confirm login
        return done(null,  { error: 'Your login details could not be verified. Please try again.' });
    });

