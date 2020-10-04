let buttons = [];

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
        
    let textheight = 0;
    for (let i = 0; i < 8; i++) {
        if(b[i].disabled !=  true) {
            b[i].style.display = "flex";
            textheight += 8;
        }
        else {
            b[i].style.display = "none";
        }
    }
    document.getElementById("buttons").style.height = "calc(".concat(textheight.toString().concat("vh"), " - 1vh)");
    document.getElementById("text").style.height = "calc(".concat((92 - textheight).toString(), "vh - 2vw)");
    console.log(textheight);
    console.log(92 - textheight);
    console.log(document.getElementById("buttons").style.height);
    console.log(document.getElementById("text").style.height);

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
        buttons[i] = new Button(i);
    
}

function ClearButtons() {
    for (let i = 0; i< buttons.length; i++) {
        buttons[i].disable();
    }
    Styling();
}

function Output(output) {
    document.getElementById("text").innerHTML = output;
}

function Start() {
    ClearButtons();
    buttons[0].update(Start, "Start")
    buttons[1].update(Start, "Start")
    buttons[2].update(Start, "Start")
}