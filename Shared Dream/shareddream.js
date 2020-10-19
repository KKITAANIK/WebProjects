let button = [];

let time;
let timecodes = ["Morning", "Afternoon", "Evening", "Night"];
let day = 1;

let pcname = "";
let gender;
let isconj;

function Styling() {
    let b = [
        document.getElementById("b0"),
        document.getElementById("b1"),
        document.getElementById("b2"),
        document.getElementById("b3"),
        document.getElementById("b4"),
        document.getElementById("b5"),
        document.getElementById("b6"),
        document.getElementById("b7")
    ];

    let topbarColors = ["#fadadd", "#b0e2ff", "#726581", "#1f2933"]; //maybe try this later? https://www.color-hex.com/color-palette/14359
    let textColors   = ["#dec2c4", "#9cc9e3", "#8e7ea1", "#2e3d4c"]; //basically what I'm already using https://www.schemecolor.com/day-night-dark.php
    let buttonColors = ["#c5acae", "#8bb3ca", "#b19dc9", "#394c5f"];
    let fontColors   = ["#000000", "#000000", "#ffffff", "#ffffff"];
        
    while (time > 3) {
        time -=4;
        day++;
    }

    document.getElementById("topbar").innerHTML = "Day " + day.toString() + ", " + timecodes[time];

    document.getElementById("topbar").style.backgroundColor = topbarColors[time];
    document.getElementById("text").style.backgroundColor = textColors[time];
    document.getElementById("buttons").style.backgroundColor = textColors[time];
    document.getElementById("topbar").style.color = fontColors[time];
    document.getElementById("text").style.color = fontColors[time];
    document.getElementById("buttons").style.color = fontColors[time];

    let textheight = 0;
    for (let i = 0; i < 8; i++) {
        if(b[i].disabled !=  true) {
            b[i].style.display = "flex";
            b[i].style.backgroundColor = buttonColors[time];
            b[i].style.color = fontColors[time];
            textheight += 8;
        }
        else {
            b[i].style.display = "none";
        }
    }
    document.getElementById("buttons").style.height = (textheight - 1).toString() + "vh";
    document.getElementById("text").style.height = "calc(" + (92 - textheight).toString() + "vh - 2vw)";
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
        document.getElementById(this.id).innerHTML = text;
        document.getElementById(this.id).onclick = func;
        Styling();
    }

    disable() {
        // disable the element and empty its attributes
        document.getElementById(this.id).disabled = true;
        document.getElementById(this.id).innerHTML = "";
        document.getElementById(this.id).onclick = "";
    }
}

function FillButtons() {
    for (let i = 0; i < 8; i++)
        button[i] = new Button(i);
}

function ClearButtons() {
    for (let i = 0; i< button.length; i++) {
        button[i].disable();
    }
    Styling();
}

function Output(output) {
    document.getElementById("text").innerHTML = output;
}

function Rand(min, max) { //both included
    return Math.floor(Math.random() * (max - min) ) + min;
}

function PassTime(num) {
    time += num;
    Styling();
}

function Quit() {
    if (confirm("Are you sure you want to quit?")) {
        window.location.href = 'https://kkitaanik.github.io/WebProjects/';
    }
}

function Start() {
    Output("Please enter your name.<br><input id=\"nameInput\" class=\"input\">");
    let nameInput = document.getElementById("nameInput");
    nameInput.style.backgroundColor = document.getElementById("b1").style.backgroundColor;
    nameInput.style.color = document.getElementById("text").style.color;
    nameInput.style.borderColor = nameInput.style.color;    
    nameInput.style.marginTop = "1vw";

    ClearButtons();
    button[0].update(NameCheck, "Submit");
}

function NameCheck() {
    pcname = document.getElementById("nameInput").value;
    if (pcname.length < 1) {
        Start();
    }
    else {
        Gender();
    }
}

function Gender() {
    let output = "Please select a gender and associated pronouns, or fill out the following fields with your own.<br>\
        <br>Subject: <input id=\"subject\" class=\"input\">\
        <br>Object: <input id=\"object\" class=\"input\">\
        <br>Pronominal Adjective: <input id=\"proadj\" class=\"input\">\
        <br>Predicative Adjective: <input id=\"preadj\" class=\"input\">\
        <br>Reflexive: <input id=\"reflex\" class=\"input\">\
        <br>\"Is\" Contraction (must end in 's or 're): <input id=\"contrac\" class=\"input\">";
    Output(output);

    let subject = document.getElementById("subject");
    subject.style.backgroundColor = document.getElementById("b1").style.backgroundColor;
    subject.style.color = document.getElementById("text").style.color;
    subject.style.borderColor = subject.style.color;
    let object = document.getElementById("object");
    object.style.backgroundColor = document.getElementById("b1").style.backgroundColor;
    object.style.color = document.getElementById("text").style.color;
    object.style.borderColor = object.style.color;
    let proadj = document.getElementById("proadj");
    proadj.style.backgroundColor = document.getElementById("b1").style.backgroundColor;
    proadj.style.color = document.getElementById("text").style.color;
    proadj.style.borderColor = proadj.style.color;
    let preadj = document.getElementById("preadj");
    preadj.style.backgroundColor = document.getElementById("b1").style.backgroundColor;
    preadj.style.color = document.getElementById("text").style.color;
    preadj.style.borderColor = preadj.style.color;
    let reflex = document.getElementById("reflex");
    reflex.style.backgroundColor = document.getElementById("b1").style.backgroundColor;
    reflex.style.color = document.getElementById("text").style.color;
    reflex.style.borderColor = reflex.style.color;
    let contrac = document.getElementById("contrac");
    contrac.style.backgroundColor = document.getElementById("b1").style.backgroundColor;
    contrac.style.color = document.getElementById("text").style.color;
    contrac.style.borderColor = contrac.style.color;

    //subject, object, pronominal adjective, predicative adjective, reflexive, contraction
    ClearButtons();
    button[0].update(Confirm.bind(null, "custom"), "Submit Custom Pronouns");
    button[1].update(Confirm.bind(null, ["he", "him", "his", "his", "himself", "he's"]), "Masculine (he/him/his/his/himself/he's)");
    button[2].update(Confirm.bind(null, ["she", "her", "her", "hers", "herself", "she's"]), "Feminine (she/her/her/hers/herself/she's)");
    button[3].update(Confirm.bind(null, ["they", "them", "their", "theirs", "themself", "they're"]), "Nonbinary (they/them/their/theirs/themself/they're)");
}

function Confirm(newgender) {
    let emptypronoun = 0;
    if (newgender == "custom") {
        newgender = [document.getElementById("subject").value, document.getElementById("object").value, document.getElementById("proadj").value, document.getElementById("preadj").value, document.getElementById("reflex").value, document.getElementById("contrac").value];  
        for (let i = 0; i < 6; i++) {
            if (newgender[i].length < 1) {
                emptypronoun++;
            }
        }
    }
    let lastchars = newgender[5].charAt(newgender[5].length - 2).toString() + newgender[5].charAt(newgender[5].length - 1).toString();
    if (lastchars != "'s" && lastchars != "re") {
        emptypronoun++;
    }
    else if (lastchars == "'s") {
        isconj = "is";
    }
    else {
        isconj = "are";
    }
    if (emptypronoun > 0) {
        Gender();
    }
    else {
        gender = newgender;
        Output("Your name is " + pcname + ". You use the following pronouns: " + gender[0] + "/" + gender[1] + "/" + gender[2] + "/" + gender[3] + "/" + gender[4] + "/" + gender[5] + ". Is this correct?");
        ClearButtons();
        button[0].update(Awaken, "Yes");
        button[1].update(Start, "No");
    }
}