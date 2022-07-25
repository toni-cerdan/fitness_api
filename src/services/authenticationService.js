const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const userService = require('./userService');

const { users } = require('../../db/test');

module.exports = {
    signup: async (email, password) => {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        users.push({
            id: uuidv4(),
            email: email,
            password: hashedPassword
        });

        return userService.getUser(email);
    }
}