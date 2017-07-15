var number = 10;
var intervalId;
var timerIsRunning = false;


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

// on Start button click, questions become visible
// when timer is complete questions become hidden
// user selects true or false button for each question
// true and false buttons remain highligted once user selects answer


});
