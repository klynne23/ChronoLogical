module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        cat_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Category.associate = function (models) {
        Category.hasMany(models.Timeline, {
            onDelete: "CASCADE"
        });
    };

    return Category;
};