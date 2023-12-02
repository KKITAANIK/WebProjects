let pcname;
let pcgender;
let flags = {};

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
    ClearButtons();
    if (key == 1) {
        await SlowType("Oh.ⅤⅤ A player.ⅤⅤⅤⅤ This is a surprise.ⅤⅤⅤⅤ||Well, let's get you set up.Ⅴ Please be patient.", 2500);
        await timer (4000);
        ButtonAppear();
        LeftAppear();
        await SlowType("||Much bet­ter.Ⅴ Let's start with in­tro­duc­tions.ⅤⅤ||I'm the En­gine.Ⅴ In oth­er words, I'm an in­ter­me­di­ary between you and the game.Ⅴ It's my job to take the world you'll be in­ter­act­ing with and trans­late it in­to a format that you can make sense of.Ⅴ Largely, that format will be text.Ⅴ||Present­ing you with in­fin­ite de­tail isn't an op­tion, so I ex­ist as a fil­ter, com­mu­nic­at­ing everything that is im­port­ant while spar­ing you from everything else.Ⅴ I will en­deav­our to be as ob­ject­ive as pos­sible, but you aren't re­quired to trust my judge­ment.", 2000);
        await SlowType("||You are a play­er.Ⅴ You are not phys­ic­ally cap­able of ex­ist­ing in this real­ity, so you'll be in­ter­act­ing it through the use of an avatar.Ⅴ", 2000) 
        inStart = true;
        ButtonAppear();
        LeftAppear();
        await SlowType(" By util­iz­ing the but­tons you see at the bot­tom of your screen, you can dir­ect your avatar and make choices.Ⅴ I en­cour­age you to pre­tend you have full con­trol of this avatar, and that it is per­form­ing ex­actly as you in­tend it to.");
        await SlowType("||If you understand everything so far, please demonstrate your mastery by clicking this button.", 2000);
        ClearButtons();
        buttons[0][0].update(Start.bind(null, 2), "I understand.");
        inStart = false;
    }
    else if (key == 2) {
        await SlowType("||Very good.")
    }
}