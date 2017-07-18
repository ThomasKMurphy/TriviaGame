var number = 30;
var intervalId;
var timerIsRunning = false;
var questionsVisable = false;
var score = 0;

$("button").click(function() {
    $(this).toggleClass("active");
});

$("#start").click(function(){
    console.log("button was clicked");
    // make 'start" button clickable to user only once per 60 second interval

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
        clearInterval(intervalId);
        timerIsRunning = false;
        questionsVisable = false;    
         if (timerIsRunning === false) {
            (number = 30); 
        }
    }

    // when timer stops, toggle 'active' buttons back to 'inactive'

    // when timer stops, toggle question visibility back to hidden
        
    // when timer stops, display user score in <div class="score">
    // assign "correct" true and false values to each question
       
    // for question 1, if user selects "True", score ++;
    // for question 2, if user selects "False", score ++;
    // for question 3, if user selects "True", score ++;
    // for question 4, if user selects "True", score ++;
    // for question 5, if user selects "False", score ++;
    // for question 6, if user selects "True", score ++;
    // for question 7, if user selects "True", score ++;
    // for question 8, if user selects "False", score ++;
    // for question 9, if user selects "True", score ++;
    // for question 10, if user selects "False", score ++;

         // function scoreBoard() {
 //        score++;
 //        $(".score").html("<h2>" + score + "/10</h2>");
 //            if (timerIsRunning === true) {
 //            // do not display in html;
 //           else (timerIsRunner === false) {
 //            // display score in html
 //           }
 //        }

    begin();

});
