const db = require('../database/models');
const Productos = db.Producto;



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
            
            .then(function(data) {
                
                return res.render('index', {lsProd: data})
                
            })
            .catch(function (err) {
                console.log(err);
            }) 
        
        
    }
}

module.exports = indexController;