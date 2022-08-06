const pool = require('./');

const getAllExercises = async () => {
    const exercises = await pool.query('SELECT * FROM exercises');
    return exercises.rows;
}

module.exports = {
    getAllExercises
}