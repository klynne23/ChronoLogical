//requires the models and saves in a db variable
var db = require("../models");
const Op = db.Sequelize.Op;

//variable holding the passport Strategy to authenticate the passwords
var passport = require("../config/passport");

module.exports = function (app) {

    //LOGIN - posts the authentication request to the user table
    app.post("/api/index", passport.authenticate("local"), function (req, res) {
        //I think this will return the user back to the index page in our case - this line might not work
        res.json("/create")
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
            res.redirect(307, "/api/index");
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

    // REST OF THE APPLICATION

    /////////////////////
    ///// TIMELINES /////
    ///////////////////// 

    // POST route for creating a new TIMELINE
    app.post("/api/timeline", function (req, res) {
        db.Timeline.create({
            title: req.body.title,
            CategoryId: req.body.CategoryId,
            UserId: req.user.id
        }).then(function (results) {
            res.json(results);
        });
    });

    // GET route for retrieving all TIMELINES associated with a SINGLE USER
    app.get("/api/timeline/user/", function (req, res) {
        db.Timeline.findAll({
            where: {
                UserId: req.user.id
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    // GET route for retrieving all EVENTS associated with a SINGLE TIMELINE
    app.get("/api/timeline/:id", function (req, res) {
        db.Occurrence.findAll({
            where: {
                TimelineId: req.params.id
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    //Returns everything - trying to get to dropdowns to work together
    app.get("/api/timeline2/", function (req, res) {
        db.Occurrence.findAll({
            // where: {
            //     TimelineId: req.params.id
            // }
        }).then(function (results) {
            res.json(results);
            // res.render("timeline", {
            //     data: results
            // });
        });
    });

    // POST route for retrieving all EVENTS associated with a TWO TIMELINES
    app.post("/api/combined", function (req, res) {
        let timeline1 = req.body.timeline1;
        let timeline2 = req.body.timeline2;

        db.Occurrence.findAll({
            where: {
                [Op.or]: [{
                    TimelineId: timeline1
                }, {
                    TimelineId: timeline2
                }]
            },
            order: [
                ['end_date', 'DESC']
            ]
        }).then(function (results) {
            res.json(results);
        });
    });

    // PUT route for updating a TIMELINE
    app.put("/api/timeline", function (req, res) {
        db.Timeline.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function (results) {
            res.json(results);
        });
    });

    // DELETE route for deleting a single TIMELINE
    app.delete("/api/timeline/:id", function (req, res) {
        db.Timeline.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    /////////////////////
    ///// EVENTS ////////
    ///////////////////// 

    // POST route for creating an EVENT
    app.post("/api/timeline/event", function (req, res) {
        db.Occurrence.create({
            TimelineId: req.body.TimelineId,
            event_name: req.body.event_name,
            event_description: req.body.event_description,
            start_date: req.body.start_date,
            end_date: req.body.end_date

        }).then(function (results) {
            res.json(results);
        });
    });

    // GET route for retrieving SINGLE EVENT
    app.get("/api/timeline/event/:id", function (req, res) {
        db.Occurrence.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    // PUT route for updating an EVENT
    app.put("/api/timeline/event", function (req, res) {
        db.Occurrence.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function (results) {
            res.json(results);
        });
    });

    // DELETE route for deleting a single EVENT
    app.delete("/api/timeline/event/:id", function (req, res) {
        db.Occurrence.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    // handlebars home page route for filling the PUblic Timelines
    app.get("/", function (req, res) {
        db.Timeline.findAll({}).then(function (results) {
            res.render("mainpage", {publicTimelines: results});
            
        })
    });

}; // End of module.exports