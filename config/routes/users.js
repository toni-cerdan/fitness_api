const express = require('express');
const { getUsers, getUser } = require('../../app/users');

const router = express.Router();

router.get('/', getUsers);
router.get('/:email', getUser);

module.exports = router;