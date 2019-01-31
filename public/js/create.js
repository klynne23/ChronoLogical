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
        // will need to change UserId to whatever the Id of the user who is logged in is
        var UserId = 1;
        $.get("/api/timeline/user/" + UserId, function (data) {
            var timelineDrop = $(".timeline-select"); //to stick the timeline items in the dropdown
            var timelines;
            timelines = data;
            // console.log(timelines);
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

    //function to get events for the drop down
    function getEvents() {

        $("#timelineEditForm").on("submit", function () {
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
                //submitting the id from the dropdown
                $("#eventEditForm").on("submit", function () {
                    event.preventDefault();
                    var editEvent = {
                        id: $("#event-select").val()
                    }
                   var eventArray = (Object.values(editEvent))
                    $.get("api/timeline/event/" + eventArray, function (data) {
                        console.log(data);
                        for(var i = 0; i<data.length; i++){
                            $("#event-title").val(data[i].event_name);
                            $("#event-description").val(data[i].event_description);
                            $(".start-date").val(data[i].start_date);
                            $(".end-date").val(data[i].end_date);

                        }
                    })


                    //display details that go with the event name
                })

            })
        })
    }

    getEvents();

    //RENDER EVENT DETAILS



    // editing the events
    $(document).on("click", ".editEvent", editEvent);
    // edit an event function
    function editEvent() {
        var currentEdit = $(this).text();
        $(this).children("input.editEvent").val(currentEdit);
    } // end editEvent

    $(document).on("click", ".submitEvent", submitEvent);

    // submit an event function 
    function submitEvent() {
        var event = {
            id: $("#event-select").val(),
            event_name: $("input.event-title").val(),
            event_description: $("input.event-description").val(),
            start_date: $("input.start-date").val(),
            end_date: $(".end-date").val()
        }

        // make put request to server
        $.ajax({
            method: "PUT",
            url: "/api/timeline/event",
            data: event
        }).then(console.log("you updated the event"));


    } // end submitEvent


    $(document).on("click", ".deleteEvent", deleteEvent);

    // delete a selected event
    function deleteEvent(){
        // var eventId = {
        //     id: $("#event-select").val()
        // }

        var deleteId = $("#event-select").val();

        console.log(deleteId);
        // $.delete("/api/timeline/event/" + eventId).then(data);

        $.ajax({
            method: "DELETE",
            url: "api/timeline/event/" + deleteId
        }).then(console.log("you deleted the event"));

    } // end deleteEvent


})