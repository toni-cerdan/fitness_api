const DB = require('./db.json');

module.exports = {
    getAllUsers: () => DB.users,
    getUser: (email) => DB.users.find(user => user.email === email)
}