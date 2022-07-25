const express = require('express');
const router = express.Router();

const { getAllUsers, getUser } = require('../../controllers/userController');

router
    .get('/', getAllUsers)
    .get('/:email', getUser);

module.exports = router;