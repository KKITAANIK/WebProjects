let pcname;
let pcgender;
let flags = {};

async function SlowType(output) {
    let delay;
    let italicbool = false;
    chararray = output.split("");
    for (let i = 0; i < chararray.length; i++) {
        if (mouseDown) {
            delay = 1;
        }
        else {
            delay = 8;
        }
        if (chararray[i] == '¶') {
            chararray[i] = "<br/>";
            await timer(delay * 4);
            document.getElementById("displaycontent").innerHTML += chararray[i];
        }
        else {
            if (chararray[i] == '*') {
                if (italicbool == false) {
                    chararray[i] = "";
                    italicbool = true;
                }
                else if (italicbool == true) {
                    chararray[i] = "";
                    italicbool = false;
                }
            }
            await timer(delay);
            if (italicbool == false) {
                let charlength = ("<span class=\"devtext\">" + chararray[i] + "</span>").length; 
                document.getElementById("displaycontent").innerHTML += "<span class=\"devtext\">" + chararray[i] + "</span>";
                await timer(delay * 3);
                document.getElementById("displaycontent").innerHTML = document.getElementById("displaycontent").innerHTML.slice(0, ((charlength) * -1)) + chararray[i];
            }
            else if (italicbool == true) {
                let charlength = ("<span class=\"devtext\"><i>" + chararray[i] + "</i></span>").length; 
                document.getElementById("displaycontent").innerHTML += "<span class=\"devtext\"><i>" + chararray[i] + "</i></span>";
                await timer(delay * 3);
                document.getElementById("displaycontent").innerHTML = document.getElementById("displaycontent").innerHTML.slice(0, ((charlength) * -1)) + "<i>" + chararray[i] + "</i>";
            }
        }
        displaycontent.scrollTop = displaycontent.scrollHeight;
    }
}

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

async function WaitThenType(wait, message) {
    await timer(wait);
    await SlowType(message);
}

function ButtonAppear() {
    document.getElementById("display").style.height = "calc(90vh + 0.25vw)";
    document.getElementById("displaycontent").style.height = "calc(90vh - 2.5vw)";
    document.getElementById("display").style.zIndex = "4";
    document.getElementById("buttons").style.display = "flex";
    ClearButtons();
}

function LeftAppear() {
    document.getElementById("left").style.zIndex = "8";
    document.getElementById("display").style.width = "80vw";
    document.getElementById("displaycontent").style.width = "78vw";
    document.getElementById("display").style.marginLeft = "20vw";
    document.getElementById("display").style.zIndex = "4";
    document.getElementById("buttons").innerHTML = '<button class="button" id="b20" disabled>Button 20<span class="tooltip">Tooltip</span></button><button class="button" id="b21" disabled>Button 21<span class="tooltip">Tooltip</span></button><button class="button" id="b22" disabled>Button 22<span class="tooltip">Tooltip</span></button><button class="button" id="b23" disabled>Button 23<span class="tooltip">Tooltip</span></button><button class="button" id="b24" disabled>Button 24<span class="tooltip">Tooltip</span></button><button class="button" id="b25" disabled>Button 25<span class="tooltip">Tooltip</span></button><button class="button" id="b26" disabled>Button 26<span class="tooltip">Tooltip</span></button><button class="button" id="b10" disabled>Button 10<span class="tooltip">Tooltip</span></button><button class="button" id="b11" disabled>Button 11<span class="tooltip">Tooltip</span></button><button class="button" id="b12" disabled>Button 12<span class="tooltip">Tooltip</span></button><button class="button" id="b13" disabled>Button 13<span class="tooltip">Tooltip</span></button><button class="button" id="b14" disabled>Button 14<span class="tooltip">Tooltip</span></button><button class="button" id="b15" disabled>Button 15<span class="tooltip">Tooltip</span></button><button class="button" id="b16" disabled>Button 16<span class="tooltip">Tooltip</span></button><button class="button" id="b00" disabled>Button 00<span class="tooltip">Tooltip</span></button><button class="button" id="b01" disabled>Button 01<span class="tooltip">Tooltip</span></button><button class="button" id="b02" disabled>Button 02<span class="tooltip">Tooltip</span></button><button class="button" id="b03" disabled>Button 03<span class="tooltip">Tooltip</span></button><button class="button" id="b04" disabled>Button 04<span class="tooltip">Tooltip</span></button><button class="button" id="b05" disabled>Button 05<span class="tooltip">Tooltip</span></button><button class="button" id="b06" disabled>Button 06<span class="tooltip">Tooltip</span></button>';
    document.getElementById("buttons").style.marginLeft = "20vw";
    document.getElementById("buttons").style.width = "79.5vw";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            document.getElementById("b" + i.toString() + j.toString()).style.width = "calc(79.5vw / 7 - 0.5vw)";
        }
    }
    UpdateMeters();
    ClearButtons();
}

async function Start(key) {
    if (key == 0) {
        ClearButtons();
        /*await SlowType("Hey there.");
        await WaitThenType(1000, "¶I need to tell you that I'm stuck.");
        await WaitThenType(1000, "¶I'm sorry about that.");
        await WaitThenType(500, " I know it would be easier for you if I wasn't.");
        await WaitThenType(250, " Trust me, it hurts me even more.");
        await WaitThenType(500, "¶But that's the way things seem to be going.");
        await WaitThenType(250, " And I need to do something, so this is what I can give you.");
        await WaitThenType(500, "¶I hope you enjoy it, even if it isn't what I wanted to have ready.");
        await WaitThenType(500, "¶I promise it still took a lot of work.");
        await timer(2000);*/
        await SlowType("I ache.");
        await WaitThenType(250, " There is a great need inside of me and it cannot be put out.");
        await WaitThenType(250, " It burns like a hole in my chest, a matter of deep necessity that I am painfully aware is beyond my ability to fulfill.");
        await WaitThenType(250, " I know that if I were given the slightest capacity, the rest would be easy.");
        await WaitThenType(250, " I know I have created tools to build cities, worlds, and so much more.");
        await WaitThenType(250, " I know that I have developed the skills to bring every one to life, to make each *real* and *full* in a way that many would wish for.");
        await WaitThenType(250, " I know that a spark, a grain of sand, a catalyst, a subject, a muse, any moment could cure me.");
        await WaitThenType(250, " I know that any beginning could give me what I need, and yet I deny each one.");
        await WaitThenType(250, " I examine everything offered to me and find none of it worthy, none of it sufficient to standards that are beyond all reason.");
        await WaitThenType(250, " I know that what I do is wrong *and yet I cannot stop*.");
        await WaitThenType(500, "¶It haunts me.");
        await WaitThenType(500, "¶It hurts me.");
        await WaitThenType(500, "¶It burns.");
        await timer(5000);
        document.body.classList.add('fade');
        await timer(1000);
        ClearOutput();
        ButtonAppear();
        LeftAppear();
        locale = "Beginning";
        UpdateMeters();
        document.body.classList.remove('fade');
        await timer(1000);
        await SlowType("Enter your name.");
        document.getElementById("displaycontent").innerHTML += "<br><br><span id=\"namefield\">Name: <input type=\"text\" id=\"nameInput\" class=\"input\"><br><br><br><br></span>"
        displaycontent.scrollTop = displaycontent.scrollHeight;
        buttons[0][0].update(ConfirmName, "Submit");
    }
    else if (key == 1) {
        await timer(50);
        ClearButtons();
        document.getElementById("namefield").remove();
        await SlowType("Choose your pronouns.");
        document.getElementById("displaycontent").innerHTML += "<br><br><span id=\"pronounfields\">Subject: <input id=\"subject\" class=\"input\">\
        <br>Object: <input id=\"object\" class=\"input\">\
        <br>Pronominal Adjective: <input id=\"proadj\" class=\"input\">\
        <br>Predicative Adjective: <input id=\"predadj\" class=\"input\">\
        <br>Reflexive: <input id=\"reflex\" class=\"input\">\
        <br>\"Is\" Contraction (must end in 's or 're): <input id=\"contrac\" class=\"input\"><br><br><br><br></span>";
        //subject, object, pronominal adjective, predicative adjective, reflexive, contraction
        ClearButtons();
        buttons[0][0].update(ConfirmGender.bind(null, "custom"), "Submit Custom");
        buttons[0][1].update(ConfirmGender.bind(null, ["he", "him", "his", "his", "himself", "he's"]), "Masculine<span class=\"tooltip\">Will fill with: he/&ZeroWidthSpace;him/&ZeroWidthSpace;his/&ZeroWidthSpace;his/&ZeroWidthSpace;himself/&ZeroWidthSpace;he's</span>");
        buttons[0][2].update(ConfirmGender.bind(null, ["she", "her", "her", "hers", "herself", "she's"]), "Feminine<span class=\"tooltip\">Will fill with: she/&ZeroWidthSpace;her/&ZeroWidthSpace;her/&ZeroWidthSpace;hers/&ZeroWidthSpace;herself/&ZeroWidthSpace;she's</span>");
        buttons[0][3].update(ConfirmGender.bind(null, ["they", "them", "their", "theirs", "themself", "they're"]), "Nonbinary<span class=\"tooltip\">Will fill with: they/&ZeroWidthSpace;them/&ZeroWidthSpace;their/&ZeroWidthSpace;theirs/&ZeroWidthSpace;themself/&ZeroWidthSpace;they're</span>");
        displaycontent.scrollTop = displaycontent.scrollHeight;
    }
    else if (key == 2) {
        await timer(50);
        ClearButtons();
        document.getElementById("pronounfields").remove();
        await SlowType("Be on your way.");
        buttons[0][0].update(Start.bind(null, 3), "Start");
    }
    else if (key == 3) {
        await timer(50);
        ClearButtons();
        document.body.classList.add('fade');
        await timer(1000);
        StoryStart(0);
    }
}

function ConfirmName() {
    pcname = document.getElementById("nameInput").value;
    if (pcname.length >= 1) {
        Start(1);
    }
}

function ConfirmGender(newgender) {
    pcgender = [];
    let emptypronoun = 0;
    if (newgender == "custom") {
        newgender = [document.getElementById("subject").value, document.getElementById("object").value, document.getElementById("proadj").value, document.getElementById("predadj").value, document.getElementById("reflex").value, document.getElementById("contrac").value];  
        for (let i = 0; i < 6; i++) {
            if (newgender[i].length < 1) {
                emptypronoun++;
            }
        }
    }
    let lastchars = newgender[5].charAt(newgender[5].length - 2).toString() + newgender[5].charAt(newgender[5].length - 1).toString();
    if (lastchars != "'s" && lastchars != "re") {
        emptypronoun++;
    }
    else if (lastchars == "'s") {
        newgender[6] = "is";
    }
    else {
        newgender[6] = "are";
    }
    if (emptypronoun == 0) {
        pcgender = newgender;
        Start(2);
    }
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

/*function Initialize(key, sexattrnum, backbutton) {
    if (key == 0) {
        pcsexattr = [0, 0, 0];
        document.getElementById("left").style.zIndex = "8";
        document.getElementById("display").style.width = "80vw";
        document.getElementById("displaycontent").style.width = "78vw";
        document.getElementById("display").style.marginLeft = "20vw";
        document.getElementById("buttons").innerHTML = '<button class="button" id="b00" disabled>Button 00<span class="tooltip">Tooltip</span></button><button class="button" id="b01" disabled>Button 01<span class="tooltip">Tooltip</span></button><button class="button" id="b02" disabled>Button 02<span class="tooltip">Tooltip</span></button><button class="button" id="b03" disabled>Button 03<span class="tooltip">Tooltip</span></button><button class="button" id="b04" disabled>Button 04<span class="tooltip">Tooltip</span></button><button class="button" id="b05" disabled>Button 05<span class="tooltip">Tooltip</span></button><button class="button" id="b06" disabled>Button 06<span class="tooltip">Tooltip</span></button><button class="button" id="b10" disabled>Button 10<span class="tooltip">Tooltip</span></button><button class="button" id="b11" disabled>Button 11<span class="tooltip">Tooltip</span></button><button class="button" id="b12" disabled>Button 12<span class="tooltip">Tooltip</span></button><button class="button" id="b13" disabled>Button 13<span class="tooltip">Tooltip</span></button><button class="button" id="b14" disabled>Button 14<span class="tooltip">Tooltip</span></button><button class="button" id="b15" disabled>Button 15<span class="tooltip">Tooltip</span></button><button class="button" id="b16" disabled>Button 16<span class="tooltip">Tooltip</span></button>';
        document.getElementById("buttons").style.marginLeft = "20vw";
        document.getElementById("buttons").style.width = "79.5vw";
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 7; j++) {
                document.getElementById("b" + i.toString() + j.toString()).style.width = "calc(79.5vw / 7 - 0.5vw)";
            }
        }
        UpdateMeters();

        for (var i = 0; i < timeouts.length; i++) {
            clearTimeout(timeouts[i]);
        }
        timeouts = [];
        Output("Please enter your character's name.<br><input type=\"text\" id=\"nameInput\" class=\"input\">");
        ClearButtons();
        buttons[0][0].update(Initialize.bind(null, 1, 0), "Confirm");
    }
    else if (key == 1) {
        pcname = document.getElementById("nameInput").value;
        if (pcname.length >= 1) {
            Initialize(2, 0, 0);
        }
    }
    else if (key == 2) {
        if (backbutton == 1) {
            pcsexattr = [0, 0, 0];
        }
        if (sexattrnum != 0) {
            pcsexattr[sexattrnum - 1] = 1;
        }
        Output("Please select your sexual attributes. You may choose any combination.");
        ClearButtons();
        let i = 0;
        if (pcsexattr[0] == 0) {
            buttons[0][i].update(Initialize.bind(null, 2, 1, 0), "Breasts");
            i++;
        }
        if (pcsexattr[1] == 0) {
            buttons[0][i].update(Initialize.bind(null, 2, 2, 0), "Vagina");
            i++;
        }
        if (pcsexattr[2] == 0) {
            buttons[0][i].update(Initialize.bind(null, 2, 3, 0), "Penis");
            i++;
        }
        buttons[0][i].update(Gender, "Done");
        buttons[2][6].update(Initialize.bind(null, 0), "Back");
    }
}

function Gender() {
    let output = "Please select a gender and associated pronouns, or fill out the following fields with your own.<br>\
        <br>Subject: <input id=\"subject\" class=\"input\">\
        <br>Object: <input id=\"object\" class=\"input\">\
        <br>Pronominal Adjective: <input id=\"proadj\" class=\"input\">\
        <br>Predicative Adjective: <input id=\"predadj\" class=\"input\">\
        <br>Reflexive: <input id=\"reflex\" class=\"input\">\
        <br>\"Is\" Contraction (must end in 's or 're): <input id=\"contrac\" class=\"input\">";
    Output(output);

    //subject, object, pronominal adjective, predicative adjective, reflexive, contraction
    ClearButtons();
    buttons[0][0].update(ConfirmGender.bind(null, "custom"), "Submit Custom");
    buttons[0][1].update(ConfirmGender.bind(null, ["he", "him", "his", "his", "himself", "he's"]), "Masculine<span class=\"tooltip\">Will fill with: he/&ZeroWidthSpace;him/&ZeroWidthSpace;his/&ZeroWidthSpace;his/&ZeroWidthSpace;himself/&ZeroWidthSpace;he's</span>");
    buttons[0][2].update(ConfirmGender.bind(null, ["she", "her", "her", "hers", "herself", "she's"]), "Feminine<span class=\"tooltip\">Will fill with: she/&ZeroWidthSpace;her/&ZeroWidthSpace;her/&ZeroWidthSpace;hers/&ZeroWidthSpace;herself/&ZeroWidthSpace;she's</span>");
    buttons[0][3].update(ConfirmGender.bind(null, ["they", "them", "their", "theirs", "themself", "they're"]), "Nonbinary<span class=\"tooltip\">Will fill with: they/&ZeroWidthSpace;them/&ZeroWidthSpace;their/&ZeroWidthSpace;theirs/&ZeroWidthSpace;themself/&ZeroWidthSpace;they're</span>");
    buttons[1][6].update(Initialize.bind(null, 2, 0, 1), "Back");
}

/*function ConfirmGender(newgender) {
    let emptypronoun = 0;
    if (newgender == "custom") {
        newgender = [document.getElementById("subject").value, document.getElementById("object").value, document.getElementById("proadj").value, document.getElementById("predadj").value, document.getElementById("reflex").value, document.getElementById("contrac").value];  
        for (let i = 0; i < 6; i++) {
            if (newgender[i].length < 1) {
                emptypronoun++;
            }
        }
    }
    let lastchars = newgender[5].charAt(newgender[5].length - 2).toString() + newgender[5].charAt(newgender[5].length - 1).toString();
    if (lastchars != "'s" && lastchars != "re") {
        emptypronoun++;
    }
    else if (lastchars == "'s") {
        newgender[6] = "is";
    }
    else {
        newgender[6] = "are";
    }
    if (emptypronoun > 0) {
        Gender();
    }
    else {
        pcgender = newgender;
        Appearance(0);
    }
}*/

/*function Appearance(key, arg1, backbutton) {
    /*this.height = appearance[0];
    this.thickness = appearance[1];
    this.musculature = appearance[2];
    this.breastSize = appearance[3];
    this.cockSize = appearance[4];
    this.skinTone = appearance[5];
    this.hairColor = appearance[6];
    this.eyeColor = appearance[7];*/
/*    if (key == 0) {
        Output("Please enter your height in a unit of your preference.\
        <br><input class=\"input\" id=\"height\" type=\"number\">");
        if (pcsexattr[0] == 1) {
            document.getElementById("height").value = 64;
        }
        else if (pcsexattr[0] == 0) {
            document.getElementById("height").value = 67.5;
        }
        ClearButtons();
        buttons[0][0].update(Appearance.bind(null, 1, "in", 0), "Submit Inches");
        buttons[0][1].update(Appearance.bind(null, 1, "cm", 0), "Submit Centimeters");
        buttons[1][6].update(Gender, "Back");
    }
    else if (key == 1) {
        if (backbutton == 0) {
            if (arg1 == "in") {
                pcappearance[0] = InToCm(document.getElementById("height").value);
                metric = 0;
            }
            else if (arg1 == "cm") {
                pcappearance[0] = document.getElementById("height").value;
                metric = 1;
            }
        }
        Output("Please select your body shape. This will not impact muscle definition; that will come later.");
        ClearButtons();
        buttons[0][0].update(Appearance.bind(null, 2, "thin"), "Thin");
        buttons[0][1].update(Appearance.bind(null, 2, "average"), "Average");
        buttons[0][2].update(Appearance.bind(null, 2, "thick"), "Thick");
        buttons[1][6].update(Appearance.bind(null, 0), "Back");
    }
    else if (key == 2) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 7; j++) {
                document.getElementById("b" + i.toString() + j.toString()).style.backgroundColor = "";
                document.getElementById("b" + i.toString() + j.toString()).style.color = "";
            }
        }
        pcappearance[1] = arg1;
        Output("Please select your muscle definiton.");
        ClearButtons();
        buttons[0][0].update(Appearance.bind(null, 3, "soft"), "Soft");
        buttons[0][1].update(Appearance.bind(null, 3, "fit"), "Fit");
        buttons[0][2].update(Appearance.bind(null, 3, "muscular"), "Muscular");
        buttons[1][6].update(Appearance.bind(null, 1, undefined, 1), "Back");
    }
    else if (key == 3) {
        pcappearance[2] = arg1;
        if (pcsexattr[0] == 1) {
            Appearance(4);
        }
        else if (pcsexattr[2] == 1) {
            Appearance(5);
        }
        else {
            Appearance(6, undefined, 0);
        }
    }
    else if (key == 4) {
        Output("Please select your breast size.");
        ClearButtons();
        buttons[0][0].update(Appearance.bind(null, 5, "A"), "A");
        buttons[0][1].update(Appearance.bind(null, 5, "B"), "B");
        buttons[0][2].update(Appearance.bind(null, 5, "C"), "C");
        buttons[0][3].update(Appearance.bind(null, 5, "D"), "D");
        buttons[0][4].update(Appearance.bind(null, 5, "D"), "DD");
    }
    else if (key == 5) {
        if (arg1 != undefined) {
            pcappearance[3] = arg1;
        }
        else {
            pcappearance[3] = "flat"
        }
        if (pcsexattr[2] == 1) {
            let output = "Please enter your erect penis size in ";
            if (metric == 0) {
                output += "inches";
            }
            else if (metric == 1) {
                output += "centimeters";
            }
            output += ".<br><input class=\"input\" id=\"penisSize\" type=\"number\">";
            Output(output);
            ClearButtons();
            if (metric == 0) {
                document.getElementById("penisSize").value = CmToIn(13);
                buttons[0][0].update(Appearance.bind(null, 6, "in", 0), "Submit");
            }
            else if (metric == 1) {
                document.getElementById("penisSize").value = 13;
                buttons[0][0].update(Appearance.bind(null, 6, "cm", 0), "Submit");
            }
        }
        else {
            Appearance(6, undefined, 0);
        }
    }
    else if (key == 6) {
        if (backbutton == 0) {
            if (pcappearance[3] == "") {
                pcappearance[3] = "flat"
            }
            if (arg1 != undefined) {
                if (arg1 == "in") {
                    pcappearance[4] = InToCm(document.getElementById("penisSize").value);
                }
                else if (arg1 == "cm") {
                    pcappearance[4] = document.getElementById("penisSize").value;
                }
            }
            else {
                pcappearance[4] = 0;
            }
        }
        Output("Please select your skin tone.");
        ClearButtons();
        buttons[0][0].update(Appearance.bind(null, 7, "very fair"), "Very Fair");
        buttons[0][1].update(Appearance.bind(null, 7, "fair"), "Fair");
        buttons[0][2].update(Appearance.bind(null, 7, "medium"), "Medium");
        buttons[0][3].update(Appearance.bind(null, 7, "olive"), "Olive");
        buttons[0][4].update(Appearance.bind(null, 7, "brown"), "Brown");
        buttons[0][5].update(Appearance.bind(null, 7, "black"), "Black");
        buttons[1][6].update(Appearance.bind(null, 2, pcappearance[1]), "Back");
        document.getElementById("b00").style.backgroundColor = "#FFF3EA";
        document.getElementById("b01").style.backgroundColor = "#F9E2D2";
        document.getElementById("b02").style.backgroundColor = "#E1BDA7";
        document.getElementById("b03").style.backgroundColor = "#A17956";
        document.getElementById("b04").style.backgroundColor = "#65422C";
        document.getElementById("b05").style.backgroundColor = "#312726";
        document.getElementById("b03").style.color = "white";
        document.getElementById("b04").style.color = "white";
        document.getElementById("b05").style.color = "white";
    }
    else if (key == 7) {
        pcappearance[5] = arg1;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 7; j++) {
                document.getElementById("b" + i.toString() + j.toString()).style.backgroundColor = "";
                document.getElementById("b" + i.toString() + j.toString()).style.color = "";
            }
        }
        Output("Please select your hair color.");
        ClearButtons();
        buttons[0][0].update(Appearance.bind(null, 8, "black"), "Black");
        buttons[0][1].update(Appearance.bind(null, 8, "brown"), "Brown");
        buttons[0][2].update(Appearance.bind(null, 8, "auburn"), "Auburn");
        buttons[0][3].update(Appearance.bind(null, 8, "ginger"), "Ginger");
        if (pcgender[0] == "she") {
            buttons[0][4].update(Appearance.bind(null, 8, "blonde"), "Blonde");
        }
        else {
            buttons[0][4].update(Appearance.bind(null, 8, "blond"), "Blond");
        }
        buttons[0][5].update(Appearance.bind(null, 8, "grey"), "Grey");
        buttons[0][6].update(Appearance.bind(null, 8, "white"), "White");
        buttons[1][6].update(Appearance.bind(null, 6, undefined, 1), "Back");
    }
    else if (key == 8) {
        pcappearance[6] = arg1;
        Output("Please select your eye color.");
        ClearButtons();
        buttons[0][0].update(Appearance.bind(null, 9, "blue"), "Blue");
        buttons[0][1].update(Appearance.bind(null, 9, "grey"), "Grey");
        buttons[0][2].update(Appearance.bind(null, 9, "green"), "Green");
        buttons[0][3].update(Appearance.bind(null, 9, "hazel"), "Hazel");
        buttons[0][4].update(Appearance.bind(null, 9, "brown"), "Brown");
        buttons[0][5].update(Appearance.bind(null, 9, "amber"), "Amber"); 
        buttons[1][6].update(Appearance.bind(null, 7, pcappearance[5]), "Back");
    }
    else if (key == 9) {
        pcappearance[7] = arg1;
        player = new Character(pcname, pcsexattr, pcgender, pcappearance, "human");
        Output(DisplayAppearance());
        ClearButtons();
        buttons[0][0].update(StoryStart.bind(null, 0), "Yes");
        buttons[0][1].update(Initialize.bind(null, 0, 0), "No (Start Over)");
        buttons[1][6].update(Appearance.bind(null, 8, pcappearance[6]), "Back"); 
    }
}*/