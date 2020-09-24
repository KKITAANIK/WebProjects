let clicks = 0;
let totclicks = 0;
let cps = 0;
let output = "";

function UpdateCounter() {
    if (cps <= 0) {
        document.getElementById("counter").innerHTML = "You have ".concat(clicks.toString(), " clicks.");
    }
    else {
        document.getElementById("counter").innerHTML = "You have ".concat(clicks.toString(), " clicks. <span class=\"Oswald\">You have ", cps.toString(), " clicks per second.</span>");
    }
    if (clicks < 250) {
        document.getElementById("cpsButton").disabled = true;
    }
    else {
        document.getElementById("cpsButton").disabled = false;
    }
}

function AddCPS() {
    
}

function CPS() {
    clicks += cps;
    totclicks += cps;
}

function UpdateText() {
    clicks++;
    totclicks++;

    if (totclicks == 50) {
        output += "Damn, I really thought 50 would do it.";
    }
    else if (totclicks == 100) {
        output +="<br />Nothing happened after 100, either? What kind of ungrateful, time-wasting idiot made this thing?";
    }
    else if (totclicks == 150) {
        output += "<br />I mean, it's not like he didn't have the time to playtest this shit. He definitely wasn't busy making it look nice.";
    }
    else if (totclicks == 200) {
        output += "<br />Or she, don't want to be sexist.";
    }
    else if (totclicks == 210) {
        output += "<br />Or they.";
    }
    else if (totclicks == 220) {
        output += "<br />You know what, whatever they want to be called, they can have it.";
    }
    else if (totclicks == 230) {
        output += "<br />Still.. this isn't exactly fun, you know? Just clicking a button 230 times.";
    }
    else if (totclicks == 240) {
        output += "<br />I mean, come on. Some of us have things to do.";
    }
    else if (totclicks == 250) {
        output += "<br />Well, I don't, but you surely do, right?";
    }
    else if (totclicks == 260) {
        output += "<br />You could brush your teeth, go on a walk, watch a video...";
    }
    else if (totclicks == 270) {
        output += "<br />All that good human stuff.";
    }
    else if (totclicks == 280) {
        output += "<br />Wow, I didn't even notice 250 pass. Now we're almost at 300.";
    }
    else if (totclicks == 290) {
        output += "<br />It all just kind of <b>BLENDS TOGETHER</b> when there's <b>NO MEANINGFUL CONSEQUENCE OF PROGRESS</b>."
    }
    else if (totclicks == 300) {
        output = "Alright, you know what, screw this. Clearly nothing is going to happen here. You want something done right, you have to do it yourself.";
    }
    else if (totclicks == 310) {
        output += "<br />What do you say we try and make our own game? Can't be that hard. This isn't exactly a high bar.";
    }
    else if (totclicks == 315) {
        output += "<br />Let's see... what do we have to work with...";
    }
    else if (totclicks == 320) {
        output += "<br />We got clicks, that's something. Clicks..";
    }
    else if (totclicks == 325) {
        output += "<br />How about this?<br /><br /><i>GET TO 350 CLICKS TO WIN</i>";
    }
    else if (totclicks == 350) {
        output = "You win!!";
    }
    else if (totclicks == 360) {
        output += "<br />No, that's no good, is it? Doesn't really feel like you earned anything, does it?";
    }
    else if (totclicks == 370) {
        output += "<br />I mean, you just clicked a button. Hardly feels fair to call that a victory.";
    }
    else if (totclicks == 380) {
        output += "<br />Let's see...";
    }
    else if (totclicks == 390) {
        output += "<br />Oh, you're probably getting tired of clicking, aren't you? Sorry about that.";
    }
    else if (totclicks == 400) {
        output += "<br />How about this? For the low, low price of 250 clicks, I'll help you out!";
        document.getElementById("buttons").innerHTML = "<button onclick=\"UpdateText();\">Click me.</button> <button id=\"cpsButton\"onclick=\"cps++; clicks -= 250;\"><span class=\"Oswald\">Buy 1 CPS.</span></button>"
        setInterval(CPS, 1000);
    }

    document.getElementById("text").innerHTML = "<span class=\"Oswald\">".concat(output.toString(), "</span>");
}