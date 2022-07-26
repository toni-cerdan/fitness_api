const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const User = require('../database/User');

const createUser = async (email, password) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const currentDate = new Date().toLocaleString("en-US", { timeZone: "UTC" });
    const userToInsert = {
        id: uuidv4(),
        email: email,
        password: hashedPassword,
        createdAt: currentDate,
        updatedAt: currentDate
    }

    return User.createUser(userToInsert);
}

const getAllUsers = () => User.getAllUsers();

const getUser = (email) => {
    const user = User.getUser(email);
    return user !== undefined ? user : null;
}

const deleteUser = (email) => User.deleteUser(email);

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    deleteUser
}