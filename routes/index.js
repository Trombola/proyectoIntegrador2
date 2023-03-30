const express = require('express');
const router = express.Router();
const controller = require('../controller/indexController')


/* GET home page. */

router.get('/login', controller.login);
router.get('/register', controller.register);
router.get('/search-results', controller.searchResults);
router.get('/product-add', controller.productAdd);
router.get('/product', controller.product);
router.get('/profile', controller.perfil);
router.get('/profile-edit', controller.editar_perfil);
router.get('/:si?', controller.index);

module.exports = router;


