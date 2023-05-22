module.exports = function (sequelize, dataTypes){
    let alias = 'Producto'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        producto: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        descripcionProd:{
            type: dataTypes.STRING,
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
        tableName: 'productos',
        timestamps: true,
        underscored: false, 
    }

    const prod = sequelize.define(alias, cols, config)
    prod.associate = function(models){
        prod.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuario_id'
        })
        prod.hasMany(models.Comentario, {
            as: 'comentario',
            foreignKey: 'post_id'
        })
    } 
    return prod
}