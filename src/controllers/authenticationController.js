const authenticationService = require('../services/authenticationService');
const userService = require('../services/userService');

module.exports = {
    home: (req, res) => {
        const { email } = req.user;
        res.json({ message: `Hello ${email}!` });
    },
    signup: async (req, res) => {
        const { email, password } = req.body;
        const user = userService.getUser(email);
        if (user !== undefined) {
            res.status(400).json({ error: 'User already exists' });
        } else {
            const newUser = authenticationService.signup(email, password);
            res.json({
                message: 'User created successfully',
                data: newUser
            });
        }
    },
    login: (req, res) => {
        const { email } = req.user;
        res.json({
            message: 'Logged in successfully',
            user: { email }
        });
    },
    logout: (req, res) => {
        req.session.destroy(err => {
            if (err) {
                res.status(400).json({ message: 'Unable to log out' });
            }
            else {
                res.json({ message: 'Logged out successfully' });
            }
        });
    }
}