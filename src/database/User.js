const DB = require('./db.json');

const getAllUsers = () => DB.users;
const getUser = (email) => DB.users.find(user => user.email === email);

module.exports = {
    getAllUsers,
    getUser
}