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
        CategoryId: $("#timelineCategory").val()
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
var timelineDrop = $("<select />"); //to stick the timeline items in the dropdown
var timelines = [];

//function to get the timeline data from the api
function getTimelines(){
    $.get("/api/timeline", function(data){
        timelines = data;
        console.log(timelines);
    })  
    //this might need to be a for in because it's actually an object that's coming back
    for(var i = 0; i < timelines.length; i++){
        $("<option />", {value: val, text: data[i].title}).appendTo(timelineDrop);
    }
}
getTimelines();


var eventTitleContainer = $("#event-title") //variable for the event title



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

//select timeline from the drop down


//Get events to select
function getOccurence (occurence){
    if(timelineId == 1)
    timelineId = "/?timelineId" + timelineId
}
$.get("/api/timeline/event" + timelineId, function(data){
    console.log("Events", data);
    var events = data;
})

//UPDATE - posting an update
function updateOccurrence(occur){
    $.ajax({
        method: "PUT",
        url: "/api/timeline/event",
        data: occur
    })
    .then(function(){
        window.location.href = "create"
    })
}
















    
})