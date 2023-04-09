const data = require('../data/data')

const productsController={
    searchResults: function (req, res) {
        return res.render('search-results', {lsProd: data.productos})
    },
    productAdd: function (req, res) {
        return res.render('product-add', {usuario: data.usuario.usuario})
    },
    product: function (req, res) {
        return res.render('product', {producto: data.productos[2], comentarios: data.comentarios})
    },
}
module.exports=productsController;