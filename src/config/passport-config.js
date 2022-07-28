const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../database/User');

passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, async (email, password, done) => {
    const user = await User.getUserByEmail(email);
    if (user == null) {
        return done(null, false, { message: 'No user with that email' });
    }

    try {
        if (await bcrypt.compare(password, user.password)) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Password incorrect' });
        }
    } catch (err) {
        return done(err);
    }
}));
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
    const user = User.getUserById(id);
    return done(null, user);
});