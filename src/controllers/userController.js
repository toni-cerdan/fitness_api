const userService = require('../services/userService');

const home = (req, res) => {
    const { email } = req.user;
    res.json({ status: 'OK', data: `Hello ${email}!` });
}

const createUser = (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ status: 'NOK', message: 'Email and password are required' });
        return;
    }

    userService.createUser(name, email, password)
        .then(createdUser => {
            res.status(201).json({
                status: 'OK',
                message: 'User created successfully',
                data: createdUser
            });
        })
        .catch(err => {
            res.status(400).json({
                status: 'NOK',
                message: err.message
            });
        });

}

const getAllUsers = (req, res) => {
    userService.getAllUsers()
        .then(users => {
            res.json({
                status: 'OK',
                data: users
            });
        }).catch(err => {
            res.status(404).json({
                status: 'NOK',
                error: err.message
            });
        });
}

const getUser = (req, res) => {
    const { email } = req.params;
    userService.getUser(email)
        .then(user => {
            res.json({
                status: 'OK',
                data: user
            });
        }
        ).catch(err => {
            res.status(404).json({
                status: 'NOK',
                error: err.message
            });
        });
}

const updateUserPassword = (req, res) => {
    const { email } = req.params;
    const { password } = req.body;
    userService.updateUserPassword(email, password)
        .then(updatedUser => {
            res.json({
                status: 'OK',
                message: 'User updated successfully',
                data: updatedUser
            });
        }).catch(err => {
            res.status(404).json({
                status: 'NOK',
                error: err.message
            });
        });
}

const deleteUser = (req, res) => {
    const { email } = req.body;

    userService.deleteUser(email)
        .then(user => {
            res.json({
                status: 'OK',
                message: 'User deleted successfully',
                data: user
            });
        }).catch(err => {
            res.status(404).json({
                status: 'NOK',
                error: err.message
            });
        });
}

module.exports = {
    home,
    createUser,
    updateUserPassword,
    deleteUser,
    getAllUsers,
    getUser
}