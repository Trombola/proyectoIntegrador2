const datan = require('../data/data')
const db = require('../database/models')
const usuario = db.Usuario
const bcrypt = require('bcrypt')
const op = db.Sequelize.Op;


const usersController={
    perfil: function (req, res) {
        usuario.findOne({
            where: [{username: req.session.nombreUsuario}],
            include: [{association: 'comentarios'},{association: 'productos'}]
        })
        .then(function(data){
            console.log(data);
            return res.render('profile', {foto: data.foto_de_perfil, mail: data.email, perfil: data.productos, comentarios: data.comentarios, nombreUsuario: data.username, log: true})
            //Falta que creemos productos y comentarios de cada perfil, ademas deberiamos hacer un condicional en el ejs para que aparezca una leyenda si no hay productos
        })
        .catch(function(err){console.log(err);})
        
    },
    perfil_id: function (req, res) {
        let id = req.params.id
        usuario.findByPk(id, 
            {include: [{association: 'comentarios'},{association: 'productos'}]}
        )
        .then(function(data){
            return res.render('profile', {foto: data.foto_de_perfil, mail: data.email, perfil: data.productos, comentarios: data.comentarios, nombreUsuario: data.username, log: false})
            //return res.render('profile', {foto: data.foto_de_perfil, mail: data.email, perfil: data.productos, comentarios: data.comentarios, nombreUsuario: data.username})
        })
        .catch(function(err){console.log(err);})
    },
    editarperfil: function (req,res) {
        let id = req.session.identificador
        usuario.findOne({
            where:[{id:id}],
        })
        .then((resultado)=>{
        return res.render("profile-edit",{info:resultado.dataValues})
        })
    },
    guardarprofile:(req,res)=>{
        let id = req.session.identificador
        if(req.body.usuario != ""){
            usuario.update({
              username: req.body.usuario
            },{
              where:{
                id:id
              }
            })
          }
        if(req.body.fotoperfil != ""){
            usuario.update({
              foto_de_perfil: req.body.fotoperfil
            },{
              where:{
                id:id
              }
            })
          }
        if(req.body.dni != ""){
            usuario.update({
              dni: req.body.dni
            },{
              where:{
                id:id
              }
            })
          }
        if(req.body.mail != ""){
            usuario.update({
              email: req.body.mail
            },{
              where:{
                id:id
              }
            })
          }
        if(req.body.contrasenia != ""){
            usuario.update({
              contrasenia: bcrypt.hashSync(req.body.contrasenia,12)
            },{
              where:{
                id:id
              }
            })
          }
        if(req.body.fecha != ""){
            usuario.update({
              fecha_de_nacimiento: req.body.fecha
            },{
              where:{
                id:id
              }
            })
          }
        if(req.body.fotoperfil != ""){
            usuario.update({
              fotoperfil: req.body.fotoperfil
            },{
              where:{
                id:req.body.id
              }
            })
          }
          req.session.destroy()
          return res.redirect("/")
        },
    login: function (req,res) {
        return res.render('login', {error: ''})
    },
    login_check: function (req, res) {
        //FALTA LO DE LA CHECKBOX
        usuario.findOne({
            where: [{email: req.body.email}]
        })
        .then(function(data){
            if(data){
                let check = bcrypt.compareSync(req.body.contrasenia, data.contrasenia)
                if(check){
                    
                    if(req.body.checkbox == 'on'){
                        req.session.nombreUsuario = data.username
                        req.session.identificador = data.id
                        return res.redirect('/')
                    }
                    else{
                        req.session.nombreUsuario = data.username
                        req.session.identificador = data.id
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
        req.session.nombreUsuario = undefined
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
         
        },
    usuarioResults: function (req, res) {
        const busqueda = req.query.search;
        console.log(busqueda);
        usuario.findAll({
            where: {[op.or]: [ 
                { username: { [op.like]: `%${busqueda}%` } },
                { email: { [op.like]: `%${busqueda}%` } },
              ]},
            order: [['createdAt', 'DESC']],
            include: [{association:'productos'},],
            })
            .then(usuarios => {
                if (usuarios) {
                  res.render('search-usuario', {usuarios,busqueda});
                }})
    },
}
module.exports=usersController;