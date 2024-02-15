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
			["Rebecca turns her gaze back to the man, choosing her words. When she speaks, her voice is a mild alto. <q>This is my chance to <i>repay</i> you, Cecil! You know that I'll arrive again, so where is the harm in—</q>"],
			["<q>The harm is in being lost along the way. Who's to say that the path you cross will be mine?</q> He turns away from her, moving to one of the vast bookshelves that decorate the walls. Rebecca follows, speaking to his back as he searches for some item."],
			["<q>It doesn't have to be. I'm not <i>helpless</i>! And who's to say it wouldn't be?</q>"],
			["The man finds what he was looking for and turns back, handing it to Rebecca with a low sigh. <q>Then don't tell me this is repayment. Whether you stay or not, you know as well as I do you must be <i>certain</i>.</q>"],
			["She takes the item and turns, striding now towards you. She presses it into your hands before you can refuse — it's a small, rectangular lighter, somewhat worn. Silas calls out from behind her."],
			["<q>The point is made. Please, help our guest.</q>"],
			["Rebecca glances back, watching for a moment, before turning to meet your gaze. She has large, chocolate-brown eyes, shaped around a mix of emotions. <q>I'm Rebecca. Please follow me.</q>"],
			["execute", function() {
				buttons[0][0].update(Rebecca.bind(null, 2, true), greetMsg);
				buttons[0][1].update(Rebecca.bind(null, 2, false), "Follow her.");
			}]
		]);
		
		document.getElementById("fader").style.opacity = 0;
	}
	else if (key == 2) {
		let optionalNod = "She moves past you";
		if (param == true) {
			optionalNod = "She nods, before moving past you";
		}
		
		Print([
			[optionalNod + ", making her way to the spiral staircase and heading downard. You follow."],
			["execute", function() {
				buttons[0][0].update(Rebecca.bind(null, 3, 0), "<q>What’s with the antlers?</q>");
				buttons[0][1].update(Rebecca.bind(null, 4, 0), "<q>What’s with the lighter?</q>");
				buttons[0][2].update(Rebecca.bind(null, 5), "Stay silent.");
			}]
		]);
	}
	else if (key == 3) {
		if (param == 0) {
			Print([
				["She pauses on the step, considering you for a moment. Finally, she speaks. <q>They’re branches. Don’t worry, I’m not the one making them. I haven’t figured out how to follow them, yet, but if they weren’t important I wouldn’t have them, right?</q>"],
				["execute", function() {
					buttons[0][0].update(Rebecca.bind(null, 3, 1), "<q>Of course you would.</q>");
					buttons[0][1].update(Rebecca.bind(null, 3, 2), "<q>You’re right.</q>");
					buttons[0][2].update(Rebecca.bind(null, 3, 3), "<q>That’s a lot of apostrophes.</q>");
				}]
			]);
		}
		else if (param == 1) {
			Print([
				["She pauses again, before continuing down the stairs. Her answer comes somewhat quieter than before. <q>Well, I guess we’ll see.</q>"],
				["execute then print", Rebecca.bind(null, 5)]
			]);
		}
		else if (param == 2) {
			Print([
				["She smiles. <q>Exactly.</q>"],
				["execute then print", Rebecca.bind(null, 5)]
			]);
		}
		else if (param == 3) {
			Print([
				["That goads her into a light laugh — a soft, musical sound. <q>Is it? I guess that’s bound to happen when we’re talking about notness.</q>"],
				["execute", function() {
					buttons[0][0].update(Rebecca.bind(null, 3, 1), "<q>I think you’d still have the antlers, even if they weren’t important.</q>");
					buttons[0][1].update(Rebecca.bind(null, 3, 2), "<q>You’re right about the antlers.</q>");
					buttons[0][2].update(Rebecca.bind(null, 5), "Move on.");
				}]
			]);
		}
	}
	else if (key == 4) {
		if (param == 0) {
			Print([
				["<q>It's yours. Cecil wanted you to have it. A lighter will be useful eventually, won't it?</q> she answers rhetorically as she makes her way down the steps."],
				["execute", function() {
					buttons[0][0].update(Rebecca.bind(null, 4, 1), "<q>Makes sense to me.</q>");
					buttons[0][1].update(Rebecca.bind(null, 4, 2), "<q>That doesn't really feel like an answer.</q>");
					buttons[0][2].update(Rebecca.bind(null, 5), "Move on.");
				}]
			]);
		}
		else if (param == 1) {
			Print([
				["She glances back at you, tilting her head slightly. Her antlers move with an ease that almost implies weightlessness. <q>It does? That's promising.</q>"],
				["execute then print", Rebecca.bind(null, 5)]
			]);
		}
		else if (param == 2) {
			Print([
				["She turns to meet your gaze. <q>Maybe it doesn't. Do you think that's my fault?</q>"],
				["execute", function() {
					buttons[0][0].update(Rebecca.bind(null, 4, 3), "<q>Not really.</q>");
					buttons[0][1].update(Rebecca.bind(null, 4, 4), "<q>You're the one who said it.</q>");
					buttons[0][2].update(Rebecca.bind(null, 4, 5), "<q>I'm not sure.</q>");
				}]
			]);
		}
		else if (param == 3) {
			Print([
				["She smiles mildly. <q>I'm glad. It wasn't supposed to be.</q>"],
				["execute then print", Rebecca.bind(null, 5)]
			]);
		}
		else if (param == 4) {
			Print([
				["She seems to consider you for a moment. <q>Maybe. I'm not really sure.</q>"],
				["execute then print", Rebecca.bind(null, 5)]
			]);
		}
		else if (param == 5) {
			Print([
				["She tilts her head slightly. Her antlers move with an ease that almost implies weightlessness. <q>You're the one who said it.</q>"],
				["execute then print", Rebecca.bind(null, 5)]
			]);
		}
	}
	
	
	
	
	
	else {
		Print([
			["<span class=\"mono\">This is as far as content exists at present. You have reached the end.</span>"]
		]);
	}
}













/*		let greetMsg = "Greet her.";
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
			flags.rebeccaBeenHereBefore = 0;
			Print([["She watches you for a few seconds. She blinks once. Finally, she steps forward. <q>I want to help you. You’ll follow me, won’t you?</q>"]]);
		}
		else if (param == 1) {
			flags.rebeccaBeenHereBefore = 1;
			Print([
				["She blinks once. <q>Oh. I didn’t know.</q> She steps forward. <q>Still, I think there’s something I should show you. I need you to follow me.</q>"]
			]);
		}
		else if (param == 2) {
			flags.rebeccaBeenHereBefore = -1;
			Print([["She smiles calmly. <q>That’s okay. I want to help you. You just have to follow me.</q>"]]);
		}
		
		Print([
			["It <span id=\"seemsChange\">seems</span> you have a choice to make."],
			["execute", function(){
				buttons[0][0].update(Rebecca.bind(null, 4, true), "Agree to follow her.");
				buttons[0][1].update(Rebecca.bind(null, 4, false), "Don’t follow.");
			}]
		]);
	}
	else if (key == 4) {
		if (param == false) {
			Print([
				["execute then print", function() {
					document.getElementById("seemsChange").innerHTML = "<u>seems</u>";
					document.getElementById("Don’t follow.").innerHTML = "Agree to follow her.";
				}],
				["!", "<p class=\"mono\"><q class=\"noBold\">It is a reality that many illusions function only so long as they go unquestioned.</q></p><br/>"]
			]);
		}
		Print([
			["Rebecca smiles pleasantly and turns, making her way back into the forest proper. You follow."],
			["Light filters in from above, leaving speckled patterns on the ground as the canopy fails to fully obscure the sun. The duff beneath your feet is soft, and the roots that do emerge from the soil are low, offering minimal resistance as you make your way after the antlered woman."],
			["She turns her head to look back at you, apparently having no need to watch the path. <q>My name is <q>Rebecca</q>. It’s supposed to be obvious, but I’m still figuring it out.</q>"],
			["execute", function() {
				buttonPool = [
					{func: Rebecca.bind(null, 5, 0), text: "<q>Where are you taking me?</q>"},
					{func: Rebecca.bind(null, 6, 0), text: "<q>What’s with the antlers?</q>"},
					{func: Rebecca.bind(null, 7), text: "Stay silent."}
				];
				SetButtons(buttonPool);
			}]
		]);
	}
	else if (key == 5) {
		RemoveFromButtonPool("<q>Of course you would.</q>");
		RemoveFromButtonPool("<q>I think you’d still have the antlers, even if they weren’t important.</q>");
		RemoveFromButtonPool("<q>You’re right.</q>");
		RemoveFromButtonPool("<q>You’re right about the antlers.</q>");
		RemoveFromButtonPool("<q>That’s a lot of apostrophes.</q>");
		if (param == 0) {
			flags.rebeccaAskedWhereTaking = true;
			RemoveFromButtonPool("Stay silent.");
			RemoveFromButtonPool("Move on.");
			RemoveFromButtonPool("<q>Where are you taking me?</q>");
			buttonPool.push({func: Rebecca.bind(null, 5, 1), text: "<q>Who’s <q>Cecil</q>?</q>"});
			buttonPool.push({func: Rebecca.bind(null, 5, 2), text: "<q>What is he going to give me?</q>"});
			buttonPool.push({func: Rebecca.bind(null, 7), text: "Move on."});
			Print([
				["<q>We’re going to see Cecil. He has something for you.</q>"],
				["execute", SetButtons.bind(null, buttonPool)]
			]);
		}
		else if (param == 1) {
			flags.rebeccaAskedWhosCecil = true;
			RemoveFromButtonPool("<q>Who’s <q>Cecil</q>?</q>");
			Print([
				["She tilts her head slightly. Her antlers move with an ease that almost implies weightlessness. <q>I don’t know. He hasn’t told me. But he knows a lot more than I do, and he has something for you.</q>"],
				["execute", SetButtons.bind(null, buttonPool)]
			]);
		}
		else if (param == 2) {
			flags.rebeccaAskedWhatCecilHas = true;
			RemoveFromButtonPool("<q>What is he going to give me?</q>");
			Print([
				["She smiles. <q>You’re starting to get it. I’ve seen it, but he hasn’t told me. He just said to make sure you got it if I found you.</q>"],
				["execute", SetButtons.bind(null, buttonPool)]
			]);
		}
	}
	else if (key == 6) {
		ReplaceButtonText("<q>What is he going to give me?</q>", "<q>What is Cecil going to give me?</q>");
		if (param == 0) {
			flags.rebeccaAskedAntlers = true;
			RemoveFromButtonPool("Stay silent.");
			RemoveFromButtonPool("Move on.");
			RemoveFromButtonPool("<q>What’s with the antlers?</q>");
			buttonPool.push({func: Rebecca.bind(null, 6, 1), text: "<q>Of course you would.</q>"});
			buttonPool.push({func: Rebecca.bind(null, 6, 2), text: "<q>You’re right.</q>"});
			buttonPool.push({func: Rebecca.bind(null, 6, 3), text: "<q>That’s a lot of apostrophes.</q>"});
			buttonPool.push({func: Rebecca.bind(null, 7), text: "Move on."});
			Print([
				["She pauses, considering you for a moment. Finally, she speaks. <q>They’re branches. Don’t worry, I’m not the one making them. I haven’t figured out how to follow them, yet, but if they weren’t important I wouldn’t have them, right?</q>"],
				["execute", SetButtons.bind(null, buttonPool)]
			]);
		}
		else if (param == 1) {
			RemoveFromButtonPool("<q>Of course you would.</q>");
			RemoveFromButtonPool("<q>I think you’d still have the antlers, even if they weren’t important.</q>");
			RemoveFromButtonPool("<q>You’re right.</q>");
			RemoveFromButtonPool("<q>You’re right about the antlers.</q>");
			RemoveFromButtonPool("<q>That’s a lot of apostrophes.</q>");
			flags.rebeccaOfCourseYoudHaveAntlers = true;
			Print([
				["She pauses again, before looking back towards the trail. Her answer comes somewhat quieter than before. <q>Well, I guess we’ll see.</q>"],
				["execute", SetButtons.bind(null, buttonPool)]
			]);
		}
		else if (param == 2) {
			RemoveFromButtonPool("<q>Of course you would.</q>");
			RemoveFromButtonPool("<q>I think you’d still have the antlers, even if they weren’t important.</q>");
			RemoveFromButtonPool("<q>You’re right.</q>");
			RemoveFromButtonPool("<q>You’re right about the antlers.</q>");
			RemoveFromButtonPool("<q>That’s a lot of apostrophes.</q>");
			flags.rebeccaYoureRightAboutAntlers = true;
			Print([
				["She smiles. <q>Exactly.</q>"],
				["execute", SetButtons.bind(null, buttonPool)]
			]);
		}
		else if (param == 3) {
			ReplaceButtonText("<q>Of course you would.</q>", "<q>I think you’d still have the antlers, even if they weren’t important.</q>");
			ReplaceButtonText("<q>You’re right.</q>", "<q>You’re right about the antlers.</q>");
			flags.rebeccaApostrophes = true;
			Print([
				["That goads her into a light laugh — a soft, musical sound. <q>Is it? I guess that’s bound to happen when we’re talking about notness.</q>"],
				["execute", SetButtons.bind(null, buttonPool)]
			]);
		}
	}
	else if (key == 7) {
		buttonPool = [];
		Print([
			["The character of the forest shifts gradually as you make your way deeper. The background chirping of birds and rustling of fauna seems to occupy less of your notice, and glimpses of blue sky become more frequent as the canopy thins. The sky and, ahead of you, something tall and white rising from the forest. You look to Rebecca and she nods. <q>That’s where we’re going.</q>"],
			["break", "You come to the edge of a new clearing, and the approach affords a far better view of the object. A large spire stretches up into the sky, composed almost entirely of brilliant, light-colored stone. At its base is a dark wooden door, standing open, which Rebecca leads you towards."],
			["break", "You slowly climb the spiral staircase inside, following behind Rebecca. The steps are made of the same pale stone, polished by unnamed architects and decades of use."],
			["execute", function(){
				buttons[0][0].update(Rebecca.bind(null, 8), "Continue.");
			}]
		]);
	}
	else {
		Print([
			["<span class=\"mono\">This is as far as content exists at present. You have reached the end.</span>"]
		]);
	}
}*/