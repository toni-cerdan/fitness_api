const express = require('express');
const router = express.Router();

const { home, login, logout } = require('../../controllers/authenticationController');
const { isAuthorized, isLoggedIn, isNotLoggedOut } = require('../../middlewares/authorization.js');


router
    .get('/', isAuthorized, home)
    .post('/login', isLoggedIn, login)
    .get('/logout', isNotLoggedOut, logout);

module.exports = router;