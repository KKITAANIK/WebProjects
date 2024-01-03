let elementList = [];
let combinations = [];
let queue = [];

class Element {
	constructor(name, isFundamental, recipes) {
		this.name = name;                   // a string
		this.isFundamental = isFundamental; // a bool
		this.recipes = recipes;             // an array of arrays of strings; empty if no recipe
	}
}

class Combination {
	constructor(result, components) {
		this.result = result;               // a string; false if no result
		this.components = components;       // an array of strings
	}
}

let fundamentalPresets = {
	"none": [],
	"classical": [
		new Element("earth", true, []),
		new Element("water", true, []),
		new Element(  "air", true, []),
		new Element( "fire", true, [])
	],
	"classical2": [
		new Element( "earth", true, []),
		new Element( "water", true, []),
		new Element(   "air", true, []),
		new Element(  "fire", true, []),
		new Element("aether", true, [])
	],
	"五行": [
		new Element( "fire", true, []),
		new Element("water", true, []),
		new Element( "wood", true, []),
		new Element("metal", true, []),
		new Element("earth", true, [])
	],
	"paracelsus": [
		new Element("sulphur", true, []),
		new Element("mercury", true, []),
		new Element(   "salt", true, [])
	],
	"metals": [
		new Element(   "gold", true, []),
		new Element( "silver", true, []),
		new Element( "copper", true, []),
		new Element(    "tin", true, []),
		new Element(   "lead", true, []),
		new Element(   "iron", true, []),
		new Element("mercury", true, [])
	],
	"devil": [
		new Element(      "air", true, []),
		new Element(    "apple", true, []),
		new Element(    "beast", true, []),
		new Element(    "chaos", true, []),
		new Element( "darkness", true, []),
		new Element(    "earth", true, []),
		new Element(     "fire", true, []),
		new Element(    "human", true, []),
		new Element("knowledge", true, []),
		new Element(    "light", true, []),
		new Element(      "man", true, []),
		new Element(    "order", true, []),
		new Element(      "sin", true, []),
		new Element(    "water", true, []),
		new Element(    "woman", true, [])
	],
	"farm": [
		new Element(   "air", true, []),
		new Element(  "fire", true, []),
		new Element("ground", true, []),
		new Element(  "hunt", true, []),
		new Element(  "life", true, []),
		new Element(  "snow", true, []),
		new Element( "stone", true, []),
		new Element( "water", true, [])
	],
	"adventure time": [
		new Element("candy", true, []),
		new Element(  "ice", true, []),
		new Element("slime", true, []),
		new Element( "fire", true, []),
		new Element("lumpy", true, []),
	]
}

$('#comboPiece1').change(function() {
	AdjustComboPiece2();
});

function ApplyPreset() {
	let preset = document.getElementById("presetSelector").value;
	elementList = fundamentalPresets[preset];
	combinations = [];
	queue = [];
	console.log(elementList);
	RefreshData();
}

function MakeNewElement() {
	let elementName = document.getElementById("newFundamentalElement");
	if (elementName.value.length > 0 && CheckElementList(elementName.value) == false) {
		elementList.push(new Element(elementName.value, true, []));
		elementName.value = "";
		console.log(elementList);
		RefreshData();
	}
}

function CheckElementList(elementName) {
	for (let i = 0; i < elementList.length; i++) {
		if (elementList[i].name == elementName)
			return true;
	}
	return false;
}

function PullFromQueue() {
	RefreshData();
	
	if (queue.length == 0) return;
	
	let comboPiece1 = document.getElementById("comboPiece1");
	let comboPiece2 = document.getElementById("comboPiece2");
	
	comboPiece1.value = queue[0][0];
	AdjustComboPiece2();
	comboPiece2.value = queue[0][1];
}

function RefreshData() {
	let displayElementList = document.getElementById("displayElementList");
	let displayComboList = document.getElementById("displayComboList");
	
	let displayElementListContents = "";
	for (let i = 0; i < elementList.length; i++) {
		if (elementList[i].isFundamental)
			displayElementListContents += "𝔽 ";
		
		displayElementListContents += elementList[i].name;
		
		if (elementList[i].recipes.length > 0)
			displayElementListContents += ":";
		
		displayElementListContents += "<br/>";
		
		for (let j = 0; j < elementList[i].recipes.length; j++) {
			displayElementListContents += "    " + elementList[i].recipes[j][0] + " + " + elementList[i].recipes[j][1] + "<br/>";
		}
		
		for (let j = 0; j < elementList.length; j++) {
			if (CheckRecipeInCombinations([elementList[i].name, elementList[j].name]) == false
			&& CheckRecipeInQueue([elementList[i].name, elementList[j].name]) == false) {
				queue.push([elementList[i].name, elementList[j].name]);
			}
		}
	}
	displayElementList.innerHTML = displayElementListContents
	
	document.getElementById("queueStatus").innerHTML = "There are " + queue.length + " combinations left in the queue.";
	console.log(queue);
	
	let displayComboListContents = "";
	for (let i = 0; i < combinations.length; i++) {
		displayComboListContents += combinations[i].components[0] + " + " + combinations[i].components[1] + " = " + combinations[i].result + "<br/>";
	}
	displayComboList.innerHTML = displayComboListContents;
	
	let comboPiece1 = document.getElementById("comboPiece1");
	let comboPiece2 = document.getElementById("comboPiece2");
	let comboResultExisting = document.getElementById("comboResultExisting");
	
	if (queue.length == 0) {
		comboPiece1.innerHTML = "";
		comboPiece2.innerHTML = "";
		return;
	}
	
	let comboPiece1List = "";
	let comboResultExistingList = "";
	for (let i = 0; i < elementList.length; i++) {
		comboResultExistingList += "<option value=\"" + elementList[i].name + "\">" + elementList[i].name + "</option>";
		for (let j = 0; j < queue.length; j++) {
			if (queue[j][0] == elementList[i].name || queue[j][1] == elementList[i].name) {
				comboPiece1List += "<option value=\"" + elementList[i].name + "\">" + elementList[i].name + "</option>";
				break;
			}
		}
	}
	comboPiece1.innerHTML = comboPiece1List;
	comboResultExisting.innerHTML = comboResultExistingList;
	
	AdjustComboPiece2();
}

function CheckRecipeInQueue(recipe) {
	for (let k = 0; k < queue.length; k++) {
		if ((queue[k][0] == recipe[0] && queue[k][1] == recipe[1])
		|| (queue[k][0] == recipe[1] && queue[k][1] == recipe[0])) {
			return true;
		}
	}
	return false;
}

function CheckRecipeInCombinations(recipe) {
	for (let k = 0; k < combinations.length; k++) {
		if ((combinations[k].components[0] == recipe[0] && combinations[k].components[1] == recipe[1])
		|| (combinations[k].components[0] == recipe[1] && combinations[k].components[1] == recipe[0])) {
			return true;
		}
	}
	return false;
}

function AdjustComboPiece2() {
	if (queue.length == 0) return;
	
	let comboPiece1 = document.getElementById("comboPiece1");
	let comboPiece2 = document.getElementById("comboPiece2");
	let comboPiece2List = "";
	for (let i = 0; i < elementList.length; i++) {
		if (CheckRecipeInQueue([comboPiece1.value, elementList[i].name])) {
			comboPiece2List += "<option value=\"" + elementList[i].name + "\">" + elementList[i].name + "</option>"
		}
	}
	comboPiece2.innerHTML = comboPiece2List;
}

function DoesNotCombine() {
	let comboPiece1 = document.getElementById("comboPiece1");
	let comboPiece2 = document.getElementById("comboPiece2");
	
	if (comboPiece1.value.length <= 0 || comboPiece2.value.lenth <= 0) return;
	
	combinations.push(new Combination(false, [comboPiece1.value, comboPiece2.value]));
	console.log(combinations);
	
	RemoveFromQueue([comboPiece1.value, comboPiece2.value]);
	
	PullFromQueue();
}

function RemoveFromQueue(recipe) {
	for (let k = 0; k < queue.length; k++) {
		if ((queue[k][0] == recipe[0] && queue[k][1] == recipe[1])
			|| (queue[k][0] == recipe[1] && queue[k][1] == recipe[0])) {
			queue.splice(k, 1);
		}
	}
}

function FillWithExistingElement() {
	let comboPiece1 = document.getElementById("comboPiece1");
	let comboPiece2 = document.getElementById("comboPiece2");
	let comboResultExisting = document.getElementById("comboResultExisting");
	
	if (comboPiece1.value.length <= 0 || comboPiece2.value.lenth <= 0) return;
	if (comboResultExisting.value.length <= 0) return;
	
	combinations.push(new Combination(comboResultExisting.value, [comboPiece1.value, comboPiece2.value]));
	console.log(combinations);
	
	for (let i = 0; i < elementList.length; i++) {
		if (elementList[i].name == comboResultExisting.value) {
			elementList[i].recipes.push([comboPiece1.value, comboPiece2.value]);
		}
	}
	console.log(elementList);
	
	RemoveFromQueue([comboPiece1.value, comboPiece2.value]);
	
	PullFromQueue();
}

function FillWithNewElement() {
	let comboPiece1 = document.getElementById("comboPiece1");
	let comboPiece2 = document.getElementById("comboPiece2");
	let newElementToFill = document.getElementById("newElementToFill");
	
	if (comboPiece1.value.length <= 0 || comboPiece2.value.lenth <= 0) return;
	if (newElementToFill.value.length <= 0) return;
	
	combinations.push(new Combination(newElementToFill.value, [comboPiece1.value, comboPiece2.value]));
	console.log(combinations);
	
	let elementAlreadyExists = false;
	for (let i = 0; i < elementList.length; i++) {
		if (elementList[i].name == newElementToFill.value) {
			elementAlreadyExists = true;
			elementList[i].recipes.push([comboPiece1.value, comboPiece2.value]);
		}
	}
	if (elementAlreadyExists == false) {
		elementList.push(new Element(newElementToFill.value, false, [[comboPiece1.value, comboPiece2.value]]));
	}
	console.log(elementList);
	
	RemoveFromQueue([comboPiece1.value, comboPiece2.value]);
	
	PullFromQueue();
}

function PopFromQueue() {
	let comboPiece1 = document.getElementById("comboPiece1");
	let comboPiece2 = document.getElementById("comboPiece2");
	
	if (comboPiece1.value.length <= 0 || comboPiece2.value.lenth <= 0) return;
	
	RemoveFromQueue([comboPiece1.value, comboPiece2.value]);
	
	PullFromQueue();
}