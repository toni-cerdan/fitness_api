const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const User = require('../database/User');

const createUser = async (userName, userEmail, password) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password.toString(), salt);

    const currentDate = new Date().toLocaleString();
    const userToInsert = {
        id: uuidv4(),
        name: userName,
        email: userEmail,
        password: hashedPassword,
        createdAt: currentDate,
        updatedAt: currentDate
    }

    const newUserCreated = await User.createUser(userToInsert);
    return { id, name, email, createdAt, updatedAt } = newUserCreated;
}

const getAllUsers = () => User.getAllUsers();

const getUserByEmail = async (userEmail) => {
    const user = await User.getUserByEmail(userEmail);
    if (!user) throw Error('User not found');

    return { id, email, createdAt, updatedAt } = user;
}

const updateUserPassword = async (userEmail, newPassword) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newPassword.toString(), salt);
    const updateDate = new Date().toLocaleString();

    const user = await User.updateUserPassword(userEmail, hashedPassword, updateDate);
    return { id, email, createdAt, updatedAt } = user;
}

const deleteUser = email => User.deleteUser(email);

module.exports = {
    createUser,
    getAllUsers,
    getUserByEmail,
    updateUserPassword,
    deleteUser
}