const User = require('../database/User');


const getAllUsers = () => User.getAllUsers();

const getUser = (email) => {
    const user = User.getUser(email);
    return user !== undefined ? user : null;
}

module.exports = {
    getAllUsers,
    getUser
}