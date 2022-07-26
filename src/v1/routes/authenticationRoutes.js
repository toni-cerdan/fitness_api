const express = require('express');
const router = express.Router();

const passport = require('passport');

const { home, login, logout } = require('../../controllers/authenticationController');
const { isAuthorized, isNotLoggedOut } = require('../../middlewares/authorization.js');


router
    .get('/', isAuthorized, home)
    .post('/login', passport.authenticate('local'), login)
    .get('/logout', isNotLoggedOut, logout);

module.exports = router;