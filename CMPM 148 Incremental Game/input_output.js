// all utility functions that modify the style or visibility of the game will live here


let io = {}

io.writeIntoElement = function(value, id){
	document.getElementById(id).innerHTML = value;
}
io.appendIntoElement = function(value, id){
	document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + value + "<br>";
	document.getElementById(id).scrollTop = document.getElementById(id).scrollHeight;
}


io.writeValueIntoClass = function(value, class_name){
	let targets = document.getElementsByClassName(class_name)
	for (let i = 0; i < targets.length; i++){
		let e = targets[i]
			e.innerHTML = value;
	}
}

// modification for enabling / disabling input

io.enableButton = function (id){
	document.getElementById(id).disabled = false;
}

io.disableButton = function (id){
	document.getElementById(id).disabled = true;
}
// modification for turning elements visible, invisible
io.showElement = function (id){
	document.getElementById(id).style.visibility = "visible"
}

io.hideElement = function (id){
	document.getElementById(id).style.visibility = "hidden"
	}

// interactive list items
//requires a list of objects whichhave a "select" property
io.renderListIntoElement = function (id, list, selectedIndex, selectFunction, deselectFunction){
	let value = "";
	for (let i = 0; i < list.length; i++){
		if (selectedIndex.indexOf(i) != -1){
			value += "<li onclick="+ deselectFunction + "(" + i + ") class='selected'>" + list[i].label + "</li>"
		}
		else {
			value += "<li onclick="+selectFunction+"(" + i + ") >" + list[i].label + "</li>"
		}
	}
	document.getElementById(id).innerHTML = value;
	}
	
	
// interactive list items radio buttons
io.renderListIntoElementUI = function (id, list, controlButtons, toggleFunction){
	let value = "";
	for (let i = 0; i < list.length; i++){
		value += "<li>"+ list[i].label + "</li>"
		let state = list[i].state
		for (let c = 0; c < controlButtons.length; c++){
			value += "<button onclick="+toggleFunction+"("+ i + ",'" + controlButtons[c].code + "') "
			if (state === controlButtons[c].code) value += " class='selected' "
			value += ">" + controlButtons[c].display + "</button>"
		}
	}
	document.getElementById(id).innerHTML = value;
}



// panel and stage display controls
io.showStage = function (game){
	game.stages.forEach(function(stage){
		document.getElementById(stage).style.display = "none"
	});
		document.getElementById(game.currentStage).style.display = "block"
		this.showPanel(game)
}

io.showPanel = function (game){
	game.panels[game.currentStage].forEach(function(panel){
		document.getElementById(panel).style.display = "none"
	});
		document.getElementById(game.currentPanel).style.display = "block"
}