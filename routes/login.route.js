var express = require('express');
var router = express.Router();
var loginController = require('../controllers/login.controller');
var cors = require('cors');
router.options('/', cors());

router.post('/', cors(), loginController.login);
router.post('/register', cors(), loginController.register);

module.exports = router;