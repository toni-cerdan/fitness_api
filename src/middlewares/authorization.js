const isAuthorized = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ status: 'NOK', error: 'Unauthorized' });
}

const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.status(400).json({ status: 'NOK', error: 'Already logged in' });
}

const isNotLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(400).json({ status: 'NOK', error: 'Already logged out' });
}

module.exports = {
    isAuthorized,
    isLoggedIn,
    isNotLoggedOut
}