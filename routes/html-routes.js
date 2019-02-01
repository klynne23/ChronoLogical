// var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    //if logged in, then you can go to create, if not, you go to the mainpage
    app.get("/index", function(req, res) {
        if(req.user){
            res.redirect("create");
        }
       res.render("index");
      });

    //redirects to create page if login credentials are authenticated
    app.get("/create", isAuthenticated, function(req, res){
        res.render("create");
    });
};