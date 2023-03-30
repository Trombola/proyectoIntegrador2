const productos = require('../productos/product')

const controller = {
    index: function (req, res) {
        if(req.params.si){
            res.render('index', {lsProd: productos, logueado: 'si'})
        }
        else{
            res.render('index', {lsProd: productos, logueado: 'no'})
        }
        
    },
    login: function (req, res) {
        res.render('login')
    },
    register: function (req, res) {
        res.render('register')
    },
    searchResults: function (req, res) {
        res.render('search-results')
    },
    productAdd: function (req, res) {
        res.render('product-add')
    },
    perfil: function (req, res) {
        res.render('profile')
    },

}

module.exports = controller;