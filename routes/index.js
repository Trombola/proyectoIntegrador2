const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController')
const productsController = require('../controller/productsController')
const usersController = require('../controller/usersController')




/* GET home page. */

router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.get('/search-results', productsController.searchResults);
router.get('/product-add', productsController.productAdd);
router.get('/product', productsController.product);
router.get('/profile', usersController.perfil);
router.get('/profile-edit', usersController.editar_perfil);
router.get('/:si?', indexController.index);

module.exports = router;


