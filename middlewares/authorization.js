module.exports = {
    isAuthorized: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        res.status(401).json({ message: 'Unauthorized' });
    },
    isNotLoggedOut: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        res.status(400).json({ message: 'Already logged out' });
    }
}