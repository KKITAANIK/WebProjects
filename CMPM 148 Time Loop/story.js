let f = {};

async function StartGame() {
	SendMessage("Hey", "11:43 AM");
	SendMessage("I know you don't know me, but I really need your help", "11:43 AM");
	SendMessage("Seriously, this is important. Respond as soon as you can.", "11:44 AM");
	f.nextTarget = false;
	if (!f.everythingExplained) {
		button[0].update("Hello?", Start1.bind(null, 0))
	}
	f.intro ?
		f.everythingExplained ? 
			button[0].update("Hey Riley", Start2.bind(null, 0))
			: button[1].update("Hey Riley", Start2.bind(null, 0))
		: button[1].update("Who is this?", Start1.bind(null, 0))
	if (f.onYourOwn || f.noOptionsLeft) {
		button[4].update("<i>Stop checking your phone</i>", function(){window.close()})
	}
	if (f.everythingExplained) {
		button[1].update("Try the garden", Start3.bind(null, 0))
		button[2].update("Try the security center", Start3.bind(null, 1))
		if (f.gardenDeadly && f.securityCenterDeadly) {
			button[3].update("Both of them kill you", Start1.bind(null, 9))
		}
	}
}

async function Start1(key) {
	if (key == 0) {
		await Send("Oh good", 10);
		await Send("Okay, introductions");
		await Send("I'm Riley. You're whoever. Point is, I don't know what to do");
		await Send("And you're gonna help me.");
		await Send("I uh", 3);
		await Send("I may have done something");
		await Send("Just to make sure you can help");
		await Send("Because I know I'm gonna mess this up");
		await Send("Just go with it, alright?")
		await sleep(1)
		button[0].update("Alright", Start1.bind(null, 2));
		f.intro ?
			button[1].update("You already said this", Start2.bind(null, 0))
			: button[1].update("What did you do?", Start1.bind(null, 1))
	}
	else if (key == 1) {
		await Send("Well...", 5);
		await Send("Look, this is probably gonna go really badly")
		await Send("And no offense but you probably won't get this right the first time")
		await Send("So I kinda uh")
		await Send("Basically, we're gonna do this over and over until we get it right.", 4);
		await Send("Don't worry! I can fix it!");
		await Send("Just not now");
		await Send("I get that I kinda roped you into this, but it's gonna be fine, alright?")
		await Send("I mean, I'm the one actually doing everything")
		await sleep(1)
		button[0].update("I don't get it", Start1.bind(null, 3));
		button[1].update("Alright", Start1.bind(null, 2));
	}
	else if (key == 2 || key == 3) {
		f.intro = true;
		if (key == 2) {
			await Send("Great!")
		}
		else if (key == 3) {
			await Send("Don't worry, you will");
		}
		await Send("All you have to do is tell me what to do")
		await Send("If something goes wrong, I'll let you know")
		await Send("Then we can... try again")
		await Send("Okay great. I'll tell you when something's happening", 4)
		await Send("That might be pretty soon, though")
		await Send("Alright, see you then")
		await sleep(1)
		button[0].update("See you", Start1.bind(null, 6));
		button[1].update("Wait, I still don't understand", Start1.bind(null, 5));
	}
	else if (key == 5) {
		await Send("Look, I need to focus right now", 5)
		await Send("I'll tell you more later, I promise")
		await Send("If you really have to know, this is kind of life or death for me, and you're gonna be my memory")
		await Send("Good? Good.")
		await sleep(1);
		button[0].update("\"Life or death\"?", Start1.bind(null, 6));
		button[1].update("\"Memory\"?", Start1.bind(null, 6));
	}
	else if (key == 6) {
		while (minutes < 10) {
			await sleep(1);
		}
		await Send("Okay, I think they're gone")
		await Send("I'm in the vault")
		await Send("I just need you to tell me which way to go.")
		await Send("I remember from the way in. Once I'm out, it goes into a hallway")
		await Send("Then I can either go to the weird inside garden thats here or the security center")
		await Send("Honestly neither of them sound great. The garden's really open, and \"security center\" sounds like a great way to get caught")
		await Send("What should I do?")
		await sleep(1)
		f.gardenDeadly ?
			button[0].update("The garden kills you", SecurityCenter.bind(null, 6))
			: button[0].update("Go to the garden", Garden.bind(null, 0));
		f.securityCenterDeadly ?
			button[1].update("The security center kills you", Garden.bind(null, 2))
			: button[1].update("Go to the security center", SecurityCenter.bind(null, 0));
		if (!f.everythingExplained) {
			button[2].update("I'm not saying anything until you tell me what's going on", Start1.bind(null, 7));
		}
		if (f.gardenDeadly && f.securityCenterDeadly) {
			button[3].update("Both of them kill you", Start1.bind(null, 9))
		}
	}
	else if (key == 7) {
		await Send("Ugh, seriously?!")
		await Send("Look, I <i>swear</i> I will tell you everything as soon as I'm somewhere safe")
		await Send("But right now this is really time sensitive, and I need you to work with me")
		await sleep(1)
		f.gardenDeadly ?
			button[0].update("The garden kills you", SecurityCenter.bind(null, 6))
			: button[0].update("Go to the garden", Garden.bind(null, 0));
		f.securityCenterDeadly ?
			button[1].update("The security center kills you", Garden.bind(null, 2))
			: button[1].update("Go to the security center", SecurityCenter.bind(null, 0));
		button[2].update("Nope. I want an explanation now", Start1.bind(null, 8));
		if (f.gardenDeadly && f.securityCenterDeadly) {
			button[3].update("Both of them kill you", Start1.bind(null, 9))
		}
	}
	else if (key == 8) {
		await Send("I don't know how many times I can tell you <i>there isn't time</i>")
		let options = ["garden", "security center"]
		let choice = Math.floor(Math.random() * 2);
		await Send("Screw it, I'm gonna try the " + options[choice])
		await Send("Just remember which one I picked, okay?")
		if (choice == 0) {
			Garden(1);
		}
		else if (choice == 1) {
			SecurityCenter(1)
		}
	}
	else if (key == 9) {
		f.noOptionsLeft = true;
		await Send("Huh?", 6)
		await Send("Look, I know you can't see the room I'm in, but those are the only two options", 4)
		await Send("One of them has to get me out of here")
		await Send("Can you just")
		await Send("I mean, can you check again?")
		await Send("Maybe there's an option we missed")
		await Send("Like, you know, maybe \"go to the garden, but don't hit the tripwire 28 steps in\"")
		await sleep(1)
		button[0].update("Alright, try the garden", Garden.bind(null, 3));
		button[1].update("Alright, try the security center", SecurityCenter.bind(null, 7));
		button[2].update("There are no other options. You just die.", Start1.bind(null, 10))
	}
	else if (key == 10) {
		await Send("What do you mean there's no options?!", 4)
		await Send("You literally have infinite tries to get this right! That's infinite options!")
		await Send("Come on, I need you to Groundhog Day this shit! That's why I asked for your help!")
		await Send("Just <i>try</i>")
		await Send("I'll be really detailed, I promise. All you have to do is tell me what to do")
		await Send("Please")
		await sleep(1)
		button[0].update("Alright, try the garden", Garden.bind(null, 3));
		button[1].update("Alright, try the security center", SecurityCenter.bind(null, 7));
		button[2].update("It won't work.", Start1.bind(null, 11))
	}
	else if (key == 11) {
		await Send("YES IT WILL!")
		await Send("It <i>has</i> to work")
		await Send("The only way it doesn't work is if you aren't actually trying!")
		await Send("I've given you the power of a <i>god</i>, and you can't get me out of some rich guy's house?")
		await Send("How many times have you even been through this?")
		await sleep(1)
		button[0].update("Alright, try the garden", Garden.bind(null, 3));
		button[1].update("Alright, try the security center", SecurityCenter.bind(null, 7));
		button[2].update(loops.toString(), Start1.bind(null, 12))
		button[3].update("Enough.", Start1.bind(null, 13))
	}
	else if (key == 12 || key == 13) {
		if (key == 12) {
			await Send("See?! Thats nowhere near enough!")
		}
		else if (key == 13) {
			await Send("I don't believe you.")
		}
		await Send("Come on, it has to work, we just need to try a few more times")
		await sleep(1)
		button[0].update("Alright, try the garden", Garden.bind(null, 3));
		button[1].update("Alright, try the security center", SecurityCenter.bind(null, 7));
		button[2].update("I told you. It won't work", Start1.bind(null, 14))
	}
	else if (key == 14) {
		await Send("...I probably just storm out right now, huh?", 20)
		await Send("Pick one randomly, you know")
		await Send("Go get killed again")
		await Send("Well? Is that what I do? You should know", 5)
		await sleep(1)
		button[0].update("Yeah", Start1.bind(null, 15));
		button[1].update("I don't know", SecurityCenter.bind(null, 15));
	}
	else if (key == 15) {
		await Send("Yeah.")
		await Send("What a stupid spell", 7)
		await Send("So, what?", 4)
		await Send("I just sit here? Just listen to this stupid artifact buzzing around?")
		await Send("\"Yes Riley, you can totally mess with TIME ITSELF to get you out of this mess. Great idea, Riley\"")
		await Send("Worst idea of my life")
		await Send("And that's a high bar, just so you know", 3)
		await Send("I'm just gonna...")
		await Send("I'm just gonna wait for a bit")
		await Send("Maybe I can get it to shut up", 12)
		await Send("Fuck it, maybe I can break the damn thing")
		await Send("Worst case scenario it kills me, right?")
		await Send("Then you get another chance to tell me how screwed I am")
		await Send("Yeah, I talked myself into it", 6)
		await Send("I guess we'll see how it goes")
		await Send("Hey, I'm sorry I yelled, by the way", 7)
		await Send("I mean, \"yelled\". Really I'm trying to be as quiet as possible so they don't hear me out there")
		await Send("But like")
		await Send("I don't really have any way of knowing if you're right or not")
		await Send("You're probably just trying to help")
		await Send("I mean, you're still here, after all")
		await Send("So yeah, uh", 3)
		await Send("Thanks", 4)
		await Send("Alright, I'm gonna throw this thing as hard as I can against a wall, now")
		await Send("Maybe I'll get lucky and it'll blow a hole in it and I can get out that way")
		await Send("Wish me luck")
		End();
	}
}

async function Start2(key) {
	if (key == 0) {
		await Send("Huh?", 4)
		await Send("Oh wait", 5)
		await Send("Wow, that's weird. I guess that means it worked, though")
		await Send("So first try didn't go so well, huh?")
		await sleep(1)
		if (f.everythingExplained) {
			button[0].update("Nope", Start3.bind(null, 2));
			button[1].update("The second didn't, either", Start3.bind(null, 3));
		}
		else {
			button[0].update("Nope", Start2.bind(null, 1));
			button[1].update("What's going on?", Start2.bind(null, 2));
		}
	}
	else if (key == 1 || key == 2) {
		if (key == 1) {
			await Send("Shoot")
			await Send("Well, good thing I set up this link, huh?")
			await Send("Alright, let me see if I can get you up to speed")
		}
		else if (key == 2) {
			await Send("Yeah, you've probably earned a bit more explanation, huh?")
			await Send("I mean, maybe you haven't. I can't remember")
			await Send("But at least we know this works. Which means I have a little more time")
		}
		await Send("Very long story short, there's this really powerful artifact I'm here to steal")
		await Send("Well, really it was my mentor who was here to steal it, and he brought me along")
		await Send("Anyway, he's uh")
		await Send("Well he's super dead, now", 10)
		await Send("So that leaves me, and I have to get out of here")
		await sleep(1)
		button[0].update("Why should I help a thief?", Start2.bind(null, 3));
		button[1].update("What does that have to do with me?", Start2.bind(null, 4));
	}
	else if (key == 3) {
		await Send("Okay, yeah, I get how it looks", 5)
		await Send("Look, like I said it's a long story. You're just gonna have to trust me")
		await Send("Also the guy we're stealing from is like super evil")
		await Send("Also you can't really get out until you help me")
		await sleep(1)
		button[0].update("You still haven't told me what this has to do with me", Start2.bind(null, 4));
		button[1].update("What's that supposed to mean?", Start2.bind(null, 4));
	}
	else if (key == 4) {
		await Send("Right, yeah, okay")
		await Send("So like I said, I'm kind of just sitting here, with this really powerful artifact")
		await Send("If I just step out there it's pretty much a 100% chance I'm dead")
		await Send("In fact, we kind of already proved that")
		await Send("So I did... something", 3)
		await Send("I'm still just an apprentice, but I put together a kind of loop, and you drew the short straw")
		await Send("Point is, this means I can try to get out, and I'll tell you how it goes, and you can help me")
		await Send("You know, if I say \"aaa oh my god I'm dying\" then next time you can say \"don't do that\"")
		Start2(11)
	}
	else if (key == 5) {
		f.qWhyNotYourself = true;
		await Send("Yeah, I know. And I promise that's not just me being stupid")
		await Send("See, I don't remember, that's kind of the point, but if this isn't your first time through then I died")
		await Send("Like, dead. No more Riley")
		await Send("And maybe it was something really peaceful. I sure as hell don't know")
		await Send("But chances are it <i>really</i> fucking hurt")
		await Send("If I'm the one who gets looped, then that means I <i>remember</i> all of that, which sounds really not fun")
		await Send("I know I'm like the pinacle of confidence here, but honestly I'm pretty terrified right now")
		await Send("And I'm pretty sure if I actually knew what was gonna happen to me, then I'd never leave this vault")
		await Send("And they'd just find me and kill me anyway")
		await Send("So I'm kind of being selfish, here, and trusting that whoever I got linked with would help me  out")
		await Send("So like... please do that")
		Start2(11);
	}
	else if (key == 6) {
		f.qWhatIfStopResponding = true;
		await Send("Well, then I'd be screwed")
		await Send("I mean, on the plus side I wouldn't remember any of it")
		await Send("But being stuck dying forever doesn't really sound all that fun")
		Start2(11)
	}
	else if (key == 7) {
		f.onYourOwn = true;
		await Send("Wait no")
		await Send("Come on, please, I need you")
		await Send("Like, literally, I need you. We've already proven that going into this blind kills me")
		await Send("Hello?", 10)
		await Send("Of all the people I could have linked with, I can't believe I got a literal sociopath", 10)
		await Send("Well, mister-or-missus sociopath, I guess I'm trying this on my own")
		let options = ["garden", "security center"]
		let choice = Math.floor(Math.random() * 2);
		await Send("I'm gonna wait until there's an opening, then I'm gonna try the " + options[choice])
		await Send("In case you change your mind and want to tell me how it goes next time")
		while (minutes < 10) {
			await sleep(1);
		}
		if (choice == 0) {
			Garden(1);
		}
		else if (choice == 1) {
			SecurityCenter(1)
		}
	}
	else if (key == 8) {
		f.qWhatIfIDontWant = true;
		await Send("Then you just have to help me!")
		await Send("Don't worry, I'm pretty sure I can fix this. But I need to get out first")
		await Send("You know how it is. There's like no chance I break this without a dissipation charm")
		await Send("So as long as you get me out of here alive, then everything can go back to normal")
		Start2(11)
	}
	else if (key == 9) {
		f.qThisIsMagic = true;
		await Send("I mean, yeah")
		await Send("Wait you're not")
		await Send("Shit, you're not a mage, are you?", 4)
		await Send("Uhh")
		await Send("Look, I don't know why it linked me to you, but uh")
		await Send("Just pretend it's like a video game, right?")
		await Send("You know, <i>hypothetically</i> there's this person named Riley who super needs your help")
		await Send("And you get unlimited do-overs! Lucky you")
		await Send("Cool? Cool")
		Start2(11);
	}
	else if (key == 10) {
		f.qGettingOverMagic = true;
		await Send("Right, yeah, I get it")
		await Send("But I really need you to focus right now")
		await Send("If you get me out of here, I'll explain everything")
		await Send("Pinky promise")
		await Send("We can have coffee or something")
		await Send("And I won't turn you into a newt or anything, just a normal, mage-to-non-mage conversation")
		await Send("But I gotta get out of here, first")
		Start2(11);
	}
	else if (key == 11) {
		await sleep(1);
		f.qWhyNotYourself ? 
			f.qWhatIfStopResponding ?
				button[0].update("Yeah, you're on your own", Start2.bind(null, 7))
				: button[0].update("What if I just stop responding?", Start2.bind(null, 6))
			: button[0].update("Why am I the one who gets looped? Why not do it yourself?", Start2.bind(null, 5));
		if (!f.qWhatIfIDontWant) {
			button[1].update("What if I don't want to be stuck here?", Start2.bind(null, 8));
		}
		else if (f.qWhatIfIDontWant && !f.qWhyNotYourself) {
			f.qWhatIfStopResponding ?
				button[0].update("Yeah, you're on your own", Start2.bind(null, 7))
				: button[0].update("What if I just stop responding?", Start2.bind(null, 6))
		}
		if (!f.qThisIsMagic) {
			button[2].update("You're saying this is some kind of magic spell?", Start2.bind(null, 9));
		}
		else if(!f.qGettingOverMagic) {
			button[2].update("Yeah, I still need to get over the whole \"magic exists\" thing", Start2.bind(null, 10))
		}
		if (f.qWhyNotYourself && f.qWhatIfIDontWant) {
			button[3].update("I think I get it", Start2.bind(null, 12));
		}
	}
	else if (key == 12) {
		f.everythingExplained = true;
		await Send("Great!")
		await Send("I guess you already know what my options are, then, huh?")
		await Send("So, what should I do?")
		await sleep(1)
		f.gardenDeadly ?
			button[0].update("The garden kills you", SecurityCenter.bind(null, 6))
			: button[0].update("Go to the garden", Garden.bind(null, 0));
		f.securityCenterDeadly ?
			button[1].update("The security center kills you", Garden.bind(null, 2))
			: button[1].update("Go to the security center", SecurityCenter.bind(null, 0));
		if (f.gardenDeadly && f.securityCenterDeadly) {
			button[2].update("Both of them kill you", Start1.bind(null, 9))
		}
	}
}

async function Start3(key) {
	if (key == 0 || key == 1) {
		if (key == 0) {
			f.nextTarget = "garden"
		}
		else if (key == 1) {
			f.nextTarget = "security center"
		}
		await Send("Huh?", 4)
		await Send("Oh wait", 5)
		await Send("Wow, that's weird. I guess that means it worked, though")
		await Send("So first try didn't go so well, huh?")
		await sleep(1)
		button[0].update("Nope", Start3.bind(null, 2));
		button[1].update("The second didn't, either", Start3.bind(null, 3));
	}
	else if (key == 2) {
		await Send("Alright, let me see if I can get you up to speed")
		await sleep(1)
		button[0].update("You already did", Start3.bind(null, 4));
	}
	else if (key == 3 || key == 4) {
		if (key == 3) {
			await Send("Oof")
		}
		if (key == 4) {
			await Send("I did?", 3)
			await Send("I mean, yeah, of course I did", 3)
			await Send("This time loop thing is pretty convenient, huh?")
		}
		if (f.nextTarget == false) {
			await Send("I guess you already know what my options are, then, huh?")
			await Send("So, what should I do?")
			await sleep(1)
			f.gardenDeadly ?
				button[0].update("The garden kills you", SecurityCenter.bind(null, 6))
				: button[0].update("Go to the garden", Garden.bind(null, 0));
			f.securityCenterDeadly ?
				button[1].update("The security center kills you", Garden.bind(null, 2))
				: button[1].update("Go to the security center", SecurityCenter.bind(null, 0));
			if (f.gardenDeadly && f.securityCenterDeadly) {
				button[2].update("Both of them kill you", Start1.bind(null, 9))
			}
		}
		else {
			await Send("Alright, you said the " + f.nextTarget + "?", 4)
			await Send("Let's do it")
			await Send("I have to wait until there's an opening, but I'll let you know how it goes")
			while (minutes < 10) {
				await sleep(1);
			}
			if (f.nextTarget == "garden") {
				Garden(1)
			}
			else if (f.nextTarget == "security center") {
				SecurityCenter(1)
			}
		}
	}
}

async function Garden(key) {
	if (key == 0 || key == 1 || key == 2 || key == 3) {
		f.gardenDeadly = true;
		if (key == 0) {
			await Send("Alright, I'll tell you how it goes")
		}
		else if (key == 2) {
			await Send("Shit, really?")
			await Send("Alright, guess I'm trying the garden")
			await Send("I'll tell you how it goes")
		}
		else if (key == 3) {
			await Send("Okay, great")
			await Send("I'll tell you how it goes")
		}
		await Send("Okay, I'm in the garden, now", 15)
		await Send("I'm trying to stay low, but there's like nothing to hide behind")
		await Send("I think I'm clear, though, I don't see")
		await Send("Shit, nevermind, there's a guard right there")
		await Send("I THINK HE SAW ME")
		await Send("SHIT SHIT SHIT SHIT")
		await Send("THE GARDEN IS NOT GOOD I REPEAT THE GARDEN IS NOT GOOD")
		await Send("NOT SAFE")
		await Send("SHIT SHIT SHTGHJM")
		await sleepBase(0.2)
		SendMessage(".")
		await sleepBase(0.2)
		SendMessage(".")
		await sleepBase(0.4)
		SendMessage("..")
		await sleepBase(0.2)
		SendMessage(".")
		await sleepBase(0.2)
		SendMessage(".")
		await sleepBase(0.2)
		SendMessage(".")
		await ResetLoop();
	}
}

async function SecurityCenter(key) {
	if (key == 0 || key == 1 || key == 6) {
		f.securityCenterDeadly = true;
		if (key == 0) {
			await Send("Alright, I'll tell you how it goes")
		}
		if (key == 6) {
			await Send("Shit, really?")
			await Send("Alright, guess I'm trying the security center")
			await Send("I'll tell you how it goes")
		}
		else if (key == 7) {
			await Send("Okay, great")
			await Send("I'll tell you how it goes")
		}
		await Send("Okay, I'm just outside of the security center", 15)
		await Send("I can uh")
		await Send("There's definitely people inside")
		await Send("I'm really not sure about this")
		await Send("But we don't have a lot of options, so it's worth trying")
		await Send("I'm gonna try and keep low. If something goes wrong you'll hear about it")
		await Send("Okay I'm in. I'm behind a desk right now", 5)
		await Send("I'm gonna try and wiggle past")
		await Send("I can hear them talking, they're right there")
		await Send("Uh oh", 6)
		await Send("It's a dead end")
		await Send("I can't get out")
		await Send("What do I do?")
		await sleep(1)
		button[0].update("Back out and go back to the vault", SecurityCenter.bind(null, 2));
		button[1].update("Stay there and wait for them to leave", SecurityCenter.bind(null, 3));
	}
	else if (key == 2) {
		await Send("Good call")
		await Send("Okay, just gotta be careful")
		await Send("Take it slow")
		await Send("Yeah uh... wish me luck")
		await Send("Shit", 6)
		await Send("One of them moved. They're standing where I need to get out")
		await Send("I can't get out")
		await sleep(1)
		button[0].update("Stay there and wait for them to leave", SecurityCenter.bind(null, 3));
	}
	else if (key == 3) {
		await Send("You're right. They've gotta leave at some point, then I can escape")
		await Send("Calm down, Riley")
		await Send("Sorry, I know you're not Riley", 3)
		await Send("I'm Riley")
		await Send("Sometimes talking to myself helps, you know?")
		await Send("Only if I actually talk then they're probably gonna kill me")
		await Send("So hopefully you don't mind me using our messages")
		await Send("Right, I'm rambling", 3)
		await Send("We just gotta... wait")
		await Send("So, watch any good movies lately?", 10)
		await sleep(1)
		button[0].update("Yes", SecurityCenter.bind(null, 4));
		button[1].update("No", SecurityCenter.bind(null, 5));
	}
	else if (key == 4 || key == 5) {
		if (key == 4) {
			await Send("Yeah? That's good")
			await Send("I'd ask you which ones but uh")
		}
		else if (key == 5) {
			await Send("Yeah, me neither")
		}
		await Send("I don't actually watch many movies these days")
		await Send("Yeah, I know, stupid question")
		await Send("Oh wait", 5)
		await Send("I think they're leaving!")
		await Send("Alright, mission \"get the fuck out from under this desk\" is a go")
		await Send("I'll let you know when I'm back in the vault")
		await Send("Okay, I think I'm cleasdfgbn", 6)
		await Send("SHIT SHIT I AM NOT CLEAR I REPEAT NOT CLEAR")
		await Send("They're chasing me I'm fucking")
		await Send("SECURITY CENTER IS NOT SAFE DO NOT LET ME GO THERGJKHM")
		await sleepBase(0.2)
		SendMessage(".")
		await sleepBase(0.4)
		SendMessage("..")
		await sleepBase(0.2)
		SendMessage(".")
		await sleepBase(0.2)
		SendMessage(".")
		await sleepBase(0.6)
		SendMessage("...")
		await sleepBase(0.2)
		SendMessage(".")
		await ResetLoop();
	}
}