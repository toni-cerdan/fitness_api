const exerciseService = require('../services/exerciseService');

const getExercises = (req, res) => {
    const { category, body_part } = req.query;
    exerciseService.getExercises(category, body_part)
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
    getExercises
}