const data = require('../data/data')
const db = require('../database/models');
const Productos = db.Producto;
const Comentario = db.Comentario
const Usuario = db.Usuario



/*  FUNCIONA TODO LO QUE FALLABA ERA QUE NO HABIAN COMENTARIOS EN LOS ULTIMOS PRODUCTOS AGREGADOS
Productos.findAll({
    limit: 8,
    order: [['createdAt', 'DESC']],
    include: [{association: 'comentario'},{association: 'usuario'}]
    })
    
    .then(function(data) {
        console.log(data[3].comentario.length);
        
    }) */


const indexController = {
    
    index: function (req, res) {
        Productos.findAll({
            limit: 8,
            order: [['createdAt', 'DESC']],
            include: [{association: 'comentario'},{association: 'usuario'}]
            })
            
            .then(function(datas) {
                if(req.params.si){
                    return res.render('index', {lsProd: datas, logueado: 'si', usuario: data.usuario.usuario})
                }
                else{
                   return res.render('index', {lsProd: datas, logueado: 'no'})
                }
            }) 
        
        
    }
}

module.exports = indexController;