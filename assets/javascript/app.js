var number = 10;
var intervalId;
var timerIsRunning = false;

$("#start").click(function(){
    $(".questions").toggleClass();
    // if timer is done running, have questions dissappear
    if (number === 0) {
        $(".questions").toggleClass();
    }
});

$("#start").click(function() {
    console.log("button was clicked");
// make button clickable to user only once per 60 second interval

    function begin() {
        intervalId = setInterval(decrement, 1000);
        timerIsRunning = true;
    }

    function decrement() {
        number--;
        $("#timeleft").html("<h2>" + number + "</h2>");
        if (number === 0) {
            stop();
            $("#timeleft").html("Time!");
        }

    };

    function stop() {
        clearInterval(intervalId);
        timerIsRunning = false;
    }

    if (timerIsRunning === false){
        (number = 10);
    }

    begin();

});
