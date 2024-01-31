let answers = [];

function Output(text) {
	document.getElementById("output").innerHTML = text;
}

function Append(text) {
	document.getElementById("output").innerHTML += text;
	window.scrollTo(0, document.body.scrollHeight);
}

function SetSubmit(myFunction) {
	document.getElementById("submitButton").onclick = myFunction;
}

function SyncSliders(main, partner, mirror, partnerMirror) {
	let mainVal = document.getElementById(main).value;
	
	document.getElementById(mirror).value = mainVal;
	
	if (!document.getElementById("sum100").checked) return;
	
	let partnerVal = document.getElementById(partner).value;
	
	if (partnerVal == 100 - mainVal) return;
	
	document.getElementById(partner).value = 100 - mainVal;
	
	document.getElementById(partnerMirror).value = 100 - mainVal;
}

function Main(key, param, subparam) {
	document.getElementById("duSlider").value = 50;
	document.getElementById("otherSlider").value = 50;
	document.getElementById("duNumber").value = 50;
	document.getElementById("otherNumber").value = 50;
	if (key == 0) {
		Output(`<p>You enter the input and turn on the machine. <b><i>Du</i></b> remains in the input, while <b>another instance of you</b> instantaneously appears in the output. What is the correct interpretation?</p>`);
		document.getElementById("sliders").style.display = "block";
		document.getElementById("submitButton").innerHTML = "Submit.";
		SetSubmit(Main.bind(null, 1))
	}
	else if (key == 1) {
		Output(`<p>You enter the input and turn on the machine. <b><i>Du</i></b> finds <b>themself</b> in the output, while <b>another instance of you</b> continues to exist in the input. What is the correct interpretation?</p>`);
		SetSubmit(Main.bind(null, 2))
	}
	else if (key == 2) {
		Output(`<p>An error has been introduced into the machine. Rather than an immediate and instantaneous reproduction, the output is populated five seconds after the input is processed, reproducing the exact and identical state of the input as it was processed five seconds ago.</p>
		<p>You enter the input and turn on the machine. <b><i>Du</i></b> remains in the input, and five seconds later <b>another instance of you</b> appears in the output, identical to what <b><i>du</i></b> was five seconds prior. What is the correct interpretation?</p>`);
		SetSubmit(Main.bind(null, 3));
	}
	else if (key == 3) {
		Output(`<p>You enter the input and turn on the machine. <b><i>Du</i></b> finds <b>themself</b> in the output, as if <b><i>du</i></b> had travelled five seconds into the future, while <b>another instance of you</b> has continued to exist in the input. What is the correct interpretation?</p>`);
		SetSubmit(Main.bind(null, 4));
	}
}