module.exports = function (sequelize, DataTypes) {
    var Timeline = sequelize.define("Timeline", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        public: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    // Add a belongsTo association to Categories here
    Timeline.associate = function (models) {
        Timeline.belongsTo(models.Category, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    // Add a belongsTo association to Users here
    Timeline.associate = function (models) {
        Timeline.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    // Adds a hasMany association to Events
    Timeline.associate = function (models) {
        Timeline.hasMany(models.Occurrence, {
            onDelete: "CASCADE"
        });
    };

    return Timeline;
};