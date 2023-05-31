const data = require('../data/data')
const db = require('../database/models')
const producto = db.Producto
const usuario = db.usuario

const productsController={
    searchResults: function (req, res) {
        return res.render('search-results', {lsProd: data.productos})
    },
    productAdd: function (req, res) {
        return res.render('product-add')
    },
    create: function (req, res) {
        //Esto funciona falta lo de la foto
        /* producto.create({
            usuario_id: req.session.identificador,
            foto: req.body.ftoProducto,
            producto: req.body.nombreProd,
            descripcionProd: req.body.Descripcion,
        }) */
        return res.redirect('/')
    },
    product: function (req, res) {
        return res.render('product', {producto: data.productos[2], comentarios: data.comentarios})
    },
}
module.exports=productsController;