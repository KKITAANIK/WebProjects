let p = {}
p.loadcount = 0;
p.visittracker = {};
p.maxxed = false;

function sleep(s) {
	return new Promise(resolve => setTimeout(resolve, s * 1000));
}

function setCookie(cname, cvalue) {
    const d = new Date(2147483647 * 1000);
    // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999; path=/';  
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

async function LoadPage(pagename, skipWait = false) {
    setCookie("p", JSON.stringify(p));
    if (p.maxxed && pagename == "indexpage") {
        pagename = "indexpagenew";
    }
    (function(){
        var x = document.body.getElementsByTagName("*");
        for (i = 0; i < x.length; i++){
            x[i].style.cursor = "wait";
        }
    }()
    );
    if (p.loadcount < 12 || p.maxxed) {
        if (skipWait == false) {
            await sleep(Math.min(0.1 * (p.loadcount ** 1.5), 4))
        }
        p.loadcount++;
        p.visittracker[pagename] = true;
        $("#content").load("pages/" + pagename + ".html");
        console.log("Loaded " + pagename);
        console.log("p: " + p);
        (function(){
            var x = document.body.getElementsByTagName("*");
            for (i = 0; i < x.length; i++){
                x[i].style.cursor = "auto";
            }
        }()
        );
    }
    else {
        p.maxxed = true;
        setCookie("p", JSON.stringify(p));
    }
}

function Start() {
    p = getCookie("p");
    if (p != "") {
        p = JSON.parse(p);
        setCookie("p", JSON.stringify(p));
    } else {
        p = {}
        p.loadcount = 0;
        p.visittracker = {};
        p.maxxed = false;
        p.visittracker.indexpage = false;
        p.visittracker.entry1 = false;
        p.visittracker.entry2 = false;
        p.visittracker.entry3 = false;
        p.visittracker.entry4 = false;
        p.visittracker.entry5 = false;
        p.visittracker.entry6 = false;
        p.visittracker.entry7 = false;
    }

    let transitionInterval = setInterval(function() {
        document.body.classList.toggle("transition");
    }, 5000)
    
    let textsizeInterval = setInterval(function() {
        let paragraphs = document.getElementsByTagName("p");
        for(let i = 0; i < paragraphs.length; i++)
        {
            //if (paragraphs[i].style.fontSize == ""){
                paragraphs[i].style.fontSize = "18px"
            //}
            let myFontSize = paragraphs[i].style.fontSize;
            var randNum = Math.random() * (Math.round(Math.random()) ? 0.05 : -0.05)
            paragraphs[i].style.fontSize = (parseInt(myFontSize.substring(0, myFontSize.length - 2)) + (randNum * p.loadcount)) + "px";
        }
    }, 200)
    LoadPage("indexpage", true);
}