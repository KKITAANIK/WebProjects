const screenWidth = 64;
const screenHeight = 64;

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

    let screen = document.getElementById("screen").innerHTML.split("\n");
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
            //if (i == 0) {
                //if (j == 0) {
                    tempArray[i][j] = (-1 * Math.pow((2 * (i / 64) - 1), 2)) + 1;
                    if (Math.floor(Math.random()) == 1) {
                        tempArray[i][j] = tempArray[i][j] + ((Math.pow(-(Math.random() - 1), 2.5))  / 20);
                    }
                    else {
                        tempArray[i][j] = tempArray[i][j] - ((Math.pow(-(Math.random() - 1), 2.5))  / 20);
                    }
                    tempArray[i][j] = tempArray[i][j]/*.toFixed(3)*/;
                //}
                //else {

                //}
            //}
            //if (j == 0) {

            //}          
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
                heatmap[i][j] = "<span style=\"color:rgb(" + Math.round(tempArray[i][j] * 255).toString() + "," + Math.round(tempArray[i][j] * 255).toString() + "," + Math.round(tempArray[i][j] * 255).toString() + ");\">█</span   >";
        }
    }
    console.log(heatmap);

    /*for (let i = 0; i < heatmap.length; i++) {
        heatmap[i] = heatmap[i].join("");
    }
    heatmap = heatmap.join('\n');*/
    
    Display(heatmap);
}

TempCalc();