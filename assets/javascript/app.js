var number = 30;
var intervalId;
var timerIsRunning = false;
var questionsVisable = false;
var displayScore = false;
var score = 0;


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
        
        // when timeIsRunning === false, display user score in <div class="score">
        // assign "correct" true and false values to each question
       
        // for question 1, if user selects "True", userScore ++;
        // if (userSelect === true) {
        //     score++;
        // }
        // for question 2, if user selects "False", userScore ++;
        // for question 3, if user selects "True", userScore ++;
        // for question 4, if user selects "True", userScore ++;
        // for question 5, if user selects "False", userScore ++;
        // for question 6, if user selects "True", userScore ++;
        // for question 7, if user selects "True", userScore ++;
        // for question 8, if user selects "False", userScore ++;
        // for question 9, if user selects "True", userScore ++;
        // for question 10, if user selects "False", userScore ++;

    begin();

});
