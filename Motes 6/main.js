let buttons = [[], [], []];
let displayHeights = ["calc(90vh ", "calc(80vh ", "calc(70vh "];
let mouseDown = 0;
let minute = 0;
let hour = 0;
let day = 0;
let locale = "Nowhere";
let inStart = false;
let savedata = {};
let fadeStuff = true;

let printQueue = [];

function timer(ms) { 
	if (!mouseDown) {
		return new Promise(res => setTimeout(res, ms));
	}
}

function FillButtons() {
	for (let i = 0; i < 3; i++){
		for (let j = 0; j < 7; j++) {
			buttons[i][j] = new Button(i.toString() + j.toString());
		}
	}
}

function Output(output) {
	document.getElementById("displaycontent").innerHTML = output;
}

function OutputP(output) {
	Output("<p>" + output + "</p>");
}

function Append(output) {
	document.getElementById("displaycontent").innerHTML += output;
	let displaycontent = document.getElementById("displaycontent");
	displaycontent.scrollTo(0, displaycontent.scrollHeight);
}

function AppendP(output) {
	Append("<p>" + output + "</p>");
}

function Print(queue) {
	let emptyQueue = printQueue.length <= 0;
	printQueue = printQueue.concat(queue);
	if (emptyQueue) PrintFromQueue();
}

async function PrintFromQueue() {
	let contentChildren = document.getElementById("displaycontent").children;
	for(let i = 0; i < contentChildren.length; i++) {
		if (fadeStuff == true) {
			contentChildren[i].classList.add("faded");
		}
	}
	if (printQueue.length > 0) {
		while (printQueue[0].length <= 0) {
			printQueue.shift();
		}
		if (printQueue[0][0] == "!") {
			Append(printQueue[0][1]);
			printQueue.shift();
		}
		else if (printQueue[0][0] == "break") {
			Append("<br/>");
			AppendP(printQueue[0][1]);
			printQueue.shift();
		}
		else if (printQueue[0][0] == "execute") {
			printQueue[0][1]();
			printQueue.shift();
		}
		else if (printQueue[0][0] == "execute then print") {
			printQueue[0][1]();
			if (printQueue[0].length > 2) {
				await timer(printQueue[0][2])
			}
			printQueue.shift();
			PrintFromQueue();
		}
		else {
			AppendP(printQueue[0][0]);
			printQueue.shift();
		}
	}
}

class Button {
	constructor(num) {
		// initialize the button
		this.num = num;
		this.id = "b" + num;
	}

	update(func, text) {
		// update the attributes
		document.getElementById(this.id).disabled = false;
		document.getElementById(this.id).innerHTML = "<span class=\"buttoncontent\">" + text + "</span>";
		text = text.replaceAll("tooltip", "printedTooltip")
		document.getElementById(this.id).onclick = function(){
			document.getElementById(this.id).disabled = true;
			ClearButtons();
			printQueue = [["!", "<br/><u id=\"" + text + "\">" + text + "</u><br/><br/>"]].concat(printQueue);
			func();
			PrintFromQueue();
			PrintFromQueue();
		}
		$("#" + this.id.toString()).textfill({
			maxFontPixels: 0.015 * screen.width
		});
		
		UpdateButtonAreaHeight();
	}

	disable() {
		// disable the element and empty its attributes
		document.getElementById(this.id).disabled = true;
		document.getElementById(this.id).innerHTML = "";
		document.getElementById(this.id).onclick = "";
		
		UpdateButtonAreaHeight();
	}
}

function SetButtons(buttonList) {
	// buttonlist is [{}, {}, {}]
	for (let i = 0; i < buttonList.length; i++) {
		if (buttonList[i] != false) { // you can use false to leave a space blank
			let yval = Math.floor(i / 7);
			let xval = i % 7
			buttons[yval][xval].update(buttonList[i].func, buttonList[i].text);
		}
	}
}

function ClearButtons() {
	for (let i = 0; i < 3; i++){
		for (let j = 0; j < 7; j++) {
			buttons[i][j].disable();
		}
	}
}

function UpdateButtonAreaHeight(cheat = false) {
	if (inStart == false) {
		if (cheat !== false) {
			document.getElementById("display").style.height = displayHeights[cheat] + "+ 0.25vw)";
			document.getElementById("displaycontent").style.height = displayHeights[cheat] + "- 2.5vw)";
		}
		else {
			rows:
				for (let i = 2; i >= 0; i -= 1) {
			columns:
					for (let j = 0; j < 7; j++) {
						if (document.getElementById(buttons[i][j].id).disabled == false) {
							document.getElementById("display").style.height = displayHeights[i] + "+ 0.25vw)";
							document.getElementById("displaycontent").style.height = displayHeights[i] + "- 2.5vw)";
							break rows;
						}
					}
					// if you get this far there are no buttons
					document.getElementById("display").style.height = "100vh";
					document.getElementById("displaycontent").style.height = "calc(100vh - 2vw)";
				}
		}
		let displaycontent = document.getElementById("displaycontent");
		displaycontent.scrollTo(0, displaycontent.scrollHeight);
	}
}

function UpdateMeters() {
	while (minute >= 60) {
		hour++;
		minute -= 60;
	}
	while (hour >= 24) {
		day++;
		hour -= 24;
	}
	if (minute < 10)
		minute = "0" + minute.toString();
	else
		minute = minute.toString();
	document.getElementById("location").innerHTML = "<span><i>" + locale + "</i>";
	//document.getElementById("time").innerHTML = hour.toString() + ":" + minute + ", Day " + day;
	minute = parseInt(minute);
}

function test() {
	console.log("The test function was called.");
}

document.body.onmousedown = function() { 
	mouseDown = true;
}

document.body.onmouseup = function() {
	mouseDown = false;
}

function UC(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}