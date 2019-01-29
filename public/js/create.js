$(document).ready(function(){

//get jquery references to the title, category, event title, event description, event start and event end
var timeTitleInput = $("#timelineTitle");
var timeCatInput = $("#timelineCategory");
var eventTitleInput = $("#eventTitle");
var descriptionInput = $("#descriptionArea");
var startInput = $("#startDate");
var endInput = $("#endDate");


//Submitting new timeline
$(".timelineForm").on("submit", function(event){
    event.preventDefault();
    var newTimeline = {
        title: $("#timelineTitle").val().trim(),
        cat_name: $("#timelineCategory").val().trim()
    };
    $.post("/api/timeline", {
        data: newTimeline
    }).then(
        function(){
            console.log(newTimeline);
            location.reload();
        }
    );
});

//a function to get authors from the api
function getTimelines(){
    $.get("/api/timeline", renderTimeline);
}

//function to create timeline options in dropdown
function createTimelineRow (timeline){
    var listOption = $("<option>");
    listOption.text(timelines.title);
    return listOption
}

//function to show the list of timelines in the drop down
function renderTimeline(data){
    var rowsToAdd = [];
    for (var i = 0; i<data.length; i++){
        rowsToAdd.push(createTimelineRow(data[i]));
    }
    console.log(rowsToAdd);
    timeTitleInput.append(rowsToAdd);
}

getTimelines();















    
})