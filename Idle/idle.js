let clicks = 0;
let totclicks = 0;
let cps = 1;
let nowclicks = clicks;
let clickdif = 0;

function UpdateCounter() {
    document.getElementById("counter").innerHTML = "You have ".concat(clicks.toString(), " click(s), increasing at a rate of ", clickdif.toString(), " click(s) per second.");
}
function UpdateText() {
    clicks++;
    totclicks++;
}
function CPS() {
    clicks += cps;
    totclicks += cps;
    clickdif = clicks - nowclicks;
    nowclicks = clicks;
}