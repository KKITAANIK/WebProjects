async function SlowType(output) {
    chararray = output.split("/");
    for (i = 0; i < chararray.length; i++) {
        await timer(50)
        document.getElementById("devtext").innerHTML += chararray[i];
    }
}

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

function Start() {
    Output('<span id="devtext" class="devtext"></span>');
    setTimeout(SlowType.bind(null, "> /O/h/,/ /h/e/l/l/o/!/ /I/ /t/h/o/u/g/h/t/ /I/ /w/o/u/l/d/ /h/a/v/e/ /m/o/r/e/ /t/i/m/e/./ /C/a/n/ /y/o/u/ /r/e/a/d/ /t/h/i/s/?"), 0);
    setTimeout(SlowType.bind(null, "<br>> /R/i/g/h/t/,/ /y/o/u/ /n/e/e/d/ /a/ /w/a/y/ /t/o/ /r/e/s/p/o/n/d/./ /L/e/t/'/s/ /s/e/e/././."), 6000);
    setTimeout(ButtonAppear, 11000);
}

function ButtonAppear() {
    document.getElementById("display").style.height = "calc(75vh + 0.75vw)";
    document.getElementById("displaycontent").style.height = "calc(75vh - 2vw)";
    ClearButtons();
    Output('<span id="devtext" class="devtext"></span>');
    setTimeout(SlowType.bind(null, "> /T/h/e/r/e/ /y/o/u/ /g/o/!/ /I/ /g/a/v/e/ /y/o/u/ /a/ /l/o/t/,/ /i/n/ /c/a/s/e/ /y/o/u/ /n/e/e/d/ /a/ /l/o/t/ /o/f/ /o/p/t/i/o/n/s/,/ /l/a/t/e/r/."), 500);
    setTimeout(SlowType.bind(null, "<br>> /I/t/'/s/ /s/t/i/l/l/ /j/u/s/t/ /u/s/,/ /t/h/o/u/g/h/./ /I/ /r/e/a/l/l/y/ /p/r/e/f/e/r/ /b/e/i/n/g/ /i/n/ /t/h/e/ /b/a/c/k/g/r/o/u/n/d/,/ /b/u/t/ /I/ /s/h/o/u/l/d/ /b/e/ /a/b/l/e/ /t/o/ /p/u/t/ /s/o/m/e/t/h/i/n/g/ /t/o/g/e/t/h/e/r/ /s/o/ /y/o/u/ /a/r/e/n/'/t/ /o/n/ /y/o/u/r/ /o/w/n/././."), 5500);
    setTimeout(LeftAppear, 15000);
}

function LeftAppear() {
    document.getElementById("left").style.zIndex = "8";
    document.getElementById("display").style.width = "80vw";
    document.getElementById("displaycontent").style.width = "78vw";
    document.getElementById("display").style.marginLeft = "20vw";
    Output('<span id="devtext" class="devtext"></span>');
    setTimeout(SlowType.bind(null, "> /W/e/l/l/,/ /t/h/a/t/'/s/ /n/o/t/ /r/e/a/l/l/y/ /t/h/a/t/ /h/e/l/p/f/u/l/./ /W/e/ /a/l/r/e/a/d/y/ /k/n/o/w/ /t/h/e/r/e/'/s/ /n/o/t/h/i/n/g/ /h/e/r/e/."), 500);
    setTimeout(SlowType.bind(null, "<br>> /B/u/t/ /I/ /p/r/o/m/i/s/e/ /i/t/'/l/l/ /b/e/ /r/e/a/l/l/y/ /h/e/l/p/f/u/l/,/ /l/a/t/e/r/!"), 5500);
    setTimeout(SlowType.bind(null, "<br>> /T/h/a/t/'/s/ /e/v/e/r/y/t/h/i/n/g/ /I/ /h/a/v/e/ /s/o/ /f/a/r/./ /L/i/k/e/ /I/ /s/a/i/d/,/ /I/ /r/e/a/l/l/y/ /d/i/d/n/'/t/ /e/x/p/e/c/t/ /y/o/u/ /t/o/ /b/e/ /h/e/r/e/ /s/o/ /s/o/o/n/."), 9000);
    setTimeout(SlowType.bind(null, "<br>> /I/'/m/ /g/o/i/n/g/ /t/o/ /t/u/r/n/ /i/t/ /o/n/,/ /n/o/w/./ /G/o/ /a/h/e/a/d/ /a/n/d/ /e/x/p/l/o/r/e/ /e/v/e/r/y/t/h/i/n/g/ /t/h/a/t/'/s/ /t/h/e/r/e/ /r/i/g/h/t/ /n/o/w/."), 15000);
    setTimeout(SlowType.bind(null, "<br>> /G/o/o/d/ /l/u/c/k/!"), 21000);
    setTimeout(function() {buttons[0][0].update(Begin, "Next")}, 22500);
}

/*function RightAppear() {
    document.getElementById("right").style.zIndex = "8";
    document.getElementById("display").style.width = "60vw";
    document.getElementById("displaycontent").style.width = "58vw";
    document.getElementById("display").style.marginRight = "20vw";
    document.getElementById("buttons").style.zIndex = "0";
    Output('<span id="devtext" class="devtext"></span>');
    setTimeout(SlowType.bind(null, "> /T/h/e/r/e/ /y/o/u/ /g/o/!/ /I/ /h/a/v/e/n/'/t/ /a/c/t/u/a/l/l/y/ /d/e/c/i/d/e/d/ /w/h/a/t/ /g/o/e/s/ /t/h/e/r/e/,/ /y/e/t/,/ /b/u/t/ /I/'/m/ /s/u/r/e/ /t/h/e/r/e/ /w/i/l/l/ /b/e/ /a/ /l/o/t/ /t/o/ /l/o/o/k/ /a/t/,/ /l/a/t/e/r/!"), 500);
    setTimeout(SlowType.bind(null, "<br>> /T/h/a/t/'/s/ /e/v/e/r/y/t/h/i/n/g/ /I/ /h/a/v/e/ /s/o/ /f/a/r/./ /L/i/k/e/ /I/ /s/a/i/d/,/ /I/ /r/e/a/l/l/y/ /d/i/d/n/'/t/ /e/x/p/e/c/t/ /y/o/u/ /t/o/ /b/e/ /h/e/r/e/ /s/o/ /s/o/o/n/."), 7500);
    setTimeout(SlowType.bind(null, "<br>> /I/'/m/ /g/o/i/n/g/ /t/o/ /t/u/r/n/ /i/t/ /o/n/,/ /n/o/w/./ /G/o/ /a/h/e/a/d/ /a/n/d/ /e/x/p/l/o/r/e/ /e/v/e/r/y/t/h/i/n/g/ /t/h/a/t/'/s/ /t/h/e/r/e/ /r/i/g/h/t/ /n/o/w/."), 13500);
    setTimeout(SlowType.bind(null, "<br>> /G/o/o/d/ /l/u/c/k/!"), 19000)
    setTimeout(Output.bind(null, "test"), 21000);
}*/

function Begin() {
    Output("text");
}