const data = require('../data/data')

const controller = {
    index: function (req, res) {
        if(req.params.si){
            return res.render('index', {lsProd: data.productos, logueado: 'si', usuario: data.usuario.usuario})
        }
        else{
           return res.render('index', {lsProd: data.productos, logueado: 'no'})
        }
        
    },
    login: function (req, res) {
        return res.render('login')
    },
    register: function (req, res) {
        return res.render('register')
    },
    searchResults: function (req, res) {
        return res.render('search-results')
    },
    productAdd: function (req, res) {
        return res.render('product-add', {usuario: data.usuario.usuario})
    },
    perfil: function (req, res) {
        return res.render('profile', {usuario: data.usuario.usuario, foto: data.usuario.fto,mail: data.usuario.mail})
    },
    editar_perfil: function (req, res) {
        return res.render('profile-edit', {usuario: data.usuario.usuario})
    },
    product: function (req, res) {
        return res.render('product', {producto: data.productos[2], comentarios: data.comentarios})
    },

}

module.exports = controller;