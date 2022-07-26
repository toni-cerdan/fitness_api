const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const User = require('../database/User');

const createUser = async (userEmail, password) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password.toString(), salt);

    const currentDate = new Date().toLocaleString("en-US", { timeZone: "UTC" });
    const userToInsert = {
        id: uuidv4(),
        email: userEmail,
        password: hashedPassword,
        createdAt: currentDate,
        updatedAt: currentDate
    }

    const newUserCreated = User.createUser(userToInsert);
    const { id, email, createdAt, updatedAt } = newUserCreated;
    return { id, email, createdAt, updatedAt };
}

const getAllUsers = () => User.getAllUsers();

const getUser = (userEmail) => {
    const user = User.getUser(userEmail);
    if (user) {
        const { id, email, createdAt, updatedAt } = user;
        return { id, email, createdAt, updatedAt };
    }
    return null;
}

const updateUserPassword = async (userEmail, newPassword) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newPassword.toString(), salt);
    const updateDate = new Date().toLocaleString("en-US", { timeZone: "UTC" });

    const user = User.updateUserPassword(userEmail, hashedPassword, updateDate);
    const { id, email, createdAt, updatedAt } = user;
    return { id, email, createdAt, updatedAt };
}

const deleteUser = (email) => User.deleteUser(email);

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUserPassword,
    deleteUser
}