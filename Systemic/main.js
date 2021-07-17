const screenWidth = 64;
const screenHeight = 64;

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
            break;
        }
        for (let j = 0; j < screenWidth; j++) {
            if (content[i][j] == undefined) {
                break;
            }
            screen[i + 2][j + 2] = content[i][j]
        }
    }
    console.log(screen);
    console.log(screen[0].length)
    for (let i = 0; i < screen[0].length; i++) {
        console.log(screen[i]);
        screen[i] = screen[i].join("");
    }
    screen = screen.join('\n');
    
    document.getElementById("screen").innerHTML = screen;
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