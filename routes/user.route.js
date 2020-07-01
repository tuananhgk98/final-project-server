var express = require('express');
var router = express.Router();
var cors = require('cors');
router.options('/', cors());
var userController = require('../controllers/user.controller');

router.get('/', cors(), userController.list);
router.put('/forgotPwd', cors(), userController.forgotPassWord);
router.put('/updatePwd/:userId', cors(), userController.updatePwd);
router.put('/forgotPwd', cors(), userController.forgotPassWord);
router.put('/:userId', cors(), userController.update);
router.get('/:userId', cors(), userController.get);
router.put('/learned/:userId', cors(), userController.updateLearned);

module.exports = router;