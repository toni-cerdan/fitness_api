const validateEmail = (req, res, next) => {
    const { email } = req.body;
    const EMAIl_PATTERN = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    if (!email) {
        res.status(400).json({
            status: 'NOK',
            error: 'Email is required'
        });
        return;
    }

    if (!EMAIl_PATTERN.test(email)) {
        res.status(400).json({
            status: 'NOK',
            error: 'Invalid email'
        });
        return;
    }

    return next();
}

const validatePassword = (req, res, next) => {
    const { password } = req.body;
    const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

    if (!password) {
        res.status(400).json({
            status: 'NOK',
            error: 'Password is required'
        });
        return;
    }

    if (!PASSWORD_PATTERN.test(password)) {
        res.status(400).json({
            status: 'NOK',
            error: 'Invalid password. Must contain at least one lowercase letter, one uppercase letter, one number, one special character and must be between 8 and 16 characters long.'
        });
        return;
    }

    return next();
}

module.exports = {
    validateEmail,
    validatePassword
}