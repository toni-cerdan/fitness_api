const isAuthorized = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ status: 'NOK', message: 'Unauthorized' });
}

const isNotLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(400).json({ status: 'NOK', message: 'Already logged out' });
}

module.exports = {
    isAuthorized,
    isNotLoggedOut
}