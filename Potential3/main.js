let buttons = [[], [], []];
let displayHeights = ["calc(90vh ", "calc(80vh ", "calc(70vh "];
let tooltipHeights = ["12.5vh", "22.5vh", "32.5vh"];
let numButtonRows;
let mouseDown = 0;
let minute = 0;
let hour = 0;
let day = 0;
let locale = "Internal";
let inStart = true;
let savedata = {};

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

function Append(output) {
    document.getElementById("displaycontent").innerHTML += output;
}

function ClearOutput() {
    document.getElementById("displaycontent").innerHTML = "";
}

class Button {
    constructor(num) {
        // initialize the button
        this.num = num;
        this.id = "b" + num;
    }

    disable() {
        // disable the element and empty its attributes
        document.getElementById(this.id).disabled = true;
        document.getElementById(this.id).innerHTML = "";
        document.getElementById(this.id).onclick = "";

        UpdateButtonAreaHeight();
    }

    update(func, text) {
        // update the attributes
        document.getElementById(this.id).disabled = false;
        document.getElementById(this.id).innerHTML = "<span class=\"buttoncontent\">" + text + "</span>";
        document.getElementById(this.id).onclick = function(){
            document.getElementById(this.id).disabled = true;
            document.getElementById(this.id).innerHTML = "";
            document.getElementById(this.id).onclick = "";
            func();
        }
        $("#" + this.id.toString()).textfill({
            maxFontPixels: 0.015 * screen.width
        });

        UpdateButtonAreaHeight();
    }
}

function ClearButtons() {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 7; j++) {
            buttons[i][j].disable();
        }
    }
}

function UpdateButtonAreaHeight() {
    if (inStart == false) {
        rows:
            for (let i = 2; i >= 0; i -= 1) {
        columns:
                for (let j = 0; j < 7; j++) {
                    if (document.getElementById(buttons[i][j].id).disabled == false) {
                        document.getElementById("display").style.height = displayHeights[i] + "+ 0.25vw)";
                        document.getElementById("displaycontent").style.height = displayHeights[i] + "- 2.5vw)";
                        let tooltips = document.getElementsByClassName("tooltip");
                        for (let i = 0; i < tooltips.length; i++) {
                            tooltips[i].style.bottom = tooltipHeights[i];
                        }
                        numButtonRows = i + 1;                        
                        break rows;
                    }
                }
                // if you get this far there are no buttons
                document.getElementById("display").style.height = "100vh";
                document.getElementById("displaycontent").style.height = "calc(100vh - 2vw)";
                let tooltips = document.getElementsByClassName("tooltip");
                for (let i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.bottom = "2.5vh";
                }
                numButtonRows = 0; 
            }
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
    document.getElementById("time").innerHTML = hour.toString() + ":" + minute + ", Day " + day;
    minute = parseInt(minute);
}

function setCookie(cname, cvalue) {
    const d = new Date(2147483647 * 1000);
    // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
  
function checkCookie() {
    let savedata = getCookie("savedata");
    if (savedata != "") {
        console.log("Savedata Found:");
        savedata = JSON.parse(savedata);
        console.log(savedata);
        setCookie("savedata", JSON.stringify(savedata))
        console.log("Savedata Expiry Refreshed")
        JumpStart();
    } else {
        console.log("No cookie found; executing first-time start")
        Start(0);
    }
}

function SaveGame() {
    savedata["pcname"] = pcname;
    savedata["pcgender"] = pcgender;
    savedata["flags"] = flags;

    setCookie("savedata", JSON.stringify(savedata))

    console.log("Game Saved:");
    console.log(savedata);
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