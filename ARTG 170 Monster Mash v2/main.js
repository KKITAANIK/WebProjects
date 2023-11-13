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
        else if (chararray[i] == '‡') {
            chararray[i] = "";
            document.getElementById("splatter2").style.opacity = 0.95;
        }
        else if (chararray[i] == 'ɠ') {
            chararray[i] = "";
            var audio = new Audio('Audio/angry-beast-6172-1.mp3');
            audio.play();
        }
        else if (chararray[i] == 'Ɠ') {
            chararray[i] = "";
            var audio = new Audio('Audio/angry-beast-6172-2.mp3');
            audio.play();
        }
        else if (chararray[i] == '₫') {
            chararray[i] = "";
            var audio = new Audio('Audio/droplets-in-a-cave-6785.mp3');
            audio.play();
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
        await timer(500);
        await SlowType("This game is best experienced with headphones, and with a bright monitor.");
        await timer(5000);
        document.getElementById("output").innerHTML = "";
        await timer(2000);
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
        await SlowType("You focus.Ⅴ Somewhere, instinctively, you recognize the dense silence that envelops your senses.Ⅴ Your breathing is uncompromisingly audible, and when ₫a drip of water rings out from some unknown direction, it's almost deafening.");
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
        await SlowType("ɠA rumbling, growling sound comes from your left, though you can discern no finer direction.Ⅴ The sound itself melts into the rest of the environment, giving it the same character as this place's natural background of wind and geology, though you can't shake the notion that it might be something more...Ⅴ animal.", 1000);
        await SlowType("※Wait.※", 2000, 10, "Play(6);");
        await SlowType("※Flee.※", 500, 10, "Play(8);");
    }
    else if (key == 5) {
        await SlowType("You close your eyes, though it changes your vision none.Ⅴ At least it allows you some sense of rest.Ⅴ You do not know where you are, but movement does not feel like the right answer.");
        await SlowType("ɠA rumbling, growling sound from your left forces you to your feet moments later, your ascent quick enough that you knock your head† against the low ceiling.Ⅴ There's an immediate throbbing in your skull, but you gather yourself, instinctively looking for the source of the sound.", 1000);
        p.wounds++;
        await SlowType("The darkness offers you nothing.Ⅴ By the time you've gathered yourself, it has already faded into the natural background of wind and geology.Ⅴ Perhaps that's the mechanism from which it came.", 1000);
        await SlowType("※Wait.※", 2000, 10, "Play(6);");
        await SlowType("※Flee.※", 500, 10, "Play(8);");
    }
    else if (key == 6) {
        await SlowType("You stand still, ears open for some new disturbance.Ⅴ You feel your weight instinctively lowered, ready to spring.");
        await SlowType("ƓThe sound comes again.Ⅴ The geometry of the space swallows any of the finer detail of direction, but it is *louder*, and that alone is enough to plant a conviction that whatever is it is is getting closer.", 1000);
        await SlowType("You stare into the darkness, some instinct telling you that, surely, anything that moves and breathes must be visible, if only it gets close enough.Ⅴ You wait for the uncompromising blackness to resolve into a form—to give you some greater hint about your situation.", 1000);
        await SlowType("For a moment, you feel something in front of you—a shift in the air to indicate only the subtlest change in current...Ⅴ and then your chest explodes in pain‡.", 1000);
        await SlowType("An accompanying sharpness rings through the back of your head, and you find yourself on your back.Ⅴ Hot air rushes across you as twisting agony spears through you, something *digging* just under your sternum.Ⅴ There is some rough, rhythmic sound as whatever is on top of you tears away at your chest, but your ears refuse to resolve it.Ⅴ Only a few moments pass before you black out completely.", 1000);
        await SlowType("※Die.※", 5000, 10, "Play(7);");
    }
    else if (key == 7) {
        await SlowType("You do.", 1000);
        await timer(5000);
        window.close();
    }
    else if(key == 8) {
        await SlowType("You quickly begin moving away.Ⅴ Though your instinct is to glance behind you, you know it will do you no good without any light to see by.");
        await SlowType("You are agonizingly aware of your pace, forced to little more than a crawl as you feel the terrain in front of you.Ⅴ You keep your back to the source of the sound, if only to catch yourself in case you fall.Ⅴ The sound of your breathing, accelerating with your escape, feels almost overpowering.Ⅴ Surely, for anyone—or anything—nearby, it would be impossible to miss.", 1000)
        await SlowType("Your flight stalls as the space in front comes to an abrupt end, your foot coming up against a wall that your hands quickly reaffirm.Ⅴ With forward egress no longer an option, all you are left with is the instinctual conviction that the world behind you *is not safe*.", 1000);
        await SlowType("※Follow the wall to the left.※", 2000, 10, "Play(9);");
        await SlowType("※Follow the wall to the right.※", 500, 10, "Play(9);");
    }
    else if (key == 9) {
        await SlowType("Left or right, you have no greater plan, fleeing into an unknown space with no real understanding of the options that will be presented to you.Ⅴ There is no guarantee that there is any true escape ahead of you—any legitimate opportunity to leave this place.Ⅴ All you can do is move away from an area you no longer wish to be.");
        await SlowType("This whole, fully formed even if unfinished, does not hold an answer.Ⅴ The darkness remains just as inscrutable, and the moments within leave no record.", 1000);
        await SlowType("What I'm trying to say is I've been absurdly busty this week and this is as far as I've developed the game.Ⅴ You should try staying still if you haven't already—that has more content, too.", 1000, 5);
        await SlowType("Okay cool.Ⅴ Thanks for checking in.Ⅴ Bye bye, now!", 1000, 5);
        await SlowType("Also, just like...Ⅴ don't go into random caves unless you know what you're doing.Ⅴ Total skill issue.", 1000, 5);
        await SlowType("That's really the end, now.Ⅴ There's no more text.Ⅴ Promise.", 5000, 5);
    }
}