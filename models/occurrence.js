module.exports = function (sequelize, DataTypes) {
    var Occurrence = sequelize.define("Occurrence", {
        event_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        event_description: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATE,
        }
    });

    // Add a belongsTo association to Timeline here
    Occurrence.associate = function (models) {
        Occurrence.belongsTo(models.Timeline, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Occurrence;
};