var express = require('express');
var router = express.Router();
var cors = require('cors');
router.options('/', cors());
var userController = require('../controllers/user.controller');

router.get('/', cors(), userController.list);
router.get('/:userId', cors(), userController.get);

module.exports = router;