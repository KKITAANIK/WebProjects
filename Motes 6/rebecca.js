async function Rebecca(key, param) {
	if (key == 1) {
		document.getElementById("fader").style.opacity = 1;
		
		await timer(1000);
		
		locale = "A Spire in the Forest";
		UpdateMeters();
		
		document.getElementById("colorizer").style.background = "#42280E";
		
		await timer(1000)
		
		let greetMsg = "Greet her.";
		if (flags.attemptedGreeting == 2)
			greetMsg = "Try one last greeting.";
		
		Output("");
		
		Print([
			["You are standing in a room atop a pale stone spire, furnished with dark oak. Two figures stand opposite each other, neither facing you. The first is a tall man with short, brown hair framing the edge of a blind mask. The curved iron covers his face completely, bearing an etched, vertical design."],
			["The other is a woman of average height, her most striking feature the antlers that encircle her head, like that of a stag. You find yourself with a strange certainty that <i>she is not supposed to have them</i>. She glances over at you as the two speak."],
			["<q>—no guarantee he is even <i>in this world</i>, let along within reach,</q> the man is saying, either not noticing or choosing to ignore your arrival. <q>There may be only so much I can provide you, but do you not prefer that certainty?</q>"],
			["break", "Rebecca turns her gaze back to the man, choosing her words. When she speaks, her voice is a mild alto. <q>This is my chance to <i>repay</i> you, Cecil! You know that I’ll arrive again, so where is the harm in—</q>"],
			["<q>The harm is in being lost along the way. Who’s to say that the path you cross will be mine?</q> He turns away from her, moving to one of the vast bookshelves that decorate the walls. Rebecca follows, speaking to his back as he searches for some item."],
			["<q>It doesn’t have to be. I’m not <i>helpless</i>! And who’s to say it wouldn’t be?</q>"],
			["The man finds what he was looking for and turns back, handing it to Rebecca with a low sigh. <q>Then don’t tell me this is repayment. Whether you stay or not, you know as well as I do you must be <i>certain</i>.</q>"],
			["break", "She takes the item and turns, striding now towards you. She presses it into your hands before you can refuse — it’s a small, rectangular lighter, its case lightly-worn steel. Silas calls out from behind her."],
			["<q>The point is made. Please, help our guest.</q>"],
			["execute then print", function() {
				buttons[0][0].update(Rebecca.bind(null, 2, true), greetMsg);
				buttons[0][1].update(Rebecca.bind(null, 2, false), "Follow her.");
			}],
			["Rebecca glances back, watching for a moment, before turning to meet your gaze. She has large, chocolate-brown eyes, shaped around a mix of emotions. <q>I’m Rebecca. Please follow me.</q>"]
		]);
		
		document.getElementById("fader").style.opacity = 0;
	}
	else if (key == 2) {
		let optionalNod = "She moves past you";
		if (param == true) {
			optionalNod = "She nods, before moving past you";
		}
		
		Print([
			["execute then print", function() {
				buttons[0][0].update(Rebecca.bind(null, 3, 0), "<q>What’s with the antlers?</q>");
				buttons[0][1].update(Rebecca.bind(null, 4, 0), "<q>What’s with the lighter?</q>");
				buttons[0][2].update(Rebecca.bind(null, 5, false), "Stay silent.");
			}],
			[optionalNod + ", making her way to the spiral staircase and heading downward. You follow."]
		]);
	}
	else if (key == 3) {
		if (param == 0) {
			Print([
				["execute then print", function() {
					buttons[0][0].update(Rebecca.bind(null, 3, 1), "<q>Of course you would.</q>");
					buttons[0][1].update(Rebecca.bind(null, 3, 2), "<q>You’re right.</q>");
					buttons[0][2].update(Rebecca.bind(null, 3, 3), "<q>That’s a lot of apostrophes.</q>");
				}],
				["She pauses on the step, considering you for a moment. Finally, she speaks. <q>They’re branches. Don’t worry, I’m not the one making them. I haven’t figured out how to follow them, yet, but if they weren’t important I wouldn’t have them, right?</q>"]
			]);
		}
		else if (param == 1) {
			Print([
				["She pauses again, before continuing down the stairs. Her answer comes somewhat quieter than before. <q>Well, I guess we’ll see.</q>"],
				["execute then print", Rebecca.bind(null, 5, true)]
			]);
		}
		else if (param == 2) {
			Print([
				["She smiles. <q>Exactly.</q>"],
				["execute then print", Rebecca.bind(null, 5, true)]
			]);
		}
		else if (param == 3) {
			Print([
				["execute then print", function() {
					buttons[0][0].update(Rebecca.bind(null, 3, 1), "<q>I think you’d still have the antlers, even if they weren’t important.</q>");
					buttons[0][1].update(Rebecca.bind(null, 3, 2), "<q>You’re right about the antlers.</q>");
					buttons[0][2].update(Rebecca.bind(null, 5, false), "Move on.");
				}],
				["That goads her into a light laugh — a soft, musical sound. <q>Is it? I guess that’s bound to happen when we’re talking about notness.</q>"]
			]);
		}
	}
	else if (key == 4) {
		if (param == 0) {
			Print([
				["execute then print", function() {
					buttons[0][0].update(Rebecca.bind(null, 4, 1), "<q>Makes sense to me.</q>");
					buttons[0][1].update(Rebecca.bind(null, 4, 2), "<q>That doesn’t really feel like an answer.</q>");
					buttons[0][2].update(Rebecca.bind(null, 5, false), "Move on.");
				}],
				["<q>It’s yours. Cecil wanted you to have it. A lighter will be useful eventually, won’t it?</q> she answers rhetorically as she makes her way down the steps."]
			]);
		}
		else if (param == 1) {
			Print([
				["She glances back at you, tilting her head slightly. Her antlers move with an ease that almost implies weightlessness. <q>It does? That’s promising.</q>"],
				["execute then print", Rebecca.bind(null, 5, true)]
			]);
		}
		else if (param == 2) {
			Print([
				["execute then print", function() {
					buttons[0][0].update(Rebecca.bind(null, 4, 3), "<q>Not really.</q>");
					buttons[0][1].update(Rebecca.bind(null, 4, 4), "<q>You’re the one who said it.</q>");
					buttons[0][2].update(Rebecca.bind(null, 4, 5), "<q>I’m not sure.</q>");
				}],
				["She turns to meet your gaze. <q>Maybe it doesn’t. Do you think that’s my fault?</q>"]
			]);
		}
		else if (param == 3) {
			Print([
				["She smiles mildly. <q>I’m glad. It wasn’t supposed to be.</q>"],
				["execute then print", Rebecca.bind(null, 5, true)]
			]);
		}
		else if (param == 4) {
			Print([
				["She seems to consider you for a moment. <q>Maybe. I’m not really sure.</q>"],
				["execute then print", Rebecca.bind(null, 5, true)]
			]);
		}
		else if (param == 5) {
			Print([
				["She tilts her head slightly. Her antlers move with an ease that almost implies weightlessness. <q>You’re the one who said it.</q>"],
				["execute then print", Rebecca.bind(null, 5, true)]
			]);
		}
	}
	else if (key == 5) {
		let optionalBreak = "";
		if (param == true) {
			optionalBreak = "<br/>";
		}
		Print([
			["!", optionalBreak + "<p>You arrive at a room roughly two-thirds of the way up the tower. In other words, you’ve descended roughly one-third of the way down. There are sleeping accommodations, a writing desk, and several other ammeneties, though Rebecca assures you you won't be needing them. The afternoon fades to evening, and though you get the sense that you should be tired, you don't feel any need to go to sleep, yet. It isn't time for that.</p>"],
			["execute then print", function() {
				buttons[0][0].update(Rebecca.bind(null, 6), "Make a decision.");
				buttons[0][1].update(Rebecca.bind(null, 'Ω'), "Avoid this.");
			}],
			["break", "Night falls, and you find yourself back in the stairwell. Despite whatever instinct might draw you downwards, to the base of the spire, you instead begin climbing. You work past the study where you were given your lighter, and soon you've reached a landing that marks the top of the stairs. A ladder waits in front of you, leading to a door in the ceiling."]
		]);
	}
	/*else if (key == 6) {              FINISH THIS NEXT TIME
		Print([
			[""]
		]);
	}*/
	
	
	
	else if (key == 'Ω') {
		Print([[
			"You return to your room. After some time, the game ends."
		]])
	}
	else {
		Print([
			["break", "<span class=\"mono\">This is as far as content exists at present. You have reached the end.</span>"]
		]);
	}
}