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
        res.render('product-add', {usuario: data.usuario.usuario})
    },
    perfil: function (req, res) {
        res.render('profile', {usuario: data.usuario.usuario, foto: data.usuario.fto})
    },
    editar_perfil: function (req, res) {
        res.render('profile-edit', {usuario: data.usuario.usuario})
    },
    product: function (req, res) {
        res.render('product', {producto: data.productos[2], comentarios: data.comentarios})
    },

}

module.exports = controller;