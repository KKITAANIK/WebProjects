// Client ID and API key from the Developer Console
var CLIENT_ID = '1057409841724-4i9hpmn8sfthl8lo6r7q5pfn8rvs97gb.apps.googleusercontent.com';
var API_KEY = 'AIzaSyApV03krvoZaeLbyVtc47OFkGuGXYggG9k';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function(error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    makeButtons();
    setPlayer();
    attackableHeroes();
    fillPassives();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

/**
 * List the enemies from this spreadsheet
 * https://docs.google.com/spreadsheets/d/1DQ9TO44xktiyA-keA1kyb2unOZ3mWoTMIZQU-xUVRnc/edit
 */
function listEnemies() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1DQ9TO44xktiyA-keA1kyb2unOZ3mWoTMIZQU-xUVRnc',
    range: 'Enemies!A2:F',
  }).then(function(response) {
    var range = response.result;
    if (range.values.length > 0) {
      appendPre('Name, HP, Atk, Def, Res, Spd');
      for (i = 0; i < range.values.length; i++) {
        var row = range.values[i];
        // Print columns A and E, which correspond to indices 0 and 4.
        appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] + ', ' + row[4] + ', ' + row[5]);
      }
    } else {
      appendPre('No data found.');
    }
  }, function(response) {
    appendPre('Error: ' + response.result.error.message);
  });
}

function updateRes() {
    let atk = parseInt(document.getElementById("atk").value);
    if (isNaN(atk))
        atk = 0;
    let mod = parseInt(document.getElementById("mod").value);
    if (isNaN(mod))
        mod = 0;
    let hbuffs = parseInt(document.getElementById("hbuffs").value);
    if (isNaN(hbuffs))
        hbuffs = 0;
    let def = parseInt(document.getElementById("def").value);
    if (isNaN(def))
        def = 0;
    let res = parseInt(document.getElementById("res").value);
    if (isNaN(res))
        res = 0;
    let ebuffs = parseInt(document.getElementById("ebuffs").value);
    if (isNaN(ebuffs))
        ebuffs = 0;

    let defans = atk.toString();
    let resans = atk.toString();
    if (mod != 0) {
        defans += " + " + mod.toString();
        resans += " + " + mod.toString();
    }
    if (hbuffs != 0) {
        defans += " + " + hbuffs.toString();
        resans += " + " + hbuffs.toString();
    }
    if (def != 0)
        defans += " - " + def.toString();
    if (res != 0)
        resans += " - " + res.toString();
    if (ebuffs != 0) {
        defans += " - " + ebuffs.toString();
        resans += " - " + ebuffs.toString();
    }

    defans += " = " + (atk + mod + hbuffs - def - ebuffs).toString();
    resans += " = " + (atk + mod + hbuffs - res - ebuffs).toString();

    document.getElementById("defresult").value = defans;
    document.getElementById("resresult").value = resans;
    if (document.getElementById("defbhealth").value == 0)
        document.getElementById("defbhealth").value = 0;
    if (document.getElementById("resbhealth").value == 0)
        document.getElementById("resbhealth").value = 0;
    document.getElementById("defahealth").value = document.getElementById("defbhealth").value - (atk + mod + hbuffs - def - ebuffs);
    document.getElementById("resahealth").value = document.getElementById("resbhealth").value - (atk + mod + hbuffs - res - ebuffs);
}

function setMod(attack, mod, defres, cd, desc) {
    document.getElementById("attack").innerHTML = attack;
    if (mod != "-" && mod != "Passive")
        document.getElementById("mod").value = parseInt(mod);
    else
        document.getElementById("mod").value = "";
    if (mod == "Passive")
        document.getElementById("passive").innerHTML = "<br><em>Passive</em>";
    else   
    document.getElementById("passive").innerHTML = "";
    document.getElementById("defres").innerHTML = defres;
    document.getElementById("cooldown").innerHTML = cd;
    document.getElementById("attackdesc").innerHTML = desc;
    updateRes();
}

function setDef(defender, health, def, res) {
    document.getElementById("defender").innerHTML = defender;
    document.getElementById("def").value = parseInt(def);
    document.getElementById("res").value = parseInt(res);
    document.getElementById("defbhealth").value = parseInt(health);
    document.getElementById("resbhealth").value = parseInt(health);
    updateRes();
}

function randomAttack(j) {
    let target = Math.floor(Math.random() * j);
    document.getElementById("attackbutton" + target.toString()).click();
}

function setAtk(attacker, atk) {
    document.getElementById("attacker").innerHTML = attacker;
    document.getElementById("atk").value = parseInt(atk);
    updateRes();
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1DQ9TO44xktiyA-keA1kyb2unOZ3mWoTMIZQU-xUVRnc',
        range: "Attacks!A2:G",
    }).then(function(response) {
        let master;
        let j = 0;
        var range = response.result;
        if (range.values.length > 0) {
            document.getElementById("player").innerHTML = "";
            for (i = 0; range.values[i] != undefined && range.values[i][0] != undefined; i++) {
                var row = range.values[i];
                if (row[1] == attacker) {
                    master = row[0];
                    var btn2 = document.createElement("BUTTON");
                    btn2.classList.add("tooltip");
                    btn2.id = "attackbutton" + j.toString();
                    btn2.innerHTML = row[2] + "<span class=\"tooltiptext\">" + row[6] + "</span>";
                    btn2.onclick = setMod.bind(null, row[2], row[3], row[4], row[5], row[6]);
                    document.getElementById("player").appendChild(btn2);
                    j++;
                }
            }
            if (j > 0) {
                var randbutton = document.createElement("BUTTON");
                randbutton.innerHTML = "Random";
                randbutton.onclick = randomAttack.bind(null, j);
                document.getElementById("player").appendChild(randbutton);
            }
            var backbutton = document.createElement("BUTTON");
            backbutton.innerHTML = "Back";
            backbutton.onclick = setHeroes.bind(null, master);
            document.getElementById("player").appendChild(backbutton);
        } else {
            appendPre('No data found.');
        }
    }, function(response) {
        appendPre('Error: ' + response.result.error.message);
    });
}

function copyRes(idname) {
    /* Get the text field */
    let copyText = document.getElementById(idname);

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");
}

function makeButtons() {
    document.getElementById("copydefres").onclick = copyRes.bind(null, "defresult");
    document.getElementById("copyresres").onclick = copyRes.bind(null, "resresult");
    document.getElementById("swaphealth").onclick = function() {
        document.getElementById("defbhealth").value = document.getElementById("defahealth").value;
        document.getElementById("resbhealth").value = document.getElementById("resahealth").value;
        updateRes();
    };
    document.getElementById("randgen").onclick = function() {
        document.getElementById("randres").innerHTML = (Math.floor(Math.random() * 4) + 1).toString();
    }
}

function setPlayer() {};
function attackableHeroes() {};

function setHeroes(player) {
    sheetid = player + "!A2:F";
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1DQ9TO44xktiyA-keA1kyb2unOZ3mWoTMIZQU-xUVRnc',
        range: sheetid,
    }).then(function(response) {
        var range = response.result;
        if (range.values.length > 0) {
            document.getElementById("player").innerHTML = "";
            for (i = 0; range.values[i] != undefined && range.values[i][0] != undefined; i++) {
                var row = range.values[i];
                var btn = document.createElement("BUTTON");
                btn.innerHTML = row[0];
                btn.onclick = setAtk.bind(null, row[0], row[2]);
                document.getElementById("player").appendChild(btn);
            }
            var btn = document.createElement("BUTTON");
            btn.innerHTML = "Back";
            btn.onclick = setPlayer;
            document.getElementById("player").appendChild(btn);
        } else {
            appendPre('No data found.');
        }
    }, function(response) {
        appendPre('Error: ' + response.result.error.message);
    });
}

function addDefenders(player) {
    sheetid = player + "!A2:F";
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1DQ9TO44xktiyA-keA1kyb2unOZ3mWoTMIZQU-xUVRnc',
        range: sheetid,
    }).then(function(response) {
        var range = response.result;
        if (range.values.length > 0) {
            document.getElementById("enemies").innerHTML = "";
            for (i = 0; range.values[i] != undefined && range.values[i][0] != undefined; i++) {
                var row = range.values[i];
                var btn = document.createElement("BUTTON");
                btn.innerHTML = row[0];
                btn.onclick = setDef.bind(null, row[0], row[1], row[3], row[4]);
                document.getElementById("enemies").appendChild(btn);
            }
            var btn = document.createElement("BUTTON");
            btn.innerHTML = "Back";
            btn.onclick = attackableHeroes;
            document.getElementById("enemies").appendChild(btn);
        } else {
            appendPre('No data found.');
        }
    }, function(response) {
        appendPre('Error: ' + response.result.error.message);
    });
}

function togglePassive(hero, passive, desc) {
    if (document.getElementById(hero + passive) != null)
        document.getElementById(hero + passive).remove();
    else
        document.getElementById("selectedpassives").innerHTML += "<span id=\"" + hero + passive + "\"><br><i>" + hero + ":</i> " + passive + " - " + desc + "</span>";
}

function fillPassives() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1DQ9TO44xktiyA-keA1kyb2unOZ3mWoTMIZQU-xUVRnc',
        range: "Attacks!A2:G",
    }).then(function(response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; range.values[i] != undefined && range.values[i][0] != undefined; i++) {
                var row = range.values[i];
                if (row[3] == "Passive") {
                    var btn = document.createElement("BUTTON");
                    btn.innerHTML = row[1] + ": " + row[2];
                    btn.onclick = togglePassive.bind(null, row[1], row[2], row[6]);
                    document.getElementById("passivebuttons").appendChild(btn);
                }
            }
        } else {
            appendPre('No data found.');
        }
    }, function(response) {
        appendPre('Error: ' + response.result.error.message);
    });
}

setPlayer = function() {
    document.getElementById("player").innerHTML = "<button id=\"player1\">Yuugo</button><button id=\"player2\">Futaba</button><button id=\"player3\">Tomoko</button><button id=\"player4\">Pit</button><button id=\"player5\">Nanoko</button><button id=\"player6\">Lilu</button><button id=\"player7\">Enemies</button>"
    document.getElementById("player1").onclick = setHeroes.bind(null, document.getElementById("player1").innerHTML);
    document.getElementById("player2").onclick = setHeroes.bind(null, document.getElementById("player2").innerHTML);
    document.getElementById("player3").onclick = setHeroes.bind(null, document.getElementById("player3").innerHTML);
    document.getElementById("player4").onclick = setHeroes.bind(null, document.getElementById("player4").innerHTML);
    document.getElementById("player5").onclick = setHeroes.bind(null, document.getElementById("player5").innerHTML);
    document.getElementById("player6").onclick = setHeroes.bind(null, document.getElementById("player6").innerHTML);
    document.getElementById("player7").onclick = setHeroes.bind(null, document.getElementById("player7").innerHTML);
}

attackableHeroes = function() {
    document.getElementById("enemies").innerHTML = "<button id=\"heroset1\">Yuugo</button><button id=\"heroset2\">Futaba</button><button id=\"heroset3\">Tomoko</button><button id=\"heroset4\">Pit</button><button id=\"heroset5\">Nanoko</button><button id=\"heroset6\">Lilu</button><button id=\"heroset7\">Enemies</button>"
    document.getElementById("heroset1").onclick = addDefenders.bind(null, document.getElementById("heroset1").innerHTML);
    document.getElementById("heroset2").onclick = addDefenders.bind(null, document.getElementById("heroset2").innerHTML);
    document.getElementById("heroset3").onclick = addDefenders.bind(null, document.getElementById("heroset3").innerHTML);
    document.getElementById("heroset4").onclick = addDefenders.bind(null, document.getElementById("heroset4").innerHTML);
    document.getElementById("heroset5").onclick = addDefenders.bind(null, document.getElementById("heroset5").innerHTML);
    document.getElementById("heroset6").onclick = addDefenders.bind(null, document.getElementById("heroset6").innerHTML);
    document.getElementById("heroset7").onclick = addDefenders.bind(null, document.getElementById("heroset7").innerHTML);
}