$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);

			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'How many horns did Triceratops have?',
	possibleAnswers : ['A. One',
				 'B. Two',
				 'C. Three',
				 'D. Four'],
	flags : [false, false, true, false],
	answer : 'C. Three'
};

var q2 = {
	question: 'What does the word dinosaur mean?',
	possibleAnswers: ['A. Terrible Breath',
				 'B. Terrible Lizard',
				 'C. Terrible Animal',
				 'D. Mean Lizard'],
	flags : [false, true, false, false],
	answer : 'B. Terrible Lizard'
};

var q3 = {
	question : 'Jurassic Park was written by?',
	possibleAnswers : ['A. Richard Attenborough',
				 'B. Michael Crichton',
				 'C. Steven Spielberg',
				 'D. Ryan Coogler'],
	flags : [false, true, false, false],
	answer : 'B. Michael Crichton'
};

var q4 = {
	question : 'One of the heaviest dinosaurs, Brachiosaurus, weighed the same as?',
	possibleAnswers : ['A. 17 African elephants',
				 'B. 10 rhinos',
				 'C. 12 polar bears',
				 'D. 2600 ants'],
	flags : [true, false, false, false],
	answer : 'A. 17 African elephants'
};

var q5 = {
	question : 'What equivalent height could a Brachiosaurus reach?',
	possibleAnswers : ['A. One lamp post',
				 'B. Four stacked double decker buses',
				 'C. Two storey house',
				 'D. Top of Empire State Building'],
	flags : [false, true, false, false],
	answer : 'B. Four stacked double decker buses'
};

var q6 = {
	question : 'The Flintstones’ pet dinosaur was called?',
	possibleAnswers : ['A. Dino',
				 'B. Barney',
				 'C. Rex',
				 'D. Todo'],
	flags : [true, false, false, false],
	answer : 'A. Dino'
};

var q7 = {
	question : 'An adult Stegosaurus had a brain the size of a... ?',
	possibleAnswers : ['A. Small car',
				 'B. Basketball',
				 'C. Lime',
				 'D. Football'],
	flags : [false, false, true, false],
	answer : 'C. Lime'
};

var q8 = {
	question : 'What would a Stegosaurus use its spiky back plates for?',
	possibleAnswers : ['A. To attack other dinosaurs',
				 'B. To regulate its body temperature',
				 'C. Both A & B',
				 'D. To strip leaves from trees'],
	flags : [false, true, false, false],
	answer : 'B. To regulate its body temperature'
};

var q9 = {
	question : 'In which Asian country was the Velociraptor first found?',
	possibleAnswers : ['A. India',
				 'B. China',
				 'C. Japan',
				 'D. Mongolia'],
	flags : [false, false, false, true],
	answer : 'D. Mongolia'
};

var q10 = {
	question : 'Which order is correct?',
	possibleAnswers : ['A. Cretaceous, Triassic, Jurassic',
				  'B. Triassic, Jurassic, Cretaceous',
				  'C. Jurassic, Cretaceous, Triassic',
				  'D. Jurassic Only'],
	flags : [false, true, false, false],
	answer : 'B. Triassic, Jurassic, Cretaceous'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

});