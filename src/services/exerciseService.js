const Exercise = require('../database/Exercise');

const getAllExercises = () => Exercise.getAllExercises();

const getExercisesByCategory = (category) => Exercise.getExercisesByCategory(category);

const getExercisesByBodyPart = (bodyPart) => Exercise.getExercisesByBodyPart(bodyPart);

module.exports = {
    getAllExercises,
    getExercisesByCategory,
    getExercisesByBodyPart
}