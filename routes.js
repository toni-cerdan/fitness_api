const bcrypt = require('bcrypt');
const { users } = require('./db/test');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    home: (req, res) => {
        res.json({ message: `Hello ${req.user.email}!` });
    },
    signup: async (req, res) => {
        try {
            const { email, password } = req.body;
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            users.push({
                id: uuidv4(),
                email: email,
                password: hashedPassword
            });
            res.json({
                message: 'User created successfully',
                user: users[users.length - 1]
            });
        } catch (err) {
            res.status(400).json({ error: err.message });
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
    },
    getUsers: (req, res) => {
        res.json(users);
    }
}