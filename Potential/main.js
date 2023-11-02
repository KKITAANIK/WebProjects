let buttons = [[], [], []];
var minute = 0;
var hour = 0;
var day = 0;
var locale = "An Empty Space";

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

function InToCm(val) {
    return Math.round((val / 0.3937) * 10) / 10;
}

function CmToIn(val) {
    return Math.round((val * 0.3937) * 10) / 10;
}

class Character {
    // initialize
    constructor(name, sexattr, gender, appearance, species) {
        if (name != undefined) {
            this.name = name;
        }
        // sexattr must be an array with three binary values
        if (sexattr != undefined) {
            this.breasts = sexattr[0];
            this.vagina = sexattr[1];
            this.penis = sexattr[2];
        }
        // Gender: subject, object, pronominal adjective, predicative adjective, reflexive, "is" contraction
        if (gender != undefined) {
            this.subject = gender[0];
            this.object = gender[1];
            this.proadj = gender[2];
            this.predadj = gender[3];
            this.reflex = gender[4];
            this.contrac = gender[5];
            this.isconj = gender[6];
        }
        // Appearance
        if (appearance != undefined) {
            if (metric == 0) {
                this.height = CmToIn(appearance[0]);
            }
            else if (metric == 1) {
                this.height = appearance[0];
            }
            this.thickness = appearance[1];
            this.musculature = appearance[2];
            this.breastSize = appearance[3];
            if (metric == 0) {
                this.penisSize = CmToIn(appearance[4]);
            }
            else if (metric == 1) {
                this.penisSize = appearance[4];
            }
            this.skinTone = appearance[5];
            this.hairColor = appearance[6];
            this.eyeColor = appearance[7];
        }
        this.species = species;
    }
}

function DisplayAppearance() {
    let output = "<p>You are " + player.name + ". You are a ";
    if (metric == 0) {
        output += Math.floor(player.height / 12).toString() + "'" + (player.height - (Math.floor(player.height / 12) * 12)).toString();
    }
    else if (metric == 1) {
        output += player.height.toString() + "cm tall";
    }
    output += " " + player.species + " with ";
    if (player.breasts == 1) {
        output += player.breastSize + "-cup breasts";
    }
    else if (player.breasts == 0) {
        output += "a flat chest";
    }
    if (player.vagina == 1 && player.penis == 1) {
        output += ", ";
    }
    else if (player.vagina == 0 && player.penis == 0) {
        output += " and nothing between your legs";
    }
    else {
        output += " and ";
    }
    if (player.penis == 1) {
        output += "a " + player.penisSize.toString();
        if (metric == 0) {
            output += " inch";
        }
        else if (metric == 0) {
            output += "cm";
        }
        output += " penis";
        if (player.vagina == 1) {
            output += ", and ";
        }
    }
    if (player.vagina == 1) {
        output += "a vagina";
    }
    output += ". Your overall build could be described as " + player.thickness + " and " + player.musculature + ". You have " + player.skinTone + " skin, " + player.hairColor + " hair, and " + player.eyeColor + " eyes. You use " + player.subject + "/" + player.object + " pronouns.</p>";
    return output;
}

function test() {
    console.log("The test function was called.");
}