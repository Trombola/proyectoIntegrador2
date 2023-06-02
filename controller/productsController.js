const { error, log } = require('console');
const data = require('../data/data')
const db = require('../database/models')
const producto = db.Producto
const usuario = db.Usuario
const op = db.Sequelize.Op;


const productsController={
    searchResults: function (req, res) {
        const busqueda = req.query.search; // Criterio de búsqueda proporcionado por el usuario
        console.log(busqueda);
        producto.findAll({
          where: {
            [op.or]: [
              { producto: { [op.like]: `%${busqueda}%` } },
              { descripcionProd: { [op.like]: `%${busqueda}%` } },
            ],
          },
          order: [['createdAt', 'DESC']],
          include: [{model: usuario, as: 'usuario'},],
        })
          .then(productos => {
            if (productos) {
              res.render('search-results', {productos,busqueda});
            }})
    },
    productAdd: function (req, res) {
        return res.render('product-add')
    },
    create: function (req, res) {
        //Esto funciona falta lo de la foto
        producto.create({
            usuario_id: req.session.identificador,
            foto: req.body.ftoProducto,
            producto: req.body.nombreProd,
            descripcionProd: req.body.Descripcion,
        })
        return res.redirect('/')
    },
    product: function (req, res) {
        let id = req.params.id;
        producto.findByPk(id, 
            {include: [{association: 'comentario', include: [{association:'usuario'}]},{ association: 'usuario'}]})
        .then(function (data) {
            // Falta ver como podemos hacer para validar si tiene comentarios o no, me tira error
            if(data){
                return res.render('product', {producto: data, comentarios: data.comentario})
            }
            else{
                return res.render('product', {producto: data, comentarios: 'No hay comentarios'})
            }
        })
        .catch(function (err) {console.log(err);})
    },
}
module.exports=productsController;