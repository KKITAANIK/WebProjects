var lsd = 0;
var pounds = 0;
var shillings = 0;
var pence = 0;
var minutes = 0;
var hours = 0;
var days = 1;
var months = 1;
var years = 1;

var xpos = 13;
var ypos = 12;

function UpdateMeters() {
    document.getElementById("health").innerHTML = "Health : ".concat(p.health.toString());
    document.getElementById("strength").innerHTML = "Strength: ".concat(p.strength.toString());
    document.getElementById("constitution").innerHTML = "Constitution: ".concat(p.constitution.toString());
    document.getElementById("agility").innerHTML = "Agility: ".concat(p.agility.toString());
    document.getElementById("perception").innerHTML = "Perception: ".concat(p.perception.toString());
    document.getElementById("control").innerHTML = "Control: ".concat(p.control.toString());
    document.getElementById("cleverness").innerHTML = "Cleverness: ".concat(p.cleverness.toString());
                        
    pence = lsd;
    shillings = 0;
    pounds = 0;
    while (pence >= 12) {
        shillings++;
        pence -= 12;
    }
    while (shillings >= 20) {
        pounds++;
        shillings -= 20;
    }
    if (pounds > 0) {
        if (pence == 0) {
            if (shillings == 0) {
                document.getElementById("lsd").innerHTML = "Funds: £".concat(pounds.toString());
            }
            else {
                document.getElementById("lsd").innerHTML = "Funds: £".concat(pounds.toString(), ". ", shillings.toString(), "s. &mdash;");
            }
        }
        else {
            document.getElementById("lsd").innerHTML = "Funds: £".concat(pounds.toString(), ". ", shillings.toString(), "s. ", pence.toString(), "d.");
        }
    }
    else if (shillings > 0) {
        if (pence == 0) {
            document.getElementById("lsd").innerHTML = "Funds: ".concat(shillings.toString(), "s. &mdash;");
        }
        else {
            document.getElementById("lsd").innerHTML = "Funds: ".concat(shillings.toString(), "s. ", pence.toString(), "d.");
        }
    }
    else if (pence != 0) {
        document.getElementById("lsd").innerHTML = "Funds: ".concat(pence.toString(), "d.");
    }
    else {
        document.getElementById("lsd").innerHTML = "Funds: &mdash;";
    }

    while(minutes >= 60) {
        hours++;
        minutes -= 60;
    }
    while(hours >= 20) {
        days++;
        hours -= 20;
    }
    while(days > 40) {
        months++;
        days -= 40;
    }
    while(months > 10) {
        years++;
        months -= 10;
    }
    if (minutes < 10) {
        document.getElementById("time").innerHTML = "Time: ".concat(hours.toString(), ":0", minutes.toString(), ", ", days.toString(), "/", months.toString(), "/", years.toString());
    }
    else {
        document.getElementById("time").innerHTML = "Time: ".concat(hours.toString(), ":", minutes.toString(), ", ", days.toString(), "/", months.toString(), "/", years.toString());    
    }
}

function Output(source) {
    source = "https://raw.githubusercontent.com/KKITAANIK/WebProjects/master/Plana/txts/".concat(source, ".txt");
    jQuery.get(source, function(data) {
        document.getElementById("output").innerHTML = data;
    });
}

function Buttons(b1, b2, b3, b4, b5, b6, b7, b8, b1func, b2func, b3func, b4func, b5func, b6func, b7func, b8func) {
    if (b1func == 0) {
        document.getElementById("b1").disabled = true;
        document.getElementById("b1").innerHTML = "";
    }
    else {
        document.getElementById("b1").disabled = false;
        document.getElementById("b1").innerHTML = b1;
        document.getElementById("b1").onclick = b1func;
    }
    if (b2func == 0) {
        document.getElementById("b2").disabled = true;
        document.getElementById("b2").innerHTML = "";
    }
    else {
        document.getElementById("b2").disabled = false;
        document.getElementById("b2").innerHTML = b2;
        document.getElementById("b2").onclick = b2func;
    }
    if (b3func == 0) {
        document.getElementById("b3").disabled = true;
        document.getElementById("b3").innerHTML = "";
    }
    else {
        document.getElementById("b3").disabled = false;
        document.getElementById("b3").innerHTML = b3;
        document.getElementById("b3").onclick = b3func;
    }
    if (b4func == 0) {
        document.getElementById("b4").disabled = true;
        document.getElementById("b4").innerHTML = "";
    }
    else {
        document.getElementById("b4").disabled = false;
        document.getElementById("b4").innerHTML = b4;
        document.getElementById("b4").onclick = b4func;
    }
    if (b5func == 0) {
        document.getElementById("b5").disabled = true;
        document.getElementById("b5").innerHTML = "";
    }
    else {
        document.getElementById("b5").disabled = false;
        document.getElementById("b5").innerHTML = b5;
        document.getElementById("b5").onclick = b5func;
    }
    if (b6func == 0) {
        document.getElementById("b6").disabled = true;
        document.getElementById("b6").innerHTML = "";
    }
    else {
        document.getElementById("b6").disabled = false;
        document.getElementById("b6").innerHTML = b6;
        document.getElementById("b6").onclick = b6func;
    }
    if (b7func == 0) {
        document.getElementById("b7").disabled = true;
        document.getElementById("b7").innerHTML = "";
    }
    else {
        document.getElementById("b7").disabled = false;
        document.getElementById("b7").innerHTML = b7;
        document.getElementById("b7").onclick = b7func;
    }
    if (b8func == 0) {
        document.getElementById("b8").disabled = true;
        document.getElementById("b8").innerHTML = "";
    }
    else {
        document.getElementById("b8").disabled = false;
        document.getElementById("b8").innerHTML = b8;
        document.getElementById("b8").onclick = b8func;
    }
}

function Menu() {
    
    document.getElementById("output").style.textAlign = "center";
    Output("mainmenu");
    if (document.getElementById("map").style.backgroundImage != "url(\"personicon.png\"), url(\"Plana220x330.png\")") {
        Buttons("New Game<span class=\"tooltip\">Start a new game.</span>", "Load Game<span class=\"tooltip\">Load a game from a save file.</span>", "Settings<span class=\"tooltip\">Change various settings.</span>", "", "", "", "", "Quit<span class=\"tooltip\">Exit the game.</span>", NewGame, LoadGame, Settings, 0, 0, 0, 0, Quit);
    }
    else {
        Buttons("New Game<span class=\"tooltip\">Start a new game.</span>", "Load Game<span class=\"tooltip\">Load a game from a save file.</span>", "Settings<span class=\"tooltip\">Change various settings.</span>", "Back<span class=\"tooltip\">Return to your game.</span>", "", "", "", "Quit<span class=\"tooltip\">Exit the game.</span>", NewGame, LoadGame, Settings, DisplayPos, 0, 0, 0, Quit);
    }

}
function Quit() {
    if (confirm("Are you sure you want to quit?")) {
        window.location.href = 'https://kkitaanik.github.io/WebProjects/'; 
    }
}
function Settings() {
    document.getElementById("output").style.textAlign = "left";
    document.getElementById("output").innerHTML = "This is the settings menu.";
    Buttons("", "", "", "", "", "", "", "Back", 0, 0, 0, 0, 0, 0, 0, Menu);
}
function LoadGame() {
    document.getElementById("output").style.textAlign = "left";
    document.getElementById("output").innerHTML = "Please upload a valid save file.<br /><input id=\"savInput\" type=\"file\" accept=\".txt\" multiple=\"false\">";
    Buttons("Next", "", "", "", "", "", "", "Back", InitializeSav, 0, 0, 0, 0, 0, 0, Menu);
}
function InitializeSav() {
    var savInput;
    jQuery.get(document.getElementById("savInput").value, function(data) {
        savInput = JSON.parse(data);

        p.health = savInput.health;
        p.sanity = savInput.sanity;
        p.strength = savInput.strength;
        p.constitution = savInput.constitution;
        p.agility = savInput.agility;
        p.perception = savInput.perception;
        p.control = savInput.control;
        p.cleverness = savInput.cleverness;

        p.race = savInput.race;
        p.gender = savInput.gender;
        p.hair = savInput.hair;
        p.eyes = savInput.eyes;
        p.oniSkin = savInput.oniSkin;
        p.background = savInput.background;
        p.affinity = savInput.affinity;
        p.name = savInput.name;
        p.corrupted = savInput.corrupted;
        p.diminished = savInput.diminished;
        
        lsd = savInput.lsd;
        minutes = savInput.minutes;
        hours = savInput.hours;
        days = savInput.days;
        months = savInput.months;
        years = savInput.years;
        xpos = savInput.xpos;
        ypos = savInput.ypos;
        
        UpdateMeters();
        document.getElementById("map").style.backgroundImage = "url(\"personicon.png\"), url(\"Plana220x330.png\")";
        DisplayPos();
    });
}
function SaveGame() {
    var savObj = {health: p.health, sanity: p.sanity, strength: p.strength, constitution: p.constitution, agility: p.agility, perception: p.perception, control: p.control, cleverness: p.cleverness, race: p.race, gender: p.gender, hair: p.hair, eyes: p.eyes, oniSkin: p.oniSkin, background: p.background, affinity: p.affinity, name: p.name, corrupted: p.corrupted, diminished: p.diminished, lsd: lsd, minutes: minutes, hours: hours, days: days, months: months, years: years, xpos: xpos, ypos: ypos};
    var text = JSON.stringify(savObj);
    document.getElementById("output").innerHTML = "Your save game has been downloaded as a .txt file. You may use this file to load this game with the corresponding button.";

    blob = new Blob([text], { type: 'text/plain' }),
    anchor = document.createElement('a');

    anchor.download = p.name.concat(" ", days.toString(), "-", months.toString(), "-", years.toString(), ".txt");
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
    anchor.click();
    DisplayPos();
}

function DisplayPos() {
    document.getElementById("output").style.textAlign = "left";
    if (p.diminished) {
        p.control = 0;
    }
    document.getElementById("ab1").innerHTML = "Save";
    document.getElementById("ab2").innerHTML = "Load";
    document.getElementById("ab3").innerHTML = "Menu";
    document.getElementById("ab1").disabled = false;
    document.getElementById("ab2").disabled = false;
    document.getElementById("ab3").disabled = false;
    var map = document.getElementById("map");
    var width = (map.offsetWidth - (map.offsetWidth * 0.2)).toString();
    var height = (map.offsetHeight - (iconheight = map.offsetHeight * 0.2)).toString();
    var x = xpos.toString();
    var y = ypos.toString();
    map.style.backgroundPosition = 
        "calc(" + width  + "px * " + x + " / 21) " +
        "calc(" + height + "px * " + y + " / 32), " +
        "calc(100% * " + x + " / 21) " +
        "calc(100% * "  + y + " / 32)";
    UpdateMeters();
    InteractCheck();
}
function InteractCheck() {
    if (xpos == 0 && ypos == 0){
        document.getElementById("output").innerHTML = "You are at 0, 0";
        Buttons("", "", "North", "", "", "West", "South", "East", 0, 0, North, 0, 0, West, South, East);
    }
    else {
        document.getElementById("output").innerHTML = xpos.toString().concat(", ", ypos.toString());
        /*if (xpos < 10) {
            if (ypos < 10) {
                Output("posdesc/0".concat(xpos.toString(), "0", ypos.toString()));
            }
            else {
                Output("posdesc/0".concat(xpos.toString(), ypos.toString()));
            }
        }
        else {
            if (ypos < 10) {
                Output("posdesc/".concat(xpos.toString(), "0", ypos.toString()));
            }
            else {
                Output("posdesc/".concat(xpos.toString(), ypos.toString()));
            }
        }*/
        if (t[ypos][xpos].move == "NESW") {
            Buttons("", "", "North", "", "", "West", "South", "East", 0, 0, North, 0, 0, West, South, East);
        }
        else if (t[ypos][xpos].move == "ESW") {
            Buttons("", "", "", "", "", "West", "South", "East", 0, 0, 0, 0, 0, West, South, East);
        }
        else if (t[ypos][xpos].move == "NSW") {
            Buttons("", "", "North", "", "", "West", "South", "", 0, 0, North, 0, 0, West, South, 0);
        }
        else if (t[ypos][xpos].move == "NEW") {
            Buttons("", "", "North", "", "", "West", "", "East", 0, 0, North, 0, 0, West, 0, East);
        }
        else if (t[ypos][xpos].move == "NES") {
            Buttons("", "", "North", "", "", "", "South", "East", 0, 0, North, 0, 0, 0, South, East);
        }
        else if (t[ypos][xpos].move == "SW") {
            Buttons("", "", "", "", "", "West", "South", "", 0, 0, 0, 0, 0, West, South, 0);
        }
        else if (t[ypos][xpos].move == "EW") {
            Buttons("", "", "", "", "", "West", "", "East", 0, 0, 0, 0, 0, West, 0, East);
        }
        else if (t[ypos][xpos].move == "ES") {
            Buttons("", "", "", "", "", "", "South", "East", 0, 0, 0, 0, 0, 0, South, East);
        }
        else if (t[ypos][xpos].move == "NW") {
            Buttons("", "", "North", "", "", "West", "", "", 0, 0, North, 0, 0, West, 0, 0);
        }
        else if (t[ypos][xpos].move == "NS") {
            Buttons("", "", "North", "", "", "", "South", "", 0, 0, 0, 0, 0, West, South, 0);
        }
        else if (t[ypos][xpos].move == "NE") {
            Buttons("", "", "North", "", "", "", "", "East", 0, 0, North, 0, 0, 0, 0, East);
        }
        else if (t[ypos][xpos].move == "") {
            document.getElementById("output").innerHTML = JSON.stringify(t);
        }
    }
}
function North() {
    days++;
    if (t[ypos][xpos].road.includes("N") == false || t[ypos - 1][xpos].road.includes("S") == false) {
        days++;
    }
    UpdateMeters();
    ypos--;
    DisplayPos();
}
function East() {
    days++;
    if (t[ypos][xpos].road.includes("E") == false || t[ypos][xpos + 1].road.includes("W") == false) {
        days++;
    }
    UpdateMeters();
    xpos++;
    DisplayPos();
}
function South() {
    days++;
    if (t[ypos][xpos].road.includes("S") == false || t[ypos + 1][xpos].road.includes("N") == false) {
        days++;
    }
    UpdateMeters();
    ypos++;
    DisplayPos();
}
function West() {
    days++;
    if (t[ypos][xpos].road.includes("W") == false || t[ypos][xpos - 1].road.includes("E") == false) {
        days++;
    }
    UpdateMeters();
    xpos--;
    DisplayPos();
}

function Battle(enemy) {
    while (p.health > 0 && enemy.health > 0 && p.sanity > 0) {
        var battleText = "You are being attacked by a";
        if (enemy.name.charAt(0) == 'a' || enemy.name.charAt(0) == 'e' || enemy.name.charAt(0) == 'i' || enemy.name.charAt(0) == 'o' || enemy.name.charAt(0) == 'u') {
            battleText = battleText.concat("n");
        }
        battleText = battleText.concat(" ", enemy.name, "!<br /><br />");
        Buttons("", "", "", "", "", "", "", "", 0, 0, 0, 0, 0, 0, 0, 0);
    }
}