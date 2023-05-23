module.exports = function(sequelize, dataTypes){
    let alias = 'Usuario'
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
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
    usuario.associate = function(models){
        usuario.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'usuario_id'
        })
        usuario.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'usuario_id'
        })
    }
    return usuario
}