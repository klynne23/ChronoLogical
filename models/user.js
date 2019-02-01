var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    //unique email for signup
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    //password for authentication
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //unique username for sign-up/logging in
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1]
      }
    }
  });

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  //encrypts password so you see little dots when you type in your pword. Hook does it before it is created
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  // Adds a hasMany association to Timelines
  User.associate = function (models) {
    User.hasMany(models.Timeline, {
      onDelete: "CASCADE"
    });
  };

  return User;
};