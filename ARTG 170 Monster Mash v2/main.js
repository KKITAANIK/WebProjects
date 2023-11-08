function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

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
    }
    else if (key == 5) {
        await SlowType("You close your eyes, though it changes your vision none.Ⅴ At least it allows you some sense of rest.Ⅴ You do not know where you are, but movement does not feel like the right answer.");
        await SlowType("A rumbling, growling sound from your left forces you to your feet moments later, your ascent quick enough that you knock your head† against the low ceiling.Ⅴ There's an immediate throbbing in your skull, but you gather yourself, instinctively looking for the source of the sound.", 1000);
        await SlowType("The darkness offers you nothing.", 1000);
        await SlowType("※Wait.※", 2000, 10, "Play(6);");
        await SlowType("※Flee.※", 500, 10, "Play(7);");
    }
    else if (key == 6) {
        
    }
    else if (key == 7) {
        await SlowType("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare faucibus sem, eget auctor eros commodo ac. Nam elementum, dui eget tincidunt luctus, tortor nunc rutrum ex, vitae aliquam ante dui eu augue. Nulla vitae gravida enim. Nunc luctus et felis sit amet varius. Sed sagittis pretium tortor nec scelerisque. Aliquam erat volutpat. Curabitur id massa eu nisl pulvinar vulputate a id orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum scelerisque mollis orci sed molestie.");
        await SlowType("Etiam aliquet, mi nec mattis blandit, tortor quam consectetur nunc, a efficitur mi orci a nunc. Sed sed viverra nisl, eget iaculis augue. Phasellus vestibulum, nisl et sollicitudin consectetur, lacus sapien sodales nisl, sed aliquam lacus orci et dui. Donec eu augue eros. Etiam mauris ante, maximus in finibus ut, ultricies sodales est. Duis luctus eros nibh, eu aliquam purus vulputate a. Fusce eget risus tincidunt, egestas purus et, consequat ante. Pellentesque hendrerit justo at magna volutpat accumsan. Morbi ullamcorper venenatis blandit. Aenean lacinia magna ex, ut condimentum purus laoreet nec. Integer quis ex auctor, scelerisque dolor vitae, placerat orci. Phasellus elementum orci non consectetur interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti.");
        await SlowType("Etiam imperdiet, eros porta scelerisque posuere, eros elit consequat arcu, vitae facilisis leo nulla nec orci. Cras at augue vel risus eleifend condimentum id sed felis. In sit amet turpis quis urna lacinia elementum ut at ex. Suspendisse potenti. Sed eu libero sodales, pharetra tortor in, aliquet ipsum. Fusce a felis ut ipsum mattis lobortis. In scelerisque ligula a egestas posuere. Mauris elementum placerat aliquet. Nam fermentum a nisl in lobortis. Ut consectetur libero at dignissim feugiat.");
        await SlowType("In tincidunt leo in eros ultricies, ut porttitor nulla malesuada. In tincidunt, ligula ut dapibus euismod, mi lacus porta nisi, ultrices viverra justo eros eu mauris. Maecenas tincidunt vulputate suscipit. Nam eget ullamcorper justo, non commodo dolor. Nullam pellentesque erat vitae elit cursus scelerisque. Ut in feugiat massa. Nullam cursus, quam ac bibendum iaculis, orci tellus pharetra dui, sit amet mollis urna tellus a orci. Proin aliquet est nec diam tincidunt blandit. Maecenas vel finibus est, et faucibus augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed faucibus erat ut ligula aliquam, et aliquam justo sollicitudin. Proin ac metus euismod, ornare mi vel, consectetur odio. Praesent dapibus arcu at tristique bibendum. Nunc nec bibendum ipsum, laoreet porttitor mi.");
        await SlowType("Nunc enim orci, consequat a consectetur et, tempus vel purus. Maecenas eleifend lectus leo. Quisque in vestibulum sapien. Proin molestie rutrum nunc at congue. Pellentesque tincidunt lacus sed ante tincidunt, eu convallis tortor volutpat. Integer bibendum, neque quis accumsan tristique, metus turpis luctus neque, at efficitur turpis felis ornare nisl. Suspendisse et lorem viverra, cursus elit quis, interdum eros. Sed dapibus ullamcorper lacus, id posuere mi cursus sed. Morbi ornare venenatis magna, at varius diam gravida interdum. In nec ultrices metus, eget facilisis mi. Vestibulum nec lectus ex. Sed eget lacus diam.");
    }
}