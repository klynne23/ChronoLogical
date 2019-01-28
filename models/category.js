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

    // Adds a hasMany association to Timelines
    Category.associate = function (models) {
        Category.hasMany(models.Timeline, {
            onDelete: "CASCADE"
        });
    };

    return Category;
};