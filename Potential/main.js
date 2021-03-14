let buttons = [[], [], []];

function FillButtons() {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 5; j++) {
            buttons[i][j] = new Button(i.toString() + j.toString());
        }
    }
}

function Output(output) {
    document.getElementById("displaycontent").innerHTML = output;
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
    }

    disable() {
        // disable the element and empty its attributes
        document.getElementById(this.id).disabled = true;
        document.getElementById(this.id).innerHTML = "";
        document.getElementById(this.id).onclick = "";
    }
}
function ClearButtons() {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 5; j++) {
            buttons[i][j].disable();
        }
    }
}