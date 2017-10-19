// Importing Passport, strategies, and config
const passport = require('passport'),
    config = require('./main'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    LocalStrategy = require('passport-local');

const localOptions = { usernameField: 'email' };
const jwtOptions = {
    // Telling Passport to check authorization headers for JWT
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    // Telling Passport where to find the secret
    secretOrKey: config.secret
};

const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
    return done(null, {_id:"1",profile:{firstName:"Greg",lastName:"Silber"},email:"gsilber@cyberdaptive.com",role:"king"});
});

// Setting up JWT login strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
    return done(null, { user: "User Goes Here" });
});

passport.use(jwtLogin);
passport.use(localLogin);
