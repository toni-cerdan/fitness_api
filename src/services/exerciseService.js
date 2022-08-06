const Exercise = require('../database/Exercise');

const getExercises = (category, body_part) => {
    if (category && body_part) return Exercise.getExercisesByCategoryAndBodyPart(category, body_part);
    if (category) return Exercise.getExercisesByCategory(category);
    if (body_part) return Exercise.getExercisesByBodyPart(body_part);
    return Exercise.getExercises();
}

module.exports = {
    getExercises
}