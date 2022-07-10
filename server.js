if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const { isAuthorized, isNotLoggedOut } = require('./middlewares/authorization');
const { home, signup, login, logout, getUsers } = require('./routes');
const { users } = require('./db/test');

const initializePassport = require('./passport-config');
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
);

// configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// routes
app.get('/', isAuthorized, home);
app.post('/signup', signup);
app.post('/login', passport.authenticate('local'), login);
app.get('/logout', isNotLoggedOut, logout);
app.get('/users', getUsers);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});