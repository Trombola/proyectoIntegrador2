const express = require('express');
const router = express.Router();
const productsController = require('../controller/productsController');

//Buscador
router.get('/search-results', productsController.searchResults);

//Añadir productos
router.get('/product-add', productsController.productAdd);
router.post('/product-add', productsController.create);

//detalle de productos
router.get('/product/:id?', productsController.product);
router.post('/product/:id?', productsController.addComment);

//Editar producto
router.post('/formEdit', productsController.editar);
router.post('/update', productsController.update);

//Borrar producto
router.post('/delete', productsController.borrarProducto);



module.exports = router;
