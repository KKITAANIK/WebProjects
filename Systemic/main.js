const screenWidth = 64;
const screenHeight = 64;

const blankScreen = "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓\n\
┃┌────────────────────────────────────────────────────────────────┐┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃│                                                                │┃\n\
┃└────────────────────────────────────────────────────────────────┘┃\n\
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛";

var currentScreen = [];

function UpdateCurrentScreen() {
    let screen = document.getElementById("screen").innerHTML.split("\n");
    for (let i = 0; i < screen.length; i++) {
        screen[i] = screen[i].split("");
    }

    currentScreen = screen;
}

function Display(content){
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
}

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

Display(checkerboard);

Display("")

let tempArray = [];

function TempCalc() {
    tempArray = [];
    for (let i = 0; i < screenHeight; i++) {
        row = []
        for (let j = 0; j < screenWidth; j++) {
            row.push();
        }
        tempArray.push(row);
    }
    for (let i = 0; i < screenHeight; i++) {
        for (let j = 0; j < screenWidth; j++) {
            tempArray[i][j] = (-1 * Math.pow((2 * (i / screenHeight)) - 1, 2)) + 1;
            if (Math.floor(Math.random()) == 1)
                tempArray[i][j] = tempArray[i][j] + ((Math.pow(-(Math.random() - 1), 2.5))  / 20);
            else 
                tempArray[i][j] = tempArray[i][j] - ((Math.pow(-(Math.random() - 1), 2.5))  / 20);
            tempArray[i][j] = tempArray[i][j]/*.toFixed(3)*/;
            if (i != 0) {
                if (tempArray[i - 1][j].toFixed(2) > tempArray[i][j].toFixed(2))
                    tempArray[i][j] += 1 / 256;
                else if (tempArray[i - 1][j].toFixed(2) < tempArray[i][j].toFixed(2))
                    tempArray[i][j] -= 1 / 256;
            }
            if (j != 0) {
                if (tempArray[i][j - 1].toFixed(2) > tempArray[i][j].toFixed(2))
                    tempArray[i][j] += 1 / 256;
                else if (tempArray[i][j - 1].toFixed(2) < tempArray[i][j].toFixed(2))
                    tempArray[i][j] -= 1 / 256;
            }      
        }
    }
    console.log(tempArray);

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
            /*if (tempArray[i][j] * 255 < 0)
                heatmap[i][j] = "<span style=\"color:rgb(0,0,0);\">█</span>";
            else if (tempArray[i][j] * 255 > 255)
                heatmap[i][j] = "<span style=\"color:rgb(255,255,255);\">█</span>";
            else*/
                heatmap[i][j] = "<span style=\"color:rgb(" + Math.round(tempArray[i][j] * (4 * (Math.pow(32, 1.2 * tempArray[i][j]) - 1))).toString() + "," + Math.round(tempArray[i][j] * ((-1 * Math.pow(40 * tempArray[i][j] - 24, 2)) + 255)).toString() + "," + Math.round(255 - (tempArray[i][j] * 255)).toString() + ");\">█</span>";
                //heatmap[i][j] = "<span style=\"color:rgb(" + Math.round(tempArray[i][j] * 255).toString() + "," + Math.round(tempArray[i][j] * 255).toString() + "," + Math.round(tempArray[i][j] * 255).toString() + ");\">█</span>";
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
            //terrain[i][j] = "<span style=\"color:white;background-color:rgb(" + Math.round(tempArray[i][j] * (4 * (Math.pow(32, 1.2 * tempArray[i][j]) - 1))).toString() + "," + Math.round(tempArray[i][j] * ((-1 * Math.pow(40 * tempArray[i][j] - 24, 2)) + 255)).toString() + "," + Math.round(255 - (tempArray[i][j] * 255)).toString() + ");\">";
            if (tempArray[i][j] < 1 / 3)
                terrain[i][j] = "<span style=\"color:black;background-color:lightblue;\">I</span>";
            else if (tempArray[i][j] < 2 / 3)
                terrain[i][j] = '<span style=\"color:black;background-color:white;\">T</span>';
            else if (tempArray[i][j] < 11 / 12)
                terrain[i][j] = '<span style=\"color:black;background-color:green;\">F</span>';
            else if (tempArray[i][j] < 23 / 24)
                terrain[i][j] = '<span style=\"color:black;background-color:lightgreen;\">P</span>';
            else
                terrain[i][j] = '<span style=\"color:black;background-color:tan;\">D</span>';
        }
    }

    console.log(terrain);

    Display(terrain);
}

TempCalc();

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
            if (tempArray[i][j] < 1 / 3)
                newboard[i][j] = "<span style=\"color:black;background-color:lightblue;\">";
            else if (tempArray[i][j] < 2 / 3)
                newboard[i][j] = '<span style=\"color:black;background-color:white;\">';
            else if (tempArray[i][j] < 11 / 12)
                newboard[i][j] = '<span style=\"color:black;background-color:green;\">';
            else if (tempArray[i][j] < 23 / 24)
                newboard[i][j] = '<span style=\"color:black;background-color:lightgreen;\">';
            else
                newboard[i][j] = '<span style=\"color:black;background-color:tan;\">';
            
            if (Math.floor(Math.random() * 256) == 0)
                newboard[i][j] += '🯇';
            else if (tempArray[i][j] < 23 / 24 && tempArray[i][j] >= 2 / 3 && Math.floor(Math.random() * 128) == 0)
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

Populate();