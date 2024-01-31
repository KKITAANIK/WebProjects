let answers = [];

function Output(text) {
	document.getElementById("output").innerHTML = text;
}

function Append(text) {
	document.getElementById("output").innerHTML += text;
	window.scrollTo(0, document.body.scrollHeight);
}

function AppendButtons(buttonList) {
	for (let i = 0; i < buttonList.length; i++) {
		Append(`<a onclick=\"FadeHistory();this.style.cursor = 'text';this.removeAttribute('onclick');` + buttonList[i][1] + `\">` + buttonList[i][0] + `</a>`);
		if (i < buttonList.length - 1) {
			Append(`<br/>`);
		}
	}
}

function FadeHistory() {
	let contentChildren = document.getElementById("output").children;
	for(let i = 0; i < contentChildren.length; i++) {
		contentChildren[i].classList.add("faded");
	}
}

function Main(key, param, subparam) {
	let links = document.getElementsByTagName("a");
	for(let i = 0; i < links.length; i++) {
		if (links[i].style.cursor != "text") {
			links[i].style.cursor = "text"
			links[i].removeAttribute('onclick');
			links[i].style.color = '#808080';
		}
	}
	
	if (key == 0) {
		Output(`<p>Congratulations. You have invented a machine that allows for the instantaneous reproduction of absolutely anything. Whatever is inside its input enclosure will be seamlessly and immediately duplicated, appearing in an identical form in its output enclosure.</p>
		<p>Through courage or stupidity, you have decided to begin a series of experiments in which you duplicate yourself.</p>
		<p style="color:#c0c0c0">For the following experiments, the word <i>du</i> in second person, and <i>ich</i> in first person, will be used to refer to your (the player's) "experienced self": the instance of you from whom's perspective you are making these decisions. The term "the other" will refer to any instance of you that is not <i>du</i>. The choice of terminology here is arbitrary.</p>`);
		Main(1, "start");
	}
	else if (key == 1) {
		if (param == "start") {
			Append(`<br/>
			<p>You enter the input and turn on the machine. <b><i>Du</i></b> remains in the input, while another instance of you instantaneously appears in the output. What is the correct interpretation?</p>`);
			AppendButtons([
				["<b><i>Ich</i></b> is entirely me.", "Main(1, 'other', 100)"],
				["<b><i>Ich</i></b> is partly me.", "Main(1, 'other', 50)"],
				["<b><i>Ich</i></b> is in no part me.", "Main(1, 'other', 0)"]
			]);
		}
		else if (param == 'other') {
			Append(`<p>And what about <b>the other</b> (the instance of you currently in the output)?</p>`);
			answers.push([subparam]);
			
			if (subparam == 100) {
				AppendButtons([
					["<b>They</b> are also entirely me.", "Main(1, 'conclusion', 100)"],
					["<b>They</b> are partly me; less than <i>ich</i>.", "Main(1, 'conclusion', 50)"],
					["<b>They</b> are in no part me.", "Main(1, 'conclusion', 0)"]
				]);
			}
			else if (subparam == 50) {
				AppendButtons([
					["<b>They</b> are entirely me.", "Main(1, 'conclusion', 100)"],
					["<b>They</b> are partly me, but more than <i>ich</i>.", "Main(1, 'conclusion', 75)"],
					["<b>They</b> are partly me; exactly as much as <i>ich</i>.", "Main(1, 'conclusion', 50)"],
					["<b>They</b> are partly me, but less than <i>ich</i>.", "Main(1, 'conclusion', 25)"],
					["<b>They</b> are in no part me.", "Main(1, 'conclusion', 0)"]
				]);
			}
			else if (subparam == 0) {
				AppendButtons([
					["<b>They</b> are entirely me.", "Main(1, 'conclusion', 100)"],
					["<b>They</b> are partly me; more than <i>ich</i>.", "Main(1, 'conclusion', 50)"],
					["<b>They</b> are also in no part me.", "Main(1, 'conclusion', 0)"]
				]);
			}
		}
		
		else if (param == 'conclusion') {
			answers[0].push(subparam);
			let duAssessment = {
				100: "entirely",
				50: "partially",
				0: "in no part"
			};
			let otherAssessment = {
				100: "entirely you",
				75: "partially you, but more than <i>du</i>",
				50: "partially you",
				25: "partially you, but less than <i>du</i>",
				0: "in no part you"
			};
			
			let equality = "";
			
			if (answers[0][0] == answers[0][1]) {
				equality = "equally as you as";
			}
			else if (answers[0][0] > answers[0][1]) {
				equality = "more you than";
			}
			else if (answers[0][0] < answers[0][1]) {
				equality = "less you than";
			}
			
			Append("<p>In the case where <i>du</i> is in the input, you believe that <i>du</i> is " + duAssessment[answers[0][0]] + " you. You believe that the other is " + otherAssessment[answers[0][1]] + ". As a result, you believe that <i>du</i> in the input is " + equality + " the other.");
			
			Main(2, "start");
		}
	}
	else if (key == 2) {
		if (param == "start") {
			Append(`<br/>
			<p>You enter the input and turn on the machine. <b><i>Du</i></b> finds <b>themself</b> in the output, while another instance of you continues to exist in the input. What is the correct interpretation?</p>`);
			AppendButtons([
				["<b><i>Ich</i></b> is entirely me.", "Main(2, 'other', 100)"],
				["<b><i>Ich</i></b> is partly me.", "Main(2, 'other', 50)"],
				["<b><i>Ich</i></b> is in no part me.", "Main(2, 'other', 0)"]
			]);
		}
		else if (param == 'other') {
			Append(`<p>And what about <b>the other</b> (the instance of you currently in the input)?</p>`);
			answers.push([subparam]);
			
			if (subparam == 100) {
				AppendButtons([
					["<b>They</b> are also entirely me.", "Main(2, 'conclusion', 100)"],
					["<b>They</b> are partly me; less than <i>ich</i>.", "Main(2, 'conclusion', 50)"],
					["<b>They</b> are in no part me.", "Main(2, 'conclusion', 0)"]
				]);
			}
			else if (subparam == 50) {
				AppendButtons([
					["<b>They</b> are entirely me.", "Main(2, 'conclusion', 100)"],
					["<b>They</b> are partly me, but more than <i>ich</i>.", "Main(2, 'conclusion', 75)"],
					["<b>They</b> are partly me; exactly as much as <i>ich</i>.", "Main(2, 'conclusion', 50)"],
					["<b>They</b> are partly me, but less than <i>ich</i>.", "Main(2, 'conclusion', 25)"],
					["<b>They</b> are in no part me.", "Main(2, 'conclusion', 0)"]
				]);
			}
			else if (subparam == 0) {
				AppendButtons([
					["<b>They</b> are entirely me.", "Main(2, 'conclusion', 100)"],
					["<b>They</b> are partly me; more than <i>ich</i>.", "Main(2, 'conclusion', 50)"],
					["<b>They</b> are also in no part me.", "Main(2, 'conclusion', 0)"]
				]);
			}
		}
		
		else if (param == 'conclusion') {
			answers[1].push(subparam);
			let duAssessment = {
				100: "entirely",
				50: "partially",
				0: "in no part"
			};
			let otherAssessment = {
				100: "entirely you",
				75: "partially you, but more than <i>du</i>",
				50: "partially you",
				25: "partially you, but less than <i>du</i>",
				0: "in no part you"
			};
			
			let equality = "";
			
			if (answers[1][0] == answers[1][1]) {
				equality = "equally as you as";
			}
			else if (answers[1][0] > answers[1][1]) {
				equality = "more you than";
			}
			else if (answers[1][0] < answers[1][1]) {
				equality = "less you than";
			}
			
			Append("<p>In the case where <i>du</i> is in the output, you believe that <i>du</i> is " + duAssessment[answers[1][0]] + " you. You believe that the other is " + otherAssessment[answers[1][1]] + ". As a result, you believe that <i>du</i> in the output is " + equality + " the other.");
		}
	}
}