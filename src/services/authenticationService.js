const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const userService = require('./userService');

const { users } = require('../../db/test');

const signup = async (email, password) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const currentDate = new Date();

    users.push({
        id: uuidv4(),
        email: email,
        password: hashedPassword,
        createdAt: currentDate,
        updatedAt: currentDate
    });

    return userService.getUser(email);
}

module.exports = {
    signup
}