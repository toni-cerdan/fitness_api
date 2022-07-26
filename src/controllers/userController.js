const userService = require('../services/userService');

const home = (req, res) => {
    const { email } = req.user;
    res.json({ status: 'OK', data: `Hello ${email}!` });
}

const getAllUsers = (req, res) => {
    const users = userService.getAllUsers();
    res.json({ status: 'OK', data: users });
}

const getUser = (req, res) => {
    const { email } = req.params;
    const user = userService.getUser(email);
    user
        ? res.json({ status: 'OK', data: user })
        : res.status(404).json({ status: 'NOK', error: 'User not found' });
}

const deleteUser = (req, res) => {
    const { email } = req.body;
    try {
        const userDeleted = userService.deleteUser(email);
        res.json({
            status: 'OK',
            message: 'User deleted successfully',
            data: userDeleted
        });
    } catch (err) {
        res.status(404).json({ status: 'NOK', error: err.message });
    }
}

module.exports = {
    home,
    getAllUsers,
    getUser,
    deleteUser
}