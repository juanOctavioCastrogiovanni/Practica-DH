module.exports = function (sequelize, dataTypes) {
    const alias = "Movie"

    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: dataTypes.STRING,
            allowNull: true
        },
        rating: {
            type: dataTypes.FLOAT.UNSIGNED,
            allowNull: true
        },
        awards: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: true   
        },
        length: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        genre_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true
        }
    }

    const config = {
      tableName: 'movies',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'delete_at',
      underscored: true,
      paranoid: true
    }




    let movie = sequelize.define(alias, cols, config);

    movie.associate = function (models){
        movie.belongsTo(models.Genre, {
            as: "genreRelationship",
            foreignKey:"genre_id"
        })

        movie.belongsToMany(models.Actor,{
            as:'actors',
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        })
    }


    return movie;
}