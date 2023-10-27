// passportConfig.js
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { YourUserModel } from '../models';  // Import your User model

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'yourSecretOrKey'  // Replace this with your actual secret key or use environment variables
};

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    YourUserModel.findById(jwt_payload.id)
        .then(user => {
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        })
        .catch(err => {
            return done(err, false);
        });
}));

export default passport;