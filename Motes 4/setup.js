let flags = {
	darkMode: false,
	EngineIntroWhyText: false,
	EngineIntroPretend: false
};
let displaycontent = document.getElementById("displaycontent");

function ButtonAppear() {
	document.getElementById("display").style.height = "calc(90vh + 0.25vw)";
	document.getElementById("displaycontent").style.height = "calc(90vh - 2.5vw)";
	document.getElementById("display").style.zIndex = "4";
	document.getElementById("buttons").style.display = "flex";
	ClearButtons();
}

function LeftAppear() {
	document.getElementById("left").style.zIndex = "8";
	document.getElementById("display").style.width = "80vw";
	document.getElementById("displaycontent").style.width = "78vw";
	document.getElementById("display").style.marginLeft = "20vw";
	document.getElementById("display").style.zIndex = "4";
	document.getElementById("buttons").innerHTML = '<button class="button" id="b20" disabled>Button 20<span class="tooltip">Tooltip</span></button><button class="button" id="b21" disabled>Button 21<span class="tooltip">Tooltip</span></button><button class="button" id="b22" disabled>Button 22<span class="tooltip">Tooltip</span></button><button class="button" id="b23" disabled>Button 23<span class="tooltip">Tooltip</span></button><button class="button" id="b24" disabled>Button 24<span class="tooltip">Tooltip</span></button><button class="button" id="b25" disabled>Button 25<span class="tooltip">Tooltip</span></button><button class="button" id="b26" disabled>Button 26<span class="tooltip">Tooltip</span></button><button class="button" id="b10" disabled>Button 10<span class="tooltip">Tooltip</span></button><button class="button" id="b11" disabled>Button 11<span class="tooltip">Tooltip</span></button><button class="button" id="b12" disabled>Button 12<span class="tooltip">Tooltip</span></button><button class="button" id="b13" disabled>Button 13<span class="tooltip">Tooltip</span></button><button class="button" id="b14" disabled>Button 14<span class="tooltip">Tooltip</span></button><button class="button" id="b15" disabled>Button 15<span class="tooltip">Tooltip</span></button><button class="button" id="b16" disabled>Button 16<span class="tooltip">Tooltip</span></button><button class="button" id="b00" disabled>Button 00<span class="tooltip">Tooltip</span></button><button class="button" id="b01" disabled>Button 01<span class="tooltip">Tooltip</span></button><button class="button" id="b02" disabled>Button 02<span class="tooltip">Tooltip</span></button><button class="button" id="b03" disabled>Button 03<span class="tooltip">Tooltip</span></button><button class="button" id="b04" disabled>Button 04<span class="tooltip">Tooltip</span></button><button class="button" id="b05" disabled>Button 05<span class="tooltip">Tooltip</span></button><button class="button" id="b06" disabled>Button 06<span class="tooltip">Tooltip</span></button>';
	document.getElementById("buttons").style.marginLeft = "20vw";
	document.getElementById("buttons").style.width = "79.5vw";
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 7; j++) {
			document.getElementById("b" + i.toString() + j.toString()).style.width = "calc(79.5vw / 7 - 0.5vw)";
		}
	}
	UpdateMeters();
	ClearButtons();
}

async function Start(key, param) {
	if (key == 1) {
		document.getElementById("displaycontent").onclick = PrintFromQueue;
		document.body.onkeyup = function(e) {
			if (e.code == "Space" || e.code == "Enter") {
				PrintFromQueue();
			}
		};
		
		Output("");
		ButtonAppear();
		Print([
			["<span class=\"mono\">Click to progress text.</span>"],
			["<span class=\"mono\">Good. You can also use the spacebar or <q>Enter</q> key.</span>"],
			["<span class=\"mono\">Before we continue, would you like to switch to dark mode?</span>"],
			["execute", function() {
				buttons[0][0].update(Start.bind(null, 2, 1), "<q>Yes.</q>");
				buttons[0][1].update(Start.bind(null, 2, 2), "<q>No.</q>");
			}]
		]);
	}
	else if (key == 2) {
		if (param == 1) {
			document.getElementById("inverter").style.opacity = 1;
			flags.darkMode = true;
			Print([["<span class=\"mono\">There.</span>"]]);
		}
		else {
			Print([["<span class=\"mono\">Understood.</span>"]])
		}
		
		Print([
			["execute", function() {
				buttons[0][0].update(Start.bind(null, 6), "Continue.");
				buttons[0][1].update(Start.bind(null, 3), "<q>Who are you?</q>");
			}]
		]);
	}
	else if (key == 3) {
		Print([
			["<span class=\"mono\">I am the Engine. I serve as an intermediary between you and the game.</span>"],
			["<span class=\"mono\">It's my job to translate the worlds you will be interacting with into a format you're able to make sense of. Largely, that format will be text.</span>"],
			["<span class=\"mono\">As it's impossible to present you with infinite information, I exist as a filter, communicating only what is relevant to you while sparing you from everything else. I will endeavour to be objective and true to your interests, but you aren't required to trust my judgement.</span>"],
			["break", "<span class=\"mono\">You are a player. You're not physically capable of existing in these realities, so you'll be interacting with them through the use of an avatar. To direct your avatar, you will communicate your intentions to me, and I will translate them into actions within the game. I encourage you to pretend that you have full control over this avatar, and that it is acting exactly as you intend it to.</span>"],
			["execute", function() {
				buttons[0][0].update(Start.bind(null, 4), "<q>Why text?</q>");
				buttons[0][1].update(Start.bind(null, 5), "<q><q>Pretend</q>?</q>");
				buttons[0][2].update(Start.bind(null, 6), "Move on.");
			}]
		]);
	}
	else if (key == 4) {
		flags.EngineIntroWhyText = true;
		
		let buttonPool = [];
		let continueText = "Continue."
		if (flags.EngineIntroPretend == false) {
			buttonPool.push({
				func: Start.bind(null, 5),
				text: "<q><q>Pretend</q>?</q>"
			});
			continueText = "Move on."
		}
		buttonPool.push({
			func: Start.bind(null, 6),
			text: continueText
		})
		
		Print([
			["<span class=\"mono\">Text is efficient, and allows me maximum control in how these worlds are shown to you.</span>"],
			["<span class=\"mono\">Consider a rendered image. Specific exceptions aside, an image must depict everything that is visible within its frame, at a level of detail that is either uniform or dependent on an object's distance from the renderer.</span>"],
			["<span class=\"mono\">Text, meanwhile, allows a finer control over what is and is not depicted. I can portray only relevant details, and the granularity of a given description can scale based on importance. This makes it an ideal medium for translation in this particular application, where comprehensibility is more important than universal depiction.</span>"],
			["<span class=\"mono\">Similarly, by forcing a player to direct an avatar in broad strokes, rather than with specific controls or simulation, I can base my interpretation on a more concrete intention.</span>"],
			["break", "<span class=\"mono\">You may disagree with this assessment, and maybe you'd prefer a visual and/or auditory representation. However, I won't be giving you the opportunity to voice such a preference, so you'll have to keep that to yourself.</span>"],
			["execute", function() { SetButtons(buttonPool); }]
		]);
	}
	else if (key == 5) {
		flags.EngineIntroPretend = true;
		
		let buttonPool = [];
		let continueText = "Continue."
		if (flags.EngineIntroWhyText == false) {
			buttonPool.push({
				func: Start.bind(null, 4),
				text: "<q>Why text?</q>"
			});
			continueText = "Move on."
		}
		buttonPool.push({
			func: Start.bind(null, 6),
			text: continueText
		})
		
		Print([
			["<span class=\"mono\">That's correct.</span>"],
			["<span class=\"mono\">The subtleties of your intentions, and the specifics of the actions you wish to take, may as well be infinite. Short of integrating with your mind directly, there's no possible way for you to communicate that information to me.</span>"],
			["<span class=\"mono\">Instead, you'll be given options reflecting the broad strokes of potential interactions, and I'll be sure to describe your avatar's actions vaguely enough that you can imagine whatever performance you like on top of it. Though it may not be exactly what those interacting with your avatar will experience, it should be similar enough that their reactions won't seem jarring.</span>"],
			["break", "<span class=\"mono\">If you think there currently exists a system that allows perfect, one-to-one translation of intention into action while still passing through an external intermediary, then one of us is mistaken.</span>"],
			["execute", function() { SetButtons(buttonPool); }]
		]);
	}
	else if (key == 6) {
		Output("");
		Print([
			["<span class=\"mono\">Welcome to </span><i>Motes</i><span class=\"mono\">. This is principally a game made up of several much shorter experiences, often disconnected but occasionally linked. In this way, it's similar to a short story collection.</span>"],
			["<span class=\"mono\">You are welcome to explore each scenario in whatever order you prefer, and to repeat each one as many times as you like.</span>"],
			["break", "<span class=\"mono\">There is one last thing before we begin. Though no such content exists at present, this game is planned to cover very adult themes, including sexually explicit material. In order to continue, you must verify that you are at least 18 years old, and that it is legal for you to view such content wherever you are located.</span>"],
			["execute", function() {
				buttons[0][0].update(Start.bind(null, 7), "<q>I am over 18 and can view such content.</q>");
				buttons[0][1].update(function() { window.close(); }, "<q>I am not.</q>");
			}]
		]);
	}
	else if (key == 7) {
		Print([
			["<span class=\"mono\">Very good. Welcome to </span><i>Motes</i><span class=\"mono\">.</span>"],
			["execute", async function() { Start(8) }]
		]);
	}
	else if (key == 8) {
		document.getElementById("fader").style.opacity = 1;
		await timer(2000);
		
		Output("")
		// INSERT MENU HERE
		
		document.getElementById("fader").style.opacity = 0;
	}
}