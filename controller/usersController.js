const db = require('../database/models')
const usuario = db.Usuario
const bcrypt = require('bcrypt')
//Importamos los operadores de sequelize
const op = db.Sequelize.Op;


const usersController={
    perfil_id: function (req, res) {
        let id = req.params.id
        //Funcion asincronica, retorna una promesa
        usuario.findByPk(id, 
            {
              include: [{association: 'comentarios'},{association: 'productos'}],
              order: [[{model: db.Producto, as: 'productos'}, 'createdAt', 'DESC']]
            }

        )
// El .then() se ejecuta cuando la promesa se resuelve correctamente y se le pasa como parametro a la funcion callback el retorno de la funcion asincronica
        .then(function(data){
            
            return res.render('profile', {foto: data.foto_de_perfil, mail: data.email, perfil: data.productos, comentarios: data.comentarios, nombreUsuario: data.username, id: data.id})
        })
//Esta funcion anonima de callback solo se activa en el caso que haya un error, el cual se pasa como parametro y luego de imprime en la consola
        .catch(function(err){console.log(err);})
    },
    editarperfil: function (req,res) {
        let id = req.session.nombreUsuario.id
        usuario.findOne({
            where:[{id:id}],
        })
        .then((resultado)=>{
        return res.render("profile-edit",{info:resultado.dataValues})
        })
    },
    guardarprofile:(req,res)=>{
        let id = req.session.nombreUsuario.id
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
              contrasenia: bcrypt.hashSync(req.body.contrasenia, req.body.contrasenia.length)
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
          res.clearCookie('usuario')
          return res.redirect("/")
        },
    login: function (req,res) {
      if (req.session.nombreUsuario != undefined) {
        return res.redirect('/')
      }else{
        return res.render('login')
      }
    },
    login_check: function (req, res) {
        error = {}
        //Hacemos la consulta a la base de datos
        usuario.findOne({
            where: [{email: req.body.email}]
        })
        // Data son los datos retornados por la funcion asincronica
        .then(function(data){
          //Si encontro datos quiere deicr que el email existe, de lo contrario enviamos el error a la vista.
            if(data){
              //Chequeamos que la contrasena sea correcta.
                let check = bcrypt.compareSync(req.body.contrasenia, data.contrasenia)
                if(check){
                    
                    //Si el usuario clickeo en recordarme se crea una cookie
                    if(req.body.checkbox == 'on'){
                      //Guardamos los datos de la consulta en session para usarlos en todas las vistas
                        req.session.nombreUsuario = data
                      //Creamos la cookie
                        res.cookie('usuario', data, {maxAge: 1000*60*5})
                        return res.redirect('/')
                    }
                    else{
                        req.session.nombreUsuario = data
                        return res.redirect('/')
                    }
                    
                    
                }
                else{
                  error.message = 'la contraseña es incorrecta'
                  res.locals.errors = error
                  return res.render('login')
                }
            }
            else{
              error.message = 'El email ingresado no existe'
              res.locals.errors = error
                return res.render('login')
            }
        }
        
        )
        
    },
    logout: function (req, res) {
        res.clearCookie('usuario')
        req.session.nombreUsuario = undefined
        return res.redirect('/')
    },
    register: function (req, res) {
      //Verificamos que no este logueado
      if (req.session.nombreUsuario != undefined) {
        return res.redirect('/')
      }else{
        return res.render('register')
      }
    },
    create: function (req, res) {
      let error = {}
        //Validamos la contraseña
        if(req.body.contrasenia.length<4){
            error.message = 'la contraseña debe tener mas de tres caracteres'
            res.locals.errors = error
            return res.render('register')
        }
        else{
          /* validacion mail*/
            usuario.findOne({
                where: [{email: req.body.email}]
            })
            .then(function(data){
                console.log(data);
                if(data){
                  error.message = 'El email ingresado ya existe'
                  res.locals.errors = error
                  return res.render('register')
                }
                else{
                    usuario.create({
                        username: req.body.username,
                        email: req.body.email,
                        contrasenia: bcrypt.hashSync(req.body.contrasenia, 12),
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