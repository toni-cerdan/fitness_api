const userService = require('../services/userService');

const home = (req, res) => {
    const { email } = req.user;
    res.json({ status: 'OK', message: `Hello ${email}!` });
}

const signup = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ status: 'NOK', message: 'Email and password are required' });
        return;
    }

    userService.createUser(email, password)
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

const login = (req, res) => {
    const { email } = req.user;
    res.json({
        status: 'OK',
        message: 'Logged in successfully',
        data: { user: email }
    });
}

const logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.status(400).json({ status: 'NOK', message: 'Unable to log out', error: err });
        }
        else {
            res.json({ status: 'OK', message: 'Logged out successfully' });
        }
    });
}

module.exports = {
    home,
    signup,
    login,
    logout
}