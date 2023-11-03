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
                    chararray[i] = "<a onclick=\"" + onclick + "\">";
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
        if (links[i].style.color != "#c0c0c0") {
            links[i].style.color = "#c0c0c0";
            links[i].style.cursor = "text"
            links[i].removeAttribute('onclick');
        }
    }
    
    if (key == 0) {
        await SlowType("It lingers.", 2000, 50);
        await SlowType("※Strain to see.※", 4000, 10, "Play(1);")
    }
    else if (key == 1) {
        await SlowType("You strain your eyes, squinting into the deep black that surrounds you.Ⅴ No matter how strongly you peer into the darkness, no finer detail reveals itself.Ⅴ You are blind.");
        await SlowType("※Strain to hear.※", 2000, 10, "Play(2);")
    }
    else if (key == 2) {
        await SlowType("You focus.Ⅴ Somewhere, instinctually, you recognize the immense silence surrounding you.Ⅴ Your breathing is uncompromisingly audible, and when a drip of water sounds from some unknown direction, it's almost deafening.");
        await SlowType("The sound echoes through the space, implying an immense internal volume and making it impossible to place.Ⅴ Several seconds pass, and you hear another.Ⅴ Wherever you are, it is...Ⅴ wet.", 1000)
        await SlowType("※Strain to feel.※", 2000, 10, "Play(3);")
    }
}