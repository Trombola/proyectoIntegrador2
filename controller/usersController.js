const data = require('../data/data')

const usersController={
    perfil: function (req, res) {
        return res.render('profile', {usuario: data.usuario.usuario, foto: data.usuario.fto, mail: data.usuario.mail, perfil: data.productos})
    },
    editar_perfil: function (req, res) {
        return res.render('profile-edit', {usuario: data.usuario.usuario})
    },
    login: function (req, res) {
        return res.render('login')
    },
    register: function (req, res) {
        return res.render('register')
    },
}
module.exports=usersController;