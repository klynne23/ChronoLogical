var passport = require("passport");

//Strategies in passport authenticate passport - verifies a usrname and
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(
  //makes username Field username
  {
    usernameField: "username"
  },
  //finds one username
  function(username, password, done) {
    db.User.findOne({
      where: {
        username: username
      }
    }).then(function(dbUser) {
      //checks the username against the database and if ther isn't one - Incorrect username
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      //checks the password against what's in the database - gives message Incorrect email
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      //if all matches, then done and calls back dbUser
      return done(null, dbUser);
    });
  }
));

//starts the session
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

//keeps the session open while the user is in the application
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
