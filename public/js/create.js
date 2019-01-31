$(document).ready(function () {

    //get jquery references to the title, category, event title, event description, event start and event end
    var timeTitleInput = $("#timelineTitle");
    var timeCatInput = $("#timelineCategory");
    var eventTitleInput = $("#eventTitle");
    var descriptionInput = $("#descriptionArea");
    var startInput = $("#startDate");
    var endInput = $("#endDate");


    /////////////////////
    ///// TIMELINES /////
    ///////////////////// 

    //Submitting new timeline
    $(".timelineForm").on("submit", function (event) {
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
            function () {
                // console.log(newTimeline);
                location.reload();
            }
        );
    });

    /////////////////////
    ///// EVENTS ////////
    ///////////////////// 

    //function to get the timeline data from the api

    var selectedTimeline;

    function getTimelines() {
        var UserId = 1;
        $.get("/api/timeline/user/" + UserId, function (data) {
            var timelineDrop = $(".timeline-select"); //to stick the timeline items in the dropdown
            var timelines;
            timelines = data;
            console.log(timelines);
            for (var i = 0; i < timelines.length; i++) {
                $("<option />", {
                    value: timelines[i].id,
                    text: timelines[i].title
                }).appendTo(timelineDrop);
                // console.log(timelines[i].title)
            }
        })
    }
    
    
    getTimelines();
    // console.log(selectedTimeline);
    
    
    
    //function to get events for the drop down
    function getEvents() {
        
        $("#timelineEditForm").on("submit", function(){
            event.preventDefault();
            selectedTimeline = $("#timeline-event").val();
            console.log(selectedTimeline); 
            
            $.get("api/timeline/" + selectedTimeline, function (data) {
                // console.log(selectedTimeline); 
                var eventDrop = $("#event-select"); //chooses the selector to stick events in the drop down
                // console.log(data);
                for (var i = 0; i < data.length; i++) {
                    $("<option />", {
                        value: data[i].id,
                        text: data[i].event_name
                    }).appendTo(eventDrop);
                    // console.log(data[i].event_name);
                }
            })
        })
    }

    getEvents();

    //Submitting a new event
    $("#eventForm").on("submit", function (event) {
        event.preventDefault();
        var newEvent = {
            TimelineId: $("#timeline").val(),
            event_name: eventTitleInput.val().trim(),
            event_description: descriptionInput.val().trim(),
            start_date: startInput.val().trim(),
            end_date: endInput.val().trim()
        };
        console.log(newEvent);
        $.ajax("/api/timeline/event", {
            method: "POST",
            data: newEvent
        }).then(
            function () {
                console.log(newEvent);
                // location.reload();
            }
        );
    });




})