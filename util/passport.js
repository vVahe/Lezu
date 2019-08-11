const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const keys = require('./keys');
const User = require('../models/users');

// JWT strategy options
const options = {};
options.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, (jwt_payload, done) => {
            User.findByPk(jwt_payload.user_id)
                .then(user => {
                    if (user) {
                        // user was found
                        return done(null, user);
                    }
                    // user not found
                    return done(null, false);
                })
                .catch(err => {
                    console.log(err);
                });
        })
    );
};
