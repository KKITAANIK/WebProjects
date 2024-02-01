async function Rebecca(key, param) {
	if (key == 1) {
		document.getElementById("fader").style.opacity = 1;
		
		await timer(1000);
		
		locale = "A Clearing in the Forest";
		UpdateMeters();
		
		document.getElementById("colorizer").style.background = "#243a0f";
		
		await timer(1000)
		
		Output("");
		
		Print([
			["You awaken in a clearing, this time on your feet. A dense forest surrounds you, a decomposing trunk lying on the ground in front of you."],
			["A woman is watching you. Her most striking feature is her antlers, like that of a stag, encircling her head. You find yourself with a strange certainty that <i>she is not supposed to have them</i>. You also know, instinctually, that her name is <q>Rebecca</q>."]
		]);
		
		let greetMsg = "Greet her.";
		if (flags.attemptedGreeting == 2) {
			greetMsg = "Try one last greeting.";
		}
		
		
		Print([["execute", function() {
			buttons[0][0].update(Rebecca.bind(null, 2, true), greetMsg);
			buttons[0][1].update(Rebecca.bind(null, 2, false), "Stay silent.");
		}]]);
		
		document.getElementById("fader").style.opacity = 0;
	}
	else if (key == 2) {
		
	}
}