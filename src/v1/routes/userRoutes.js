const express = require('express');
const router = express.Router();

const { createUser, updateUserPassword, deleteUser, getAllUsers, getUserByEmail } = require('../../controllers/userController');
const { validateEmail/*, validatePassword */ } = require('../../middlewares/validators/userValidator');

router
    .post('/create', validateEmail, /*validatePassword, */createUser)
    .post('/update/password/:email', /*validatePassword, */updateUserPassword)
    .delete('/delete', deleteUser)
    .get('/', getAllUsers)
    .get('/:email', getUserByEmail);

module.exports = router;