const express = require('express');
const session = require('express-session');

module.exports = (app, passport, pool) => {
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
}
