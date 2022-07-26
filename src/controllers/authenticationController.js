const home = (req, res) => {
    const { email } = req.user;
    res.json({ status: 'OK', message: `Hello ${email}!` });
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
    login,
    logout
}