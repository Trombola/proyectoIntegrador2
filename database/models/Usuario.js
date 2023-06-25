module.exports = function(sequelize, dataTypes){
    let alias = 'Usuario'
    let cols = {
        //Propiedad = campo, valor = oonfiguracion del campo
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: dataTypes.STRING(200),
            unique: true,
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(200),
            unique: true,
            allowNull: false,
        },
        contrasenia: {
            type: dataTypes.STRING(200),
            allowNull: false,
            unique: true,
        },
        fecha_de_nacimiento:{
            type: dataTypes.DATE,
        },
        dni:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        foto_de_perfil:{
            type: dataTypes.TEXT,
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: false, 
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: false, 
        },
        deletedAt:{
            type: dataTypes.DATE,
            allowNull: true, 
        },
    }
    let config = {
        tableName: 'usuarios',
        timestamps: true,
        
    }
    const usuario = sequelize.define(alias, cols, config)
//Definimos las asociasiones, usuario.associate recibe una funcion a la que se le pasa como parametro todos los modelos que tenemos
    usuario.associate = function(models){
//Un usuario tiene muchos comentarios. Parametros: el modelo con el que se relaciona y un objeto que contiene {'nombre de la relacion', 'columna que une ambas tablas'}
        usuario.hasMany(models.Comentario, {
//Como se llama la relacion
            as: 'comentarios',
//Cual es la columna que une ambas tablas
            foreignKey: 'usuario_id'
        })
        //Un usuario tiene muchos productos
        usuario.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'usuario_id'
        })
    }
    return usuario
}