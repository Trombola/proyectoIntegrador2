const data = require('../data/data')
const db = require('../database/models');
/* const op = db.Sequelize.Op
const Productos = db.Producto;
const fecha = new Date()

Productos.findAll({
    limit: 8, 
    where: {
        createdAt: {[op.lte]:fecha},
    }})
    
    .then(function(data) {
        console.log(data);
    }) */


const indexController = {
    index: function (req, res) {
        if(req.params.si){
            return res.render('index', {lsProd: data.productos, logueado: 'si', usuario: data.usuario.usuario})
        }
        else{
           return res.render('index', {lsProd: data.productos, logueado: 'no'})
        }
    }
}

module.exports = indexController;