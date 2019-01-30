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
        CategoryId: $("#timelineCategory").val(),
        UserId: 1
    };
    console.log(newTimeline)

    $.ajax("/api/timeline", {
        method: "POST",
        data: newTimeline
    }).then(
        function(){
            // console.log(newTimeline);
            location.reload();
        }
    );
});

//-----EVENT FORM---------

//function to get the timeline data from the api
function getTimelines(){
    var UserId = 1;
    $.get("/api/timeline/user/" + UserId, function(data){
        var timelineDrop = $("#timeline"); //to stick the timeline items in the dropdown
        var timelines;
        timelines = data;
        console.log(timelines);
        for(var i = 0; i < timelines.length; i++){
            $("<option />", {value: timelines[i].id, text: timelines[i].title}).appendTo(timelineDrop);
            console.log(timelines[i].title)
        }
    })  
    //this might need to be a for in because it's actually an object that's coming back
}
getTimelines();


var eventTitleContainer = $("#event-title") //variable for the event title


//Submitting a new event
$("#eventForm").on("submit", function(event){
    event.preventDefault();
    var newEvent = {
        TimelineId: 1,
        event_name: eventTitleInput.val().trim(),
        event_description: descriptionInput.val().trim(),
        start_date: startInput.val().trim(),
        end_date: endInput.val().trim()
    };
    console.log(newEvent);
    $.ajax ("/api/timeline/event", {
        method: "POST",
        data: newEvent
    }).then(
        function(){
            console.log(newEvent);
            // location.reload();
        }
    );
});




















    
})