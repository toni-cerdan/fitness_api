const express = require('express');
const router = express.Router();

const { getAllExercises, getExercisesByCategory } = require('../../controllers/exerciseController');


router
    .get('/', getAllExercises)
    .get('/category/:category', getExercisesByCategory);


module.exports = router;