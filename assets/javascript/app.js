var number = 30;
var intervalId;
var timerIsRunning = false;
var questionsVisable = false;
var displayScore = false;


$("#start").click(function(){
    console.log("button was clicked");

// make buttons clickable to user only once per 60 second interval

// when buttons are clicked and active, changed background color to: #00FFFF

    function begin() {
        $(".questions").toggleClass();
        intervalId = setInterval(decrement, 1000);
        timerIsRunning = true;
        questionsVisable = true;
    }

    function decrement() {
        number--;
        $("#timeleft").html("<h2>" + number + "</h2>");
        if (number === 0) {
            stop();
            $("#timeleft").html("Time!");
        }
    }

    function stop() {
        $(".questions").toggleClass(); //not sure why this won't toggle back to visibilty: hidden
        clearInterval(intervalId);
        timerIsRunning = false;
        questionsVisable = false;    
         if (timerIsRunning === false) {
        (number = 30); 
    }}

        // when timeIsRunning === false, have questions visibility: hidden 

        // assign "correct" true and false values to each question??

        // when timeIsRunning === false, display user score in "0/10" format in <div class="score">

    begin();

});
