var express = require('express');
var router = express.Router();
var courseController = require('../controllers/course.controller');
var cors = require('cors');
router.options('/', cors());

router.get('/', cors(), courseController.getAllCourse);
router.post('/', cors(), courseController.create);
router.delete('/:courseId', cors(), courseController.delete);
router.get('/lessonOfCourse/:courseId', cors(), courseController.getLessonOfCourse);
module.exports = router;