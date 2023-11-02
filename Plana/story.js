function Awaken() {
    document.getElementById("output").innerHTML = "";
    Buttons("Awaken", "", "", "", "", "", "", "", Gildinn, 0, 0, 0, 0, 0, 0, 0);
}
function Gildinn() {
    if (p.affinity == "perception" || p.perception >= 7 || (p.background ==  "physician" && perception >= 4) || (p.background ==  "miracle worker" && perception >= 4)) {
        if (p.background ==  "physician" || p.background ==  "zoologist" || p.race == "min") {
            Output("gildinn/gildinn-1a2");
        }
        else {
            Output("gildinn/gildinn-1a");
        }
    }
    else if (p.background == "apothecary" || p.background == "herbologist") {
        if (p.background ==  "physician" || p.background ==  "zoologist" || p.race == "min") {
            Output("gildinn/gildinn-1b2");
        }
        else {
            Output("gildinn/gildinn-1b");
        }
    }
    else {
        if (p.background ==  "physician" || p.background ==  "zoologist" || p.race == "min") {
            Output("gildinn/gildinn-2");
        }
        else {
            Output("gildinn/gildinn-");
        }
    }
    Buttons("Yes<span class=\"tooltip\">Yes, you remember who you are, your background, and why you were unconcious. You say as much.</span>", "No<span class=\"tooltip\">No, you don't know what caused you to end up unconcious in the woods, but that is the only gap in your memory.</span>", "Total Memory Loss<span class=\"tooltip\">No, in fact, now that you think about it, you can't remember much of anything. Who are you?</span>", "Stay Silent", "", "", "", "", Gildinn1, Gildinn2, Gildinn3, Gildinn4, 0, 0, 0, 0);
}
function Gildinn1() {

}
function Gildinn2() {
    
}
function Gildinn3() {
    
}
function Gildinn4() {
    
}