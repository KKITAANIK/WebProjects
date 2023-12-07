let p = {
    name: "",
    
    gender:   "",
    they:     "",
    them:     "",
    their:    "",
    theirs:   "",
    themself: "",
    theyre:   "",
    are:      "",
    
    hasBreasts: false,
    hasPenis:   false,
    hasVagina:  false,
    breastSize: "",
    penisSize:  "",
    
    skinTone: '',
    // Monk Skin Tone Scale:
    //         A: #f7ede4
    //         B: #f3e7da
    //         C: #f6ead0
    //         D: #ead9bb
    //         E: #d7bd96
    //         F: #9f7d54
    //         G: #815d44
    //         H: #604234
    //         I: #3a312a
    //         J: #2a2420

    hairColor:   "",
    hairTexture: "",
    hairLength:  "",
    eyeColor:    "",
    height:      "",
    thickness:   "",
    musculature: "",
};
let flags = {};
let displaycontent = document.getElementById("displaycontent");

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

async function Start(key, param) {
    if (key == 1) {
        await SlowType("Oh.ⅤⅤ A player.ⅤⅤⅤⅤ This is a surprise.ⅤⅤⅤⅤ||Well, let's get you set up.Ⅴ Please be patient.", 2500);
        await timer (4000);
        ButtonAppear();
        LeftAppear();
        await SlowType("||Much better.Ⅴ Let's start with introductions.ⅤⅤ||I'm the Engine—Ⅴan intermediary between you and the game.Ⅴ It's my job to take the world you'll be interacting with and translate it into a format that you can make sense of.Ⅴ Largely, that format will be text.Ⅴ||Presenting you with infinite detail isn't an option, so I exist as a filter, communicating everything that is important while sparing you from everything else.Ⅴ I will endeavour to be as objective as possible, but you aren't required to trust my judgement.", 2000);
        await SlowType("||You are a player.Ⅴ You are not physically capable of existing in this reality, so you'll be interacting it through the use of an avatar.Ⅴ", 2000) 
        inStart = true;
        ButtonAppear();
        LeftAppear();
        await SlowType(" By utilizing the buttons you see at the bottom of your screen, you can direct your avatar and make choices.Ⅴ I encourage you to pretend you have full control of this avatar, and that it is performing exactly as you intend it to.");
        await SlowType("||Here is an example.", 2000);
        ClearButtons();
        buttons[0][0].update(Start.bind(null, 2), "Proceed.");
        inStart = false;
    }
    else if (key == 2) {
        Output("");
        await SlowType("Good.Ⅴ Before you can actually interact with this world, you have the opportunity to customize your avatar.Ⅴ First, what name do you want to use?");
        Append("<br><br><span id=\"namefield\" class=\"devtext\">Name: <input type=\"text\" id=\"nameInput\" class=\"input devtext\"><br><br></span>");
        displaycontent.scrollTop = displaycontent.scrollHeight;
        buttons[0][0].update(ConfirmName, "Submit");
    }
    else if (key == 3) {
        await SlowType("Your avatar also needs a gender.Ⅴ This can be changed at any time.");
        SetButtons([{
                func: ConfirmGender.bind(null, ["feminine", "she", "her", "her", "hers", "herself", "she's", "is"], 1),
                text: "Feminine"
            }, {
                func: ConfirmGender.bind(null, ["masculine", "he", "him", "his", "his", "himself", "he's", "is"], 1), text: "Masculine"
            }, {
                func: ConfirmGender.bind(null, ["nonbinary", "they", "them", "their", "theirs", "themself", "they're", "are"], 1),
                text: "Nonbinary (them)"
            }, {
                func: ConfirmGender.bind(null, ["nonbinary", "it", "it", "its", "its", "itself", "it's", "is"], 1),
                text: "Nonbinary (it)"
            },
            false,
            false, {
                func: CustomGender,
                text: "Custom"
        }]);
    }
    else if (key == 3.5) {
        await SlowType(`||And your desired sexual characteristics?Ⅴ All combinations are allowed.||`);
        Append("<span class=\"devtext\" id=\"sexReadout\" style=\"white-space: pre;\"></span>")
        Start(4, false);
    }
    else if (key == 4) {
        if (param == "breasts") p.hasBreasts = !p.hasBreasts;
        else if (param == "penis") p.hasPenis = !p.hasPenis;
        else if (param == "vagina") p.hasVagina = !p.hasVagina;
        
        let bReadout = "☒";
        let pReadout = "☒";
        let vReadout = "☒";
        
        if (p.hasBreasts) bReadout = "☑";
        if (p.hasPenis)   pReadout = "☑";
        if (p.hasVagina)  vReadout = "☑";
        
        document.getElementById("sexReadout").innerHTML = "Breasts: " + bReadout + "<br/>Penis:   " + pReadout + "<br/>Vagina:  " + vReadout;
        
        SetButtons([{
                func: Start.bind(null, 4, "breasts"),
                text: "Toggle Breasts"
            }, {
                func: Start.bind(null, 4, "penis"),
                text: "Toggle Penis"
            }, {
                func: Start.bind(null, 4, "vagina"),
                text: "Toggle Vagina"
            },
            false,
            false,
            false,
            {
                func: Start.bind(null, 5),
                text: "Submit"
        }]);
    }
    else if (key == 5) {
        if (!p.hasBreasts) {
            Start(6, false);
            return;
        }
        
        await SlowType("||Breast size?")
        
        SetButtons([{
                func: Start.bind(null, 6, "very small"),
                text: "Very Small"
            }, {
                func: Start.bind(null, 6, "small"),
                text: "Small"
            }, {
                func: Start.bind(null, 6, "medium"),
                text: "Medium"
            }, {
                func: Start.bind(null, 6, "large"),
                text: "Large"
            }, {
                func: Start.bind(null, 6, "very large"),
                text: "Very Large"
        }]);
    }
    else if (key == 6) {
        p.breastSize = param;
        
        if (!p.hasPenis) {
            Start(7, false);
            return;
        }
        
        if (!p.hasBreasts) {
            await SlowType("||Penis size?");
        }
        else {
            await SlowType("|Penis size?")
        }
        
        SetButtons([{
                func: Start.bind(null, 7, "very small"),
                text: "Very Small"
            }, {
                func: Start.bind(null, 7, "small"),
                text: "Small"
            }, {
                func: Start.bind(null, 7, "medium"),
                text: "Medium"
            }, {
                func: Start.bind(null, 7, "large"),
                text: "Large"
            }, {
                func: Start.bind(null, 7, "very large"),
                text: "Very Large"
        }]);
    }
    else if (key == 7) {
        p.penisSize = param;
        
        if (!p.hasPenis && !p.hasBreasts) {
            await SlowType("||Skin tone?")
        }
        else {
            await SlowType("|Skin tone?");
        }
        
        buttons[1][0].update(Start.bind(null, 8, 'A'), "<span style=\"border-radius: 50%; background-color: #f7ede4; height: calc(8vh - 0.75vw); width: calc(8vh - 0.75vw)\"></span>");
        buttons[0][0].update(Start.bind(null, 8, 'B'),"<span style=\"border-radius: 50%; background-color: #f3e7da; height: calc(8vh - 0.75vw); width: calc(8vh - 0.75vw)\"></span>");
        
        buttons[1][1].update(Start.bind(null, 8, 'C'), "<span style=\"border-radius: 50%; background-color: #f6ead0; height: calc(8vh - 0.75vw); width: calc(8vh - 0.75vw)\"></span>");
        buttons[0][1].update(Start.bind(null, 8, 'D'), "<span style=\"border-radius: 50%; background-color: #ead9bb; height: calc(8vh - 0.75vw); width: calc(8vh - 0.75vw)\"></span>");
        
        buttons[1][2].update(Start.bind(null, 8, 'E'), "<span style=\"border-radius: 50%; background-color: #d7bd96; height: calc(8vh - 0.75vw); width: calc(8vh - 0.75vw)\"></span>");
        buttons[0][2].update(Start.bind(null, 8, 'F'), "<span style=\"border-radius: 50%; background-color: #9f7d54; height: calc(8vh - 0.75vw); width: calc(8vh - 0.75vw)\"></span>");
        
        buttons[1][3].update(Start.bind(null, 8, 'G'), "<span style=\"border-radius: 50%; background-color: #815d44; height: calc(8vh - 0.75vw); width: calc(8vh - 0.75vw)\"></span>");
        buttons[0][3].update(Start.bind(null, 8, 'H'), "<span style=\"border-radius: 50%; background-color: #604234; height: calc(8vh - 0.75vw); width: calc(8vh - 0.75vw)\"></span>");
        
        buttons[1][4].update(Start.bind(null, 8, 'I'), "<span style=\"border-radius: 50%; background-color: #3a312a; height: calc(8vh - 0.75vw); width: calc(8vh - 0.75vw)\"></span>");
        buttons[0][4].update(Start.bind(null, 8, 'J'), "<span style=\"border-radius: 50%; background-color: #2a2420; height: calc(8vh - 0.75vw); width: calc(8vh - 0.75vw)\"></span>");
        
    }
    else if (key == 8) {
        p.skinTone = param;
        
        await SlowType("|Hair color?");
        
        SetButtons([{
                func: Start.bind(null, 9, "black"),
                text: "Black"
            }, {
                func: Start.bind(null, 9, "brown"),
                text: "Brown"
            }, {
                func: Start.bind(null, 9, "auburn"),
                text: "Auburn"
            }, {
                func: Start.bind(null, 9, "ginger"),
                text: "Ginger"
            }, {
                func: Start.bind(null, 9, "blond"),
                text: "Blond<span class=\"tooltip\">Will display as \"blonde\" under a feminine gender identity.</span>"
            }, {
                func: Start.bind(null, 9, "grey"),
                text: "Grey"
            }, {
                func: Start.bind(null, 9, "white"),
                text: "White"
        }]);
        
        if (p.gender == "feminine") {
            buttons[0][4].update(Start.bind(null, 9, "blonde"), "Blonde<span class=\"tooltip\">Will display as \"blond\" under a non-feminine gender identity.</span>");
        }
    }
    else if (key == 9) {
        p.hairColor = param;
        
        await SlowType("|Hair texture?");
        
        SetButtons([{
                func: Start.bind(null, 10, "straight"),
                text: "Straight"
            }, {
                func: Start.bind(null, 10, "wavy"),
                text: "Wavy"
            }, {
                func: Start.bind(null, 10, "curly"),
                text: "Curly"
            }, {
                func: Start.bind(null, 10, "kinky"),
                text: "Kinky"
        }]);
    }
    else if (key == 10) {
        p.hairTexture = param;
        
        await SlowType("|Hair length?");
        
        SetButtons([{
                func: Start.bind(null, 11, "bald"),
                text: "Bald"
            }, {
                func: Start.bind(null, 11, "very short"),
                text: "Very Short<span class=\"tooltip\">Less than an inch of hair, as with a buzz cut.</span>"
            }, {
                func: Start.bind(null, 11, "short"),
                text: "Short<span class=\"tooltip\">Ear-length hair.</span>"
            }, {
                func: Start.bind(null, 11, "medium"),
                text: "Medium<span class=\"tooltip\">Jaw-length hair.</span>"
            }, {
                func: Start.bind(null, 11, "long"),
                text: "Long<span class=\"tooltip\">Shoulder-length hair.</span>"
            }, {
                func: Start.bind(null, 11, "very long"),
                text: "Very Long<span class=\"tooltip\">Armpit-length hair.</span>"
            }, {
                func: Start.bind(null, 11, "very very long"),
                text: "Very Very Long<span class=\"tooltip\">Waist-length hair or longer.</span>"
        }]);
    }
    else if (key == 11) {
        p.hairLength = param;
        
        await SlowType("|Eye color?");
        
        SetButtons([{
                func: Start.bind(null, 12, "amber"),
                text: "Amber"
            }, {
                func: Start.bind(null, 12, "brown"),
                text: "Brown"
            }, {
                func: Start.bind(null, 12, "hazel"),
                text: "Hazel"
            }, {
                func: Start.bind(null, 12, "green"),
                text: "Green"
            }, {
                func: Start.bind(null, 12, "blue"),
                text: "Blue"
            }, {
                func: Start.bind(null, 12, "grey"),
                text: "Grey"
        }]);
    }
    else if (key == 12) {
        p.eyeColor = param;
        
        await SlowType("|Height?");
        
        SetButtons([{
                func: Start.bind(null, 13, "very short"),
                text: "Very Short"
            }, {
                func: Start.bind(null, 13, "short"),
                text: "Short"
            }, {
                func: Start.bind(null, 13, "average"),
                text: "Average"
            }, {
                func: Start.bind(null, 13, "tall"),
                text: "Tall"
            }, {
                func: Start.bind(null, 13, "very tall"),
                text: "Very Tall"
        }]);
    }
    else if (key == 13) {
        p.height = param;
        
        await SlowType("|Body shape?Ⅴ This is separate from muscle definition.")
        
        SetButtons([{
                func: Start.bind(null, 14, "thin"),
                text: "Thin"
            }, {
                func: Start.bind(null, 14, "average"),
                text: "Average"
            }, {
                func: Start.bind(null, 14, "thick"),
                text: "Thick"
        }]);
    }
    else if (key == 14) {
        p.thickness = param;
        
        await SlowType("|Now, muscle definition?")
        
        SetButtons([{
                func: Start.bind(null, 15, "soft"),
                text: "Soft"
            }, {
                func: Start.bind(null, 15, "fit"),
                text: "Fit"
            }, {
                func: Start.bind(null, 15, "muscular"),
                text: "Muscular"
        }]);
    }
    else if (key == 15) {
        p.musculature = param;
        
        let breastDesc = "none";
        let penisDesc  = "none";
        let vaginaDesc = "none";
        
        if (p.hasBreasts) breastDesc = p.breastSize;
        if (p.hasPenis)    penisDesc = p.penisSize;
        if (p.hasVagina)  vaginaDesc = "present";
        
        Output("");
        await SlowType(`Your avatar will abide by the following details:Ⅴ`);
        
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/><br/>Name: ${p.name}</span>`);
        
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/><br/>Gender:  ${p.gender}</span>`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>    Subject:               ${p.they}</span>`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>    Object:                ${p.them}</span>`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>    Pronominal Adjective:  ${p.their}`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>    Predicative Adjective: ${p.theirs}`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>    Reflexive:             ${p.themself}`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>    \"Is\" Contraction:      ${p.theyre}`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>    \"Is\" Conjugation:      ${p.are}</span>`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Breasts: ${breastDesc}</span>`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Penis:   ${penisDesc}</span>`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Vagina:  ${vaginaDesc}</span>`);
        
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/><br/>Skin Tone:         ${p.skinTone} (Monk Skin Tone Scale)</span>`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Hair Color:        ${p.hairColor}</span>`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Hair Texture:      ${p.hairTexture}</span>`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Hair Length:       ${p.hairLength}</span>`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Eye Color:         ${p.eyeColor}</span>`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Height:            ${p.height}</span>`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Body Shape:        ${p.thickness}</span>`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Muscle Definition: ${p.musculature}</span>`);
    }
}

function ConfirmName() {
    let nameInput = document.getElementById("nameInput");
    p.name = nameInput.value;
    if (p.name.length >= 1) {
        nameInput.disabled = true;
        nameInput.placeholder = p.name;
        Start(3);
    }
    else {
        buttons[0][0].update(ConfirmName, "Submit");
    }
}

async function CustomGender() {
    await SlowType("||Please enter your gender information in lowercase.Ⅴ");
    Append("<br><br><span id=\"pronounfields\" class=\"devtext\">Label: <input id=\"gender\" class=\"input\" placeholder=\"custom\">\
    <br>Subject: <input id=\"subject\" class=\"input\">\
    <br>Object: <input id=\"object\" class=\"input\">\
    <br>Pronominal Adjective: <input id=\"proadj\" class=\"input\">\
    <br>Predicative Adjective: <input id=\"predadj\" class=\"input\">\
    <br>Reflexive: <input id=\"reflex\" class=\"input\">\
    <br>\"Is\" Contraction (must end in 's or 're): <input id=\"contrac\" class=\"input\"></span>");
    buttons[0][0].update(ConfirmGender.bind(null, false, 2), "Submit");
    displaycontent.scrollTop = displaycontent.scrollHeight;
}

function ConfirmGender(g, key) {
    if (key == 1) {
        p.gender   = g[0]
        p.they     = g[1];
        p.them     = g[2];
        p.their    = g[3];
        p.theirs   = g[4];
        p.themself = g[5];
        p.theyre   = g[6];
        p.are      = g[7];
        
        Start(3.5);
    }
    else if (key == 2) {
        let emptypronoun = 0;
        
        let gender = document.getElementById("gender");
        let subject = document.getElementById("subject");
        let object = document.getElementById("object");
        let proadj = document.getElementById("proadj");
        let predadj = document.getElementById("predadj");
        let reflex = document.getElementById("reflex");
        let contrac = document.getElementById("contrac");
        
        if (gender.value == "") gender.value = "custom";
        
        let newgender = [gender.value, subject.value, object.value, proadj.value, predadj.value, reflex.value, contrac.value];  
        for (let i = 0; i < newgender.length; i++) {
            if (newgender[i].length < 1) {
                emptypronoun++;
            }
        }
        let lastchars = newgender[6].charAt(newgender[6].length - 2).toString() + newgender[6].charAt(newgender[6].length - 1).toString();
        if (lastchars != "'s" && lastchars != "re") {
            emptypronoun++;
        }
        else if (lastchars == "'s") {
            newgender[7] = "is";
        }
        else {
            newgender[7] = "are";
        }
        if (emptypronoun == 0) {
            gender.placeholder = gender.value;
            gender.disabled = true;
            
            subject.placeholder = subject.value;
            subject.disabled = true;
            
            object.placeholder = object.value;
            object.disabled = true;
            
            proadj.placeholder = proadj.value;
            proadj.disabled = true;
            
            predadj.placeholder = predadj.value;
            predadj.disabled = true;
            
            reflex.placeholder = reflex.value;
            reflex.disabled = true;
            
            contrac.placeholder = contrac.value;
            contrac.disabled = true;
            
            ConfirmGender(newgender, 1);
        }
        else {
            buttons[0][0].update(ConfirmGender.bind(null, false, 2), "Submit");
        }
    }
}