const Exercise = require('../database/Exercise');

const getAllExercises = () => Exercise.getAllExercises();

const getExercisesByCategory = (category) => Exercise.getExercisesByCategory(category);

module.exports = {
    getAllExercises,
    getExercisesByCategory
}