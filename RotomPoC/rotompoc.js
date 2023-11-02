let validchars = ['!', '"', '#', '$', '%', '&', "'", '*', '?', '@'];
let interval;

function Obfuscate() {
    let newStr = "";
    for (let i = 0; i < 10; i++) {
        newStr += validchars[Math.floor(Math.random() * validchars.length)]
    }
    document.getElementById("obfuscatedText").innerHTML = newStr;
}

function Next() {
    if (document.getElementById("content").innerHTML != "this is normal text") {
        clearInterval(interval);
        document.getElementById("content").innerHTML = "this is normal text";
    }
    else {
        document.getElementById("content").innerHTML = "<span id=\"obfuscatedText\"></span>";
        interval = setInterval(Obfuscate, 100)
    }
}