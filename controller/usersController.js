const data = require('../data/data')
const db = require('../database/models')
const usuario = db.Usuario
const bcrypt = require('bcrypt')

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
    create: function (req, res) {
        /* validaciones dni */
        usuario.create({
             email: req.body.email,
             contrasenia: bcrypt.hashSync(req.body.contrasenia, req.body.contrasenia.length),
             fecha_de_nacimiento: req.body.fecha,
             dni: req.body.dni,
             foto_de_perfil: req.body.ftoPerfil,
            })
        res.redirect('/')
    }
}
module.exports=usersController;