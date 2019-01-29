$(document).ready(function(){

//get jquery references to the title, category, event title, event description, event start and event end
var timeTitleInput = $("#timelineTitle");
var timeCatInput = $("#timelineCategory");
var eventTitleInput = $("#eventTitle");
var descriptionInput = $("#descriptionArea");
var startInput = $("#startDate");
var endInput = $("#endDate");


//-----TIMELINE FORM--------

//Submitting new timeline
$(".timelineForm").on("submit", function(event){
    event.preventDefault();
    var newTimeline = {
        title: $("#timelineTitle").val().trim(),
        cat_name: $("#timelineCategory").val().trim()
    };

    console.log(newTimeline)

    $.ajax("/api/timeline", {
        type: "POST",
        data: newTimeline
    }).then(
        function(){
            console.log(newTimeline);
            location.reload();
        }
    );
});

//-----EVENT FORM---------
//Submitting a new event
$("#eventForm").on("submit", function(event){
    event.preventDefault();
    var newEvent = {
        event_name: eventTitleInput.val().trim(),
        event_description: descriptionInput.val().trim(),
        start_date: startInput.val().trim(),
        end_date: endInput.val().trim()
    };
    console.log(newEvent);
    $.ajax ("/api/timeline/event", {
        type: "POST",
        data: newEvent
    }).then(
        function(){
            console.log(newEvent);
            location.reload();
        }
    );
});

















    
})