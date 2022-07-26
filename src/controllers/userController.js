const userService = require('../services/userService');

const getAllUsers = (req, res) => {
    const users = userService.getAllUsers();
    res.json({ data: users });
}

const getUser = (req, res) => {
    const { email } = req.params;
    const user = userService.getUser(email);
    user
        ? res.json({ data: user })
        : res.status(404).json({ message: 'User not found' });
}

module.exports = {
    getAllUsers,
    getUser
}