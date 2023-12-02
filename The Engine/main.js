let buttons = [[], [], []];
let displayHeights = ["calc(90vh ", "calc(80vh ", "calc(70vh "];
let mouseDown = 0;
let minute = 0;
let hour = 0;
let day = 0;
let locale = "Nowhere";
let inStart = false;
let savedata = {};

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

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
        document.getElementById(this.id).onclick = function(){
            document.getElementById(this.id).disabled = true;
            ClearButtons();
            func();
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
                        break rows;
                    }
                }
                // if you get this far there are no buttons
                document.getElementById("display").style.height = "100vh";
                document.getElementById("displaycontent").style.height = "calc(100vh - 2vw)";
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
        //JumpStart();
        Start(1);
    } else {
        console.log("No cookie found; executing first-time start")
        Start(1);
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

async function SlowType(output, startwait = 0, delay = 25) {
    let displaycontent = document.getElementById("displaycontent");
    chararray = output.split("");
    totaloutput = displaycontent.innerHTML + "<span class=\"devtext\">";
    let italicbool = false;
    if (startwait > 0) {
        await timer(startwait);
    }
    for (let i = 0; i < chararray.length; i++) {
        if (chararray[i] == '|') {
            chararray[i] = "<br/>"
        }
        else if (chararray[i] == 'Ⅴ') {
            chararray[i] = "";
            if (!mouseDown) {
                await timer(500 - delay);
            }
        }
        else if (chararray[i] == "*") {
            if (italicbool == false) {
                chararray[i] = "<i>"
                italicbool = true;
            }
            else if (italicbool == true) {
                chararray[i] = "</i>";
                italicbool = false;
            }
        }
        if (!mouseDown) {
            await timer(delay);
        }
        displaycontent.innerHTML = totaloutput + chararray[i];
        totaloutput += chararray[i];
        displaycontent.scrollTo(0, displaycontent.scrollHeight);
    }
}

function UC(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}