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
			["!", optionalBreak + "<p>You arrive at a room roughly two-thirds of the way up the tower. In other words, you’ve descended roughly one-third of the way down. There are sleeping accommodations, a writing desk, and several other amenities, though Rebecca assures you you won’t be needing them. The afternoon fades to evening, and though you get the sense that you should be tired, you don’t feel any need to go to sleep, yet. It isn’t time for that.</p>"],
			["execute then print", function() {
				buttons[0][0].update(Rebecca.bind(null, 6), "Make a decision.");
				buttons[0][1].update(Rebecca.bind(null, 'Ω'), "Avoid this.");
			}],
			["break", "Night falls, and you find yourself back in the stairwell. Despite whatever instinct might draw you downwards, to the base of the spire, you instead begin climbing. You work past the study where you were given your lighter, and soon you’ve reached a landing that marks the top of the stairs. A ladder waits in front of you, leading to a door in the ceiling."]
		]);
	}
	else if (key == 6) {
		Print([
			["execute then print", function() {
				document.getElementById("Make a decision.").innerHTML = "Enter.";
				document.getElementById("colorizer").style.background = "#000e34";
			}],
			["You move forward, pushing open the hatch. You climb out onto an open-air platform, carved out of the bell-cast conical roof that caps off the spire. The night sky is visible above you, its features uncompromisingly, monstrously clear through the unpolluted air."],
			["You can see the stars."],
			["break", "Rebecca is waiting on the balcony, though you can’t say if it’s for you. Her antlers hang over her head — it’s hard to be certain, but they seem to have expanded slightly since you last saw her. You are once again struck with the curious feeling that <i>they do not belong on her head</i>."],
			["execute then print", function() {
				buttons[0][0].update(Rebecca.bind(null, 7, 0), "<q>What are you talking about?</q>");
				buttons[0][1].update(Rebecca.bind(null, 7, 1), "<q>Tell me.</q>");
				buttons[0][2].update(Rebecca.bind(null, 7, 2), "<q>I thought his name was <q>Silas</q>.</q>");
				buttons[0][3].update(Rebecca.bind(null, 7, 1), "Stay silent.");
			}],
			["<q>Cecil told it to me. I don’t know where he heard it from.</q>"]
		]);
	}
	else if (key == 7) {
		let optionalClarify = "";
		
		if (param == 0) {
			Print([["<q>You came here to hear a story. Where you can see the stars,</q> she answers calmly. She isn’t looking at you, focused up at the sky."]]);
		}
		else if (param == 1) {
			Print([["<q>You can see the stars,</q> she muses, focused up at the sky."]]);
		}
		else if (param == 2) {
			optionalClarify = " The story you came here for, I mean; I already told you his name, and this isn’t about him.";
			Print([["She doesn’t look at you, her focus pointed upwards. <q>I think it’s both. He was <q>Cecil</q> when I met him, but he gets called <q>Silas</q> now. That one’s newer, but I don’t think it’s important.</q>"]]);
		}
		
		
		
		Print([
			["break", "She finally turns to face you. <q>Here’s how I remember it." + optionalClarify + " It might have been different, originally, but I only know my version.</q>"],
			["She pauses, her gaze drifting as she thinks. Her lips purse just slightly against the consideration, relaxing again when she finds her start. <span class=\"fauxQuotes\">&ldquo;Once there was a great library, and its keeper. The keeper cared for the books there, and... I think it was because of that care that they were alive. Or maybe they were alive from the start, and that’s why the keeper came.<span id=\"deleteMe\">&rdquo;</span></span>"],
			["<span class=\"fauxQuotes\">&ldquo;The books would fly through the library. Sometimes they would leave, and find someone to read them, but they would always return to the keeper, who took care of them.<span id=\"deleteMe\">&rdquo;</span></span>"],
			["<q>One day, the keeper was gone, and a fire started to burn in the library. Maybe it was something that was brought back with one of the books, or maybe it was something that started from inside. When the keeper returned, a lot of the library had burned. The keeper rushed inside, and began saving as many of the books as they could. The keeper kept working to save them until the smoke had stolen all of their air, and they started burning with the rest of the library.</q>"],
			["Her eyes are once again on the stars, her voice quiet as she finishes. <q>The books that had escaped watched the fire from outside. When it was over, they went back in, and they found the ashes of the library, and their keeper. They gathered a large sail, from a port town with a welcoming name, and collected all the ashes. Then they carried it across the world, letting the wind blow through until all the ashes has been spread. Cecil called it <q>The Day of Dry Snow</q>.</q>"],
			["execute then print", function() {
				buttons[0][0].update(Rebecca.bind(null, 8, 0), "<q>I think so.</q>");
				buttons[0][1].update(Rebecca.bind(null, 8, 1), "<q>I don’t think it is.</q>");
				buttons[0][2].update(Rebecca.bind(null, 8, 2), "<q>I don’t know.</q>");
			}],
			["break", "She turns to face you once more. <q>That's how it ended. Do you think it’s important?</q>"]
		]);
	}
	else if (key == 8) {
		if (param == 0) {
			Print([["She nods along thoughtfully. <q>Maybe. I think that makes the most sense, right?</q>"]]);
		}
		else if (param == 1) {
			Print([["She nods along thoughtfully. <q>Maybe. But then why would he tell it to me?</q>"]]);
		}
		else if (param == 2) {
			Print([["She smiles lightly, lips quirked in amusement. <q>That's probably the safest answer.</q>"]]);
		}
		
		Print([
			["break", "You spend some time with Rebecca, looking at the stars and talking about whatever comes into either of your minds. Or perhaps you leave, saying nothing. Regardless of what happens, you return eventually to your accommodations."],
			["execute", Rebecca.bind(null, 9)]
		]);
	}
	else if (key == 9) {
		document.getElementById("fader").style.opacity = 1;
		
		await timer(1000);
		
		locale = "The End of the Game";
		UpdateMeters();
		
		document.getElementById("colorizer").style.background = "#808080";
		
		await timer(1000);
		
		Output("");
		
		fadeStuff = false;
		Print([
			["<span class=\"mono\" id=\"outroMessage\">Create a dot.</span>"],
			["execute", function() {
				document.getElementById("outroMessage").innerHTML += " Expand it to a line, then a square.";
			}],
			["execute then print", function() {
				fadeStuff = true;
			}],
			["break", "<span class=\"mono\">Extend the sides of the square at each corner, reaching beyond the shape by one third of its side length, creating a <b>⌗</b> shape.</span>"],
			["break", "<span class=\"mono\">Connect the two outermost points of each corner diagonally, creating a square with four triangles at its corners.</span>"],
			["break", "<span class=\"mono\">Take each diagonal line as the first side of a rhombus. Draw the other three sides, creating a square with rhombuses centered around each vertex.</span>"],
			["break", "<span class=\"mono\">For each vertex of each rhombus, connect it horizontally and vertically to the corresponding vertex on its neighboring rhombuses.</span>"],
			["break", "<span class=\"mono\">Your final shape should have 28 distinguishable edges, though the actual count is 32. This can be seen by starting with the rhombuses, and connecting every point with its corresponding point on both adjacent rombuses. The four shortest edges overlap with the four longest edges.</span>"],
			["break", "<span class=\"mono\">This is not a lotus.</span>"],
			["execute", function(){}],
			["execute", function(){
				document.body.style.pointerEvents = "none";
				document.getElementById("fader").style.background = "#e0e0e0";
				document.getElementById("fader").style.opacity = 1;
				document.getElementById("colorizer").style.background = "#fff";
			}]
		]);
		
		document.getElementById("fader").style.opacity = 0;
	}
	
	
	
	
	
	
	
	else if (key == 'Ω') {
		Print([
			["execute then print", function() {
				document.getElementById("Avoid this.").innerHTML = "Exit.";
			}],
			["You return to the room partway down the tower. After some time, the game ends."],
			["execute", function(){}],
			["execute", function(){
				document.body.style.pointerEvents = "none";
				document.getElementById("fader").style.background = "#e0e0e0";
				document.getElementById("fader").style.opacity = 1;
				document.getElementById("colorizer").style.background = "#fff";
			}]
		]);
	}
	else {
		Print([
			["break", "<span class=\"mono\">This is as far as content exists at present. You have reached the end.</span>"]
		]);
	}
}