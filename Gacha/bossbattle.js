const maxBossesCollumms = 3;

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
    bossSelection();
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

function displayBoss(row) {
    let enemyList = [];
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1DQ9TO44xktiyA-keA1kyb2unOZ3mWoTMIZQU-xUVRnc',
        range: "Bosses!A2:C",
    }).then(function(response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (let i = 0; i < maxBossesCollumms; i++) {
                if (range.values[row][i] != "")
                    enemyList.push(range.values[row][i]);
            }
            console.log(enemyList);
        } else {
            console.log('No data found.');
        }
    }, function(response) {
        console.log('Error: ' + response.result.error.message);
    });
}

function bossSelection() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1DQ9TO44xktiyA-keA1kyb2unOZ3mWoTMIZQU-xUVRnc',
        range: "Bosses!A2:C",
    }).then(function(response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; range.values[i] != undefined && range.values[i][0] != undefined; i++) {
                var row = range.values[i];
                var btn = document.createElement("BUTTON");
                btn.innerHTML = row[0];
                btn.onclick = displayBoss.bind(null, i);
                document.getElementById("bosses").appendChild(btn);
            }
        } else {
            console.log('No data found.');
        }
    }, function(response) {
        console.log('Error: ' + response.result.error.message);
    });
}