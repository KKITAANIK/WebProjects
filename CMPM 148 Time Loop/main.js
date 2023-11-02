let startDate;
let month;
let weekday;
let date; //this is the day of the month
let days; //this is a count
let hours;
let minutes;
let button = [];
let currentWait = 5;
let loops = 0;

const buttonsheights = [0, 6.2, 13.9, 21.6, 29.3, 37];

class Button {
	constructor(num) {
		// initialize the button
		this.num = num;
		this.id = "b" + num;
	}

	update(text, func) {
		// update the attributes
		document.getElementById(this.id).disabled = false;
		document.getElementById(this.id).innerHTML = "<span class=\"buttoncontent\">" + text + "</span>";
		document.getElementById(this.id).onclick = function(){
			document.getElementById(this.id).disabled = true;
			document.getElementById(this.id).innerHTML = "";
			document.getElementById(this.id).onclick = ""
			SendPMessage(text);
			ClearButtons();
			func();
		};
		SetButtons();
		$("#" + this.id).textfill({
			maxFontPixels: Math.round(window.innerHeight * 0.047),
			success: function() {
				console.log("Resize of " + text + " success")
			},
			fail: function() {
				console.log("Resize of " + text + " failed")
			}
		});
	}

	disable() {
		// disable the element and empty its attributes
		document.getElementById(this.id).disabled = true;
		document.getElementById(this.id).innerHTML = "";
		document.getElementById(this.id).onclick = "";
	}
}

function SetButtons() {
	let b = [
		document.getElementById("b0"),
		document.getElementById("b1"),
		document.getElementById("b2"),
		document.getElementById("b3"),
		document.getElementById("b4"),
	];
	
	let numbuttons = 0;
	for (let i = 0; i < button.length; i++) {
		if(b[i].disabled != true) {
			b[i].style.display = "flex";
			numbuttons++;
		}
		else {
			b[i].style.display = "none";
		}
	}
	if (numbuttons == 0) {
		document.getElementById("bottombar").style.display = "none";
		document.getElementById("content").style.height = (100 - 6.25 - 6).toString() + "vh";
	}
	else {
		document.getElementById("bottombar").style.display = "flex";
		document.getElementById("bottombar").style.height = buttonsheights[numbuttons].toString() + "vh";
		document.getElementById("content").style.height = (100 - (buttonsheights[numbuttons] + 3)- 6.25 - 6).toString() + "vh";
	}
	let contentArea = document.getElementById("content");
	contentArea.scrollTop = contentArea.scrollHeight;
}

function ClearButtons() {
	for (let i = 0; i< button.length; i++) {
		button[i].disable();
	}
	SetButtons();
}

function Hours() {
	if (hours == 0) {
		return 12;
	}
	else if (hours <= 12) {
		return hours;
	}
	else {
		return hours % 12;
	}
}

function Minutes() {
	if (minutes >= 10) {
		return minutes
	}
	else {
		return "0" + minutes.toString()
	}
}

function AMPM() {
	if (hours <= 11) {
		return "AM";
	}
	else {
		return "PM"
	}
}

function GetTime() {
	return Hours() + ":" + Minutes() + " " + AMPM();
}

function UpdateTopbar() {
	document.getElementById("time").innerHTML = GetTime();
	document.getElementById("date").innerHTML = weekday + ", " + month + " " + date;
}

function PassTime(minutespassed) {
	minutes += minutespassed;
	while (minutes >= 60) {
		hours++;
		minutes -= 60;
	}
	while (hours >= 24) {
		days++;
		hours -= 24;
	}
	UpdateTopbar();
}

async function Send(content, wait = 2) {
	await Typing(wait);
	SendMessage(content);
}

function SendMessage(content, timestamp = GetTime()) {
	let contentArea = document.getElementById("content");
	let newDiv = document.createElement("div");
	newDiv.classList.add("message");
	newDiv.innerHTML = "<span class='msgcontent'>" + content + "</span><span class='timestamp'>" + timestamp + "</span>";
	contentArea.appendChild(newDiv);
	contentArea.scrollTop = contentArea.scrollHeight;
}

function SendPMessage(content, timestamp = GetTime()) {
	let contentArea = document.getElementById("content");
	let newDiv = document.createElement("div");
	newDiv.classList.add("pmessage");
	newDiv.innerHTML = content + "<span class='ptimestamp'>" + timestamp + "</span>";
	contentArea.appendChild(newDiv);
	contentArea.scrollTop = contentArea.scrollHeight;
}

async function ResetLoop() {
	await sleepBase(5)
	document.body.classList.add('fade');
	await sleepBase(5);
	loops++;
	let contentArea = document.getElementById("content");
	let newDiv = document.createElement("div");
	newDiv.classList.add("separatingBar");
	contentArea.appendChild(newDiv);
	contentArea.scrollTop = contentArea.scrollHeight;
	days = 0;
	hours = 12;
	minutes = 0;
	currentWait = 5;
	UpdateTopbar();
	ClearButtons();
	StartGame();
	document.body.classList.remove('fade');
}

async function End() {
	await sleepBase(5)
	document.body.classList.add('fade');
	await sleepBase(5);
	ClearButtons()
	let contentArea = document.getElementById("content");
	let newDiv = document.createElement("div");
	newDiv.classList.add("separatingBar");
	contentArea.appendChild(newDiv);
	realTime()
	document.body.classList.remove('fade');
	let timeUpdate = setInterval(realTime,1000);
}

function realTime() {
	let currentTime = new Date();
	document.getElementById("time").innerHTML = currentTime.toLocaleString('en-US', {timeStyle: "short"});
	month = startDate.toLocaleString('en-US', {month: "short"})
	weekday = startDate.toLocaleString('en-US', {weekday: "short"});
	date = startDate.toLocaleString('en-US', {day: "numeric"});
	document.getElementById("date").innerHTML = weekday + ", " + month + " " + date;
}

function sleepBase(s) {
	return new Promise(resolve => setTimeout(resolve, s * 1000));
}

async function sleep(s) {
	for (let i = 0; i < s; i++) {
		await sleepBase(1);
		currentWait++;
		while (currentWait >= 10) {
			currentWait -= 10;
			PassTime(1);
		}
		console.log(Hours() + ":" + Minutes() + "." + currentWait);
	}
}

async function Typing(s) {
	await sleep(s - 2);
	let contentArea = document.getElementById("content");
	let newDiv = document.createElement("div");
	newDiv.classList.add("typing");
	let dots = document.createElement("div");
	dots.classList.add("dot-flashing");
	newDiv.appendChild(dots);
	contentArea.appendChild(newDiv);
	contentArea.scrollTop = contentArea.scrollHeight;
	await sleep(2);
	contentArea.removeChild(contentArea.lastElementChild);
}

function Initialization() {
	startDate = new Date();
	month = startDate.toLocaleString('en-US', {month: "short"})
	weekday = startDate.toLocaleString('en-US', {weekday: "short"});
	date = startDate.toLocaleString('en-US', {day: "numeric"});
	days = 0;
	hours = 12;
	minutes = 0;
	currentWait = 5;
	UpdateTopbar();
	
	for (let i = 0; i < 5; i++) {
		button[i] = new Button(i);
	}
	ClearButtons();
	
	StartGame();
}

