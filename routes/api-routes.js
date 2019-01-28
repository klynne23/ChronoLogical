//requires the models and saves in a db variable
var db = require("../models");

//variable holding the passport Strategy to authenticate the passwords
var passport = require("../config/passport");

module.exports = function (app) {

    //LOGIN - posts the authentication request to the user table
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        //I think this will return the user back to the index page in our case - this line might not work
        res.json("/index")
    });

    //SIGNUP - adds a new row to the user table - 307 is temporary redirect
    app.post("/api/signup", function (req, res) {
        console.log(req.body);
        //creates the new user info in the table
        db.User.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
            //redirect back to api/login
        }).then(function () {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log(err);
            res.json(err);
        });
    });
    //LOGOUT - server listening at /logout address to run the passport logout method. Redirects to main page
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/index");
    });

    //I think this allows the application to put a customized welcome on the page somewhere - like "Hi User Name!"
    app.get("/api/user_data", function (req, res) {
        //if there's NO user info entered, then it'll return the json of the whole object to the user_data api
        if (!req.user) {
            res.json({});
        } else {
            res.json({
                username: req.user.username,
                id: req.user.id
            });
        }

    });

    /////REST OF THE APPLICATION?????



}