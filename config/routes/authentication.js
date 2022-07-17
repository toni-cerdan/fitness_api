const express = require('express');
const passport = require('passport');
const { home, signup, login, logout } = require('../../app/users');
const { isAuthorized, isNotLoggedOut } = require('../middlewares/authorization.js');

const router = express.Router();

router.get('/', isAuthorized, home);
router.post('/signup', signup);
router.post('/login', passport.authenticate('local'), login);
router.get('/logout', isNotLoggedOut, logout);

module.exports = router;