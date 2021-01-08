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
        updateHealth();
        document.getElementById("img3").onclick = updateHealth;
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

function updateHealth() {
    let maidHealth = [];
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1DQ9TO44xktiyA-keA1kyb2unOZ3mWoTMIZQU-xUVRnc',
        range: "Boss Arena!A2:K",
    }).then(function(response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; range.values[i] != undefined && range.values[i][0] != undefined; i++) {
                var row = range.values[i];
                maidHealth[i] = parseInt(row[1]);
            }
            for (let i = 0; i < 7; i++) {
                if (i == 3) {
                    document.getElementById("healthgreen" + i.toString()).style.width = "calc(100% * (" + parseInt(maidHealth[i]) +" / 50))";
                    document.getElementById("healthred" + i.toString()).style.width = "calc(100% - (100% * (" + parseInt(maidHealth[i]) +" / 50)))";
                }
                else {
                    document.getElementById("healthgreen" + i.toString()).style.width = "calc(100% * (" + parseInt(maidHealth[i]) +" / 20))";
                    document.getElementById("healthred" + i.toString()).style.width = "calc(100% - (100% * (" + parseInt(maidHealth[i]) +" / 20)))";
                    if(maidHealth[i] == 0)
                        document.getElementById("health" + i.toString()).style.opacity = 0;
                    else
                        document.getElementById("health" + i.toString()).style.opacity = 1;
                    document.getElementById("img" + i.toString()).style.opacity = maidHealth[i] / 20;
                }
            }
        } else {
            console.log('No data found.');
        }
    }, function(response) {
        console.log('Error: ' + response.result.error.message);
    });   
}