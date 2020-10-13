let dimensions = [15, 15];

class Unit {
    constructor(side, type, ypos, xpos) {
        this.side = side;
        this.type = type;
        this.ypos = ypos;
        this.xpos = xpos;
    }
}

var units = [
    new Unit(0, "Infantry", 14,  5),
    new Unit(0, "Archer", 14,  6),
    new Unit(0, "Mage", 14,  7),
    new Unit(0, "Cavalry", 14,  8),
    new Unit(0, "Healer", 14,  9),
    new Unit(1, "Infantry",  0,  5),
    new Unit(1, "Archer",  0,  6),
    new Unit(1, "Mage",  0,  7),
    new Unit(1, "Cavalry",  0,  8),
    new Unit(1, "Healer",  0,  9)
];

function IDGen(y, x) {
    if (y < 10) {
        y = "0" + y.toString();
    }
    else {
        y = y.toString();
    }
    if (x < 10) {
        x = "0" + x.toString();
    }
    else {
        x = x.toString();
    }
    return (y + x);
}

function Start() {
    let board = document.getElementById("board");
    board.innerHTML = "";

    for (let i = 0; i < dimensions[0]; i++) {
        for (let j = 0; j < dimensions[1]; j++) {
            let id = IDGen(i, j);
            board.innerHTML += "<div class=\"tile\" id=\"" + id + "\">" + id + "</div>";
            if (j == 0) {
                document.getElementById(id).style.borderLeftWidth = "0.5vh";
            }
            else if (j == (dimensions[1] - 1)) {
                document.getElementById(id).style.borderRightWidth = "0.5vh";
            }
        }
    }
}

function UpdateBoard() {
    for (let i = 0; i < dimensions[0]; i++) {
        for (let j = 0; j < dimensions[1]; j++) {
            let id = IDGen(i, j);
            //document.getElementById(id).innerHTML = "";
            document.getElementById(id).style.backgroundColor = "white";
        }
    }
    let unitnum = [0, 0];
    for (let i = 0; i < units.length; i++) {
        let id = IDGen(units[i].ypos, units[i].xpos);
        document.getElementById(id).innerHTML = units[i].type.charAt(0);
        unitnum[units[i].side]++;
        if (units[i].side == 0) {
            document.getElementById(id).style.color = "blue";
        }
        else {
            document.getElementById(id).style.color = "red";
        }
    }
    if (unitnum[0] == 0) {
        console.log("Side 1 victory");
    }
    else if (unitnum[1] == 0) {
        console.log("Side 0 victory");
    }
}