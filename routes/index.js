const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')


/* GET home page. */
router.get('/', controller.index);
router.get('/login', controller.login);

module.exports = router;
