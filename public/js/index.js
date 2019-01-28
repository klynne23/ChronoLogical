$(document).ready(function () {

    //variables to hold user information from the form
    var loginForm = $("form.login");
    var usernameInput = $("input#username-input");
    var passwordInput = $("input#password-input");

    //LOGIN FORM ON SUBMIT
    loginForm.on("submit", function (event) {
        event.preventDeafult();

        //creates the userData object to be passed into the loginUser function (which is hoisted from below)
        var userData = {
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim()
        };
        console.log(userData);

        //checks to see if there is info entered in both fields in the form -> if not it returns nothing
        if (!userData.username || !userData.password) {
            return;
        }

        //if there's info in both fields, then it runs the loginUser function from below and clears the form
        loginUser(userData.username, userData.password);
        usernameInput.val("");
        passwordInput.val("");
        

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
    signUpForm.on("submit", function(event){
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if(!userData.email || !userData.username || !userData.password) {
            return;
        }

        //calls signUpUser function from below
        signUpUser(userData.email, userData.username, userData.password);
        emailInput.val("");
        usernameInput.val("");
        passwordInput.val("");
    });

    function signUpUser(email, username, password){
        $.post("/api/signup", {
            email: email,
            username: username,
            password: password
        }).then(function(data){
            window.location.replace(data);
            console.log(email + username + password);
        }).catch(handleLoginErr);
    }

    function handleLoginErr(err){
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }




//Remainder of data for the application - discuss whether we want to do this here or somewhere else


$(document).on("click", ".publicTimelineOption", function(){
    var selected = $(this).data("name");
    console.log(selected);
    $("#option1").empty();
    $("#option1").text(selected);
}); /* end on click */

$(document).on("click", ".userTimelineOption", function(){
    var selected = $(this).data("name");
    $("#option2").empty();
    $("#option2").text(selected);
});





})