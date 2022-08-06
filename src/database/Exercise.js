const pool = require('./');

const getExercises = async () => {
    const exercises = await pool.query('SELECT * FROM exercises');
    return exercises.rows;
}

const getExercisesByCategory = async (category) => {
    const exercises = await pool.query('SELECT * FROM exercises WHERE category = $1', [category]);
    return exercises.rows;
}

const getExercisesByBodyPart = async (bodyPart) => {
    const exercises = await pool.query('SELECT * FROM exercises WHERE body_part = $1', [bodyPart]);
    return exercises.rows;
}

const getExercisesByCategoryAndBodyPart = async (category, bodyPart) => {
    const exercises = await pool.query('SELECT * FROM exercises WHERE category = $1 AND body_part = $2', [category, bodyPart]);
    return exercises.rows;
}

module.exports = {
    getExercises,
    getExercisesByCategory,
    getExercisesByBodyPart,
    getExercisesByCategoryAndBodyPart
}