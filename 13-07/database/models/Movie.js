module.exports = function (sequelize, dataTypes) {
    let movie = sequelize.define('Movie', {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,

        },
        title : {
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
        }

    },
    {
      tableName: 'movies',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      undercode: true

    })

    return movie
}