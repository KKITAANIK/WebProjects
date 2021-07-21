const screenWidth = 32;
const screenHeight = 32;

//const blankScreen = "\
//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓\n\
//┃┌────────────────────────────────────────────────────────────────┐┃\n\
//┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n┃│                                                                │┃\n\
//┃└────────────────────────────────────────────────────────────────┘┃\n\
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛";

const blankScreen = "\
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓\n\
┃┌────────────────────────────────┐┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃│                                │┃\n\
┃└────────────────────────────────┘┃\n\
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛";

class Tile {
    constructor(name, bgColor) {
        this.name = name;
        this.bgColor = bgColor
    }
}

class Sprite {
    constructor(name, char, color) {
        this.name = name;
        this.char = char;
        this.color = color;
    }
}

function populateTiles() {
    let tempArray = [];
    for (let i = 0; i < screenHeight; i++) {
        let row = [];
        for (let j = 0; j < screenWidth; j++) {
            row.push(new Tile('void', 'rgba(0, 0, 0, 0)'));
        }
        tempArray.push(row);
    }
    return tempArray;
}

function populateSprites() {
    let tempArray = [];
    for (let i = 0; i < screenHeight; i++) {
        let row = [];
        for (let j = 0; j < screenWidth; j++) {
            row.push(new Sprite('nothing', ' ', 'rgba(0, 0, 0, 0)'));
        }
        tempArray.push(row);
    }
    return tempArray;
}

function spriteTileOverlay(sprites, tiles) {
    let tempArray = [];
    for (let i = 0; i < screenHeight; i++) {
        let row = [];
        for (let j = 0; j < screenWidth; j++) {
            row.push([sprites[i][j], tiles[i][j]]);
        }
        tempArray.push(row);
    }
    return tempArray;
}

var currentScreen = [];

function UpdateCurrentScreen() {
    let screen = document.getElementById("screen").innerHTML.split("\n");
    for (let i = 0; i < screen.length; i++) {
        screen[i] = screen[i].split("");
    }

    currentScreen = screen;
}

/*function Display(content){
    if (typeof content === 'string') {
        content = content.split("\n");
        for (let i = 0; i < content.length; i++) {
            content[i] = content[i].split("");
        }
    }

    let screen = blankScreen.split('\n'); //document.getElementById("screen").innerHTML.split("\n");
    for (let i = 0; i < screen.length; i++) {
        screen[i] = screen[i].split("");
    }

    for (let i = 0; i < screenHeight; i++) {
        if(content[i] == undefined) {
            for (let j = 0; j < screenWidth; j++) {
                screen[i + 2][j + 2] = " ";
            }
        }
        else {
            for (let j = 0; j < screenWidth; j++) {
                if (content[i][j] == undefined) {
                    screen[i + 2][j + 2] = " ";
                }
                else {
                    screen[i + 2][j + 2] = content[i][j];
                }
            }
        }
    }

    for (let i = 0; i < screen.length; i++) {
        screen[i] = screen[i].join("");
    }
    screen = screen.join('\n');
    
    document.getElementById("screen").innerHTML = screen;

    UpdateCurrentScreen();
}*/

function Display(content){
    if (Array.isArray(content) != true) {
        throw "Non-array passed to Display()!";
    }
    if (content.length != screenHeight || content[0].length != screenWidth || content[0][0].length != 2) {
        throw "Array passed to Display() with incorrect dimensions! Expected dimensions: [" + screenHeight.toString() + ", " + screenWidth.toString() + ", 2]. Recieved dimensions: [" + content.length.toString() + ", " + content[0].length.toString() + ", " + content[0][0].length.toString() + "].";
    }
    let l1ClassCheck = content[0][0][0] instanceof Sprite;
    let l2ClassCheck = content[0][0][1] instanceof Tile;
    if (l1ClassCheck == false || l2ClassCheck == false) {
        throw "Contents of array failed class check. l1ClassCheck: " + l1ClassCheck.toString() + ". l2ClassCheck: " + l2ClassCheck.toString() + ".";
    }


    let screen = blankScreen.split('\n'); //document.getElementById("screen").innerHTML.split("\n");
    for (let i = 0; i < screen.length; i++) {
        screen[i] = screen[i].split("");
    }

    for (let i = 0; i < screenHeight; i++) {
        for (let j = 0; j < screenWidth; j++) {
            let id = [i.toString(), j.toString()]
            if (i < 10)
                id[0] = '00' + id[0];
            else if (i < 100)
                id[0] = '0' + id[0];
            if (j < 10)
                id[1] = '00' + id[1];
            else if (j < 100)
                id[1] = '0' + id[1];

            screen[i + 2][j + 2] = "<span id=\"" + id[0] + "-" + id[1] + "\" style=\"background-color:" + content[i][j][1].bgColor + ";color:" + content[i][j][0].color + ";\">" + content[i][j][0].char + "</span>";
        }
    }

    for (let i = 0; i < screen.length; i++) {
        screen[i] = screen[i].join("");
    }
    screen = screen.join('\n');
    
    document.getElementById("screen").innerHTML = screen;

    for (let i = 0; i < screenHeight; i++) {
        for (let j = 0; j < screenWidth; j++) {
            let id = [i.toString(), j.toString()]
            if (i < 10)
                id[0] = '00' + id[0];
            else if (i < 100)
                id[0] = '0' + id[0];
            if (j < 10)
                id[1] = '00' + id[1];
            else if (j < 100)
                id[1] = '0' + id[1];

            document.getElementById(id[0] + "-" + id[1]).onclick = function() {
                console.log(content[i][j][0]);
                console.log(content[i][j][1]);
            }
        }
    }

    UpdateCurrentScreen();
}

let tempscreen = spriteTileOverlay(populateSprites(), populateTiles());
let guyXPos = Math.floor(Math.random() * screenWidth);
let guyYPos = Math.floor(Math.random() * screenWidth);
tempscreen[guyYPos][guyXPos][0] = new Sprite('guy1', '', '#000');
guyXPos = Math.floor(Math.random() * screenWidth);
guyYPos = Math.floor(Math.random() * screenWidth);
tempscreen[guyYPos][guyXPos][0] = new Sprite('guy2', '', '#000');
guyXPos = Math.floor(Math.random() * screenWidth);
guyYPos = Math.floor(Math.random() * screenWidth);
tempscreen[guyYPos][guyXPos][0] = new Sprite('guy3', '', '#000');
Display(tempscreen);
































let checkerboard = [];
for (let i = 0; i < screenHeight; i++) {
    checkerboard[i] = [];
}

let k = 0;
for (let i = 0; i < screenHeight; i++) {
    for (let j = 0; j < screenWidth; j++) {
        if (k % 2 == 0) {
            checkerboard[i][j] = ' ';
        }
        else {
            checkerboard[i][j] = '█';
        }
        k++;
    }
    k++;
}

console.log("Checkerboard constructed");

//Display(checkerboard);

//Display("")

let temperature = [];

function TempCalc() {
    temperature = [];
    for (let i = 0; i < screenHeight; i++) {
        row = []
        for (let j = 0; j < screenWidth; j++) {
            row.push();
        }
        temperature.push(row);
    }
    for (let i = 0; i < screenHeight; i++) {
        for (let j = 0; j < screenWidth; j++) {
            temperature[i][j] = (-1 * Math.pow((2 * (i / screenHeight)) - 1, 2)) + 1;
            if (Math.floor(Math.random()) == 1)
                temperature[i][j] = temperature[i][j] + ((Math.pow(-(Math.random() - 1), 2.5))  / 20);
            else 
                temperature[i][j] = temperature[i][j] - ((Math.pow(-(Math.random() - 1), 2.5))  / 20);
            temperature[i][j] = temperature[i][j]/*.toFixed(3)*/;
            if (i != 0) {
                if (temperature[i - 1][j].toFixed(2) > temperature[i][j].toFixed(2))
                    temperature[i][j] += 1 / 256;
                else if (temperature[i - 1][j].toFixed(2) < temperature[i][j].toFixed(2))
                    temperature[i][j] -= 1 / 256;
            }
            if (j != 0) {
                if (temperature[i][j - 1].toFixed(2) > temperature[i][j].toFixed(2))
                    temperature[i][j] += 1 / 256;
                else if (temperature[i][j - 1].toFixed(2) < temperature[i][j].toFixed(2))
                    temperature[i][j] -= 1 / 256;
            }      
        }
    }
    console.log(temperature);

    let heatmap = [];
    for (let i = 0; i < screenHeight; i++) {
        row = []
        for (let j = 0; j < screenWidth; j++) {
            row.push();
        }
        heatmap.push(row);
    }
    for (let i = 0; i < screenHeight; i++) {
        for (let j = 0; j < screenWidth; j++) {
            /*if (temperature[i][j] * 255 < 0)
                heatmap[i][j] = "<span style=\"color:rgb(0,0,0);\">█</span>";
            else if (temperature[i][j] * 255 > 255)
                heatmap[i][j] = "<span style=\"color:rgb(255,255,255);\">█</span>";
            else*/
                heatmap[i][j] = "<span style=\"color:rgb(" + Math.round(temperature[i][j] * (4 * (Math.pow(32, 1.2 * temperature[i][j]) - 1))).toString() + "," + Math.round(temperature[i][j] * ((-1 * Math.pow(40 * temperature[i][j] - 24, 2)) + 255)).toString() + "," + Math.round(255 - (temperature[i][j] * 255)).toString() + ");\">█</span>";
                //heatmap[i][j] = "<span style=\"color:rgb(" + Math.round(temperature[i][j] * 255).toString() + "," + Math.round(temperature[i][j] * 255).toString() + "," + Math.round(temperature[i][j] * 255).toString() + ");\">█</span>";
        }
    }
    console.log(heatmap);

    /*for (let i = 0; i < heatmap.length; i++) {
        heatmap[i] = heatmap[i].join("");
    }
    heatmap = heatmap.join('\n');*/
    
    Display(heatmap);

    let terrain = [];
    for (let i = 0; i < screenHeight; i++) {
        row = []
        for (let j = 0; j < screenWidth; j++) {
            row.push();
        }
        terrain.push(row);
    }

    for (let i = 0; i < screenHeight; i++) {
        for (let j = 0; j < screenWidth; j++) {
            //terrain[i][j] = "<span style=\"color:white;background-color:rgb(" + Math.round(temperature[i][j] * (4 * (Math.pow(32, 1.2 * temperature[i][j]) - 1))).toString() + "," + Math.round(temperature[i][j] * ((-1 * Math.pow(40 * temperature[i][j] - 24, 2)) + 255)).toString() + "," + Math.round(255 - (temperature[i][j] * 255)).toString() + ");\">";
            if (temperature[i][j] < 1 / 3)
                terrain[i][j] = "<span style=\"color:black;background-color:lightblue;\">I</span>";
            else if (temperature[i][j] < 2 / 3)
                terrain[i][j] = '<span style=\"color:black;background-color:white;\">T</span>';
            else if (temperature[i][j] < 11 / 12)
                terrain[i][j] = '<span style=\"color:black;background-color:green;\">F</span>';
            else if (temperature[i][j] < 23 / 24)
                terrain[i][j] = '<span style=\"color:black;background-color:lightgreen;\">P</span>';
            else
                terrain[i][j] = '<span style=\"color:black;background-color:tan;\">D</span>';
        }
    }

    console.log(terrain);

    Display(terrain);
}

//TempCalc();

function Populate() {
    let newboard = [];
    for (let i = 0; i < screenHeight; i++) {
        row = []
        for (let j = 0; j < screenWidth; j++) {
            row.push();
        }
        newboard.push(row);
    }
    for (let i = 0; i < screenHeight; i++) {
        for (let j = 0; j < screenWidth; j++) {
            if (temperature[i][j] < 1 / 3)
                newboard[i][j] = "<span style=\"color:black;background-color:lightblue;\">";
            else if (temperature[i][j] < 2 / 3)
                newboard[i][j] = '<span style=\"color:black;background-color:white;\">';
            else if (temperature[i][j] < 11 / 12)
                newboard[i][j] = '<span style=\"color:black;background-color:green;\">';
            else if (temperature[i][j] < 23 / 24)
                newboard[i][j] = '<span style=\"color:black;background-color:lightgreen;\">';
            else
                newboard[i][j] = '<span style=\"color:black;background-color:tan;\">';
            
            if (Math.floor(Math.random() * 256) == 0)
                newboard[i][j] += '🯇';
            else if (temperature[i][j] < 23 / 24 && temperature[i][j] >= 2 / 3 && Math.floor(Math.random() * 128) == 0)
                newboard[i][j] += '🯇';
            else {
                if (i != 0) {
                    if (newboard[i - 1][j] == newboard[i][j] + '🯇' + "</span>" && Math.floor(Math.random() * 4) == 0)
                        newboard[i][j] += '🯇';
                    else if (j != 0) {
                        if (newboard[i][j - 1] == newboard[i][j] + '🯇' + "</span>" && Math.floor(Math.random() * 4) == 0)
                            newboard[i][j] += '🯇';
                        else if (newboard[i - 1][j - 1] == newboard[i][j] + '🯇' + "</span>" && Math.floor(Math.random() * 4) == 0)
                            newboard[i][j] += '🯇';
                        else if (j != screenWidth - 1) {
                            if (newboard[i - 1][j + 1] == newboard[i][j] + '🯇' + "</span>" && Math.floor(Math.random() * 4) == 0)
                                newboard[i][j] += newboard[i][j] + '🯇' + "</span>";
                            else
                                newboard[i][j] += ' ';
                        }   
                        else {
                            newboard[i][j] += ' ';
                        }
                    }
                    else {
                        newboard[i][j] += ' ';
                    }
                }
                else if (j != 0) {
                    if (newboard[i][j - 1] == newboard[i][j] + '🯇' + "</span>" && Math.floor(Math.random() * 4) == 0)
                        newboard[i][j] += '🯇';
                    else
                        newboard[i][j] += ' ';
                }
                else
                    newboard[i][j] += ' '
            }
            newboard[i][j] += "</span>"
        }
    }
    /*for (let i = 2; i < screenHeight - 2; i++) {
        for (let j = 2; j < screenWidth - 2; j++) {
            if (
            newboard[i - 2][j - 2] != '🯇' &&
                newboard[i - 2][j - 1] != '🯇' &&
                newboard[i - 2][j] != '🯇' &&
                newboard[i - 2][j + 1] != '🯇' &&
                newboard[i - 2][j + 2] != '🯇' &&
            newboard[i - 1][j - 2] != '🯇' &&
                newboard[i - 1][j - 1] != '🯇' &&
                newboard[i - 1][j] != '🯇' &&
                newboard[i - 1][j + 1] != '🯇' &&
                newboard[i - 1][j + 2] != '🯇' &&
             newboard[i][j - 2] != '🯇' &&
                newboard[i][j - 1] != '🯇' &&
                newboard[i][j] != '🯇' &&
                newboard[i][j + 1] != '🯇' &&
                newboard[i][j + 2] != '🯇' &&
            newboard[i + 1][j - 2] != '🯇' &&
                newboard[i + 1][j - 1] != '🯇' &&
                newboard[i + 1][j] != '🯇' &&
                newboard[i + 1][j + 1] != '🯇' &&
                newboard[i + 1][j + 2] != '🯇' &&
            newboard[i + 2][j - 2] != '🯇' &&
                newboard[i + 2][j - 1] != '🯇' &&
                newboard[i + 2][j] != '🯇' &&
                newboard[i + 2][j + 1] != '🯇' &&
                newboard[i + 2][j + 2] != '🯇' &&
                Math.floor(Math.random() * 256) == 0
            ) {   
                newboard[i][j] = "<span style=\"color:red;\">█</span>";
            }
        }
    }*/
    
    console.log(newboard);

    Display(newboard);
}

//Populate();