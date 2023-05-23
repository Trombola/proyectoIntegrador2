module.exports = function(sequelize, dataTypes){
    let alias = 'Comentario'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        post_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        usuario_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        comentario:{
            type: dataTypes.TEXT,
            allowNull: false,
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
            tableName: 'comentarios',
            timestamps: true,
        }
        const Comentario = sequelize.define(alias, cols, config)
        Comentario.associate = function(models){
            Comentario.belongsTo(models.Usuario, {
                as: 'usuario',
                foreignKey: 'usuario_id',
            });
            Comentario.belongsTo(models.Producto, {
                as: 'producto',
                foreignKey: 'post_id',
            })
        }
        return Comentario
    }