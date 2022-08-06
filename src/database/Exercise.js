const pool = require('./');

const getAllExercises = async () => {
    const exercises = await pool.query('SELECT * FROM exercises');
    return exercises.rows;
}

const getExercisesByCategory = async (category) => {
    const exercises = await pool.query('SELECT * FROM exercises WHERE category = $1', [category]);
    return exercises.rows;
}

module.exports = {
    getAllExercises,
    getExercisesByCategory
}