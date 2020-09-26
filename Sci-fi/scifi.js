let min = 39;
let hour = 1;
let day = 6;
let month = 2;
let year = 6896;
let sublocale = "Sublocale";
let locale = "Locale";
let superlocale = "Superlocale";
let credits = "####";

let gender;
let pronounsub; //he, she, it, they
let pronounobj; //him, her, it, them
let pronounmod; //his, her, its, their 
let pronounadj; //his, hers, its, theirs
let background;

let choice = 0;

let buttons = [];

function FillButtons() {
    for (let i = 0; i < 8; i++)
        buttons[i] = new Button(i);
    
}
function UpdateMeters() {
    while (min >= 50) {
        min -= 50;
        hour++;
    }
    while (hour >= 25) {
        hour -= 25;
        day++;
    }
    while ((day > 35) || (day > 34 && ((month % 2 == 0) || (month == 1 && (year % 4 == 0))))) {
        if ((month % 2 == 0) || ((year % 4 == 0) && month == 1)) {
            day -= 34;
            month++;
        }
        else {
            day -= 35;
            month++;
        }
        
        if (month > 9) {
            month -= 9;
            year++;
        }
    }

    if (min < 10) {
        document.getElementById("time").innerHTML = hour.toString().concat(":0", min.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " GST");
    }
    else {
        document.getElementById("time").innerHTML = hour.toString().concat(":", min.toString(), " ", day.toString(), "/", month.toString(), "/", year.toString(), " GST");
    }

    document.getElementById("credits").innerHTML = "◱".concat(credits.toString());
    document.getElementById("location").innerHTML = sublocale.concat(", ", locale, ", ", superlocale);
}

function Output(output) {
    document.getElementById("output").innerHTML = output;
}

class Button {
    constructor(num) {
        // initialize the button
        this.num = num;
        this.id = "b" + num;
    }

    update(func, text) {
        // update the attributes
        document.getElementById(this.id).disabled = false;
        document.getElementById(this.id).innerHTML = text;
        document.getElementById(this.id).onclick = func;
    }

    disable() {
        // disable the element and empty its attributes
        document.getElementById(this.id).disabled = true;
        document.getElementById(this.id).innerHTML = "";
        document.getElementById(this.id).onclick = "";
    }
}

function ClearButtons() {
    for (let i = 0; i< buttons.length; i++)
        buttons[i].disable();
}

function MainMenu() {
    document.getElementById("output").style.textAlign = "center";
    Output("<br /><span class=\"titlespan\">Welcome to your Exodus!</span><br /><br /><br />A <span class=\"kkitaanik\">KK̈ITAȺNIK</span> game<br /><br />created by Adrian Clayton<br />");
    ClearButtons();
    buttons[0].update(NewGame, "New Game<span class=\"tooltip\">Start a new game.</span>");
    buttons[7].update(Quit, "Quit<span class=\"tooltip\">Exit the game.</span>");
}
function NewGame() {
    document.getElementById("output").style.textAlign = "justify";
    CharacterCreation();
}
function Quit() {
    if (confirm("Are you sure you want to quit?")) {
        window.location.href = 'https://kkitaanik.github.io/WebProjects/';
    }    
}

function CharacterCreation() {
    Output("Please select your gender.");
    ClearButtons();
    buttons[0].update(He, "Male");
    buttons[1].update(She, "Female");
    buttons[2].update(It, "Neutral (it pronouns)");
    buttons[3].update(They, "Neutral (they pronouns)");
}
function He() {
    gender = "male";
    pronounsub = "he";
    pronounobj = "him";
    pronounmod = "his";
    pronounadj = "his";
    Background();
}
function She() {
    gender = "female";
    pronounsub = "she";
    pronounobj = "her";
    pronounmod = "her";
    pronounadj = "hers";
    Background();
}
function It() {
    gender = "non-binary";
    pronounsub = "it";
    pronounobj = "it";
    pronounmod = "its";
    pronounadj = "its";
    Background();
}
function They() {
    gender = "non-binary";
    pronounsub = "they";
    pronounobj = "them";
    pronounmod = "their";
    pronounadj = "theirs";
    Background();
}
function Background() {
    Output("&emsp;&emsp;&emsp;&emsp;Humanity has just begun its foray onto the glactic stage. Earth is seeing incredible emmigration, and you are among those leaving the planet to seek fame, fortune, or something perhaps harder to distill into a single buzzword. Certain backgrounds, or reasons for your journey, are listed for you to choose from. This will determine a few aspects of your past and where you begin your exploration of this galaxy, however it will not bar you from any other path you may wish to pursue.");
    ClearButtons();
    buttons[0].update(Citizen, "Citizen<span class=\"tooltip\">You are the winner of an essay-writing contest, earning a funded trip to the cosmos on the condition you keep a journal of your experience to be published at the conclusion of your journey. You will start at iDune, the Intragalactic Diplomatic post of the United Nations of Earth.</span>");
    buttons[1].update(Diplomat, "Diplomat<span class=\"tooltip\">You are a diplomat sent to Armistice, a city-planet and the political hub of the galaxy. You are representing the United Nations of Earth, playing a very minor role in increasing the human population at Armistice and creating positive first impressions among its citizens.</span>");
    buttons[2].update(Explorer, "Explorer<span class=\"tooltip\">You are an opportunist, ready to explore planetary systems that have yet to be mapped, and hopefully find valuable resources or phenomena to be claimed, patented, or profited from. You will start at Tenkets, a commercial hub and massive market satellite established by the shelish.</span>")
    buttons[3].update(Merchant, "Merchant<span class=\"tooltip\">You are a vendor of goods from Earth, ready to spread new commodities to the alien races for a price. What goods you sell, and their legality, is up to you. You will start in Menagerie, a cultural hub planet and allegedly the most diverse place in the galaxy.</span>");
    buttons[4].update(Spacer, "Spacer<span class=\"tooltip\">You are a member of the United Nations of Earth's Interstellar Defense Force, the servicemen and women of which are known as \"spacers\". You are currently on a survey ship, working with a small squad to protect its crew as they investigate UNE interests.</span>");
    buttons[5].update(Stowaway, "Stowaway<span class=\"tooltip\">You are a criminal stowed away on a ship leaving Earth. You have little to your name and no idea where the ship you are in is headed, nor do you know whether you will be able to safely disembark without getting caught.</span>");
}
function Citizen() {
    background = "citizen";
    credits = "5000";
    sublocale = "Docking Bay";
    locale = "iDune";
    superlocale = "Solo (formerly HD 172051)";
    UpdateMeters();
    ConfirmChar();
}
function Diplomat() {
    background = "diplomat";
    credits = "2000";
    sublocale = "Residential District";
    locale = "Capital";
    superlocale = "Armistice";
    UpdateMeters();
    ConfirmChar();
}
function Explorer() {
    background = "explorer";
    credits = "5000";
    sublocale = "Shin Kresha, Ekwensu Ward";
    locale = "Tenkets";
    superlocale = "Kess";
    UpdateMeters();
    ConfirmChar();
}
function Merchant() {
    background = "merchant";
    credits = "2000";
    sublocale = "Concourse";
    locale = "ingress";
    superlocale = "Menagerie";
    UpdateMeters();
    ConfirmChar();
}
function Spacer() {
    background = "spacer";
    credits = "1000";
    sublocale = "Forecastle";
    locale = "EV <i>Fawcett</i>";
    superlocale = "94 Ceti";
    UpdateMeters();
    ConfirmChar();
}
function Stowaway() {
    background = "stowaway";
    credits = "20";
    sublocale = "Cargo Bay";
    locale = "<i>Eternia iii</i>";
    superlocale = "???";
    UpdateMeters();
    ConfirmChar();
}
function ConfirmChar() {
    Output("Please confirm that you are a ".concat(gender, " ", background, "."))
    ClearButtons();
    buttons[0].update(Start, "Yes<span class=\"tooltip\">Continue with the selected start.</span>");
    buttons[1].update(CharacterCreation, "No<span class=\"tooltip\">Restart character creation.</span>");
}