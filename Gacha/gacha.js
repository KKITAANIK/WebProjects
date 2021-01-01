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
    let defans = atk + mod + hbuffs - def - ebuffs;
    let resans = atk + mod + hbuffs - res - ebuffs;
    $("#defresult").html(defans);
    $("#resresult").html(resans);
}

function makeButtons() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1DQ9TO44xktiyA-keA1kyb2unOZ3mWoTMIZQU-xUVRnc',
        range: 'Enemies!A2:F',
    }).then(function(response) {
        var range = response.result;
        if (range.values.length > 0) {
            function setVals(defender, def, res) {
                updateRes();
                document.getElementById("defender").innerHTML = defender;
                document.getElementById("def").value = def;
                document.getElementById("res").value = res;
            }
            for (i = 0; i < range.values[i][0] != undefined; i++) {
                var row = range.values[i];
                var btn = document.createElement("BUTTON");
                btn.innerHTML = row[0];
                btn.onclick = setVals.bind(null, row[0], row[3], row[4]);
                document.getElementById("enemies").appendChild(btn);
            }
        } else {
            appendPre('No data found.');
        }
    }, function(response) {
        appendPre('Error: ' + response.result.error.message);
    });
}

function setPlayer() {};

function setAtk(player) {
    sheetid = player + "!A2:F";
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1DQ9TO44xktiyA-keA1kyb2unOZ3mWoTMIZQU-xUVRnc',
        range: sheetid,
    }).then(function(response) {
        var range = response.result;
        if (range.values.length > 0) {
            function setVals(atk) {
                updateRes();
                document.getElementById("attacker").innerHTML = player;
                document.getElementById("atk").value = atk;
            }
            document.getElementById("player").innerHTML = "";
            for (i = 0; range.values[i][0] != undefined; i++) {
                var row = range.values[i];
                var btn = document.createElement("BUTTON");
                btn.innerHTML = row[0];
                btn.onclick = setVals.bind(null, row[2]);
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

setPlayer = function() {
    document.getElementById("player").innerHTML = "<button id=\"player1\">Yuugo</button><button id=\"player2\">Futaba</button><button id=\"player3\">Tomoko</button><button id=\"player4\">Pit</button><button id=\"player5\">Nanoko</button>"
    document.getElementById("player1").onclick = setAtk.bind(null, document.getElementById("player1").innerHTML);
    document.getElementById("player2").onclick = setAtk.bind(null, document.getElementById("player2").innerHTML);
    document.getElementById("player3").onclick = setAtk.bind(null, document.getElementById("player3").innerHTML);
    document.getElementById("player4").onclick = setAtk.bind(null, document.getElementById("player4").innerHTML);
    document.getElementById("player5").onclick = setAtk.bind(null, document.getElementById("player5").innerHTML);
}