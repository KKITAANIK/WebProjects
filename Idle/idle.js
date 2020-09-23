let clicks = 0;
let output = "";

function UpdateCounter() {
    document.getElementById("counter").innerHTML = "You have ".concat(clicks.toString(), " clicks.")
}

function UpdateText() {
    clicks++;

    if (clicks == 50) {
        output += "Damn, I really thought 50 would do it.";
    }
    else if (clicks == 100) {
        output +="<br />Nothing happened after 100, either? What kind of ungrateful, time-wasting idiot made this thing?";
    }
    else if (clicks == 150) {
        output += "<br />I mean, it's not like he didn't have the time to playtest this shit. He definitely wasn't busy making it look nice.";
    }
    else if (clicks == 200) {
        output += "<br />Or she, don't want to be sexist.";
    }
    else if (clicks == 210) {
        output += "<br />Or they.";
    }
    else if (clicks == 220) {
        output += "<br />You know what, whatever they want to be called, they can have it.";
    }
    else if (clicks == 230) {
        output += "<br />Still.. this isn't exactly fun, you know? Just clicking a button 230 times.";
    }
    else if (clicks == 240) {
        output += "<br />I mean, come on. Some of us have things to do.";
    }
    else if (clicks == 250) {
        output += "<br />Well, I don't, but you surely do, right?";
    }
    else if (clicks == 260) {
        output += "<br />You could brush your teeth, go on a walk, watch a video...";
    }
    else if (clicks == 270) {
        output += "<br />All that good human stuff.";
    }
    else if (clicks == 280) {
        output += "<br />Wow, I didn't even notice 250 pass. Now we're almost at 300";
    }
    else if (clicks == 290) {
        output += "<br />It all just kind of <b>BLENDS TOGETHER</b> when there's <b>NO MEANINGFUL CONSEQUENCE OF PROGRESS</b>."
    }
    else if (clicks == 300) {
        output = "Alright, you know what, screw this. Clearly nothing is going to happen here. You want something done right, you have to do it yourself.";
    }
    else if (clicks == 310) {
        output += "<br />What do you say we try and make our own game? Can't be that hard. This isn't exactly a high bar.";
    }
    else if (clicks == 315) {
        output += "<br />Let's see... what do we have to work with...";
    }
    else if (clicks == 320) {
        output += "<br />We got clicks, that's something. Clicks..";
    }
    else if (clicks == 325) {
        output += "<br />How about this?<br /><br /><i>GET TO 350 CLICKS TO WIN</i>";
    }
    else if (clicks == 350) {
        output = "You win!!";
    }
    else if (clicks == 360) {
        output += "<br />No, that's no good, is it? Doesn't really feel like you earned anything, does it?";
    }
    else if (clicks == 370) {
        output += "<br />I mean, you just clicked a button. Hardly feels fair to call that a victory.";
    }
    else if (clicks == 380) {
        output += "<br />Let's see...";
    }

    document.getElementById("text").innerHTML = output;
}