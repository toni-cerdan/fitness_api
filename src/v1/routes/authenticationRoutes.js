const express = require('express');
const router = express.Router();

const passport = require('passport');

const { home, signup, login, logout } = require('../../controllers/authenticationController');
const { isAuthorized, isNotLoggedOut } = require('../../../config/middlewares/authorization.js');


router
    .get('/', isAuthorized, home)
    .post('/signup', signup)
    .post('/login', passport.authenticate('local'), login)
    .get('/logout', isNotLoggedOut, logout);

module.exports = router;