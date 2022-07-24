const express = require('express');

module.exports = (app, passport, pool) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(passport.initialize());
    app.use(passport.session());
}
