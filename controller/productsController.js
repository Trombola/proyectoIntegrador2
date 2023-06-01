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
            if (productos.length === 0) {
              return res.send('No hay resultados para su criterio de búsqueda');
            }
            res.render('search-results', { productos });
          })
    },
    productAdd: function (req, res) {
        return res.render('product-add')
    },
    create: function (req, res) {
        //Esto funciona falta lo de la foto
        /* producto.create({
            usuario_id: req.session.identificador,
            foto: req.body.ftoProducto,
            producto: req.body.nombreProd,
            descripcionProd: req.body.Descripcion,
        }) */
        return res.redirect('/')
    },
    product: function (req, res) {
        return res.render('product', {producto: data.productos[2], comentarios: data.comentarios})
    },
}
module.exports=productsController;