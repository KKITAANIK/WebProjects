let prevtime;
let nowtime;
let starttime;

const GameInstance = class {
	constructor() {
		this.narrativeManager = new narrativeManager(this)
		
		this.stages = ["stage1"];
		this.currentStage = "stage1"; 
		this.panels = {
			"stage1": ["panel1", "panel2"]
		}
		this.currentPanel = "panel1";
		
		this.resource1 = 0;
		this.resource2 = 0;
		this.resource3 = 0;
		
		this.runManufactories = true;
		this.autoManufactories = false;
		this.to1000 = 1;
		this.unit = "s"
		this.wagermultiplier = 1;
		this.wagerlosses = 0;
		this.tickerStrength = 1;
		this.tickerUpgrades = 0
		this.tickerUpgradeCosts = [1, 60, 3600, 86400, 31536000, 2290000000, 45800000000];
		this.realTickerUpgradeCosts = [60 * 30, 3600 * 12, 86400 * 182.5, 31536000 * 36.3, 2290000000 * 20, 2290000000 * 100];
		this.tickerUnits = ["second", "minute", "hour", "day", "year", "human lifetime"]
		this.tickerUpgradeDescriptions = [
			"Costs<span class='sevenSegment'>12</span> hours — Upgrade your Tickers to generate<span class='sevenSegment'>1</span> minute per second",
			"Costs<span class='sevenSegment'>182.5</span> days — Upgrade your Tickers to generate<span class='sevenSegment'>1</span> hour per second",
			"Costs <span class='sevenSegment'>36.3</span> years — Upgrade your Tickers to generate<span class='sevenSegment'>1</span> day per second",
			"Costs <span class='sevenSegment'>20</span> human lifetimes — Upgrade your Tickers to generate<span class='sevenSegment'>1</span> year per second",
			"Costs <span class='sevenSegment'>100</span> human lifetimes — Upgrade your Tickers to generate<span class='sevenSegment'>1</span> human lifetime per second",
			""
		];
		this.tickerDescriptions = [
			"Costs <span class='sevenSegment'>10</span> seconds — will generate<span class='sevenSegment'>1</span> second every second",
			"Costs <span class='sevenSegment'>10</span> seconds — will generate<span class='sevenSegment'>1</span> minute every second",
			"Costs <span class='sevenSegment'>10</span> seconds — will generate<span class='sevenSegment'>1</span> hour every second",
			"Costs <span class='sevenSegment'>10</span> seconds — will generate<span class='sevenSegment'>1</span> day every second",
			"Costs <span class='sevenSegment'>10</span> seconds — will generate<span class='sevenSegment'>1</span> year every second",
			"Costs <span class='sevenSegment'>10</span> seconds — will generate<span class='sevenSegment'>1</span> human lifetime every second",
		]
			
		this.collectorsProtected = 0;
		this.findersProtected = 0;
		this.gardenCollectors = 0;
		
	}

	
	// the following functions are to be called from buttons in the index.html
	gainResource1(){ this.resource1 +=1; this.updateDisplay();}
	gainResource2(num = 1){
		if(this.resource1 >= 10 * num) {
			this.resource2 += num;
			this.resource1 -= 10 * num;
			this.updateDisplay();
		}
		else if(this.resource1 >= 10) {
			let available = Math.floor(this.resource1 / 10)
			this.resource2 += available;
			this.resource1 -= 10 * available;
			this.updateDisplay();
		}
	}
	gainResource3(){if(this.resource1>=30){this.resource3 +=1; this.resource1 -=30;this.updateDisplay();}}
	
	runResource2Work(){
			this.resource1 += this.resource2 * this.tickerStrength / 1000;
	}
	
	runResource3Work(){
		if (this.resource3 > 0 && this.runManufactories) {
			let cap = this.resource3;
			let laps = Math.floor(this.resource3 / 1000) + 1;
			let remainder = this.resource3 % 1000;
			if (cap > 1000) {
				cap = 1000;
			}
			for (let i = 1; i <= cap; i++) {
				if (Math.ceil(1000/cap) * i == this.to1000) {
					/*console.log("resource3: " + this.resource3)
					console.log("to1000: " + this.to1000)
					console.log("laps: " + laps)*/
					if (this.to1000 <= remainder) {
						this.gainResource2(laps + 1);
					}
					else {
						this.gainResource2(laps);
					}
				}
			}
		}
	}
	
	autoBuyManufactories() {
		if (game.autoManufactories) {
			let available = Math.floor(this.resource1 / 30)
			if (available > 1000000) {
				available = 1000000;
			}
			this.resource3 += available;
			this.resource1 -= 30 * available;
			this.updateDisplay();
		}
	}
	
	ToggleManufactories() {
		if (this.runManufactories == true) {
			this.runManufactories = false;
			io.writeIntoElement ("Start Manufactories", "toggleManufactories");
		}
		else if (this.runManufactories == false) {
			this.runManufactories = true;
			io.writeIntoElement ("Stop Manufactories", "toggleManufactories");
		}
	}
	
	ToggleAutoManufactories() {
		if (this.autoManufactories == true) {
			this.autoManufactories = false;
			io.writeIntoElement ("Automate Manufactory Purchase", "autoManufactories");
		}
		else if (this.autoManufactories == false) {
			this.autoManufactories = true;
			io.writeIntoElement ("Stop Manufactory Automation", "autoManufactories");
		}
	}
	
	upgradeTickers() {
		// this.tickerUpgradeCosts = [1, 60, 3600, 86400, 31536000, 2290000000, 45800000000];
		if (this.resource1 < this.realTickerUpgradeCosts[this.tickerUpgrades]) {
			return;
		}
		io.hideElement("upgradeTickersRow");
		this.resource1 -= this.realTickerUpgradeCosts[this.tickerUpgrades]
		this.tickerStrength = this.tickerUpgradeCosts[this.tickerUpgrades] * 10;
		io.appendIntoElement("Your Tickers now generate<span class='sevenSegment' style='font-size:12px'>1</span> " + this.tickerUnits[this.tickerUpgrades] + " per second.", "reports");
		io.writeIntoElement(this.tickerUpgradeDescriptions[this.tickerUpgrades], "tickerUpgradeDescription");
		io.writeIntoElement(this.tickerDescriptions[this.tickerUpgrades], "tickerDescription");
		this.tickerUpgrades++;
	}
	
	Wager(multiplier, resource) {
		if (multiplier != -1) {
			if (
				(resource == 1 && multiplier * this.wagermultiplier > this.resource1)
				|| (resource == 2 && multiplier > this.resource2)
				|| (resource == 3 && multiplier > this.resource3)) {
					io.appendIntoElement("You don't have enough for that wager.", "reports")
					return;
			}
		}
		let coinFlipResult = Math.floor(Math.random() * 2);
		let resultmult = 0;
		let resultstring = ""
		if (coinFlipResult == 0) {
			resultmult = -1;
			resultstring = "lost"
		}
		else if (coinFlipResult == 1){
			resultmult = 1;
			resultstring = "won"
		}
		if (resource == 1) {
			if (multiplier == -1) {
				multiplier = this.resource1 / this.wagermultiplier;
			}
			resource = document.getElementsByClassName("wagerunits")[0].innerHTML.toLowerCase();
			this.resource1 += multiplier * this.wagermultiplier * resultmult;
			if(resultmult == -1) {
				this.wagerlosses += multiplier * this.wagermultiplier;
			}
		}
		else if (resource == 2) {
			if (multiplier == -1) {
				multiplier = this.resource2;
			}
			resource = "Tickers";
			this.resource2 += multiplier * resultmult;
		}
		else if (resource == 3) {
			if (multiplier == -1) {
				multiplier = this.resource3;
			}
			resource = "Manufactories";
			this.resource3 += multiplier * resultmult;
		}
		io.appendIntoElement("You wagered <span class='sevenSegment' style='font-size:12px'>" + (Math.round(multiplier * 1000) / 1000) + "</span> " + resource + " and " + resultstring + ".", "reports")
	}
	
		
	// this function takes in a panel 
	swichPanels(panel) {
		game.currentPanel = panel;
		io.showPanel(game);
	}
	
	updateDisplay(){
		io.writeIntoElement(CleanUnitCalc(((Date.now() - starttime) / 1000), this.unit), "playertimer")
		io.writeValueIntoClass(UnitCalc(this.resource1, this.unit), "resource1Number")
		io.writeValueIntoClass(this.resource2.toLocaleString("en-US"), "resource2Number")
		io.writeValueIntoClass(this.resource3.toLocaleString("en-US"), "resource3Number")
		io.writeIntoElement(CalculateRunout(this.resource1), "runout")
		io.writeIntoElement(Math.round(makePositive(this.resource1) * 4.3 / 1000000).toLocaleString("en-US"), "births")
		io.writeIntoElement(Math.round(makePositive(this.resource1) * 1.8 / 1000000).toLocaleString("en-US"), "deaths")
	}
	
};

function CalculateRunout(secs) {
	const maxYearsInMS = 8639977888080000;
	const maxYearsInYears = 273790;
	let currentTime = Date.now();
	let runoutDate = currentTime + (secs * 1000);
	let usableTime = runoutDate % maxYearsInMS;
	let extraYears = Math.floor(runoutDate / maxYearsInMS)
	let myDate = new Date(usableTime);
	let myDateMonths = LeadZero(myDate.getMonth() + 1);
	let myDateDays = LeadZero(myDate.getDate())
	let myDateYears = myDate.getFullYear() + (maxYearsInYears * extraYears);
	if (myDateYears.toString().length > 4) {
		myDateYears = myDateYears.toLocaleString("en-US");
	}
	return myDateMonths + "/" + myDateDays + "/" + myDateYears;
}

function makePositive(num) {
	if (num < 0.0001) {
		return (0.0001).toFixed(3)
	}
	else {
		return num.toFixed(3)
	}
}

function UnitCalc(seconds, unit) {
	if (unit != "l") {
		let numSecs = makePositive(seconds);
		let numMins = Math.floor(numSecs / 60);
		let numHours = Math.floor(numMins / 60);
		let numDays = Math.floor(numHours / 24);
		let numYears = Math.floor(numDays / 365);
		if (unit == "s") {
			return "<span class='sevenSegment'>" + numSecs + "</span>";
		}
		else if (unit == "m") {
			return "<span class='sevenSegment'>" + numMins + ":" + LeadZero(makePositive(numSecs % 60)) + "</span>"
		}
		else if (unit == "h") {
			return "<span class='sevenSegment'>" + numHours + ":" + LeadZero(numMins % 60) + ":" + LeadZero(makePositive(numSecs % 60)) + "</span>"
		}
		else if (unit == "d") {
			return "<span class='sevenSegment'>" + numDays + "</span> days, <span class='sevenSegment'>" + LeadZero(numHours % 24) + ":" + LeadZero(numMins % 60) + ":" + LeadZero(makePositive(numSecs % 60)) + "</span>"
		}
		else if (unit == "y") {
			return "<span class='sevenSegment'>" + numYears + "</span> years, <span class='sevenSegment'>" + LeadZero(numDays % 365, 100) + "</span> days, <span class='sevenSegment'>" + LeadZero(numHours % 24) + ":" + LeadZero(numMins % 60) + ":" + LeadZero(makePositive(numSecs % 60)) + "</span>"
		}
	}
	else {
		let numLives = Math.floor(makePositive(seconds) / 2290000000);
		return "<span class='sevenSegment'>" + numLives + "</span>";
	}
} 

function CleanUnitCalc(seconds, unit) {
	if (unit != "l") {
		let numSecs = makePositive(seconds);
		let numMins = Math.floor(numSecs / 60);
		let numHours = Math.floor(numMins / 60);
		let numDays = Math.floor(numHours / 24);
		let numYears = Math.floor(numDays / 365);
		if (unit == "s") {
			return numSecs;
		}
		else if (unit == "m") {
			return numMins + ":" + LeadZero(makePositive(numSecs % 60))
		}
		else if (unit == "h") {
			return numHours + ":" + LeadZero(numMins % 60) + ":" + LeadZero(makePositive(numSecs % 60))
		}
		else if (unit == "d") {
			return numDays + " days, " + LeadZero(numHours % 24) + ":" + LeadZero(numMins % 60) + ":" + LeadZero(makePositive(numSecs % 60))
		}
		else if (unit == "y") {
			return numYears + " years, " + LeadZero(numDays % 365, 100) + " days, " + LeadZero(numHours % 24) + ":" + LeadZero(numMins % 60) + ":" + LeadZero(makePositive(numSecs % 60))
		}
	}
	else {
		let numLives = Math.floor(makePositive(seconds) / 2290000000);
		return "<span class='sevenSegment'>" + numLives + "</span>";
	}
} 

function LeadZero(num, limit=10) {
	if (num < limit) {
		if (limit == 10 || (num >= 10 && num < 100 && limit == 100)) {
			return "0" + num.toString()
		}
		else if (limit == 100 && num < 10) {
			return "00" + num.toString()
		}
	}
	else {
		return num.toString()
	}
}

// this function forom JQuery waits until the web page is fully loaded before triggering the start of the game
$( document ).ready(function() {
	starttime = Date.now();
	game = new GameInstance();
	game.narrativeManager.setup();
	
	io.showStage(game); 
	game.updateDisplay()

	startRecording(game);

	// Run the Loop
	gameTimer = setInterval(function(){
		if (prevtime == undefined) {
			prevtime = Date.now()
		}
		nowtime = Date.now()
		if (game.resource1 > 0) {
			let subtrahend = (nowtime - prevtime) / 1000;
			if (subtrahend > 0.1) {
				subtrahend = 0.1;
			}
			game.resource1 -= subtrahend;
		}
		prevtime = nowtime;
		game.runResource2Work();
		game.runResource3Work();
		game.autoBuyManufactories();
		game.to1000++;
		if (game.to1000 > 1000) {
			game.to1000 -= 1000;
		} 
		game.narrativeManager.assess()
		game.updateDisplay()
	}, 10)
	

})
