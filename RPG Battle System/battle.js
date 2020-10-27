let p = new Object;
let e = new Object;
let moves = new Object;

class Move {
    constructor(name, onclick) {
        this.name = name;
        this.onclick = onclick;
    }
}

moves.punch = new Move("Punch", "e.health -= 5; document.getElementById('log').innerHTML = '<br> You used Punch!';");

p.health = 100;
e.health = 100;

p.moves = [
    moves.punch
]

function Update() {
    document.getElementById("playerhealth").innerHTML = p.health.toString();
    document.getElementById("enemyhealth").innerHTML = e.health.toString();
    document.getElementById("playermoves").innerHTML = "";

    for (let i = 0; i < p.moves.length; i++) {
        document.getElementById("playermoves").innerHTML += "<button onclick=\"" + p.moves[i].onclick + "Update();\">" + p.moves[i].name + "</button>";
    }
    e.moves[Math.floor(Math.random() * e.moves.length)].effect
}