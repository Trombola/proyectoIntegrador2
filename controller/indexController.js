const data = require('../data/data')

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