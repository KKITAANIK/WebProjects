//Please don't read this. This is the grossest, most unoptimized code I've ever written. I'm pretty sure this game is O(n⁴)

let elementList = [];
let combinations = [];
let queue = [];
let sortElements = false;
let playElementList = [];
let playCombinations = [];
let playInventory = [];
let playInventoryCombos = [];
let actualCombosNumber = 0;

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
	"chemistry": [
		new Element("H",  true, []),
		new Element("He", true, []),
		new Element("Li", true, []),
		new Element("Be", true, []),
		new Element("B",  true, []),
		new Element("C",  true, []),
		new Element("N",  true, []),
		new Element("O",  true, []),
		new Element("F",  true, []),
		new Element("Ne", true, []),
		new Element("Na", true, []),
		new Element("Mg", true, []),
		new Element("Al", true, []),
		new Element("Si", true, []),
		new Element("P",  true, []),
		new Element("S",  true, []),
		new Element("Cl", true, []),
		new Element("Ar", true, []),
		new Element("K",  true, []),
		new Element("Ca", true, []),
		new Element("Sc", true, []),
		new Element("Ti", true, []),
		new Element("V",  true, []),
		new Element("Cr", true, []),
		new Element("Mn", true, []),
		new Element("Fe", true, []),
		new Element("Co", true, []),
		new Element("Ni", true, []),
		new Element("Cu", true, []),
		new Element("Zn", true, []),
		new Element("Ga", true, []),
		new Element("Ge", true, []),
		new Element("As", true, []),
		new Element("Se", true, []),
		new Element("Br", true, []),
		new Element("Kr", true, []),
		new Element("Rb", true, []),
		new Element("Sr", true, []),
		new Element("Y",  true, []),
		new Element("Zr", true, []),
		new Element("Nb", true, []),
		new Element("Mo", true, []),
		new Element("Tc", true, []),
		new Element("Ru", true, []),
		new Element("Rh", true, []),
		new Element("Pd", true, []),
		new Element("Ag", true, []),
		new Element("Cd", true, []),
		new Element("In", true, []),
		new Element("Sn", true, []),
		new Element("Sb", true, []),
		new Element("Te", true, []),
		new Element("I",  true, []),
		new Element("Xe", true, []),
		new Element("Cs", true, []),
		new Element("Ba", true, []),
		new Element("La", true, []),
		new Element("Ce", true, []),
		new Element("Pr", true, []),
		new Element("Nd", true, []),
		new Element("Pm", true, []),
		new Element("Sm", true, []),
		new Element("Eu", true, []),
		new Element("Gd", true, []),
		new Element("Tb", true, []),
		new Element("Dy", true, []),
		new Element("Ho", true, []),
		new Element("Er", true, []),
		new Element("Tm", true, []),
		new Element("Yb", true, []),
		new Element("Lu", true, []),
		new Element("Hf", true, []),
		new Element("Ta", true, []),
		new Element("W",  true, []),
		new Element("Re", true, []),
		new Element("Os", true, []),
		new Element("Ir", true, []),
		new Element("Pt", true, []),
		new Element("Au", true, []),
		new Element("Hg", true, []),
		new Element("Tl", true, []),
		new Element("Pb", true, []),
		new Element("Bi", true, []),
		new Element("Po", true, []),
		new Element("At", true, []),
		new Element("Rn", true, []),
		new Element("Fr", true, []),
		new Element("Ra", true, []),
		new Element("Ac", true, []),
		new Element("Th", true, []),
		new Element("Pa", true, []),
		new Element("U",  true, []),
		new Element("Np", true, []),
		new Element("Pu", true, []),
		new Element("Am", true, []),
		new Element("Cm", true, []),
		new Element("Bk", true, []),
		new Element("Cf", true, []),
		new Element("Es", true, []),
		new Element("Fm", true, []),
		new Element("Md", true, []),
		new Element("No", true, []),
		new Element("Lr", true, []),
		new Element("Rf", true, []),
		new Element("Db", true, []),
		new Element("Sg", true, []),
		new Element("Bh", true, []),
		new Element("Hs", true, []),
		new Element("Mt", true, []),
		new Element("Ds", true, []),
		new Element("Rg", true, []),
		new Element("Cn", true, []),
		new Element("Nh", true, []),
		new Element("Fl", true, []),
		new Element("Mc", true, []),
		new Element("Lv", true, []),
		new Element("Ts", true, []),
		new Element("Og", true, [])
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
	if (sortElements) {
		elementList.sort(function(a, b) {
			/*if (a.isFundamental && !b.isFundamental)
				return -1;
			else if (!a .isFundamental && b.isFundamental)
				return 1;
			else*/
				return a.name.localeCompare(b.name);
		});
	}
	
	let displayElementList = document.getElementById("displayElementList");
	let displayComboList = document.getElementById("displayComboList");
	let displayQueue = document.getElementById("displayQueue");
	
	let displayElementListContents = "<h2>Elements – (" + elementList.length + ")</h2><br/>";
	for (let i = 0; i < elementList.length; i++) {
		displayElementListContents += "<button onclick=\"RemoveElement('" + elementList[i].name + "')\" style=\"color: darkred; font-weight: bold;\">⃠</button> ";
		if (elementList[i].isFundamental)
			displayElementListContents += "<b>";
		
		displayElementListContents += elementList[i].name;
		
		if (elementList[i].isFundamental)
			displayElementListContents += "</b>";
		
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
	
	let displayComboListContents = "<h2>Combinations – (" + combinations.length + ")</h2><br/>";
	for (let i = 0; i < combinations.length; i++) {
		if (combinations[i].result != false) {
			displayComboListContents += "<button onclick=\"RemoveCombo(['" + combinations[i].components[0] + "', '" + combinations[i].components[1] + "'])\" style=\"color: darkred; font-weight: bold;\">⃠</button> " + combinations[i].components[0] + " + " + combinations[i].components[1] + " = " + combinations[i].result + "<br/>";
		}
		else {
			displayComboListContents += "<button onclick=\"RemoveCombo(['" + combinations[i].components[0] + "', '" + combinations[i].components[1] + "'])\" style=\"color: darkred; font-weight: bold;\">⃠</button> " + combinations[i].components[0] + " + " + combinations[i].components[1] + ": does not combine<br/>";
		}
	}
	displayComboList.innerHTML = displayComboListContents;
	
	let displayQueueList = "<h2>Queue – (" + queue.length + ")</h2><br/>";
	for (let i = 0; i < queue.length; i++) {
		displayQueueList += "<button onclick=\"AddNullCombo(['" + queue[i][0] + "', '" + queue[i][1] +"'])\" style=\"color: darkred; font-weight: bold;\">⃠</button> " + queue[i][0] + " + " + queue[i][1] + "<br/>";
	}
	displayQueue.innerHTML = displayQueueList;
	
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
			comboPiece2List += "<option value=\"" + elementList[i].name + "\">" + elementList[i].name + "</option>";
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
			break;
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
			break;
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
			break;
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

function SaveJSONFile() {
	const a = document.createElement("a");
	a.href = URL.createObjectURL(new Blob([JSON.stringify({"elements": elementList, "combinations": combinations}, null, 2)], {
		type: "text/plain"
	}));
	a.setAttribute("download", "data.json");
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

function LoadJSONFile() {
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

function RemoveElement(element) {
	for (let i = 0; i < elementList.length; i++) {
		if (elementList[i].name == element) {
			elementList.splice(i, 1);
			
			for (let j = 0; j < queue.length; j++) {
				if (queue[j][0] == element || queue[j][1] == element) {
					queue.splice(j, 1);
					j--;
				}
			}
			
			for (let j = 0; j < combinations.length; j++) {
				if (combinations[j].components[0] == element || combinations[j].components[1] == element || combinations[j].result == element) {
					RemoveCombo(combinations[j].components);
				}
			}
			
			break;
		}
	}
	PullFromQueue();
}

function RemoveCombo(recipe) {
	for (let k = 0; k < combinations.length; k++) {
		if ((combinations[k].components[0] == recipe[0] && combinations[k].components[1] == recipe[1])
			|| (combinations[k].components[0] == recipe[1] && combinations[k].components[1] == recipe[0])) {
			for (let l = 0; l < elementList.length; l++) {
				if (elementList[l].name == combinations[k].result) {
					for (let m = 0; m < elementList[l].recipes.length; m++) {
						if ((elementList[l].recipes[m][0] == recipe[0] && elementList[l].recipes[m][1] == recipe[1])
						|| (elementList[l].recipes[m][0] == recipe[1] && elementList[l].recipes[m][1] == recipe[0])) {
							elementList[l].recipes.splice(m, 1);
							m--;
						}
					}
					if (elementList[l].recipes.length <= 0 && elementList[l].isFundamental == false) {
						RemoveElement(elementList[l].name);
					}
					break;
				}
			}
			
			combinations.splice(k, 1);
			break;
		}
	}
	
	PullFromQueue();
}

function AddNullCombo(recipe) {
	combinations.push(new Combination(false, recipe));
	RemoveFromQueue(recipe);
	
	PullFromQueue();
}

function ToggleSort() {
	let checkBox = document.getElementById("sortCheckbox");
	
	sortElements = checkBox.checked;
	
	PullFromQueue();
}
function ToggleDarkMode() {
	let checkBox = document.getElementById("darkMode");
	let inverter = document.getElementById("inverter");
	
	if (checkBox.checked) {
		inverter.style.opacity = "1";
	}
	else {
		inverter.style.opacity = "0";
	}
}





function LaunchPlayer() {
	document.getElementById("leftPanel").style.width = "45.75vw";
	document.getElementById("playButton").style.right = "52vw";
	document.getElementById("playButton").innerHTML = "Apply current Editor rules (will restart game)";
	document.getElementById("displayElementList").classList.add("reduceFontSize");
	document.getElementById("displayComboList").classList.add("reduceFontSize");
	document.getElementById("displayQueue").classList.add("reduceFontSize");
	
	playElementList = JSON.parse(JSON.stringify(elementList));
	playCombinations = JSON.parse(JSON.stringify(combinations));
	//TODO: Automatically fill in all undetermined combinations with false
	
	playInventory = [];
	for (let i = 0; i < playElementList.length; i++) {
		if (playElementList[i].isFundamental)
			playInventory.push(playElementList[i]);
	}
	
	playInventory = JSON.parse(JSON.stringify(playInventory));
	
	for (let i = 0; i < playInventory.length; i++) {
		playInventory[i].recipes = [];
	}
	
	playInventoryCombos = [];
	
	actualCombosNumber = 0;
	for (let i = 0; i < playCombinations.length; i++) {
		if (playCombinations[i].result != false) {
			actualCombosNumber++;
		}
	}
	
	
	if (playInventory.length == 0)
		document.getElementById("playerOutput").innerHTML = "You don't have any fundamental elements.";
	else
		document.getElementById("playerOutput").innerHTML = "";
	
	RefreshPlayData();
}

function RefreshPlayData() {
	if (sortElements) {
		playElementList.sort(function(a, b) {
				return a.name.localeCompare(b.name);
		});
	}
	
	let elementsDiscoveredList = document.getElementById("elementsDiscoveredList");
	let combosDiscoveredList = document.getElementById("combosDiscoveredList");
	let fullyExploredList = document.getElementById("fullyExploredList");
	
	let playFullyExplored = [];
	let elementsDiscoveredListContents = "<h2>Elements – (" + playInventory.length + "/" + playElementList.length + ")</h2><br/>";
	for (let i = 0; i < playInventory.length; i++) {
		for (let j = 0; j < playElementList.length; j++) {
			if (playElementList[j].name == playInventory[i].name) {
				let playElement = playElementList[j];
				
				if (playElement.isFundamental)
					elementsDiscoveredListContents += "<b>";
				
				elementsDiscoveredListContents += playElement.name;
				
				if (playElement.isFundamental) {
					elementsDiscoveredListContents += "</b>";
				}
				
				if (playInventory[i].recipes.length == playElement.recipes.length) {
					playFullyExplored.push({"name": playElement.name, "recipeCount": playElement.recipes.length});
				}
				
				if (playElement.recipes.length == 0)
					elementsDiscoveredListContents += " – unobtainable<br/>";
				else {
					elementsDiscoveredListContents += " – (" + playInventory[i].recipes.length + "/" + playElement.recipes.length + ")";
					if (playInventory[i].recipes.length > 0) {
						elementsDiscoveredListContents += ":<br/>"
						for (let k = 0; k < playInventory[i].recipes.length; k++) {
							elementsDiscoveredListContents += "    " + playInventory[i].recipes[k][0] + " + " + playInventory[i].recipes[k][1] + "<br/>";
						}
					}
					else {
						elementsDiscoveredListContents += "<br/>"
					}
				}
				
				break;
			}
		}
	}
	
	elementsDiscoveredList.innerHTML = elementsDiscoveredListContents;
	
	let actualCombosDiscoveredNumber = 0;
	for (let i = 0; i < playInventoryCombos.length; i++) {
		if (playInventoryCombos[i].result != false) {
			actualCombosDiscoveredNumber++;
		}
	}
	
	let combosDiscoveredListContents = "<h2>Combinations – (" + actualCombosDiscoveredNumber + "/" + actualCombosNumber + ")</h2><br/>";
	for (let i = 0; i < playInventoryCombos.length; i++) {
		combosDiscoveredListContents += playInventoryCombos[i].components[0] + " + " + playInventoryCombos[i].components[1] + " = " + playInventoryCombos[i].result + "<br/>";
	}
	combosDiscoveredList.innerHTML = combosDiscoveredListContents;
	
	let fullyExploredListContents = "<h2>Fully Explored – (" + playFullyExplored.length + "/" + playElementList.length + ")</h2><br/>";
	for (let i = 0; i < playFullyExplored.length; i++) {
		fullyExploredListContents += playFullyExplored[i].name + " – (" + playFullyExplored[i].recipeCount + " recipes)<br/>";
	}
	fullyExploredList.innerHTML = fullyExploredListContents;
	
	let comboOption1 = document.getElementById("comboOption1");
	let comboOption2 = document.getElementById("comboOption2");
	let manualAddSelector = document.getElementById("manualAddSelector");
	
	let comboOptionContents = "";
	for (let i = 0; i < playInventory.length; i++) {
		if (playFullyExplored.includes(playInventory[i].name) == false) {
			comboOptionContents += "<option value=\"" + playInventory[i].name + "\">" + playInventory[i].name + "</option>";
		}
	}
	comboOption1.innerHTML = comboOptionContents;
	comboOption2.innerHTML = comboOptionContents;
	
	let manualAddOptions = "";
	for (let i = 0; i < playElementList.length; i++) {
		let inInventory = false;
		for (let j = 0; j < playInventory.length; j++) {
			if (playInventory[j].name == playElementList[i].name) {
				inInventory = true;
				break;
			}
		}
		if (inInventory == false) {
			manualAddOptions += "<option value=\"" + playElementList[i].name + "\">" + playElementList[i].name + "</option>";
		}
	}
	manualAddSelector.innerHTML = manualAddOptions;
}

function CombineElements() {
	let comboOption1 = document.getElementById("comboOption1");
	let comboOption2 = document.getElementById("comboOption2");
	let comboOutput = document.getElementById("comboOption2");
	
	if (comboOption1.value.length <= 0 || comboOption2.value.length <= 0) return;
	
	let comboOutputText = "You made ";
	for (let i = 0; i < playCombinations.length; i++) {
		if ((playCombinations[i].components[0] == comboOption1.value && playCombinations[i].components[1] == comboOption2.value)
		|| (playCombinations[i].components[1] == comboOption1.value && playCombinations[i].components[0] == comboOption2.value)) {
			if (playCombinations[i].result == false) {
				comboOutputText = "These elements do not combine";
				
				let inCombinations = false;
				for (let k = 0; k < playInventoryCombos.length; k++) {
					if ((playCombinations[i].components[0] == playInventoryCombos[k].components[0] && playCombinations[i].components[1] == playInventoryCombos[k].components[1])
					|| (playCombinations[i].components[0] == playInventoryCombos[k].components[1] && playCombinations[i].components[1] == playInventoryCombos[k].components[0])) {
						inCombinations = true;
						break;
					}
				}
				
				if (!inCombinations) {
					playInventoryCombos.push(new Combination(playCombinations[i].result, playCombinations[i].components))
				}
				
				break;
			}
			for (let j = 0; j < playElementList.length; j++) {
				if (playElementList[j].name == playCombinations[i].result) {
					comboOutputText += playElementList[j].name;
					let inInventory = false;
					for (let k = 0; k < playInventory.length; k++) {
						if (playInventory[k].name == playCombinations[i].result) {
							inInventory = true;
							break;
						}
					}
					if (!inInventory) {
						playInventory.push(new Element(playCombinations[i].result, false, [[playCombinations[i].components[0], playCombinations[i].components[1]]]));
						
						let inCombinations = false;
						for (let k = 0; k < playInventoryCombos.length; k++) {
							if ((playCombinations[i].components[0] == playInventoryCombos[k].components[0] && playCombinations[i].components[1] == playInventoryCombos[k].components[1])
							|| (playCombinations[i].components[0] == playInventoryCombos[k].components[1] && playCombinations[i].components[1] == playInventoryCombos[k].components[0])) {
								inCombinations = true;
								break;
							}
						}
						
						if (!inCombinations) {
							playInventoryCombos.push(new Combination(playCombinations[i].result, playCombinations[i].components))
						}
					}
					
					break;
				}
			}
			
			break;
		}
	}
	
	if (comboOutputText == "You made ") {
		comboOutputText = "Combination does not appear in dataset";
	}
	
	comboOutput.innerHTML = comboOutputText + "."
	
	RefreshPlayData();
}

function GetHint() {
	let possibleCombos = [];
	for (let i = 0; i < playCombinations.length; i++) {
		let componentsInInventory = 0;
		for (let j = 0; j < playInventory.length; j++) {
			if (playCombinations[i].components[0] == playInventory[j].name)
				componentsInInventory++;
			if (playCombinations[i].components[1] == playInventory[j].name)
				componentsInInventory++;
			
			if (componentsInInventory >= 2) {
				let inInventory = false;
				for (let k = 0; k < playInventory.length; k++) {
					if (playInventory[k].name == playCombinations[i].result) {
						inInventory = true;
						break;
					}
				}
				if (!inInventory) {
					possibleCombos.push(playCombinations[i].result);
					break;
				}
			}
		}
	}
	
	// TODO: If there are no undiscovered elements, find undiscovered combos
	
	let hintResult = "";
	if (possibleCombos.length > 0) {
		hintResult = "Try making " + possibleCombos[Math.floor(Math.random() * possibleCombos.length)] + ".";
	}
	else {
		hintResult = "You have discovered all the elements."
	}
	
	document.getElementById("hintOutput").innerHTML = hintResult;
}

function ManualAddElement() {
	manualAddSelector = document.getElementById("manualAddSelector");
	
	if (manualAddSelector.value.length <= 0) return;
	
	for (let i = 0; i < playElementList.length; i++) {
		if (playElementList[i].name == manualAddSelector.value) {
			playInventory.push(new Element(playElementList[i].name, playElementList[i].isFundamental, []));
			
			break;
		}
	}
	
	RefreshPlayData();
}