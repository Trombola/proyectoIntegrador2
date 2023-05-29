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
        return res.render('login', {error: ''})
    },
    login_check: function (req, res) {
        usuario.findOne({
            where: [{email: req.body.email}]
        })
        .then(function(data){
            if(data){
                let check = bcrypt.compareSync(req.body.contrasenia, data.contrasenia)
                if(check){
                    
                    if(req.body.checkbox == 'on'){
                        res.cookie('usuario', data.username, {maxAge: 1000 * 60 * 5})
                        
                        return res.redirect('/')
                    }
                    else{
                        res.cookie('usuario', data.username, {maxAge: 1000 * 60 * 5})
                        return res.redirect('/')
                    }
                    
                    
                }
                else{
                    return res.render('login', {error: 'La contraseña es incorrecta'})
                }
            }
            else{
                return res.render('login', {error: 'El email es incorrecto'})
            }
        }
        
        )
        
    },
    logout: function (req, res) {
        res.clearCookie('usuario')
        return res.redirect('/')
    },
    register: function (req, res) {
        return res.render('register', {error: ''})
    },
    create: function (req, res) {
        /* validacion mail*/
        if(req.body.contrasenia.length<4){
            return res.render('register', {error: 'La contraseña debe tener mas de tres caracteres'})
        }
        else{
            usuario.findOne({
                where: [{email: req.body.email}]
            })
            .then(function(data){
                console.log(data);
                if(data){
                    return res.render('register', {error: 'El mail introducido ya existe'})
                }
                else{
                    usuario.create({
                        username: req.body.username,
                        email: req.body.email,
                        contrasenia: bcrypt.hashSync(req.body.contrasenia, req.body.contrasenia.length),
                        fecha_de_nacimiento: req.body.fecha,
                        dni: req.body.dni,
                        foto_de_perfil: req.body.ftoPerfil,
                        })
                    return res.redirect('/')
                }
            })
            .catch(function (err) {
                console.log(err);
            })
        }
         
        }
        
        
    
}
module.exports=usersController;