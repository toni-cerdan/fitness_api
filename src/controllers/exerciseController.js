const exerciseService = require('../services/exerciseService');

const getAllExercises = (req, res) => {
    exerciseService.getAllExercises()
        .then(exercises => {
            res.json({
                status: 'OK',
                data: exercises
            });
        }).catch(err => {
            res.status(404).json({
                status: 'NOK',
                error: err.message
            });
        });
}

const getExercisesByCategory = (req, res) => {
    const { category } = req.params;
    exerciseService.getExercisesByCategory(category)
        .then(exercises => {
            res.json({
                status: 'OK',
                data: exercises
            });
        }).catch(err => {
            res.status(404).json({
                status: 'NOK',
                error: err.message
            });
        });
}

module.exports = {
    getAllExercises,
    getExercisesByCategory
}