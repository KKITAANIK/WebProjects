let buttons = [[], [], []];

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
        document.getElementById(this.id).onclick = func;
        $("#" + this.id.toString()).textfill({
            maxFontPixels: 0.015 * screen.width
        });
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
        for (let j = 0; j < 7; j++) {
            buttons[i][j].disable();
        }
    }
}

class Character {
    // initialize
    constructor(name, sexattr, gender, isconj) {
        this.name = name;
        // sexattr must be an array with three binary values
        this.breasts = sexattr[0];
        this.vagina = sexattr[1];
        this.penis = sexattr[2];
        //Gender: subject, object, pronominal adjective, predicative adjective, reflexive, "is" contraction
        this.subject = gender[0];
        this.object = gender[1];
        this.proadj = gender[2];
        this.predadj = gender[3];
        this.reflex = gender[4];
        this.contrac = gender[5];
        this.isconj = isconj;
    }
}