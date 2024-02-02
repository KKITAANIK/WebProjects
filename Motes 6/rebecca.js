async function Rebecca(key, param) {
	if (key == 1) {
		document.getElementById("fader").style.opacity = 1;
		
		await timer(1000);
		
		locale = "A Clearing in the Forest";
		UpdateMeters();
		
		document.getElementById("colorizer").style.background = "#243a0f";
		
		await timer(1000)
		
		Output("");
		
		let greetMsg = "Greet her.";
		let greetVal = 1;
		if (flags.attemptedGreeting == 2) {
			greetMsg = "Try one last greeting.";
			greetVal = 2;
		}
		
		Print([
			["You awaken in a clearing, this time on your feet. A dense forest surrounds you, a decomposing trunk lying on the ground in front of you."],
			["A woman is watching you. Her most striking feature is her antlers, like that of a stag, encircling her head. You find yourself with a strange certainty that <i>she is not supposed to have them</i>. You also know, instinctually, that her name is <q class=\"noBold\">Rebecca</q>."],
			["execute", function() {
				buttons[0][0].update(Rebecca.bind(null, 2, greetVal), greetMsg);
				buttons[0][1].update(Rebecca.bind(null, 2, 0), "Stay silent.");
			}]
		]);
		
		document.getElementById("fader").style.opacity = 0;
	}
	else if (key == 2) {
		let greetedPhrase = "";
		let staySilentPhrase = "Stay silent.";
		if (param != 0) {
			greetedPhrase = " You can’t tell whether this is a result of your sudden appearance, or your greeting.";
			staySilentPhrase = "Remain silent.";
			
			let optionalFinally = "";
			if (param == 2) optionalFinally = "finally ";
			
			Print([["!", "<p>You " + optionalFinally + "manage a brief salutation. Not only that, you execute it flawlessly, leaving no doubt in any observer’s mind that you have, in fact, greeted Rebecca — in a manner that is neither long-winded nor socially absurd.</p><br/>"]]);
		}
		
		Print([
			["She stares at you with large, chocolate-brown eyes." + greetedPhrase + " Finally, she speaks, her voice a mild alto."],
			["<q>Hi. You haven’t been here before, have you?</q>"],
			["execute", function(){
				buttons[0][0].update(Rebecca.bind(null, 3, 1), "<q>Yes I have.</q><span class='tooltip'>No you haven’t. Perhaps you’re thinking of the subway.</span>");
				buttons[0][1].update(Rebecca.bind(null, 3, 2), "<q>No, I haven’t.</q>");
				buttons[0][2].update(Rebecca.bind(null, 3, 0), staySilentPhrase);
			}]
		]);
	}
	else if (key == 3) {
		if (param == 0) {
			Print([["She watches you for a few seconds. She blinks once. Finally, she steps forward. <q>I want to help you. You’ll follow me, won’t you?</q>"]]);
		}
		else if (param == 1) {
			Print([
				["She blinks once. <q>Oh. I didn’t know.</q> She steps forward. <q>Still, I think I should help you. I need you to follow me.</q>"]
			]);
		}
		else if (param == 2) {
			Print([["She smiles calmly. <q>That’s okay. I want to help you. You just have to follow me.</q>"]])
		}
		
		Print([
			[]
		])
	}
}