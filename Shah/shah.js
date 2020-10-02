//https://en.wikipedia.org/wiki/Military_of_the_Sasanian_Empire

class Piece {
    constructor(side, type, xpos, ypos) {
        this.side = side;
        this.type = type;
        this.xpos = xpos;
        this.ypos = ypos;
    }
}

var pieces = [
new Piece(2, "Framadar", 0, 3),
new Piece(1, "Framadar", 6, 3),

new Piece(2, "Zhayedan", 0, 2),
new Piece(2, "Zhayedan", 0, 4),
new Piece(1, "Zhayedan", 6, 2),
new Piece(1, "Zhayedan", 6, 4),

new Piece(2, "Cataphract", 1, 2),
new Piece(2, "Cataphract", 1, 3),
new Piece(2, "Cataphract", 1, 4),
new Piece(1, "Cataphract", 5, 2),
new Piece(1, "Cataphract", 5, 3),
new Piece(1, "Cataphract", 5, 4),

new Piece(2, "Dehqan", 1, 0),
new Piece(2, "Dehqan", 1, 1),
new Piece(2, "Dehqan", 1, 5),
new Piece(2, "Dehqan", 1, 6),
new Piece(1, "Dehqan", 5, 0),
new Piece(1, "Dehqan", 5, 1),
new Piece(1, "Dehqan", 5, 5),
new Piece(1, "Dehqan", 5, 6),

new Piece(2, "Kamandaran", 0, 0),
new Piece(2, "Kamandaran", 0, 1),
new Piece(2, "Kamandaran", 0, 5),
new Piece(2, "Kamandaran", 0, 6),
new Piece(1, "Kamandaran", 6, 0),
new Piece(1, "Kamandaran", 6, 1),
new Piece(1, "Kamandaran", 6, 5),
new Piece(1, "Kamandaran", 6, 6),

new Piece(2, "Paighan", 2, 1),
new Piece(2, "Paighan", 2, 2),
new Piece(2, "Paighan", 2, 3),
new Piece(2, "Paighan", 2, 4),
new Piece(2, "Paighan", 2, 5),
new Piece(1, "Paighan", 4, 1),
new Piece(1, "Paighan", 4, 2),
new Piece(1, "Paighan", 4, 3),
new Piece(1, "Paighan", 4, 4),
new Piece(1, "Paighan", 4, 5)
];

function UpdateBoard() {
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 7; j++) {
            document.getElementById("t".concat(i.toString(), j.toString())).innerHTML = "";
            document.getElementById("t".concat(i.toString(), j.toString())).onclick = ShowMoves.bind(null, i, j);
            document.getElementById("t".concat(i.toString(), j.toString())).style.backgroundColor = "white";
        }
    }
    for (i = 0; i < pieces.length; i++) {
        if (pieces[i].side != 0 ) {
            document.getElementById("t".concat(pieces[i].xpos.toString(), pieces[i].ypos.toString())).innerHTML = pieces[i].type.charAt(0);
            if (pieces[i].side == 1) {
                document.getElementById("t".concat(pieces[i].xpos.toString(), pieces[i].ypos.toString())).style.color = "blue";
            }
            else {
                document.getElementById("t".concat(pieces[i].xpos.toString(), pieces[i].ypos.toString())).style.color = "red";
            }
        }
    }
}

function ShowMoves(xpos, ypos) {
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 7; j++) {
            document.getElementById("t".concat(i.toString(), j.toString())).onclick = ShowMoves.bind(null, i, j);
            document.getElementById("t".concat(i.toString(), j.toString())).style.backgroundColor = "white";
        }
    }
    let piece = -1;
    let altpiece;
    for (i = 0; i < pieces.length; i++) {
        if (pieces[i].xpos == xpos && pieces[i].ypos == ypos) {
            piece = i;
        }
    }
    if (piece != -1) {
        for (i = 0; i < 7; i++) {
            for (j = 0; j < 7; j++) {
                if ((((i - 1) == pieces[piece].xpos && j == pieces[piece].ypos) || ((i + 1) == pieces[piece].xpos && j == pieces[piece].ypos) || (i == pieces[piece].xpos && (j - 1) == pieces[piece].ypos) || (i == pieces[piece].xpos && (j + 1) == pieces[piece].ypos)) && pieces[piece].type == "Paighan") {
                    altpiece = -1;
                    for (k = 0; k < pieces.length; k++) {
                        if (pieces[k].xpos == i && pieces[k].ypos == j) {
                            altpiece = k;
                        }
                    }
                    if (altpiece == -1) {
                        document.getElementById("t".concat(i.toString(), j.toString())).style.backgroundColor = "purple";
                        document.getElementById("t".concat(i.toString(), j.toString())).onclick = function() {
                            pieces[piece].xpos = pieces[altpiece].xpos;
                            pieces[piece].ypos = pieces[altpiece].ypos;
                            UpdateBoard();
                        };
                    }
                    else if (pieces[piece].side != pieces[altpiece].side) {
                        document.getElementById("t".concat(i.toString(), j.toString())).style.backgroundColor = "purple";
                        document.getElementById("t".concat(i.toString(), j.toString())).onclick = function() {
                            pieces[piece].xpos = pieces[altpiece].xpos;
                            pieces[piece].ypos = pieces[altpiece].ypos;
                            UpdateBoard();
                        };
                    }
                }
            }
        }
    }
}

for (i = 0; i < 7; i++) {
    for (j = 0; j < 7; j++) {
        document.getElementById("t".concat(i.toString(), j.toString())).className = "tile";
    }
}