function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

let p = {};
p.wounds = 0;

async function SlowType(output, startwait = 0, delay = 10, onclick = undefined) {
    chararray = output.split("");
    totaloutput = document.getElementById("output").innerHTML + "<p>";
    let italicbool = false;
    let linkbool = false;
    if (startwait > 0) {
        await timer(startwait);
    }
    for (let i = 0; i < chararray.length; i++) {
        if (chararray[i] == '|') {
            chararray[i] = "<br/>"
        }
        else if (chararray[i] == 'Ⅴ') {
            chararray[i] = "";
            await timer(500 - delay);
        }
        else if (chararray[i] == '†') {
            chararray[i] = "";
            document.getElementById("splatter1").style.opacity = 0.95;
        }
        else if (chararray[i] == "*") {
            if (italicbool == false) {
                chararray[i] = "<i>"
                italicbool = true;
            }
            else if (italicbool == true) {
                chararray[i] = "</i>";
                italicbool = false;
            }
        }
        if (chararray[i] == '※') {
            if (linkbool == false) {
                if (onclick == undefined) {
                    throw new Error("SlowType param 'onclick' not defined.")
                }
                else {
                    chararray[i] = "<a onclick=\"this.style.color = '#c0c0c0';this.style.cursor = 'text';this.removeAttribute('onclick');" + onclick + "\">";
                    linkbool = true;
                }
            }
            else if (linkbool == true) {
                chararray[i] = "</a>"
                linkbool = false;
            }
        }
        await timer(delay);
        document.getElementById("output").innerHTML = totaloutput + chararray[i];
        totaloutput += chararray[i];
        window.scrollTo(0, document.body.scrollHeight);
    }
}

async function Play(key) {
    let links = document.getElementsByTagName("a");
    for(let i = 0; i < links.length; i++) {
        if (links[i].style.cursor != "text") {
            links[i].style.cursor = "text"
            links[i].removeAttribute('onclick');
            links[i].style.color = '#404040';
        }
    }
    
    if (key == 0) {
        document.getElementById("output").innerHTML = "";
        var audio = new Audio('Audio/monsters-cave-159887.mp3');
        audio.loop = "true";
        audio.play();
        await SlowType("It lingers.", 2000, 50);
        await SlowType("※Strain to see.※", 4000, 10, "Play(1);");
    }
    else if (key == 1) {
        await SlowType("You strain your eyes, squinting into the deep black that surrounds you.Ⅴ No matter how strongly you peer into the darkness, no finer detail reveals itself.Ⅴ You are blind.");
        await SlowType("※Strain to hear.※", 2000, 10, "Play(2);");
    }
    else if (key == 2) {
        await SlowType("You focus.Ⅴ Somewhere, instinctively, you recognize the dense silence that envelops your senses.Ⅴ Your breathing is uncompromisingly audible, and when a drip of water rings out from some unknown direction, it's almost deafening.");
        await SlowType("The sound echoes through the space, impossible to locate, implying an immense internal volume.Ⅴ Several seconds pass, and you hear another.Ⅴ Wherever you are, it is...Ⅴ wet.", 1000);
        await SlowType("※Strain to feel.※", 2000, 10, "Play(3);");
    }
    else if (key == 3) {
        await SlowType("You shift, working to build a sense of your body.Ⅴ You are sitting, your legs against a firm, unyielding ground, with a similarly hard surface pressing into your back.Ⅴ You lower a hand, grazing the floor and wall.Ⅴ You're met with cold roughness, slightly damp.Ⅴ The air feels dense and humid in your throat and against your skin.");
        await SlowType("You are surrounded by stone.", 1000);
        await SlowType("※Stand.※", 2000, 10, "Play(4);");
        await SlowType("※Rest.※", 500, 10, "Play(5);");
    }
    else if (key == 4) {
        await SlowType("You anchor your hands at your sides, slowly pushing to your feet.Ⅴ You move carefully, and it is for that that you avoid hitting your head on the low ceiling.Ⅴ You are forced to hunch slightly—head lowered, knees bent—as you find your footing.");
        await SlowType("A rumbling, growling sound comes from your left, though you can discern no finer direction.Ⅴ The sound itself melts into the rest of the environment, giving it the same character as this place's natural background of wind and geology, though you can't shake the notion that it might be something more...Ⅴ animal.", 1000);
        await SlowType("※Wait.※", 2000, 10, "Play(6);");
        await SlowType("※Flee.※", 500, 10, "Play(8);");
    }
    else if (key == 5) {
        await SlowType("You close your eyes, though it changes your vision none.Ⅴ At least it allows you some sense of rest.Ⅴ You do not know where you are, but movement does not feel like the right answer.");
        await SlowType("A rumbling, growling sound from your left forces you to your feet moments later, your ascent quick enough that you knock your head† against the low ceiling.Ⅴ There's an immediate throbbing in your skull, but you gather yourself, instinctively looking for the source of the sound.", 1000);
        p.wounds++;
        await SlowType("The darkness offers you nothing.Ⅴ By the time you've gathered yourself, it has already faded into the natural background of wind and geology.Ⅴ Perhaps that's the mechanism from which it came.", 1000);
        await SlowType("※Wait.※", 2000, 10, "Play(6);");
        await SlowType("※Flee.※", 500, 10, "Play(8);");
    }
    else if (key == 6) {
        await SlowType("You stand still, ears open for some new disturbance.Ⅴ You feel your weight instinctively lowered, ready to spring.");
        await SlowType("The sound comes again.Ⅴ The geometry of the space swallows any of the finer detail of direction, but it is *louder*, and that alone is enough to plant a conviction that whatever is it is is getting closer.", 1000);
        await SlowType("")
    }
    else if (key == 7) {
        
    }
}