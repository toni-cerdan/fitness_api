const express = require('express');
const router = express.Router();

const { getAllUsers, getUser, deleteUser } = require('../../controllers/userController');

router
    .get('/', getAllUsers)
    .post('/:email', getUser)
    .delete('/delete', deleteUser);

module.exports = router;