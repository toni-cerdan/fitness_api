if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const passport = require('passport');
const db = require('./db');
const { users } = require('./db/test');

const port = process.env.PORT || 3000;
const app = express();

const initializePassport = require('./config/passport-config');
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
);

// configuration
require('./config/express')(app, passport, db.pool);

// routes
require('./config/routes')(app, passport, db);

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

server.on('close', () => {
    console.log('Closed express server');

    db.pool.end(() => {
        console.log('Shutdown connection pool');
    });
});