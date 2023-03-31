const data = require('../data/data')

const controller = {
    index: function (req, res) {
        if(req.params.si){
            res.render('index', {lsProd: data.productos, logueado: 'si', usuario: data.usuario.usuario})
        }
        else{
            res.render('index', {lsProd: data.productos, logueado: 'no'})
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
    editar_perfil: function (req, res) {
        res.render('profile-edit')
    },
    product: function (req, res) {
        res.render('product')
    },

}

module.exports = controller;