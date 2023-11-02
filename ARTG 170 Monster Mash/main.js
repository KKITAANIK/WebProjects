var stage = 0;

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

async function SlowType(delaynum, output, startwait = 0) {
    //document.getElementById("cursor").style.display = "none";
    let delay = delaynum;
    chararray = output.split("");
    totaloutput = document.getElementById("displaycontent").innerHTML;
    let italicbool = false;
    let paragraphbool = false;
    let redbool = false;
    let greenbool = false;
    let purplebool = false;
    let yellowbool = false;
    let cyanbool = false;
    let linkbool = false;
    if (startwait > 0) {
        await timer(startwait);
    }
    for (let i = 0; i < chararray.length; i++) {
        if (chararray[i] == '¶') {
            if (paragraphbool == false) {
                chararray[i] = "<p>"
                paragraphbool = true;
            }
            else if (paragraphbool == true) {
                chararray[i] = "</p>"
                paragraphbool = false;
            }
        }
        else if (chararray[i] == '|') {
            chararray[i] = "<br/>"
        }
        else if (chararray[i] == " ") {
            chararray[i] = "&nbsp;";
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
        else if (chararray[i] == "红") {
            if (redbool == false) {
                chararray[i] = "<span style=\"color:red;\">"
                redbool = true;
            }
            else if (redbool == true) {
                chararray[i] = "</span>";
                redbool = false;
            }
        }
        else if (chararray[i] == "绿") {
            if (greenbool == false) {
                chararray[i] = "<span style=\"color:green;\">"
                greenbool = true;
            }
            else if (greenbool == true) {
                chararray[i] = "</span>";
                greenbool = false;
            }
        }
        else if (chararray[i] == "紫") {
            if (purplebool == false) {
                chararray[i] = "<span style=\"color:purple;\">"
                purplebool = true;
            }
            else if (purplebool == true) {
                chararray[i] = "</span>";
                purplebool = false;
            }
        }
        else if (chararray[i] == "黄") {
            if (yellowbool == false) {
                chararray[i] = "<span style=\"color:yellow;\">"
                yellowbool = true;
            }
            else if (yellowbool == true) {
                chararray[i] = "</span>";
                yellowbool = false;
            }
        }
        else if (chararray[i] == "青") {
            if (cyanbool == false) {
                chararray[i] = "<span style=\"color:cyan;\">"
                cyanbool = true;
            }
            else if (cyanbool == true) {
                chararray[i] = "</span>";
                cyanbool = false;
            }
        }
        else if (chararray[i] == "名") {
            if (linkbool == false) {
                chararray[i] = "<a style=\"color:white;\" href=\"https://kkitaanik.github.io/WebProjects/ARTG%20170%20Monster%20Mash/A.R.S.%20Industries%20Communications%20Handbook.pdf\" target=\"_blank\">"
                linkbool = true;
            }
            else if (linkbool == true) {
                chararray[i] = "</a>";
                linkbool = false;
            }
        }
        await timer(delay);
        document.getElementById("displaycontent").innerHTML = totaloutput + chararray[i] + "|";
        totaloutput += chararray[i];
        window.scrollTo(0, document.body.scrollHeight);
    }
    document.getElementById("displaycontent").innerHTML = document.getElementById("displaycontent").innerHTML.slice(0, -1);
    //document.getElementById("cursor").style.display = "inline-block";
    //document.getElementById("cursor").style.animation = "cursor-blink 1.5s steps(2) infinite";
}

async function Start() {
    let input = document.getElementById("cursorInput");
    input.disabled = true;
    await SlowType(20, "Initializing connection");
    await SlowType(500, "... ");
    await SlowType(1, "||Establishing connection to source...\
|绿Connected node  1/43...\
|Connected node  6/43...\
|Connected node 11/43...\
|Connected node 16/43...\
|Connected node 21/43...\
|Connected node 26/43...\
|Connected node 31/43...\
|Connected node 36/43...\
|Connected node 41/43...\
|Connected node 43/43绿\
||Performing connection diagnostics...");
    await SlowType(1, "|Packet loss:        绿below 0.1%绿\
|Latency:            黄5.85ms黄\
|Checksum string:    f/QCedYFvlbQK40D8K2RPw==\
||Relevant security metrics achieved. Opening communications", 1000);
    await SlowType(500, "... ");
    await SlowType(500, "|||||");
    await SlowType(1, "You have been connected. Please follow 名the communications script名 during all communications.");
    await PrepareInput();
    
    input.addEventListener("input", function(){
        this.style.height = '0px';
        this.style.height = this.scrollHeight + 'px';
    })
    
    input.addEventListener("keyup", ({key}) => {
        if (key === "Enter" && input.disabled == false) {
            document.getElementById("displaycontent").innerHTML += " " + input.value + "<br/>";
            InputHandler();
        }
    });
}

async function CheckWordbank(inputVal, target) {
    let matches = false;
    let wordbank = target.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().split(" ");
    for (let i = 0; i < wordbank.length; i++) {
        if (inputVal.includes(wordbank[i])) {
            matches = true;
            break;
        }
    }
    return matches;
}

async function PrepareInput() {
    let input = document.getElementById("cursorInput");
    document.getElementById("displaycontent").innerHTML += "<br/><br/>"
    input.disabled = false;
    input.focus();
    input.select();
    input.value = "> ";
    input.style.height = input.scrollHeight + "px";
}

async function InputHandler() {
    let input = document.getElementById("cursorInput");
    if (input.value.startsWith("> ") == false) {
        input.value = "";
        input.style.height = "0px";
        await SlowType(1, "红SYNTAX ERROR: Message start identification failed. Please try again.红");
        await PrepareInput();
    }
    else {
        let inputVal = input.value.substring(2).toLowerCase();
        input.disabled = true;
        input.value = "";
        input.style.height = "0px";
        if (stage == 0) {
            if ((inputVal.toLowerCase().includes("you have been connected to a remote consultant representing") && inputVal.toLowerCase("what is the reason for your communication today")) == false) {
                await SlowType(1, "红Message denied. Reason: Script incongruity. Please try again.红");
                await PrepareInput();
            }
            else {
                await SlowType(1, "|青hello?青", 3000);
                await SlowType(1, "|青oh my god it actually went through青", 2000);
                await SlowType(1, "|青you're acually real right?青", 2000);
                stage = 1;
                await PrepareInput();
            }
        }
        else if (stage == 1) {
            if (inputVal.toLowerCase().includes("our natural language processing systems are currently offline") && inputVal.toLowerCase().includes("you are speaking to a live human consultant")) {
                await SlowType(1, "|青okay good青", 4000);
            }
            else if (await CheckWordbank(inputVal, "yes yeah right am correct affirmative sure")) {
                await SlowType(1, "|青great青", 2000);
            }
            else {
                await SlowType(1, "|青what?青", 2000);
                await SlowType(1, "|青whatever青", 2000);
            }
            await SlowType(1, "|青look i really need your help right now青", 2000);
            await SlowType(1, "|青this is riley han of exoplanetary research青", 2000);
            await SlowType(1, "|青there's青", 1000);
            await SlowType(1, "|青there's something weird going on right now青", 2000);
            await SlowType(1, "|青sorry im not the supervising officer, i don't know protocol or whatever青", 2000);
            await SlowType(1, "|青we have a青", 1000);
            await SlowType(1, "|青i think we lost someone青", 2000);
            await SlowType(1, "|青what i'm trying to say is i need to report a missing person青", 2000);
            await SlowType(1, "||Keywords identified. Please consult the \"Missing Person\" section of your script.")
            stage = 2;
            await PrepareInput();
        }
        else if (stage == 2) {
            if (inputVal.includes("is") && (inputVal.includes("correct") || inputVal.includes("right"))) {
                await SlowType(1, "|青yes青", 2000);
            }
            else {
                await SlowType(1, "|青sure青", 2000);
            }
            document.getElementById("displaycontent").innerHTML += "<br/><br/><p style=\"color:red;\">It was at this point Adrian's interest in this particular project waned completely, due to the issue of scope involved in processing freeform text input, and the limitations it imposes on the desired play experience. He chose to start another project, to be developed as much as is possible in a one-week timeframe, to submit alongside this project for the second game jam assignment.</p><p style=\"color:red;\">If you would like to play a similar style of game with a different Riley, made for CMPM 148, click <a style=\"color:red;\" href=\"https://kkitaanik.github.io/WebProjects/CMPM%20148%20Time%20Loop/\" target=\"_blank\">here</a>.";
            window.scrollTo(0, document.body.scrollHeight);
        }
    }
}