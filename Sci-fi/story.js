let flags = {
    SKMaenChatted: 0,
    SKMaenAskedCrew: 0,
    SKMaenBoughtDrink: 0,
    SKChechkaChenysh: 0,
    SKChechkaKnowLing: 0,
    SKChechkaYN: 0
};

function Start() {
    if (background == "citizen") {

    }
    else if (background == "diplomat") {

    }
    else if (background == "explorer") {
        ShinKresha();
    }
    else if (background == "merchant") {
        
    }
    else if (background == "spacer") {
        
    }
    else if (background == "stowaway") {
        
    }
}

function ShinKresha() {
    Output(
        "&emsp;&emsp;&emsp;&emsp;You are sitting in a bar in the Ekwensu Ward of Tenkets, a commercial hub and shelish-made satellite orbiting the star Kess. The bar is known as Shin Kresha, a shelish concept roughly equivalent to \"the last safe stride that can be taken before walking off the edge of a cliff\". Your business in Shin Kresha is simple, to hire a ship and crew and begin your excursion into the galaxy.\
        <br />&emsp;&emsp;&emsp;&emsp;There are a few groups filling the room. A squad of four maen are sitting at the bar itself, each one muscular and gruff-looking. The largest, seemingly the leader, is balding in two disconnected elipses on each arm, on his shoulders and biceps, the left of the latter sporting the lineart of an unfinished menarian tattoo. They seem to be rather rowdy patrons, likely from some military or combat force on Tenkets for leave.\
        <br />&emsp;&emsp;&emsp;&emsp;Three shelish are sitting in the corner, using their traditional forms which is somewhat of a rare sight. They have a large bowl of kona between them, and based on the swaying of the middle one's whiskers, they have been there for some time. The final group is a human woman with pale skin and fiery red hair talking with another shelish, this one taking the form of a human male with a somewhat slim build and dark brown hair.\
        <br />&emsp;&emsp;&emsp;&emsp;Three others are on their own, specifically the shelish bartender, currently a maen with a crimson scar on his shoulder, some injury causing an inability to alter that part of himself, ready to change to human on your approach. There is also another maen, this one female and clearly not of the same crowd as the others, and a chechka, stationary near the stairs.");
    ClearButtons();
    buttons[0].update(SKMaenGroup, "Group of Maen<span class=\"tooltip\">Approach the group of maen.</span>");
    buttons[1].update(SKShelishGroup, "Group of Shelish<span class=\"tooltip\">Approach the group of shelish.</span>");
    buttons[2].update(SKPair, "Human-Shelish Pair<span class=\"tooltip\">Approach the human-shelish pair.</span>");
    buttons[3].update(SKShelish, "Shelish Bartender<span class=\"tooltip\">Approach the shelish bartender.</span>");
    buttons[4].update(SKMaen.bind(null, 0), "Lone Maen<span class=\"tooltip\">Approach the female maen.</span>");
    buttons[5].update(SKChechka.bind(null, 0), "Chechka<span class=\"tooltip\">Approach the chechka.</span>");
}
function SKMaenGroup() {

}
function SKShelishGroup() {
    
}
function SKPair() {
    
}
function SKShelish() {

}
function SKMaen(param) {
    if (param == 0) {
        Output("&emsp;&emsp;&emsp;&emsp;You approach the maen, who raises her head to glance up at you, squinting as if you were a bright light. She soon looks back to her drink, her ears lowering slightly in anticipation of your question.");
        ClearButtons();
        buttons[0].update(SKMaen.bind(null, "crew"), "Ask About Crew<span class=\"tooltip\">Ask the maen where you might find a ship and crew for hire.</span>");
        if (flags.SKMaenChatted == 0) {
            buttons[1].update(SKMaen.bind(null, "chat"), "Chat<span class=\"tooltip\">Talk about something else.</span>");
        }
        else if (flags.SKMaenBoughtDrink == 0) {
            buttons[1].update(SKMaen.bind(null, "buyDrink"), "Buy her a drink<span class=\"tooltip\">Offer to pay for her next drink.</span>");
        }
        buttons[7].update(ShinKresha, "Back<span class=\"tooltip\">Do something else.</span>");
    }
    else if (param == "crew") {
        if (flags.SKMaenAskedCrew == 0) {
            Output("&emsp;&emsp;&emsp;&emsp;She looks back up at you for a few seconds, looking up and down your form before sighing and turning her head to the chechka, lowering her chin so her horns lined up. Finally, having given enough direction for her liking, she returns to her drink.");
            flags.SKMaenAskedCrew = 1;
        }
        else {
            Output("&emsp;&emsp;&emsp;&emsp;\"I already told you, it's the chechka. What more do you want?\"");
        }
        ClearButtons();
        buttons[7].update(SKMaen.bind(null, 0), "Back<span class=\"tooltip\">Talk about something else.</span>");
    }
    else if (param == "chat") {
        Output("&emsp;&emsp;&emsp;&emsp;\"Look, I don't... 'Human', right?\" she clarified, not waiting for a response, \"There's a whole satellite of people that'll listen to your problems. Some of 'em won't even charge for it. All I'm interested in is what's under this glass.\"\
        <br />&emsp;&emsp;&emsp;&emsp;Seems like she isn't interested in talking.");
        flags.SKMaenChatted = 1;
        ClearButtons();
        buttons[7].update(SKMaen.bind(null, 0), "Back<span class=\"tooltip\">Give up on conversation.</span>");
    }
    else if (param == "buyDrink") {
        Output("&emsp;&emsp;&emsp;&emsp;She sighs before finishing what's left of her drink in two swallows, putting the glass down again. \"I won't stop you, but this isn't going to make me your friend all of a sudden.\" She explains as you wave your chit over the reciever. She gives an unenthusastic but appreciative nod as she places her glass on the dispenser, watching it fill from the bottom before taking a sip. She seems no more talkative.");
        flags.SKMaenBoughtDrink = 1;
        credits -= 20;
        UpdateMeters();
        ClearButtons();
        buttons[7].update(SKMaen.bind(null, 0), "Back<span class=\"tooltip\">Talk about something else.</span>");
    }
}
function SKChechka(param) {
    if (param == 0) {
        if (flags.SKChechkaYN == 0) {
            Output("&emsp;&emsp;&emsp;&emsp;The chechka rotates to face you when you arrive, its main display screen showing a low-poly render of a vaguely antropomorphic head with six eyes forming two collumns of three. \"Hello, Che'nysh. Are you wishing to hire a skilled crew and ship for an interstellar mission?\" It asks in a modulated voice, its screen showing a rotating model of a mid-range spaceship.");
            ClearButtons();
            buttons[0].update(SKChechka.bind(null, "yes"), "Yes<span class=\"tooltip\">That is remarkably accurate.</span>");
            buttons[1].update(SKChechka.bind(null, "no"), "No<span class=\"tooltip\">You aren't so sure about that.</span>");
        }
        else {
            Output("&emsp;&emsp;&emsp;&emsp;The chechka rotates to face you when you arrive, its main display screen showing a low-poly render of a vaguely antropomorphic head with six eyes forming two collumns of three. \"Hello again, Che'nysh. If you find any interest in my business offer, please do not hesitate to inform me.\" It asks in a modulated voice, its screen showing a rotating model of a mid-range spaceship.");
            ClearButtons();
            buttons[0].update(SKChechka.bind(null, "yes"), "Business Offer<span class=\"tooltip\">You are interested, as a matter of fact.</span>");
            buttons[1].update(SKChechka.bind(null, "chat"), "Chat<span class=\"tooltip\">You'd like to talk about something else, first.</span>");
        }
        if (flags.SKChechkaChenysh == 0) {
            buttons[2].update(SKChechka.bind(null, "che'nysh"), "Che'nysh?<span class=\"tooltip\">Why did it just refer to you as \"Che'nysh\"?</span>");
        }
        buttons[7].update(ShinKresha, "Back<span class=\"tooltip\">Do something else.</span>");
    }
    else if (param == "yes") {
        Output("&emsp;&emsp;&emsp;&emsp;You win.");
    }
    else if (param == "no") {
        Output("&emsp;&emsp;&emsp;&emsp;\"Of course, I apologize. Well, if such a venture comes to interest you, the opportunity will reamin available. Until then, is there anything else you wanted to discuss?\"");
        flags.SKChechkaYN = 1;
        ClearButtons();
        buttons[0].update(SKChechka.bind(null, "chat"), "Chat<span class=\"tooltip\">Chat with the chechka.</span>")
        buttons[7].update(ShinKresha, "Back<span class=\"tooltip\">Do something else.</span>");
    }
    else if (param == "che'nysh") {
        Output("&emsp;&emsp;&emsp;&emsp;\"Ah, of course. Che'nysh is an honorific of the chechka. It is similar to your human 'Sir' and 'Madame'. In the creation of autotranslation, some words are left untranslated due to cultural context. In human languages 'bon appétit' or 'いただきます' are considered too dependant on cultural context to be properly conveyed through direct translation.\"");
        flags.SKChechkaChenysh = 1;
        ClearButtons();
        if (flags.SKChechkaKnowLing == 0) {
            buttons[0].update(SKChechka.bind(null, "knowLing"), "Knowledge of Language?<span class=\"tooltip\">Ask how it knows so much about human language and the process of autotranslation</span>");
        }
        buttons[7].update(SKChechka.bind(null, 0), "Back<span class=\"tooltip\">Talk about something else.</span>");
    }
    else if (param == "knowLing") {
        Output("&emsp;&emsp;&emsp;&emsp;\"Ah, of course. It is too early to expect proficiency in galactic history from humanity. The chechka created the standard for autotranslation technology during the uplift process. It is one of our greatest contributions to galactic society, eliminating the language barrier previously present in interspecies communication. As for <i>human</i> communication, I make a point of keeping myself informed, for the sake of any potential clients.\"");
        flags.SKChechkaKnowLing = 1;
        ClearButtons();
        buttons[7].update(SKChechka.bind(null, 0), "Back<span class=\"tooltip\">Talk about something else.</span>");
    }
    else if (param == "chat") {
        Output("&emsp;&emsp;&emsp;&emsp;chat");
        ClearButtons();
        buttons[7].update(SKChechka.bind(null, 0), "Back<span class=\"tooltip\">Talk about something else.</span>");
    }
}