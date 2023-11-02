let buttons = [];

class Button {
    constructor(num) {
        // initialize the button
        this.num = num;
        this.id = "b" + num;
    }

    update(func, text) {
        // update the attributes
        document.getElementById(this.id).disabled = false;
        document.getElementById(this.id).innerHTML = "<span class=\"buttoncontent\">" + text + "</span>";
        document.getElementById(this.id).onclick = func;
        $("#" + this.id.toString()).textfill({
            maxFontPixels: 0.015 * screen.width
        });
    }

    disable() {
        // disable the element and empty its attributes
        document.getElementById(this.id).disabled = true;
        document.getElementById(this.id).innerHTML = "";
        document.getElementById(this.id).onclick = "";
    }
}

function ClearButtons() {
    for (let i = 0; i < 10; i++){
        buttons[i].disable();
    }
}

function FillButtons() {
    for (let i = 0; i < 10; i++){
        buttons[i] = new Button(i.toString());
    }
}

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

async function SlowType(output) {
    chararray = output.split("");
    for (let i = 0; i < chararray.length; i++) {
        if (chararray[i] == '¶') {
            chararray[i] = "<br/>";
        }
        await timer(50);
        document.getElementById("displaycontent").innerHTML += chararray[i];
        displaycontent.scrollTop = displaycontent.scrollHeight;
    }
}

async function Start() {
    await timer(5000);
    await SlowType("So sorry for the wait! It's been so long since a player has come here!");
    await timer(500);
    await SlowType("¶Don't worry; everything's ready, I just need to put it where you can see it!");
    await timer(3000);
    await SlowType("¶Dammit... I put it right here! Where did it go?");
    await timer(1000);
    document.getElementById("displaycontent").style.height = "calc(80vh - 2em)";
    await SlowType("¶Here, you can use this prototype for now. I promise I'll get you something better if I can find it.");
    await timer(1000);

    await SlowType("¶Oh, and here's a Skip button. You probably shouldn't use it, but I'm supposed to give it to you just in case.")
}