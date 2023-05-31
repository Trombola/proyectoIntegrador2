const express = require('express');
const router = express.Router();
const productsController = require('../controller/productsController');


router.get('/search-results', productsController.searchResults);
router.get('/product-add', productsController.productAdd);
router.post('/product-add', productsController.create);
router.get('/product', productsController.product);

module.exports = router;
