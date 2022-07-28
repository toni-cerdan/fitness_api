const pool = require('./');

const createUser = async (newUser) => {
    const user = await getUserByEmail(newUser.email);
    if (user) throw new Error('User already exists');

    const { id, name, email, password, createdAt, updatedAt } = newUser;

    await pool.query('INSERT INTO users (id, name, email, password, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6)', [id, name, email, password, createdAt, updatedAt]);
    return newUser;
}

const getAllUsers = async () => {
    const users = await pool.query('SELECT * FROM users');
    return users.rows;
}

const getUserByEmail = async (email) => {
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return user.rows[0];
}

const getUserById = async (id) => {
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return user.rows[0];
}

const updateUserPassword = async (userEmail, hashedPassword, updatedAt) => {
    const user = await getUserByEmail(userEmail);
    if (!user) throw new Error('User not found');

    await pool.query('UPDATE users SET password = $1, updated_at = $2 WHERE email = $3', [hashedPassword, updatedAt, userEmail]);
    return await getUser(userEmail);
}

const deleteUser = async (email) => {
    const user = await getUserByEmail(email);
    if (!user) throw new Error('User not found');

    await pool.query('DELETE FROM users WHERE email = $1', [email]);
    return email;
}

module.exports = {
    createUser,
    getAllUsers,
    getUserByEmail,
    getUserById,
    updateUserPassword,
    deleteUser
}