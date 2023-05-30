const data = require('../data/data')
const db = require('../database/models')


const productsController={
    searchResults: function (req, res) {
        return res.render('search-results', {lsProd: data.productos})
    },
    productAdd: function (req, res) {
        
        return res.render('product-add')
    },
    product: function (req, res) {
        return res.render('product', {producto: data.productos[2], comentarios: data.comentarios})
    },
}
module.exports=productsController;