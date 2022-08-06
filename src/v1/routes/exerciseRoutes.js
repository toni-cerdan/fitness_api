const express = require('express');
const router = express.Router();

const { getAllExercises, getExercisesByCategory, getExercisesByBodyPart } = require('../../controllers/exerciseController');


router
    .get('/', getAllExercises)
    .get('/category/:category', getExercisesByCategory)
    .get('/body-part/:body_part', getExercisesByBodyPart);


module.exports = router;