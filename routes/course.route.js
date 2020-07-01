var express = require('express');
var router = express.Router();
var courseController = require('../controllers/course.controller');
var cors = require('cors');
router.options('/', cors());

router.get('/', cors(), courseController.getAllCourse);
router.put('/:courseId', cors(), courseController.update);
router.put('/lesson/:lessonId', cors(), courseController.updateLesson);
router.post('/', cors(), courseController.create);
router.delete('/:courseId', cors(), courseController.delete);
router.delete('/lesson/:lessonId', cors(), courseController.deleteLesson);
router.get('/lessonOfCourse/:courseId', cors(), courseController.getLessonOfCourse);
router.get('/lesson/:lessonId', cors(), courseController.getLessonDetail);
router.post('/lesson', cors(), courseController.createLesson);
module.exports = router;