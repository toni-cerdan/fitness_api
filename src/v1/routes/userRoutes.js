const express = require('express');
const router = express.Router();

const { createUser, updateUserPassword, deleteUser, getAllUsers, getUser } = require('../../controllers/userController');

router
    .post('/create', createUser)
    .post('/update/password/:email', updateUserPassword)
    .delete('/delete', deleteUser)
    .get('/', getAllUsers)
    .get('/:email', getUser);

module.exports = router;