var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    //listening at /index (main page) - not sure how to deal with the modal yet, so I just set this up like it's the page
    // app.get("/index", function (req, res) {
    //     res.render("index");
    // });

    //route to the mytimelines html

    //if logged in, then you can go to create, if not, you go to the mainpage
    app.get("/index", function(req, res) {
        if(req.user){
            res.redirect("create");
        }
       res.render("index");
      });


    app.get("/", function(req, res){
        res.render("mainpage"); 
    })

    //redirects to create page if login credentials are authenticated
    app.get("/create", isAuthenticated, function(req, res){
        res.render("create");
    });

};