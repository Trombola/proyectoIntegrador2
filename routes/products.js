const express = require('express');
const router = express.Router();
const productsController = require('../controller/productsController');


router.get('/search-results', productsController.searchResults);
router.get('/product-add', productsController.productAdd);
router.get('/product', productsController.product);

module.exports = router;
