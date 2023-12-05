let p = {
        name: "",
        they: "",
        them: "",
       their: "",
      theirs: "",
    themself: "",
      theyre: "",
         are: ""
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

async function Start(key) {
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
        await SlowType("Good.Ⅴ Before you can actually interact with this world, you will need to make a few decisions about your avatar.Ⅴ First, what is your name?");
        Append("<br><br><span id=\"namefield\" class=\"devtext\">Name: <input type=\"text\" id=\"nameInput\" class=\"input devtext\"><br><br></span>");
        displaycontent.scrollTop = displaycontent.scrollHeight;
        buttons[0][0].update(ConfirmName, "Submit");
    }
    else if (key == 3) {
        await SlowType("Good.Ⅴ And your gender?");
        buttons[0][0].update(ConfirmGender.bind(null, ["she", "her", "her", "hers", "herself", "she's", "is"], 1), "Feminine");
        buttons[0][1].update(ConfirmGender.bind(null, ["he", "him", "his", "his", "himself", "he's", "is"], 1), "Masculine");
        buttons[0][2].update(ConfirmGender.bind(null, ["they", "them", "their", "theirs", "themself", "they're", "are"], 1), "Nonbinary (them)");
        buttons[0][3].update(ConfirmGender.bind(null, ["it", "it", "its", "its", "itself", "it's", "is"], 1), "Nonbinary (it)");
        buttons[0][4].update(CustomGender, "Custom");
    }
    else if (key == 4) {
        Output("");
        await SlowType(`Your avatar will abide by the following details:Ⅴ`);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/><br/>Name:                  ${p.name}</span>`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Subject:               ${p.they}</span>`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Object:                ${p.them}</span>`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Pronominal Adjective:  ${p.their}`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Predicative Adjective: ${p.theirs}`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>Reflexive:             ${p.themself}`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>\"Is\" Contraction:      ${p.theyre}`);
        await timer(500);
        Append(`<span class="devtext" style=\"white-space: pre;\"><br/>\"Is\" Conujugation:     ${p.are}</span>`);
        await SlowType(`||${UC(p.name)} gave ${p.their} book to ${p.them}.Ⅴ The book is ${p.theirs}, and now ${p.theyre} without it.Ⅴ That's how nice ${p.they} ${p.are}.`, 500);
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
    Append("<br><br><span id=\"pronounfields\" class=\"devtext\">Subject: <input id=\"subject\" class=\"input\">\
    <br>Object: <input id=\"object\" class=\"input\">\
    <br>Pronominal Adjective: <input id=\"proadj\" class=\"input\">\
    <br>Predicative Adjective: <input id=\"predadj\" class=\"input\">\
    <br>Reflexive: <input id=\"reflex\" class=\"input\">\
    <br>\"Is\" Contraction (must end in 's or 're): <input id=\"contrac\" class=\"input\"><br><br><br><br></span>");
    buttons[0][0].update(ConfirmGender.bind(null, false, 2), "Submit");
    displaycontent.scrollTop = displaycontent.scrollHeight;
}

function ConfirmGender(g, key) {
    if (key == 1) {
        p.they     = g[0];
        p.them     = g[1];
        p.their    = g[2];
        p.theirs   = g[3];
        p.themself = g[4];
        p.theyre   = g[5];
        p.are      = g[6];
        
        console.log(p);
        Start(4);
    }
    else if (key == 2) {
        let emptypronoun = 0;
        newgender = [document.getElementById("subject").value, document.getElementById("object").value, document.getElementById("proadj").value, document.getElementById("predadj").value, document.getElementById("reflex").value, document.getElementById("contrac").value];  
        for (let i = 0; i < 6; i++) {
            if (newgender[i].length < 1) {
                emptypronoun++;
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
            ConfirmGender(newgender, 1);
        }
        else {
            buttons[0][0].update(ConfirmGender.bind(null, false, 2), "Submit");
        }
    }
}