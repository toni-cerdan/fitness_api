const passport = require('passport');

const home = (req, res) => {
    req.user.then(user => {
        res.json({ status: 'OK', message: `Hello ${user.email}!` });
    });
}

const login = (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
        if (err) { return res.status(401).json({ status: 'NOK', error: err }); }
        if (!user) {
            return res.status(401).json({ status: 'NOK', error: info.message });
        } else {
            req.login(user, (err) => {
                if (err) { return res.status(401).json({ status: 'NOK', error: err }); }
                res.json({
                    status: 'OK',
                    message: 'Logged in successfully',
                    data: { user: user.email }
                });
            });
        }
    })(req, res, next);
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
    login,
    logout
}