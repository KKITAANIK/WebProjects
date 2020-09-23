let clicks = 0;
let output = "";

function UpdateCounter() {
    document.getElementById("counter").innerHTML = "You have ".concat(clicks.toString(), " clicks.")
}

function UpdateText() {
    if (clicks == 50) {
        output += "♎︎♋︎❒︎■︎, I really thought 50 would do it.";
    }
    else if (clicks == 100) {
        output +="Nothing happened after 100, either? What kind of ungrateful, time-wasting ■︎◆︎❍︎♌︎⬧︎🙵◆︎●︎●︎ made this thing?";
    }
    else if (clicks == 150) {
        output += "I mean, it's not like he didn't have the time to playtest this ◻︎♋︎♑︎♏︎, he definitely wasn't busy making it look nice.";
    }
    else if (clicks == 200) {
        outpit += "Or she, don't want to be sexist.";
    }
    else if (clicks == 210) {
        output += "Or they.";
    }
    else if (clicks == 220) {
        output += "You know what, whatever they want to be called, they can have it.";
    }
    else if (clicks == 230) {
        output += "Just.. this isn't exactly fun, you know? Just clicking a button ".concat(clicks.toString(), " times.");
    }
    else if (clicks == 240) {
        output += "I mean, come on. Some of us have things to do.";
    }
    else if (clicks == 250) {
        output += "Well, I don't, but you surely do, right?";
    }
    else if (clicks == 260) {
        output += "You could brush your teeth, go on a walk, watch a video...";
    }
    else if (clicks == 270) {
        output += "All that good human stuff.";
    }
    else if (clicks == 280) {
        output += "Wow, I didn't even notice 250 pass. Now we're almost at 300";
    }
    else if (clicks == 290) {
        output += "It all just kind of <b>BLENDS TOGETHER</b> when there's <b>NO MEANINGFUL CONSEQUENCE OF PROGRESS</b>."
    }

    document.getElementById("text").innerHTML = output;
}