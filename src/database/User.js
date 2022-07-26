const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const createUser = (newUser) => {
    const isAlreadyCreated = getUser(newUser.email);
    if (isAlreadyCreated) throw new Error('User already exists');

    DB.users.push(newUser);
    saveToDatabase(DB);
    return newUser;
}

const getAllUsers = () => DB.users;

const getUser = (email) => DB.users.find(user => user.email === email);

const deleteUser = (email) => {
    const user = getUser(email);
    if (!user) throw new Error('User not found');

    const dbUpdated = DB.users.filter(user => user.email !== email);
    DB.users = dbUpdated;
    saveToDatabase(DB);
    return user.email;
}

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    deleteUser
}