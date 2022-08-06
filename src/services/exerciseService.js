const Exercise = require('../database/Exercise');

const getAllExercises = () => Exercise.getAllExercises();

module.exports = {
    getAllExercises
}