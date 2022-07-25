const User = require('../database/User');

module.exports = {
    getAllUsers: () => User.getAllUsers(),
    getUser: (email) => {
        const user = User.getUser(email);
        return user !== undefined ? user : null;
    }
}