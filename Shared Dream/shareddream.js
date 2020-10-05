let button = [];
let time = 0;
let timecodes = ["Morning", "Afternoon", "Evening", "Night"]
let day = 1;

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
    document.getElementById("topbar").innerHTML = "Day ".concat(day.toString(), ", ", timecodes[time]);

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
    document.getElementById("buttons").style.height = (textheight - 1).toString().concat("vh");
    document.getElementById("text").style.height = "calc(".concat((92 - textheight).toString(), "vh - 2vw)");
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

function Quit() {
    if (confirm("Are you sure you want to quit?")) {
        window.location.href = 'https://kkitaanik.github.io/WebProjects/';
    }
}

function PassTime() {
    time++;
    Styling();
}

function Start() {
    ClearButtons();
}