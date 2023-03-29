const express = require('express');
const router = express.Router();
const controller = require('../controller/indexController')


/* GET home page. */
router.get('/', controller.index);
router.get('/login', controller.login);
router.get('/register', controller.register);
router.get('/search-results', controller.searchResults);


module.exports = router;
