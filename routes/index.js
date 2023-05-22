const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController')



/* GET home page. */

router.get('/:si?', indexController.index);


module.exports = router;