let p = {};
let flags = {};
let displaycontent = document.getElementById("displaycontent");
let skinToneIndex = {
	"null": "#e8e8e8",
	'A': "#f7ede4",
	'B': "#f3e7da",
	'C': "#f6ead0",
	'D': "#ead9bb",
	'E': "#d7bd96",
	'F': "#9f7d54",
	'G': "#815d44",
	'H': "#604234",
	'I': "#3a312a",
	'J': "#2a2420"
}
let hairLengthIndex = {
	"null": "",
	"bald": "",
	"very short": " Less than an inch of hair, as with a buzz cut.",
	"short": " Ear-length hair.",
	"medium": " Jaw-length hair.",
	"long": " Shoulder-length hair.",
	"very long": " Armpit-length hair.",
	"very very long": " Waist-length hair or longer."
}

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

async function ClearPlayerObject() {
	p = {
		name: "",
		
		gender:   "",
		they:     "",
		them:     "",
		their:    "",
		theirs:   "",
		themself: "",
		theyre:   "",
		are:      "",
		
		hasBreasts: false,
		hasPenis:   false,
		hasVagina:  false,
		breastSize: "",
		penisSize:  "",
		
		skinTone: '',
		// Monk Skin Tone Scale:
		//         A: #f7ede4
		//         B: #f3e7da
		//         C: #f6ead0
		//         D: #ead9bb
		//         E: #d7bd96
		//         F: #9f7d54
		//         G: #815d44
		//         H: #604234
		//         I: #3a312a
		//         J: #2a2420
	
		hairColor:   "",
		hairTexture: "",
		hairLength:  "",
		eyeColor:    "",
		height:      "",
		thickness:   "",
		musculature: "",
	};
	
	flags.seenIsContractionWarning = false;
}

async function Start(key, param) {
	if (key == 1) {
		Output("");
		await SlowType("Welcome.ⅤⅤⅤⅤⅤ", 2500);
		ButtonAppear();
		LeftAppear();
		await SlowType("||You will need an avatar.Ⅴ Please choose a name.Ⅴ", 2000);
		Start(2, false);
	}
	else if (key == 2) {
		ClearPlayerObject();
		
		if (param == true) {
			Output("")
		}
		else {
			Append("<br/><br/>")
		}
		Append("<span id=\"namefield\" class=\"devtext\">Name: <input type=\"text\" id=\"nameInput\" class=\"input devtext\"><br><br></span>");
		displaycontent.scrollTop = displaycontent.scrollHeight;
		buttons[0][0].update(ConfirmName, "Submit");
		inStart = true;
	}
	else if (key == 3) {
		await SlowType("Please choose a gender.Ⅴ This can be changed at any time.");
		SetButtons([{
				func: ConfirmGender.bind(null, ["feminine", "she", "her", "her", "hers", "herself", "she's", "is"], 1),
				text: "Feminine"
			}, {
				func: ConfirmGender.bind(null, ["masculine", "he", "him", "his", "his", "himself", "he's", "is"], 1), text: "Masculine"
			}, {
				func: ConfirmGender.bind(null, ["nonbinary", "they", "them", "their", "theirs", "themself", "they're", "are"], 1),
				text: "Nonbinary (them)"
			}, {
				func: ConfirmGender.bind(null, ["nonbinary", "it", "it", "its", "its", "itself", "it's", "is"], 1),
				text: "Nonbinary (it)"
			},
			false,
			false, {
				func: CustomGender,
				text: "Custom"
		}]);
	}
	else if (key == 3.5) {
		await SlowType(`||Please choose your desired sexual characteristics.||Ⅴ`);
		Append("<span class=\"devtext\" id=\"sexReadout\" style=\"white-space: pre;\"></span>")
		Start(4, false);
	}
	else if (key == 4) {
		if (param == "breasts") p.hasBreasts = !p.hasBreasts;
		else if (param == "penis") p.hasPenis = !p.hasPenis;
		else if (param == "vagina") p.hasVagina = !p.hasVagina;
		
		let bReadout = "☒";
		let pReadout = "☒";
		let vReadout = "☒";
		
		if (p.hasBreasts) bReadout = "☑";
		if (p.hasPenis)   pReadout = "☑";
		if (p.hasVagina)  vReadout = "☑";
		
		document.getElementById("sexReadout").innerHTML = "Breasts: " + bReadout + "<br/>Penis:   " + pReadout + "<br/>Vagina:  " + vReadout;
		displaycontent.scrollTop = displaycontent.scrollHeight
		
		SetButtons([{
				func: Start.bind(null, 4, "breasts"),
				text: "Toggle Breasts"
			}, {
				func: Start.bind(null, 4, "penis"),
				text: "Toggle Penis"
			}, {
				func: Start.bind(null, 4, "vagina"),
				text: "Toggle Vagina"
			},
			false,
			false,
			false,
			{
				func: Start.bind(null, 7),
				text: "Submit"
		}]);
		inStart = false;
	}
	else if (key == 7) {
		p.breastSize = param;
		
		await SlowType("||Please fill out your additional customization options:Ⅴ")
		
		Append(`<br/><br/><label for="skinTone" class="devtext" style="white-space:pre;">Skin Tone:         </label>
<select name="skinTone" id="skinTone" class="devtext">
	<option value="null" class="devtext" style="background-color:#e8e8e8;">&lt;Choose&gt;</option>
	<option value="A" class="devtext" style="background-color:#f7ede4;"></option>
	<option value="B" class="devtext" style="background-color:#f3e7da;"></option>
	<option value="C" class="devtext" style="background-color:#f6ead0;"></option>
	<option value="D" class="devtext" style="background-color:#ead9bb;"></option>
	<option value="E" class="devtext" style="background-color:#d7bd96;"></option>
	<option value="F" class="devtext" style="background-color:#9f7d54;"></option>
	<option value="G" class="devtext" style="background-color:#815d44;"></option>
	<option value="H" class="devtext" style="background-color:#604234;"></option>
	<option value="I" class="devtext" style="background-color:#3a312a;"></option>
	<option value="J" class="devtext" style="background-color:#2a2420;"></option>
</select>
<br/>
<label for="hairColor" class="devtext" style="white-space:pre;">Hair Color:        </label>
<select name="hairColor" id="hairColor" class="devtext">
	<option value="null"           class="devtext">&lt;Choose&gt;</option>
	<option value="black"          class="devtext">Black</option>
	<option value="brown"          class="devtext">Brown</option>
	<option value="auburn"         class="devtext">Auburn</option>
	<option value="ginger"         class="devtext">Ginger</option>
	<option value="blond"          class="devtext" id="blondOption">Blond</option>
	<option value="grey"           class="devtext">Grey</option>
	<option value="white"          class="devtext">White</option>
</select>
<br/>
<label for="hairTexture" class="devtext" style="white-space:pre;">Hair Texture:      </label>
<select name="hairTexture" id="hairTexture" class="devtext">
	<option value="null"           class="devtext">&lt;Choose&gt;</option>
	<option value="straight"       class="devtext">Straight</option>
	<option value="wavy"           class="devtext">Wavy</option>
	<option value="curly"          class="devtext">Curly</option>
	<option value="kinky"          class="devtext">Kinky</option>
</select>
<br/>
<label for="hairLength" class="devtext" style="white-space:pre;">Hair Length:       </label>
<select name="hairLength" id="hairLength" class="devtext">
	<option value="null"           class="devtext">&lt;Choose&gt;</option>
	<option value="bald"           class="devtext">Bald</option>
	<option value="very short"     class="devtext">Very Short</option>
	<option value="short"          class="devtext">Short</option>
	<option value="medium"         class="devtext">Medium</option>
	<option value="long"           class="devtext">Long</option>
	<option value="very long"      class="devtext">Very Long</option>
	<option value="very very long" class="devtext">Very Very Long</option>
</select>
<span id="hairLengthDesc" class="devtext" style="white-space:pre;color:#707070;"></span>
<br/>
<label for="eyeColor" class="devtext" style="white-space:pre;">Eye Color:         </label>
<select name="eyeColor" id="eyeColor" class="devtext">
	<option value="null"           class="devtext">&lt;Choose&gt;</option>
	<option value="amber"          class="devtext">Amber</option>
	<option value="brown"          class="devtext">Brown</option>
	<option value="hazel"          class="devtext">Hazel</option>
	<option value="green"          class="devtext">Green</option>
	<option value="blue"           class="devtext">Blue</option>
	<option value="grey"           class="devtext">Grey</option>
</select>
<br/>
<label for="height" class="devtext" style="white-space:pre;">Height:            </label>
<select name="height" id="height" class="devtext">
	<option value="null"           class="devtext">&lt;Choose&gt;</option>
	<option value="very short"     class="devtext">Very Short</option>
	<option value="short"          class="devtext">Short</option>
	<option value="average"        class="devtext">Average</option>
	<option value="tall"           class="devtext">Tall</option>
	<option value="very tall"      class="devtext">Very Tall</option>
</select>
<br/>
<label for="bodyShape" class="devtext" style="white-space:pre;">Body Shape:        </label>
<select name="bodyShape" id="bodyShape" class="devtext">
	<option value="null"           class="devtext">&lt;Choose&gt;</option>
	<option value="thin"           class="devtext">Thin</option>
	<option value="average"        class="devtext">Average</option>
	<option value="thick"          class="devtext">Thick</option>
</select>
<br/>
<label for="muscleDefinition" class="devtext" style="white-space:pre;">Muscle Definition: </label>
<select name="muscleDefinition" id="muscleDefinition" class="devtext">
	<option value="null"           class="devtext">&lt;Choose&gt;</option>
	<option value="soft"           class="devtext">Soft</option>
	<option value="fit"            class="devtext">Fit</option>
	<option value="muscular"       class="devtext">Muscular</option>
</select>`);
		
		$('#skinTone').change(function() {
			document.getElementById("skinTone").style.backgroundColor = skinToneIndex[document.getElementById("skinTone").value];
		});
		
		if (p.gender == "feminine") {
			document.getElementById("blondOption").innerHTML = "Blonde";
		}
		
		$('#hairLength').change(function() {
			document.getElementById("hairLengthDesc").innerHTML = hairLengthIndex[document.getElementById("hairLength").value];
		});
		
		let maxSelectWidth = document.getElementById("hairLength").offsetWidth;
		for (let i = 0; i < document.getElementsByTagName("select").length; i++) {
			document.getElementsByTagName("select")[i].style.width = maxSelectWidth + "px";
		}
		
		buttons[0][0].update(ConfirmAppearance, "Confirm");
	}
	else if (key == 15) {
		let breastDesc = "none";
		let penisDesc  = "none";
		let vaginaDesc = "none";
		
		if (p.hasBreasts) breastDesc = p.breastSize;
		if (p.hasPenis)    penisDesc = "present";
		if (p.hasVagina)  vaginaDesc = "present";
		
		Output("");
		await SlowType(`Your avatar will abide by the following details:Ⅴ`);
		
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/><br/>Name: ${p.name}</span>`);
		
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/><br/>Gender:  ${p.gender}</span>`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>    Subject:               ${p.they}</span>`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>    Object:                ${p.them}</span>`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>    Pronominal Adjective:  ${p.their}`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>    Predicative Adjective: ${p.theirs}`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>    Reflexive:             ${p.themself}`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>    \"Is\" Contraction:      ${p.theyre}`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>    \"Is\" Conjugation:      ${p.are}</span>`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Breasts: ${breastDesc}</span>`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Penis:   ${penisDesc}</span>`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Vagina:  ${vaginaDesc}</span>`);
		
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/><br/>Skin Tone:         ${p.skinTone} (Monk Skin Tone Scale)</span>`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Hair Color:        ${p.hairColor}</span>`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Hair Texture:      ${p.hairTexture}</span>`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Hair Length:       ${p.hairLength}</span>`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Eye Color:         ${p.eyeColor}</span>`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Height:            ${p.height}</span>`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Body Shape:        ${p.thickness}</span>`);
		await timer(500);
		Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Muscle Definition: ${p.musculature}</span>`);
		
		buttons[0][0].update(StoryStart.bind(null, 0), "Begin");
		buttons[0][6].update(Start.bind(null, 2, true), "Start Over")
	}
}

function ConfirmName() {
	let nameInput = document.getElementById("nameInput");
	p.name = nameInput.value;
	if (p.name.length >= 1) {
		nameInput.disabled = true;
		nameInput.placeholder = p.name;
		Start(3);
	}
	else {
		buttons[0][0].update(ConfirmName, "Submit");
	}
}

async function CustomGender() {
	await SlowType("||Please enter your gender information in lowercase.Ⅴ");
	Append("<br><br><span id=\"pronounfields\" class=\"devtext\" style=\"white-space:pre;\">Label:                 <input id=\"gender\" class=\"input\" placeholder=\"custom\">\
	<br>Subject:               <input id=\"subject\" class=\"input\"> <span class=\"devtext\" style=\"color:#707070;\">e.g. \"<b>They</b> arrived.\"</span>\
	<br>Object:                <input id=\"object\" class=\"input\"> <span class=\"devtext\" style=\"color:#707070;\">e.g. \"I welcomed <b>them</b>.\"</span>\
	<br>Pronominal Adjective:  <input id=\"proadj\" class=\"input\"> <span class=\"devtext\" style=\"color:#707070;\">e.g. \"It was <b>their</b> story.\"</span>\
	<br>Predicative Adjective: <input id=\"predadj\" class=\"input\"> <span class=\"devtext\" style=\"color:#707070;\">e.g. \"The story was <b>theirs</b>.\"</span>\
	<br>Reflexive:             <input id=\"reflex\" class=\"input\"> <span class=\"devtext\" style=\"color:#707070;\">e.g. \"They like <b>themself</b>.\"</span>\
	<br>\"Is\" Contraction:      <input id=\"contrac\" class=\"input\"> <span class=\"devtext\" style=\"color:#707070;\">e.g. \"<b>They're</b> fine.\"</span></span>");
	buttons[0][0].update(ConfirmGender.bind(null, false, 2), "Submit");
	displaycontent.scrollTop = displaycontent.scrollHeight;
}

function ConfirmGender(g, key) {
	if (key == 1) {
		p.gender   = g[0]
		p.they     = g[1];
		p.them     = g[2];
		p.their    = g[3];
		p.theirs   = g[4];
		p.themself = g[5];
		p.theyre   = g[6];
		p.are      = g[7];
		
		Start(3.5);
	}
	else if (key == 2) {
		let emptypronoun = 0;
		
		let gender  = document.getElementById("gender");
		let subject = document.getElementById("subject");
		let object  = document.getElementById("object");
		let proadj  = document.getElementById("proadj");
		let predadj = document.getElementById("predadj");
		let reflex  = document.getElementById("reflex");
		let contrac = document.getElementById("contrac");
		
		if (gender.value == "") gender.value = "custom";
		
		let newgender = [gender.value, subject.value, object.value, proadj.value, predadj.value, reflex.value, contrac.value];
		for (let i = 0; i < newgender.length; i++) {
			if (newgender[i].length < 1) {
				emptypronoun++;
			}
		}
		let lastchars = newgender[6].charAt(newgender[6].length - 2).toString() + newgender[6].charAt(newgender[6].length - 1).toString();
		if (lastchars != "'s" && lastchars != "re") {
			if (emptypronoun == 0 && flags.seenIsContractionWarning == false) {
				Append("<br/><br/><span class=\"devtext\">\"Is\" contraction must end in <u>'s</u> or <u>'re</u>.</span>");
				flags.seenIsContractionWarning = true;
			}
			emptypronoun++;
		}
		else if (lastchars == "'s") {
			newgender[7] = "is";
		}
		else {
			newgender[7] = "are";
		}
		if (emptypronoun == 0) {
			gender.placeholder = gender.value;
			gender.disabled = true;
			
			subject.placeholder = subject.value;
			subject.disabled = true;
			
			object.placeholder = object.value;
			object.disabled = true;
			
			proadj.placeholder = proadj.value;
			proadj.disabled = true;
			
			predadj.placeholder = predadj.value;
			predadj.disabled = true;
			
			reflex.placeholder = reflex.value;
			reflex.disabled = true;
			
			contrac.placeholder = contrac.value;
			contrac.disabled = true;
			
			ConfirmGender(newgender, 1);
		}
		else {
			buttons[0][0].update(ConfirmGender.bind(null, false, 2), "Submit");
		}
	}
}

function ConfirmAppearance() {
	let emptyField = 0;
	
	let skinTone         = document.getElementById("skinTone");
	let hairColor        = document.getElementById("hairColor");
	let hairTexture      = document.getElementById("hairTexture");
	let hairLength       = document.getElementById("hairLength");
	let eyeColor         = document.getElementById("eyeColor");
	let height           = document.getElementById("height");
	let bodyShape        = document.getElementById("bodyShape");
	let muscleDefinition = document.getElementById("muscleDefinition");
	
	let checkList = [skinTone.value, hairColor.value, hairTexture.value, hairLength.value, eyeColor.value, height.value, bodyShape.value, muscleDefinition.value];
	
	for (let i = 0; i < checkList.length; i++) {
		if (checkList[i] == "null") {
			emptyField++;
		}
	}
	
	if (emptyField == 0) {
		p.skinTone    = skinTone.value;
		p.hairColor   = hairColor.value;
		p.hairTexture = hairTexture.value;
		p.hairLength  = hairLength.value;
		p.eyeColor    = eyeColor.value;
		p.height      = height.value;
		p.thickness   = bodyShape.value;
		p.musculature = muscleDefinition.value;
		
		Start(15);
	}
	else {
		buttons[0][0].update(ConfirmAppearance, "Confirm");
	}
}