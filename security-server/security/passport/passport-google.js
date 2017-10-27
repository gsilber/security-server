const User = require('../../model/user'),
    GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const googleOptions = {
     clientID:"448357945989-vrof69c5lajnt2k99l5d7cv4rqdlnkbq.apps.googleusercontent.com",
     clientSecret:"1GAlR_Q1DDENIyuWjMrT4045",
     callbackURL:"http://localhost:3000/api/auth/google-callback",
     passReqToCallback : true
};


// Setting up Google Oauth2 login strategy
exports.Login = new GoogleStrategy(googleOptions, 
    function(request, accessToken, refreshToken, profile, done) {
        User.findOne({email: profile.email},function(err,user){
            if (err) { return done(err, false); }
            
                if (user) {
                    done(null, {token: accessToken,user: user});
                } else {
                  user=new User({email:profile.email,password:'*', profile:{firstName:profile.name.givenName,lastName:profile.name.familyName},provider:profile.provider,role:['Unregistered']});
                  user.save();
                  done(null, {token: accessToken,user: user});
                }
                    
        });
        
    });

