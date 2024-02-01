let answers = [];
let forceSum = false;

function Output(text) {
	document.getElementById("output").innerHTML = text;
}

function Append(text) {
	document.getElementById("output").innerHTML += text;
	window.scrollTo(0, document.body.scrollHeight);
}

function SetSubmit(key, duVal = false, otherVal = false) {
	document.getElementById("submitButton").onclick = function() {
		let duNumber = document.getElementById("duNumber").value;
		let otherNumber = document.getElementById("otherNumber").value;
		
		answers.push([duNumber, otherNumber]);
		console.log(answers);
		
		if (duVal == false) {
			duVal = otherNumber;
		}
		if (otherVal == false) {
			otherVal = duNumber;
		}
		
		Main(key, duVal, otherVal);
	}
}

function SyncSliders(main, partner, mirror, partnerMirror) {
	let mainVal = document.getElementById(main).value;
	
	document.getElementById(mirror).value = mainVal;
	
	if (!document.getElementById("sum100").checked && !forceSum) return;
	
	let partnerVal = document.getElementById(partner).value;
	
	if (partnerVal == 100 - mainVal) return;
	
	document.getElementById(partner).value = 100 - mainVal;
	
	document.getElementById(partnerMirror).value = 100 - mainVal;
}

function Main(key, duVal, otherVal) {
	document.getElementById("duSlider").value = duVal;
	document.getElementById("duNumber").value = duVal;
	document.getElementById("otherSlider").value = otherVal;
	document.getElementById("otherNumber").value = otherVal;
	if (key == 0) {
		Output(`<p>You enter the input and turn on the machine. <b><i>Du</i></b> remains in the input, while <b>another instance of you</b> instantaneously appears in the output. What is the correct interpretation?</p>`);
		document.getElementById("sliders").style.display = "block";
		document.getElementById("submitButton").innerHTML = "Submit.";
		SetSubmit(1)
	}
	else if (key == 1) {
		Output(`<p>You enter the input and turn on the machine. <b><i>Du</i></b> finds <b>themself</b> in the output, while <b>another instance of you</b> continues to exist in the input. What is the correct interpretation?</p>`);
		SetSubmit(2, 50, 50)
	}
	else if (key == 2) {
		Output(`<p>An error has been introduced into the machine. Rather than an immediate and instantaneous reproduction, the output is populated five seconds after the input is processed, reproducing the exact and identical state of the input as it was processed five seconds ago.</p>
		<p>You enter the input and turn on the machine. <b><i>Du</i></b> remains in the input, and five seconds later <b>another instance of you</b> appears in the output, identical to what <b><i>du</i></b> was five seconds prior. What is the correct interpretation?</p>`);
		SetSubmit(3);
	}
	else if (key == 3) {
		Output(`<p>You enter the input and turn on the machine. <b><i>Du</i></b> finds <b>themself</b> in the output, as if <b><i>du</i></b> had travelled five seconds into the future, while <b>another instance of you</b> has continued to exist in the input. What is the correct interpretation?</p>`);
		SetSubmit(4, 50, 50);
	}
	else if (key == 4) {
		document.getElementById("otherSliderSet").style.display = "none";
		
		Output(`<p>The machine has been fixed, and its results are once again instantaneous. However, a new error has occurred, and the contents of the input are now instantaneously destroyed.</p>
		<p>You enter the input and turn on the machine. <b><i>Du</i></b> finds <b>themself</b> in the output at the same moment that <b>the other instance of you</b> is instantaneosly destroyed. What is the correct interpretation?</p>`);
		SetSubmit(5, 50, 50);
	}
	else if (key == 5) {
		document.getElementById("otherSliderSet").style.display = "block";
		forceSum = true;
		document.getElementById("sum100").checked = true;
		document.getElementById("duLabel").innerHTML = "Input";
		document.getElementById("otherLabel").innerHTML = "Output";
		
		Output(`<p>The error which destroys the input has been adjusted but not removed. Either the contents of the input or the contents of the output will be destroyed, with a probability that you can set, which must sum to 100%. Whether or not the contents of the output is destroyed, the contents of the input will still be first reproduced inside of it. What is the correct distribution of probability?</p>`);
		SetSubmit(6, 50, 50);
	}
	else if (key == 6) {
		forceSum = false;
		document.getElementById("sum100").checked = false;
		document.getElementById("duLabel").innerHTML = "<b><i>Du</i></b>";
		document.getElementById("otherLabel").innerHTML = "<b>The other</b>";
		
		Output(``);
	}
}