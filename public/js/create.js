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
        };
        console.log(newTimeline)

        $.ajax("/api/timeline", {
            method: "POST",
            data: newTimeline
        }).then(
            function () {
                location.reload();
            }
        );
    });

    /////////////////////
    ///// EVENTS ////////
    ///////////////////// 

    //function to get the timeline data from the api
    var selectedTimeline;

    // This function populates a dropdown box with the user's timelines
    function getTimelines() {
        $.get("/api/timeline/user/", function (data) {
            var timelineDrop = $(".timeline-select");
            for (var i = 0; i < data.length; i++) {
                $("<option />", {
                    value: data[i].id,
                    text: data[i].title
                }).appendTo(timelineDrop);
            }
        })
    }

    getTimelines();

    //Submitting a new event
    $("#eventForm").on("submit", function (event) {
        event.preventDefault();
        var newEvent = {
            TimelineId: $("#tl-create-event option:selected").val(),
            event_name: eventTitleInput.val().trim(),
            event_description: descriptionInput.val().trim(),
            start_date: startInput.val().trim(),
            end_date: endInput.val().trim()
        };

        $.ajax("/api/timeline/event", {
            method: "POST",
            data: newEvent
        }).then(
            function () {
                location.reload();
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
                $(document).on("click", "#eventSubmit", function () {
                    event.preventDefault();
                    var editEvent = {
                        id: $("#event-select").val()
                    }
                    var eventArray = (Object.values(editEvent))
                    $.get("api/timeline/event/" + eventArray, function (data) {
                        console.log(data);
                        for (var i = 0; i < data.length; i++) {
                            $("#event-title").val(data[i].event_name);
                            $("#event-description").val(data[i].event_description);
                            $(".start-date").val(data[i].start_date);
                            $(".end-date").val(data[i].end_date);
                        };
                    });
                });
            });
        });
    };

    getEvents();

    // edit an event function
    function editEvent() {
        var currentEdit = $(this).text();
        $(this).children("input.editEvent").val(currentEdit);
    } // end editEvent

    $(document).on("click", ".editEvent", editEvent);

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
    }; // end submitEvent

    $(document).on("click", ".submitEvent", submitEvent);

    // This function deletes a selected event
    function deleteEvent() {
        var deleteId = $("#event-select").val();

        $.ajax({
            method: "DELETE",
            url: "api/timeline/event/" + deleteId
        }).then(console.log("you deleted the event"));
    }; // end deleteEvent

    $(document).on("click", ".deleteEvent", deleteEvent);

});