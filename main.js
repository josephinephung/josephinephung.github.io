<<<<<<< HEAD
function check(){

	var Question1 = document.quiz.Question1.value;
	var Question2 = document.quiz.Question2.value;
	var Question3 = document.quiz.Question3.value;
	var correct = 0;


	if (Question1 == "Bartholomew JoJo Simpson") {
		correct++;
}
	if (Question2 == "Santa’s Little Helper") {
		correct++;
}	
	if (Question3 == "Hugo") {
		correct++;
	}
	
	var pictures = ["milhouse.gif", "lisa.gif", "cry.gif"];
	var messages = ["A true Simpsons fan.", "Sorta a Simpsons fan", "You must like watching Family Guy more"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_Alldone").style.visibility = "visible";

	document.getElementById("picResult").innerHTML = messages[score];
	document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}


=======
function check(){

	var Question1 = document.quiz.Question1.value;
	var Question2 = document.quiz.Question2.value;
	var Question3 = document.quiz.Question3.value;
	var correct = 0;


	if (Question1 == "Bartholomew JoJo Simpson") {
		correct++;
}
	if (Question2 == "Santa’s Little Helper") {
		correct++;
}	
	if (Question3 == "Hugo") {
		correct++;
	}
	
	var pictures = ["milhouse.gif", "lisa.gif", "cry.gif"];
	var messages = ["A true Simpsons fan.", "Sorta a Simpsons fan", "You must like watching Family Guy more"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_Alldone").style.visibility = "visible";

	document.getElementById("picResult").innerHTML = messages[score];
	document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}


>>>>>>> 36a71057ae7d6f4d3f8bcf05c57573fc955025b0
	