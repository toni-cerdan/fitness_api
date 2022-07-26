const express = require('express');
const router = express.Router();

const { getAllUsers, getUser, updateUserPassword, deleteUser } = require('../../controllers/userController');

router
    .get('/', getAllUsers)
    .get('/:email', getUser)
    .post('/update/password/:email', updateUserPassword)
    .delete('/delete', deleteUser);

module.exports = router;