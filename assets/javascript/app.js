$('#start').on('click', function() {
  game.start()
})

$(document).on('click', '#end', function() {
  game.done()
})

var questions = [{
  question: 'The national animal of Scotland is the unicorn.',
  answers: ['True', 'False'],
  correctAnswer: 'True'
}, {
  question: 'The oldest city in the United States is Williamsburg, Virginia.',
  answers: ['True', 'False'],
  correctAnswer: 'False'
}, {
  question: 'The Pittsburgh Steelers have won the most superbowls.',
  answers: ['True', 'False'],
  correctAnswer: 'True'
}, {
  question: 'Lobsters have teeth in their stomach.',
  answers: ['True', 'False'],
  correctAnswer: 'True'
}, {
  question: 'The United States has more natural lakes than any other country.',
  answers: ['True', 'False'],
  correctAnswer: 'False'
}, {
  question: 'Candy is the most shoplifted food in the United States.',
  answers: ['True', 'False'],
  correctAnswer: 'True'
}, {
  question: 'For every human on earth, there are 1.6 million ants.',
  answers: ['True', 'False'],
  correctAnswer: 'True'
}, {
  question: 'Earthworms have 4 hearts.',
  answers: ['True', 'False'],
  correctAnswer: 'False'
}, {
  question: 'There are more plastic flamingos in the United States than real flamingos.',
  answers: ['True', 'False'],
  correctAnswer: 'True'
}, {
  question: '3 of Snow White\'s 7 dwarves have names that start with the letter "D".',
  answers: ['True', 'False'],
  correctAnswer: 'False'
}]

var timer = 0

var game = {
  correct: 0,
  incorrect: 0,
  counter: 25,
  countdown: function() {
    game.counter--
      $('#counter').html(game.counter)
    if (game.counter <= 0) {
      console.log('Time is up!')
      game.done()
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000)
    $('#subwrapper').prepend('<h2><span id = "counter">25</span></h2>')
    $('#start').remove()
    for (var i = 0; i < questions.length; i++) {
      $('#subwrapper').append('<h4>' + questions[i].question + '</h4>')
      for (var j = 0; j < questions[i].answers.length; j++) {
        $('#subwrapper').append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
      }
    }
    $('#subwrapper').append('<br><button id = "end">DONE</button>')
  },

  done: function() {
    $.each($('input[name="question-0"]:checked'), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++
      } else {
        game.incorrect++
      }
    })
    $.each($('input[name="question-1"]:checked'), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++
      } else {
        game.incorrect++
      }
    })
    $.each($('input[name="question-2"]:checked'), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++
      } else {
        game.incorrect++
      }
    })
    $.each($('input[name="question-3"]:checked'), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++
      } else {
        game.incorrect++
      }
    })
    $.each($('input[name="question-4"]:checked'), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++
      } else {
        game.incorrect++
      }
    })
    $.each($('input[name="question-5"]:checked'), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++
      } else {
        game.incorrect++
      }
    })
    $.each($('input[name="question-6"]:checked'), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++
      } else {
        game.incorrect++
      }
    })
    $.each($('input[name="question-7"]:checked'), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++
      } else {
        game.incorrect++
      }
    })
    $.each($('input[name="question-8"]:checked'), function() {
      if ($(this).val() === questions[8].correctAnswer) {
        game.correct++
      } else {
        game.incorrect++
      }
    })
    $.each($('input[name="question-9"]:checked'), function() {
      if ($(this).val() === questions[9].correctAnswer) {
        game.correct++
      } else {
        game.incorrect++
      }
    })
    $.each($('input[name="question-10"]:checked'), function() {
      if ($(this).val() === questions[10].correctAnswer) {
        game.correct++
      } else {
        game.incorrect++
      }
    })

    this.result()
  },

  result: function() {
    clearInterval(timer)
    $('#subwrapper h3').remove()
    $('#subwrapper').html('<h3>All done!</h3>')
    $('#subwrapper').append('<h4>Correct Answers: ' + this.correct + ' <h4>')
    $('#subwrapper').append('<h4>Incorrect Answers: ' + this.incorrect + '<h4>')
    $('#subwrapper').append('<h4>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h4>')
  }
}