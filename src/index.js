if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const port = process.env.PORT || 3000;
const express = require('express');
const session = require('express-session');
const passport = require('passport');

// routes
const v1AuthenticationRoutes = require('./v1/routes/authenticationRoutes');
const v1UsersRoutes = require('./v1/routes/userRoutes');

// initialization
const app = express();
const pool = require('./database');
require('./config/passport-config');

// configuration
app
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(session({
        secret: 'SECRET',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
        }
    }))
    .use(passport.initialize())
    .use(passport.session());

// routes v1
app.use("/api/v1/", v1AuthenticationRoutes);
app.use("/api/v1/users", v1UsersRoutes);

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

server.on('close', () => {
    console.log('Closed express server');

    pool.end(() => {
        console.log('Shutdown connection pool');
    });
});