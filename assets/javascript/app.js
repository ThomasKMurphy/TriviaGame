// User Clicks Start
// Timer begins (60 second countdown)
// Timer displays countdown in HTML and Console
// Questions only become visable after user clicks Start
// User scrolls through list of questions and answers True or Fale
// Game over when timer runs out, or user reaches the bottom and slects 'Done' button
// Correct Answers, Incorrect Answers, and Unanswered questions are displayed


var number = 60;
var intervalId;

$("#start").click(function() {
    console.log("button was clicked");
});

function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#timeleft").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        alert("Time Up!");
    }
};

function stop() {
    clearInterval(intervalId);
}
run();
