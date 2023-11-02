let style = -1;
let styleTable = ["url(imgs/networkoffr.jpg)", "url(imgs/networkoffg.jpg)", "url(imgs/networkoffb.jpg)", 
                  "url(imgs/networkonr.jpg)",  "url(imgs/networkong.jpg)",  "url(imgs/networkonb.jpg)"];

document.getElementById("proceedbutton").style.left = "calc(50% - " + document.getElementById("proceedbutton").offsetWidth + "px / 2)"

function Proceed() {
    document.getElementById("body").innerHTML = "<div class=\"main\" id=\"main\">\
            <div class=\"stylechoice\">\
                <div class=\"buttoncontainer\">\
                    <button class=\"redstyle\" onclick=\"RedStyle()\">Use Red Theme</button>\
                </div>\
                <div class=\"buttoncontainer\">\
                    <button class=\"greenstyle\" onclick=\"GreenStyle()\">Use Green Theme</button>\
                </div>\
                <div class=\"buttoncontainer\">\
                    <button class=\"bluestyle\" onclick=\"BlueStyle()\">Use Blue Theme</button>\
                </div>\
            </div>\
        </div>";
}

function RedStyle() {
    document.getElementById("body").innerHTML = "<div class=\"main\" id=\"main\"></div>";
    style = 0;
    Start();
}
function GreenStyle() {
    document.getElementById("body").innerHTML = "<div class=\"main\" id=\"main\"></div>";
    style = 1;
    Start();
}
function BlueStyle() {
    document.getElementById("body").innerHTML = "<div class=\"main\" id=\"main\"></div>";
    style = 2;
    Start();
}

function Start() {
    document.getElementById("main").style.backgroundImage = styleTable[style];
}