$(document).ready(function () {


    // This function generates a combined timeline on the main page. The 'timelines' parameter should be an object with 'timeline1' and 'timeline2' properties that contain the timeline ids to be retreived.
    function getCombinedTL(timelines) {
        $.post("/api/combined", timelines)
            .then(function (res) {
                console.log(res)
            });
    }

    // Wrap this let and function call in an "on click" command, and replace the 'dummy' ids with those obtained from the DOM
    let timelines = {
        timeline1: 1,
        timeline2: 2
    }

    getCombinedTL(timelines);

}); // End of document ready