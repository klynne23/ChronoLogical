$(document).ready(function () {

    //variables to hold user information from the form
    var loginForm = $("form.login");
    var usernameloginInput = $("input#usernamelogin-input");
    var passwordloginInput = $("input#passwordlogin-input");

    //LOGIN FORM ON SUBMIT
    loginForm.on("submit", function (event) {
        event.preventDeafult();

        //creates the userData object to be passed into the loginUser function (which is hoisted from below)
        var userData = {
            username: usernameloginInput.val().trim(),
            password: passwordloginInput.val().trim()
        };
        console.log(userData);

        //checks to see if there is info entered in both fields in the form -> if not it returns nothing
        if (!userData.username || !userData.password) {
            return;
        }

        //if there's info in both fields, then it runs the loginUser function from below and clears the form
        loginUser(userData.username, userData.password);
        usernameloginInput.val("");
        passwordloginInput.val("");


    }); //end of LOGIN FORM ON SUBMIT

    function loginUser(username, password) {
        //ajax post request to send info to the server - api-routes will have the SQL comparison to the table/user model
        $.post("/api/login", {
            //the two variables from the object
            username: username,
            password: password
        }).then(function (data) {
            window.location.replace(data);
            console.log(username + password);
        }).catch(function (err) {
            console.log(err);
        });
    }

    //SIGN UP FORM
    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var usernameInput = $("input#username-input");
    var passwordInput = $("input#password-input");

    //on submit form
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.username || !userData.password) {
            return;
        }

        //calls signUpUser function from below
        signUpUser(userData.email, userData.username, userData.password);
        emailInput.val("");
        usernameInput.val("");
        passwordInput.val("");
    });

    function signUpUser(email, username, password) {
        $.post("/api/signup", {
            email: email,
            username: username,
            password: password
        }).then(function (data) {
            window.location.replace(data);
            console.log(email + username + password);
        }).catch(function (err) {
            console.log(err);
        });
    }

    // function handleLoginErr(err){
    //     $("#alert .msg").text(err.responseJSON);
    //     $("#alert").fadeIn(500);
    // }




    //Remainder of data for the application - discuss whether we want to do this here or somewhere else


    // populate the related divs when clicking on timeline options

    // public timeline selection, error handling and updating the span element
    $(document).on("click", ".publicTimelineOption", function () {
        var selected = $(this).data("name");
        var id = $(this).data("id")
        $("#option1").attr("data-id", id);

        var option2 = $("#option2").text();

        if (selected == option2) {
            alert("Please select a different timeline")
        }
        else {
            $("#option1").empty();
            $("#option1").text(selected);
        }

    }); /* end on click */

    // user or another public, error handling, updating span element
    $(document).on("click", ".userTimelineOption", function () {
        var selected = $(this).data("name");
        var id = $(this).data("id")
        $("#option2").attr("data-id", id);

        var option1 = $("#option1").text();

        if (selected == option1) {
            alert("Please select a different timeline");
        }
        else {
            $("#option2").empty();
            $("#option2").text(selected);
        }
    });

    // when clicking on go, will grab the values of selected timelines, will do
    // and api call to retrieve both timelines
    $(document).on("click", ".goButton", function () {
        var timeline1 = $("#option1").text();
        var timeline2 = $("#option2").text();
        var timelineOneId = $("#option1").data("id");
        var timelineTwoId = $("#option2").data("id");


        if (timeline1 == "" && timeline2 == "") {
            alert("please select at least one timeline");
        }
        else if (timeline1 == "") {
            console.log("no timeline 1 selected");
            $.get("/api/timeline/" + timelineTwoId)
                .then(function (res) {
                    //html response
                    console.log(res);
                });
        }
        else if (timeline2 == "") {
            console.log("no timeline 2 selected");
            $.get("/api/timeline/" + timelineOneId)
                .then(function (res) {
                    //html response
                    console.log(res);
                });
        }

        else {
            console.log("your 2 selected timelines are "+timeline1+" & "+timeline2);
            console.log("The Ids are "+timelineOneId+" & "+timelineTwoId);

            timelines = {
                timeline1: timelineOneId,
                timeline2: timelineTwoId
            }

            $.post("/api/combined", timelines)
                .then(function (res) {
                    console.log(res);

                });

        }






    }); /* end on click */


    // timeline script to initiate timelines
    $('.timeline').timeline({
        verticalStartPosition: 'right',
        verticalTrigger: '150px',
    });



});