let currentscreen = ""; // store the screen the player is currently at
let currentbuttons = []; // store the buttons the player is currently looking at
let log = ""; // store 𝗲𝘃𝗲𝗿𝘆𝘁𝗵𝗶𝗻𝗴; you can look back at the entire history

function Output(output, buttons) { // output should be a string; buttons should be an array
    outputArray = output.split('\n'); // we want to put each paragraph in a <p> tag, so split by new line
    newOutput = ""; // initialize a new string for our changes
    for (let i = 0; i < outputArray.length; i++) {
        newOutput += '<p>' + outputArray[i] + '</p>'; // add the tag around each paragraph and we're done
    }
    newOutput = newOutput.replaceAll('<‡>', '<span class="dialogue">') // I want to use <‡>dialogue</‡> to do my font switching, so this does that with no fuss!
    newOutput = newOutput.replaceAll('</‡>', '</span>')
    log += newOutput; // both log and currentscreen get the non-button text output (which includes hoverables)
    currentscreen += newOutput;
    currentbuttons = buttons; // log the buttons currently being offered
    currentscreen += "<span id=\"clickables\">" // we put all the buttons in one section so we can easily clear them later
    for (let i = 0; i < buttons.length; i++) { // run through the buttons list
        currentscreen += '<br/><span class="clickable" id="clickable' + i + '">[' + buttons[i].showtext + ']</span>' // pop the label on (onclick will be added during PrintScreen())
    }
    currentscreen += "<br/><br/><br/><br/></span>";

    PrintScreen();
}

function ShowHistory() {
    document.getElementById("output").innerHTML = log; // just display the contents of the log variable, which should be a string formatted in HTML
}

function PrintScreen() {
    document.getElementById("output").innerHTML = currentscreen; // just display the contents of the currentscreen variable, which should be a string formatted in HTML
    for (let i = 0; i < currentbuttons.length; i++) { // run through the buttons list
        document.getElementById('clickable' + i).onclick = function() { // time to assign onclick to buttons[i].func, but first we need to take care of some stuff
            document.getElementById("clickables").remove(); // Once a button is clicked, we don't need them anymore! Delete them from the HTML
            if (currentbuttons[i].clearScreen) { // if it is the end of a scene, we want to clear the screen
                currentscreen = '<span class="clickedtext">[' + currentbuttons[i].showtext + ']</span>'; // add the post-click text ("You did 𝒙!") to form the 𝘀𝘁𝗮𝗿𝘁 of the next screen, clearing out the last one
            }
            else if (!currentbuttons[i].clearScreen) { // if we 𝗮𝗿𝗲𝗻'𝘁 clearing the screen we need to remove the buttons and add the clickedtext to the 𝗲𝗻𝗱
                currentscreen = document.getElementById("output").innerHTML // remember, we already deleted the buttons; we just need that to reflect in currentscreen
                currentscreen += '<span class="clickedtext">[' + currentbuttons[i].showtext + ']</span>'; // add the post-click text ("You did 𝒙!") to form the 𝘀𝘁𝗮𝗿𝘁 of the next screen, clearing out the last one
            }
            log += '<span class="clickedtext">[' + currentbuttons[i].showtext + ']</span>'; // add the post-click text ("You did 𝒙!") to the 𝗲𝗻𝗱 of the next screen, 𝗷𝘂𝘀𝘁 recording what choice was made
            // we have to do everything 𝗯𝗲𝗳𝗼𝗿𝗲 running the function because the button will disappear when we do
            currentbuttons[i].func(); // run the function
        }
    }
}

function MakeHoverable(showtext, tooltip) {
    return('<span class="hoverable">' + showtext + '<span class="tooltip">' + tooltip + '</span></span>') // just slot them in their places
}

function MakeTwiceHoverable(showtext, tooltip) {
    return('<span class="twicehoverable">' + showtext + '<span class="twicetooltip">' + tooltip + '</span></span>') // just slot them in their places
}

class Button {
    constructor(showtext, func, clearScreen) {
        this.showtext = showtext; // the text that is actually displayed for the player to click on
        this.func = func; // the function to execute if the text is clicked
        this.clearScreen = clearScreen
    }
}

function test() {
    console.log("The test function was called.");
}














// THIS WHOLE SECTION IS JUST TESTING CODE
// I'm keeping it around again for convenience so I don't have to re-generate the lorem ipsum and such, and to reference for the most basic syntax; YOU SHOULD IGNORE IT


/*
function Start() {
    let output = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non risus lorem. "
    + MakeHoverable("Nunc ut tempor sapien.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi ipsum, elementum id dictum eget, vehicula at turpis. Donec ultricies semper diam, in ultricies ipsum.")
    + " Nam imperdiet auctor odio vitae accumsan. Suspendisse eget mattis lorem, at euismod sem. Pellentesque lorem nisl, malesuada quis enim a, volutpat volutpat nibh. Etiam id purus ullamcorper, sodales mi sed, viverra sem. In semper urna lorem, commodo consectetur lacus pulvinar vitae. Pellentesque eleifend sem ac viverra pharetra. Morbi eget enim facilisis, pretium eros quis, scelerisque leo. Integer imperdiet eleifend orci vel eleifend. Maecenas vel leo odio."
    + "\nMaecenas faucibus, diam in sagittis facilisis, nunc velit fermentum ex, sed tempus ante est ut lacus. Sed massa ante, vehicula et dui a, lobortis tincidunt risus. Pellentesque tempor mauris eu metus lobortis dictum. Fusce ultricies sodales quam at gravida. Quisque ac augue id risus suscipit imperdiet id ut tellus. Quisque et justo vel justo blandit viverra suscipit vel augue. Ut at arcu vitae elit molestie ultrices id id risus. Donec vitae lacus consequat, fringilla lacus in, gravida nisi. Proin non magna et nunc fermentum lacinia vitae et lectus. Sed a accumsan est, ac commodo mi."
    + "\nNam vel tincidunt nisl. Curabitur euismod posuere massa, et lacinia odio vestibulum eget. Vivamus semper augue neque, non varius justo bibendum non. Phasellus at varius nisi, at efficitur turpis. Aliquam erat volutpat. Sed luctus tellus a nisl auctor pretium. Aenean varius vel ipsum id pharetra. Morbi condimentum ligula odio, sed dignissim ipsum fringilla a. Mauris sit amet sagittis sapien, nec congue dolor. Curabitur suscipit turpis sit amet diam sagittis, eget malesuada enim posuere. Ut nulla eros, ultricies iaculis nisl ac, tristique aliquam ligula.";
    let buttons = [
        new Button("Select the first option.", StartResults.bind(null, 0)),
        new Button("No, the second option is better.", StartResults.bind(null, 1)),
        new Button("Actually, the <i>third</i> option is best.", StartResults.bind(null, 2))
    ];
    Output(output, buttons);
}

function StartResults(key) {
    if (key == 0) {
        console.log('the first option was selected')
        let output = "Some stuff happened."
        let buttons = [];
        Output (output, buttons);
    }
    else if (key == 1) {
        console.log('the second option was selected');
        let output = "Some other stuff happened."
        let buttons = [];
        Output (output, buttons);
    }
    else if (key == 2) {
        console.log('the third option was selected');
        let output = "Even more other stuff happened."
        let buttons = [];
        Output (output, buttons);
    }
}
*/