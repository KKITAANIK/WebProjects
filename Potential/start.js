let pcname;
let pcsexattr = [0, 0, 0];

async function SlowType(output) {
    chararray = output.split("/");
    for (i = 0; i < chararray.length; i++) {
        await timer(50)
        document.getElementById("devtext").innerHTML += chararray[i];
    }
}

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

var timeouts = [];

function Start() {
    Output("<p>You are in a vast, empty space of pure white. The walls or sky or ceiling or floor, whichever combination exists in this space, blend into one another, and it is all but impossible to judge distance and direction. The white itself is not blinding, the same as any commonplace white surface, the odd, infinite quality the simple result of its purity. A perfectly smooth surface, free of any markings or dirt, lit evenly. The actual source of this space's illumination is unclear; it seems to come from every direction and nowhere at the same time. Looking down at yourself, you notice that you aren't casting any sort of shadow, either on the ground or yourself. The feeling is disorienting, as you see every detail of your clothing, every nook and cranny of your person normally shadowed or obscured now on display. It is very strange to think of how artificial it all looks, as if your own appearance is somehow incomplete.</p><br><span id=\"devtext\" class=\"devtext\"></span>");
    timeouts.push(setTimeout(SlowType.bind(null, "> /O/h/,/ /h/e/l/l/o/!/ /I/ /t/h/o/u/g/h/t/ /I/ /w/o/u/l/d/ /h/a/v/e/ /m/o/r/e/ /t/i/m/e/./ /C/a/n/ /y/o/u/ /r/e/a/d/ /t/h/i/s/?"), 20000));
    timeouts.push(setTimeout(SlowType.bind(null, "<br>> /R/i/g/h/t/,/ /y/o/u/ /n/e/e/d/ /a/ /w/a/y/ /t/o/ /r/e/s/p/o/n/d/./ /L/e/t/'/s/ /s/e/e/././."), 26000));
    timeouts.push(setTimeout(ButtonAppear, 31000));
}

function ButtonAppear() {
    document.getElementById("display").style.height = "calc(75vh + 0.75vw)";
    document.getElementById("displaycontent").style.height = "calc(75vh - 2vw)";
    ClearButtons();
    buttons[0][0].update(Initialize.bind(null, 0, 0), "Skip");
    timeouts.push(setTimeout(SlowType.bind(null, "<br><br>> /T/h/e/r/e/ /y/o/u/ /g/o/!/ /Y/o/u/ /p/r/o/b/a/b/l/y/ /w/o/n/'/t/ /n/e/e/d/ /a/l/l/ /o/f/ /t/h/o/s/e/,/ /b/u/t/ /t/h/e/y/'/r/e/ /t/h/e/r/e/ /i/f/ /y/o/u/ /w/a/n/t/."), 500));
    timeouts.push(setTimeout(SlowType.bind(null, "<br>> /I/t/'/s/ /s/t/i/l/l/ /j/u/s/t/ /u/s/,/ /t/h/o/u/g/h/./ /I/ /r/e/a/l/l/y/ /p/r/e/f/e/r/ /b/e/i/n/g/ /i/n/ /t/h/e/ /b/a/c/k/g/r/o/u/n/d/,/ /b/u/t/ /I/ /s/h/o/u/l/d/ /b/e/ /a/b/l/e/ /t/o/ /p/u/t/ /s/o/m/e/t/h/i/n/g/ /t/o/g/e/t/h/e/r/ /s/o/ /y/o/u/ /a/r/e/n/'/t/ /o/n/ /y/o/u/r/ /o/w/n/././."), 5500));
    timeouts.push(setTimeout(LeftAppear, 15000));
}

function LeftAppear() {
    document.getElementById("left").style.zIndex = "8";
    document.getElementById("display").style.width = "80vw";
    document.getElementById("displaycontent").style.width = "78vw";
    document.getElementById("display").style.marginLeft = "20vw";
    document.getElementById("buttons").innerHTML = '<button class="button" id="b00" disabled>Button 00<span class="tooltip">Tooltip</span></button><button class="button" id="b01" disabled>Button 01<span class="tooltip">Tooltip</span></button><button class="button" id="b02" disabled>Button 02<span class="tooltip">Tooltip</span></button><button class="button" id="b03" disabled>Button 03<span class="tooltip">Tooltip</span></button><button class="button" id="b04" disabled>Button 04<span class="tooltip">Tooltip</span></button><button class="button" id="b05" disabled>Button 05<span class="tooltip">Tooltip</span></button><button class="button" id="b06" disabled>Button 06<span class="tooltip">Tooltip</span></button><button class="button" id="b10" disabled>Button 10<span class="tooltip">Tooltip</span></button><button class="button" id="b11" disabled>Button 11<span class="tooltip">Tooltip</span></button><button class="button" id="b12" disabled>Button 12<span class="tooltip">Tooltip</span></button><button class="button" id="b13" disabled>Button 13<span class="tooltip">Tooltip</span></button><button class="button" id="b14" disabled>Button 14<span class="tooltip">Tooltip</span></button><button class="button" id="b15" disabled>Button 15<span class="tooltip">Tooltip</span></button><button class="button" id="b16" disabled>Button 16<span class="tooltip">Tooltip</span></button><button class="button" id="b20" disabled>Button 20<span class="tooltip">Tooltip</span></button><button class="button" id="b21" disabled>Button 21<span class="tooltip">Tooltip</span></button><button class="button" id="b22" disabled>Button 22<span class="tooltip">Tooltip</span></button><button class="button" id="b23" disabled>Button 23<span class="tooltip">Tooltip</span></button><button class="button" id="b24" disabled>Button 24<span class="tooltip">Tooltip</span></button><button class="button" id="b25" disabled>Button 25<span class="tooltip">Tooltip</span></button><button class="button" id="b26" disabled>Button 26<span class="tooltip">Tooltip</span></button>';
    document.getElementById("buttons").style.marginLeft = "20vw";
    document.getElementById("buttons").style.width = "79.5vw";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            document.getElementById("b" + i.toString() + j.toString()).style.width = "calc(79.5vw / 7 - 0.5vw)";
        }
    }
    ClearButtons();
    buttons[0][0].update(Initialize.bind(null, 0, 0), "Skip");
    timeouts.push(setTimeout(SlowType.bind(null, "<br><br>> /W/e/l/l/,/ /t/h/a/t/'/s/ /n/o/t/ /r/e/a/l/l/y/ /t/h/a/t/ /h/e/l/p/f/u/l/./ /W/e/ /a/l/r/e/a/d/y/ /k/n/o/w/ /t/h/e/r/e/'/s/ /n/o/t/h/i/n/g/ /h/e/r/e/."), 500));
    timeouts.push(setTimeout(SlowType.bind(null, "<br>> /B/u/t/ /I/ /p/r/o/m/i/s/e/ /i/t/'/l/l/ /b/e/ /r/e/a/l/l/y/ /h/e/l/p/f/u/l/,/ /l/a/t/e/r/,/ /a/n/d/ /I/ /t/h/i/n/k/ /w/e/ /c/o/u/l/d/ /a/f/f/o/r/d/ /t/o/ /l/o/s/e/ /a/ /f/e/w/ /b/u/t/t/o/n/s/ /f/o/r/ /i/t/."), 5500));
    timeouts.push(setTimeout(SlowType.bind(null, "<br>> /T/h/a/t/'/s/ /e/v/e/r/y/t/h/i/n/g/ /I/ /h/a/v/e/ /s/o/ /f/a/r/./ /L/i/k/e/ /I/ /s/a/i/d/,/ /I/ /r/e/a/l/l/y/ /d/i/d/n/'/t/ /e/x/p/e/c/t/ /y/o/u/ /t/o/ /b/e/ /h/e/r/e/ /s/o/ /s/o/o/n/."), 12000));
    timeouts.push(setTimeout(SlowType.bind(null, "<br>> /I/'/m/ /g/o/i/n/g/ /t/o/ /t/u/r/n/ /i/t/ /o/n/,/ /n/o/w/./ /G/o/ /a/h/e/a/d/ /a/n/d/ /e/x/p/l/o/r/e/ /e/v/e/r/y/t/h/i/n/g/ /t/h/a/t/'/s/ /t/h/e/r/e/ /r/i/g/h/t/ /n/o/w/."), 18000));
    timeouts.push(setTimeout(SlowType.bind(null, "<br>> /G/o/o/d/ /l/u/c/k/!"), 23000));
    timeouts.push(setTimeout(function() {buttons[0][0].update(Initialize.bind(null, 0, 0), "Next")}, 24500));
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

function Initialize(key, sexattrnum) {
    if (key == 0) {
        document.getElementById("left").style.zIndex = "8";
        document.getElementById("display").style.width = "80vw";
        document.getElementById("displaycontent").style.width = "78vw";
        document.getElementById("display").style.marginLeft = "20vw";
        document.getElementById("buttons").innerHTML = '<button class="button" id="b00" disabled>Button 00<span class="tooltip">Tooltip</span></button><button class="button" id="b01" disabled>Button 01<span class="tooltip">Tooltip</span></button><button class="button" id="b02" disabled>Button 02<span class="tooltip">Tooltip</span></button><button class="button" id="b03" disabled>Button 03<span class="tooltip">Tooltip</span></button><button class="button" id="b04" disabled>Button 04<span class="tooltip">Tooltip</span></button><button class="button" id="b05" disabled>Button 05<span class="tooltip">Tooltip</span></button><button class="button" id="b06" disabled>Button 06<span class="tooltip">Tooltip</span></button><button class="button" id="b10" disabled>Button 10<span class="tooltip">Tooltip</span></button><button class="button" id="b11" disabled>Button 11<span class="tooltip">Tooltip</span></button><button class="button" id="b12" disabled>Button 12<span class="tooltip">Tooltip</span></button><button class="button" id="b13" disabled>Button 13<span class="tooltip">Tooltip</span></button><button class="button" id="b14" disabled>Button 14<span class="tooltip">Tooltip</span></button><button class="button" id="b15" disabled>Button 15<span class="tooltip">Tooltip</span></button><button class="button" id="b16" disabled>Button 16<span class="tooltip">Tooltip</span></button><button class="button" id="b20" disabled>Button 20<span class="tooltip">Tooltip</span></button><button class="button" id="b21" disabled>Button 21<span class="tooltip">Tooltip</span></button><button class="button" id="b22" disabled>Button 22<span class="tooltip">Tooltip</span></button><button class="button" id="b23" disabled>Button 23<span class="tooltip">Tooltip</span></button><button class="button" id="b24" disabled>Button 24<span class="tooltip">Tooltip</span></button><button class="button" id="b25" disabled>Button 25<span class="tooltip">Tooltip</span></button><button class="button" id="b26" disabled>Button 26<span class="tooltip">Tooltip</span></button>';
        document.getElementById("buttons").style.marginLeft = "20vw";
        document.getElementById("buttons").style.width = "79.5vw";
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 7; j++) {
                document.getElementById("b" + i.toString() + j.toString()).style.width = "calc(79.5vw / 7 - 0.5vw)";
            }
        }
        for (var i = 0; i < timeouts.length; i++) {
            clearTimeout(timeouts[i]);
        }
        
        timeouts = [];
        Output("Please enter your character's name.<br><input type=\"text\" id=\"nameInput\">");
        ClearButtons();
        buttons[0][0].update(Initialize.bind(null, 1, 0), "Confirm");
    }
    else if (key == 1) {
        pcname = document.getElementById("nameInput").value;
        if (pcname.length >= 1) {
            Initialize(2, 0);
        }
    }
    else if (key == 2) {
        if (sexattrnum != 0) {
            pcsexattr[sexattrnum - 1] = 1;
        }
        Output("Please select your sexual attributes. You may choose any combination.");
        ClearButtons();
        let i = 0;
        if (pcsexattr[0] == 0) {
            buttons[0][i].update(Initialize.bind(null, 2, 1), "Breasts");
            i++;
        }
        if (pcsexattr[1] == 0) {
            buttons[0][i].update(Initialize.bind(null, 2, 2), "Vagina");
            i++;
        }
        if (pcsexattr[2] == 0) {
            buttons[0][i].update(Initialize.bind(null, 2, 3), "Penis");
            i++;
        }
        buttons[0][i].update(Initialize.bind(null, 3, 0), "Done");
    }
    else if (key == 3) {
        player = new Character(pcname, pcsexattr);
        Output("Check the console for the character.");
        console.log(player);
    }
}