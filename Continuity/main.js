let answers = [];

function Output(text) {
	document.getElementById("output").innerHTML = text;
}

function Append(text) {
	document.getElementById("output").innerHTML += text;
}

function Main(key, param, subparam) {
	if (key == 0) {
		Output(`<p>Congratulations. You have invented a machine that allows for the instantaneous reproduction of absolutely anything. Whatever is inside its input enclosure will be seamlessly and immediately duplicated, appearing in an identical form in its output enclosure.</p>
		<p>Through courage or stupidity, you have decided to begin a series of experiments in which you duplicate yourself.</p>
		<p style="color:#c0c0c0">For the following experiments, the word <i>du</i> in second person, and <i>ich</i> in first person, will be used to refer to your (the player's) "experienced self": the instance of you from whom's perspective you are making these decisions. The term "the other" will refer to any instance of you that is not <i>du</i>. The choice of terminology here is arbitrary.</p>`);
		Main(1, "start");
	}
	else if (key == 1) {
		if (param == "start") {
			Append(`<br/>
			<p>You enter the input and turn on the machine. <i>Du</i> remains in the input, while another instance of you instantaneously appears in the output. What do you make of this?</p>
			<a onclick="Main(1, 100)"><i>Ich</i> is entirely me.</a>
			<a onclick="Main(1, 50)"><i>Ich</i> is partly me.</a>
			<a onclick="Main(1, 0)"><i>Ich</i> is in no part me.</a>
			`);
		}
		else if (param != "followup") {
			Append(`<p>And what about the other (the instance of you currently in the output)?</p>`);
			answers.push([param])
		}
		
		if (param == 100) {
			Append(`
			<a onclick="Main(1, 'followup', 100)">They are also entirely me.</a>
			<a onclick="Main(1, 'followup', 50)">They are partly me; less than <i>ich</i>.</a>
			<a onclick="Main(1, 'followup', 0)">They are in no part me.</a>
			`);
		}
		else if (param == 50) {
			Append(`
			<a onclick="Main(1, 'followup', 100)">They are entirely me.</a>
			<a onclick="Main(1, 'followup', 75)">They are partly me, but more than <i>ich</i>.</a>
			<a onclick="Main(1, 'followup', 50)">They are partly me; exactly as much as <i>ich</i>.</a>
			<a onclick="Main(1, 'followup', 25)">They are partly me, but less than <i>ich</i>.</a>
			<a onclick="Main(1, 'followup', 0)">They are in no part me.</a>
			`);
		}
		else if (param == 0) {
			Append(`
			<a onclick="Main(1, 'followup', 100)">They are entirely me.</a>
			<a onclick="Main(1, 'followup', 50)">They are partly me; more than <i>ich</i>.</a>
			<a onclick="Main(1, 'followup', 0)">They are also in no part me.</a>
			`);
		}
		else if (param == "followup") {
			answers[0].push(subparam);
			Append("Lorem ipsum dolor sit amet");
		}
	}
}