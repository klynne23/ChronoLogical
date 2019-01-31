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
        $("#option1").empty();
        var selected = $(this).data("name");
        var id = $(this).data("id")
        $("#option1").attr("data-id", id);

        var option2 = $("#option2").text();

        if (selected == option2) {
            alert("Timeline 1 must differ from Timeline 2")
            $("#option1").empty();
        }
        else {
            $("#option1").text(selected);
        }

    }); /* end on click */

    // user or another public, error handling, updating span element
    $(document).on("click", ".userTimelineOption", function () {
        $("#option2").empty();
        var selected = $(this).data("name");
        var id = $(this).data("id")
        
        $("#option2").attr("data-id", id);

        var option1 = $("#option1").text();

        if (selected == option1) {
            alert("Timeline 2 must differ from Timeline 1");
            $("#option2").empty();
        }
        else {
            $("#option2").text(selected);
        }
    });

    // clear button on click function
    $(document).on("click", ".clearButton", function(){
        $("#option1").empty();
        $("#option2").empty();
    }); // end clear button on click function

    // when clicking on go, will grab the values of selected timelines, will do
    // and api call to retrieve both timelines
    $(document).on("click", ".goButton", function () {
       

        // event.preventDefault();
        var timeline1 = $("#option1").text();
        var timeline2 = $("#option2").text();
        var timelineOneId;
        var timelineTwoId;

        // issues with this code when generating more timelines
        // timelineOneId = $("#option1").data("id");
        // timelineTwoId = $("#option2").data("id");

        if (timeline1 == "" && timeline2 == "") {
            alert("please select at least one timeline");
        }
        else if (timeline1 == "") {

            // timelineTwoId = $("#option2").data("id");

            if (timeline2 == "U.S. States Admission"){
                timelineTwoId = 1;
            }
            else {
                timelineTwoId = 2;
            }

            console.log("timeline id: "+ timelineTwoId);
            $.get("/api/timeline/" + timelineTwoId)
                .then(function (res) {
                    // json response object
                    // console.log(res);
                    renderTimeline(res);
                    timelineTwoId="";
                });
        }
        else if (timeline2 == "") {

            // timelineOneId = $("#option1").data("id");

            if (timeline1 == "U.S. States Admission"){
                timelineOneId = 1;
            }
            else {
                timelineOneId = 2;
            }

            console.log("timeline id: "+ timelineOneId);

            $.get("/api/timeline/" + timelineOneId)
                .then(function (res) {

                    //json response object
                    // console.log(res);

                    renderTimeline(res);
                    timelineOneId="";

                });
        }

        else {

            // set the IDs for each timeline
            if (timeline1 == "U.S. States Admission"){
                timelineOneId = 1;
            }
            else {
                timelineOneId = 2;
            }
    
            if (timeline2 == "U.S. States Admission"){
                timelineTwoId = 1;
            }
            else {
                timelineTwoId = 2;
            }
    
            console.log("your 2 selected timelines are " + timeline1 + " & " + timeline2);
            console.log("The Ids are " + timelineOneId + " & " + timelineTwoId);

            timelines = {
                timeline1: timelineOneId,
                timeline2: timelineTwoId
            }

            $.post("/api/combined", timelines)
                .then(function (res) {

                    console.log(res);
                    // render timeline with a function
                    renderTwoTimelines(res, timelineOneId, timelineTwoId);
                });

        }

        // FUNCTION TO RENDER A SINGLE TIMELINE
        var renderTimeline = function (data) {

            // empty the div
            $(".timeline__items").empty();

            // for each item in data response
            data.forEach(element => {
                var timelineItem = $("<div>");
                timelineItem.addClass("timeline__item");

                var timelineContent = $("<div>");
                timelineContent.addClass("timeline__content");


                var h2 = $("<h2>")
                h2.text(element.event_name);
                timelineContent.append(h2);

                var hr = $("<hr>");
                timelineContent.append(hr);

                var start = $("<span>");
                var strongStart = $("<strong>");
                var startText = element.start_date;
                var startDate = startText.split("T");
                strongStart.text( "Start: ");
                start.text(startDate[0]+ " || ");
                start.prepend(strongStart);
                timelineContent.append(start);

                var end = $("<span>");
                var strongEnd = $("<strong>");
                var endText = element.end_date;
                var endDate = endText.split("T");
                strongEnd.text("End: ");
                end.text(endDate[0]);
                end.prepend(strongEnd);
                timelineContent.append(end);

                var hr = $("<hr>");
                timelineContent.append(hr);

                var desc = $("<p>");
                desc.text(element.event_description);
                timelineContent.append(desc);

                // append the timeline content div to the timeline item
                timelineItem.append(timelineContent);

                $(".timeline__items").append(timelineItem);


            }); // end forEach

            // timeline script to initiate timeline
            $('.timeline').timeline({
                verticalStartPosition: 'right',
                verticalTrigger: '150px',
            });

        };

        // FUNCTION TO RENDER 2 TIMELINES
        var renderTwoTimelines = function (data, t1, t2) {
            console.log("You want to render 2 timelines with Ids:"+ t1 + " & "+t2);

            data.forEach(element => {
                var timelineItem = $("<div>");
                timelineItem.addClass("timeline__item");
                
                var timelineContent = $("<div>");
                timelineContent.addClass("timeline__content");
                
                if (element.TimelineId == t1){
                    console.log(element.TimelineId);
                    timelineContent.addClass("timeline1");
                }
                else {
                    console.log(element.TimelineId);
                    timelineContent.addClass("timeline2");
                }

                var h2 = $("<h2>")
                h2.text(element.event_name);
                timelineContent.append(h2);

                var hr = $("<hr>");
                timelineContent.append(hr);

                var start = $("<span>");
                var strongStart = $("<strong>");
                var startText = element.start_date;
                var startDate = startText.split("T");
                strongStart.text( "Start: ");
                start.text(startDate[0]+ " || ");
                start.prepend(strongStart);
                timelineContent.append(start);

                var end = $("<span>");
                var strongEnd = $("<strong>");
                var endText = element.end_date;
                var endDate = endText.split("T");
                strongEnd.text("End: ");
                end.text(endDate[0]);
                end.prepend(strongEnd);
                timelineContent.append(end);

                var hr = $("<hr>");
                timelineContent.append(hr);

                var desc = $("<p>");
                desc.text(element.event_description);
                timelineContent.append(desc);

                // append the timeline content div to the timeline item
                timelineItem.append(timelineContent);

                // append each timeline item to the timeline__items div
                $(".timeline__items").append(timelineItem);

                
            });

            // timeline script to initiate timeline
            $('.timeline').timeline({
                verticalStartPosition: 'left',
                verticalTrigger: '150px',
            });
        };



    }); /* end on click */



}); // end document on ready