if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const passport = require('passport');

const v1AuthenticationRoutes = require('./v1/routes/authenticationRoutes');
const v1UsersRoutes = require('./v1/routes/userRoutes');

const db = require('../db');
const { users } = require('./database/db.json');

const app = express();
const port = process.env.PORT || 3000;

const initializePassport = require('../config/passport-config');
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
);

// configuration
require('../config/express')(app, passport, db.pool);

// routes v1
app.use("/api/v1/", v1AuthenticationRoutes);
app.use("/api/v1/users", v1UsersRoutes);

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

server.on('close', () => {
    console.log('Closed express server');

    db.pool.end(() => {
        console.log('Shutdown connection pool');
    });
});