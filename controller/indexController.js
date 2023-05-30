const db = require('../database/models');
const Productos = db.Producto;



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