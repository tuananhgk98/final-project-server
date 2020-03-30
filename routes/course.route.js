var express = require('express');
var router = express.Router();
var courseController = require('../controllers/course.controller');
var cors = require('cors');
router.options('/', cors());

router.get('/list', cors(), courseController.getAllCourse);

module.exports = router;