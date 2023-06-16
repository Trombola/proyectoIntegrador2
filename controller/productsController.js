const db = require('../database/models');
const producto = db.Producto
const usuario = db.Usuario
const comentario = db.Comentario
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
          include: [{association:'usuario'},],
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
        console.log(req.body.img);
        producto.create({
            usuario_id: req.session.nombreUsuario.id,
            foto: req.body.img,
            producto: req.body.nombreProd,
            descripcionProd: req.body.Descripcion,
        })
        return res.redirect('/')
    },
    product: function (req, res) {
        let id = req.params.id;
        producto.findByPk(id, 
            {
              include: [{association: 'comentario', include: [{association:'usuario'}]},{ association: 'usuario'}],
              order: [[{model: db.Comentario, as: 'comentario'}, 'createdAt', 'DESC']]
          })
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
    addComment: function (req, res) {
    
      usuario.findOne({
        where: [{id: req.session.nombreUsuario.id}]
      })
      .then(function (data) {
        const id = req.params.id;
        let coment = req.body.comentario
        console.log(data.id);
        comentario.create({
         post_id: id, usuario_id: data.id , comentario: coment
        })
        return res.redirect(`/products/product/${id}`)
      })
      .catch(function (err) {console.log(err);})


      
    },
    editar: function (req,res) {
     return res.render("editarProducto",{
      producto:req.body.producto,
      descripcionProd: req.body.descripcionProd,
      foto: req.body.foto,
      id: req.body.id
     })
    },
    update: function (req,res) {
      if(req.body.producto != ""){
        producto.update({
          producto: req.body.producto
        },{
          where:{
            id:req.body.id
          }
        })
      }
      if(req.body.foto != ""){
        producto.update({
          foto: req.body.foto
        },{
          where:{
            id:req.body.id
          }
        })
      }
      if(req.body.descripcionProd != ""){
        producto.update({
          descripcionProd: req.body.descripcionProd
        },{
          where:{
            id:req.body.id
          }
        })
      }
      return res.redirect("/")  
    },
    borrarProducto: function (req,res) {
    comentario.destroy({where:{post_id:req.body.id}})
    producto.destroy({where:{id:req.body.id}})
      return res.redirect("/")
  }

}
module.exports=productsController;