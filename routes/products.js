const express = require('express');
const router = express.Router();
const productsController = require('../controller/productsController');


router.get('/search-results', productsController.searchResults);
router.get('/product-add', productsController.productAdd);
router.post('/product-add', productsController.create);
router.get('/product/:id?', productsController.product);
router.post('/product/:id?', productsController.addComment);
router.post('/formEdit', productsController.editar);
router.post('/update', productsController.update);

router.post('/delete', productsController.borrarProducto);



module.exports = router;
