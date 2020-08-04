module.exports = function (sequelize, dataTypes) {
    const alias = "Actor"

    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        rating: {
            type:dataTypes.FLOAT,
            allowNull: true
        }
}

    const config = {
      tableName: 'actors',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'delete_at',
      underscored: true,
      paranoid: true
    }




    const actor = sequelize.define(alias, cols, config)

    actor.associate = function (models){
        actor.belongsToMany(models.Movie, {
            as:'movies',
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false
        })
    }


    return actor
}