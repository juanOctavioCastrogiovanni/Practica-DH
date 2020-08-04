module.exports = function (sequelize, dataTypes) {
    const alias = "Genre"

    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: true
    }
}

    const config = {
      tableName: 'genres',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'delete_at',
      underscored: true,
      paranoid: true
    }




    const genre = sequelize.define(alias, cols, config)

    genre.associate = function (models){
        genre.hasMany(models.Movie, {
            as: "movieRelationship",
            foreignKey:"genre_id"
        })
    }


    return genre
}