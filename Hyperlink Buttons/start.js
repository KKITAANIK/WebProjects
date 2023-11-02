let pc = {};
let flags = [];

function Start(key) {
    if (key == -1) {
        document.getElementById("output").innerHTML = "<span class=\"ooctext\">Welcome to [Name TBD]</span>";
    }
    if (key == 0) { // first scene
        let output = "As you feel yourself slowly rise to consciousness, the first sensation you find yourself aware of is a deep tightness in every limb—a \
        vice-like soreness pervading every muscle and bone in your body. Moments later, through that same painful tension, you become aware of a deep warmth, \
        filling your body from outside in; strongest on your left side. You can feel it dulling the aching slightly, diluting it, slowly disentangling it from \
        your being and washing it away.\
        \nYou begin to recognize a light through your eyelids, flickering just slightly to imply a flame. You groan despite yourself, and you hear a shuffling \
        sound nearby, accompanied by a dimming of that light as a shadow passes over you. You sense someone leaning down over your face."

        let buttons = [
            new Button("Open your eyes.", Start.bind(null, 4), false), // out of order because opening your eyes progresses things, so I want that at the bottom
            new Button("Speak.", Start.bind(null, 2), false),
            new Button("Do nothing.", Start.bind(null, 1), false)
        ];

        Output(output, buttons, false);
    }
    else if (key == 1) { // You stay still
        let output = "After a moment the shadow pulls away, a soft murmuring beginning as its owner seemingly begins to consult with another. You can't make out \
        the words, but they sound concerned.";

        // it's just the same options; I want your decisions to be important but I don't think I can write the entire game with your eyes closed
        let buttons = [
            new Button("Open your eyes.", Start.bind(null, 6), false),
            new Button("Speak.", Start.bind(null, 3), false),
        ];

        Output(output, buttons);
    }
    else if (key == 2 || key == 3) { // You choose to speak (it doesn't go well)
        let output = "You try to speak, perhaps some greeting or question, but it comes out as another low groan.";
        if (key == 3) { // You waited before speaking; she has to come back
            output += " You hear a gasp, and the sound of quick footsteps towards you. The shadow returns."
        }
        output += "\n\"<‡>There, you must have heard it that time.</‡>\" A voice, alto, soft but with a sense of control in its diction. The back of a hand comes \
        to rest on your forehead.";

        let buttons = [
            new Button("Open your eyes.", Start.bind(null, 5), false)
        ];

        Output(output, buttons)
    }
    else if (key == 4 || key == 5 || key == 6) { // You choose to open your eyes
        let output = ""
        if (key == 4 || key == 5) { // You opened your eyes right away, or after she came back over
            output += "You manage to slowly pry your eyelids open"
            if (key == 4) {
                output += ", and the faintest gasp meets you"
            }
            output += ". The blur of warm hues before you slowly clarifies into a silhouette, then a face—female. Her nose and eyebrows are long and thin—seemingly a \
            trend when it comes to her features. Her hair is dark, framing her face, hanging at a length that would fall just over her shoulders if not for her \
            position leaning over you. ";
            if (key == 4 ) {
                output += "She looks down at you, her eyes touched with both hope and concern.";
            }
            if (key == 5) {
                output += "She removes her hand, loooking down at you, her eyes touched with both hope and concern."
            }
        }
        else if (key == 6) { // You opened your eyes after she pulled away; you gotta have different text because she's not over you anymore
            output += "You manage to slowly pry your eyelids open. The blur of warm hues before you slowly clarifies into what looks to be a comfortably-furnished \
            room, wooden walls and a fireplace to your left, confirming your suspicions about the warmth and light. There are two figures further down, but before \
            you can get a good look at them the larger one, male, gestures towards you. It seems you've been caught. The other, noticeably thinner and female \
            judging by her silhouette, turns and quickly makes her way over to you.\
            \nAs she arrives, she leans over, inspecting you. Her nose and eyebrows are long and thin—seemingly a trend when it comes to her features. Her hair \
            is dark, framing her face, hanging at a length that would fall just over her shoulders if not for her position above you. She looks down at you, her \
            eyes touched with both hope and concern."
        }
        output += "\n\"<‡>Can you hear me? How are you feeling?</‡>\"";
        if (key != 5) { // if this is your first time hearing her speak, give the description
            output += " Her voice is an alto, soft but with a sense of control in its diction. She places the back of her hand on your forehead for a few moments \
            before moving it away, seemingly encouraged by what she finds.";
        }
        output += "\nGiving her a proper answer doesn't particularly feel like something you can do right now. Your throat feels slightly strained as you swallow, \
        as if even this minor use is something it is unprepared for. She seems to recognize this, watching you for a moment before speaking again. \"<‡>Can you \
        tell me " + MakeHoverable("your name", "You will be able to change your name at any time. If your character cannot remember their name, they can similarly \
        remember or decide a new name for themself at a later date.") + "?</‡>\""
                
        let buttons = [
            new Button(MakeHoverable("Tell her your name.", "That sounds like something much more manageable. Give saying your name a shot."), NameInput.bind(null, 0), true),
            new Button(MakeHoverable("Don't tell her your name.", "You don't know if you want to be revealing your identity to someone you don't know..."), Start.bind(null, 7), false),
            new Button(MakeHoverable("You don't know.", "Your name... Why can't you remember?"), Start.bind(null, 10), true)
        ];

        Output(output, buttons);
    }
    else if (key == 7) { // you intitially refuse to say your name
        flags.push("kassaraNameKnown"); // she says their names, so we log that for later
        flags.push("boérNameKnown");

        let output = "She sighs softly. \"<‡>My name is " + Encyclopedia("Kassara") + ". This is " + Encyclopedia("Boér") + ",</‡>\" she gestures to a man sitting \
        behind her, across the room, \"<‡>We aren't going to hurt you.</‡>\"";

        let buttons = [
            new Button(MakeHoverable("Tell her your name.", "It seems she's oddly intent on this introduction. If you really don't want to reveal your true identity, you can always make up an alias..."), NameInput.bind(null, 0), true),
            new Button(MakeHoverable("You don't know.", "Well, there is one problem. You can't seem to remember. Tell her as such."), Start.bind(null, 10), true)
        ];

        Output(output, buttons);
    }
    else if (key == 10) { // You said you don't remember your name
        flags.push("nameUnknown"); // log that in the flags
        let output= "Her eyebrows arch mildly. \"<‡>That's... concerning. Do you remember anything at all?</‡>\"";

        let buttons = [
            new Button(MakeHoverable("You have no idea who you are.", "You can understand language, and you know a few things about the world, but when it comes to yourself it's an empty void."), Start.bind(null, 11), false),
            new Button(MakeHoverable("Only your name is missing.", "You know who you are and what your goals are, but for some reason your name alone escapes you."), Start.bind(null, 12), false)
        ]

        Output(output, buttons);
    }
    else if (key == 11 || key == 12 || key == 13) { // past name stuff
        if (key == 11) { // You said not only do you not remember your name; you don't remember who you are at all
            flags.push("selfUnknown") // log that in the flags
        }
        let output = "She nods. \"<‡>Very well. ";
        if (flags.includes("kassaraNameKnown") && flags.includes("boérNameKnown")) { // check if Kassara already introduced them both
            output += "I've already told you who I am, and " + Encyclopedia("Boér") + "."
        }
        else {
            output += "My name is " + Encyclopedia("Kassara") + ". This is " + Encyclopedia("Boér") + ".</‡>\" She gestures to a man sitting behind her, across \
            the room."
            flags.push("kassaraNameKnown"); // she says their names, so we log that
            flags.push("boérNameKnown");
        }
        output += " You're in " + Encyclopedia("Ondarch") + "; I found you on the way to the village.</‡>\"\
        \nBoér stands up, moving forward. He's a rather large man, bearing a wide, muscular frame. His brown hair is cropped close to his head, and a strong brow \
        and jaw outline the major contours of his face. \"<‡>That's understatin' it. The snow was all over ya—another few hours you'd be gone. Frozen, if the "
        + Encyclopedia("kites") + " didn't get you. No way around it: you owe this woman your life. 'Course, she's been stayin' right by your side this whole time, makin' sure you're \
        okay.</‡>\"\
        \nKassara's lips tighten slighty. \"<‡>Quite.</‡>\" She turns her head to the man. \"<‡>If I may "

        Output(output, [])
    }
}

function NameInput(key) {
    if (key == 0) {
        document.getElementById("output").innerHTML = "Please enter your name. You can change this at any time.<br/><br/><input type=\"text\" id=\"nameInput\" class=\"input\">"
        document.getElementById("output").innerHTML += "<br/><br/><br/><span class=\"clickable\" id=\"clickable1\">[Confirm.]</span>";
        document.getElementById("clickable1").onclick = NameInput.bind(null, 1);
    }
    if (key == 1) {
        pc.name = document.getElementById("nameInput").value;
        if (pc.name.length >= 1) {
            Start(13);
        }
        else {
            NameInput(0);
        }
    }
}

function Encyclopedia(key) {
    // We're going to use this function to generate tooltips of re-occuring items. An important part of this game is that you can hover over 𝗮𝗻𝘆 lore items and
    // the like in order to get an explanation and pronunicaiton. 𝗡𝗢 𝗘𝗫𝗖𝗘𝗣𝗧𝗜𝗢𝗡𝗦.

    // How do we make absolutely sure pronunciation is clear, even when I'm not confident in my use of IPA and you certainly can't expect the reader to know it?
    // Tooltips within tooltips, baby! Give the IPA and a standard approximation example, and elaborate on hover. 𝗔𝗹𝗹 proper nouns and new words should have
    // pronunciations, along with culture notes when necessary. This function should be called whenever a name is used, in order to make sure the player can 
    // always remind themselves if they want.
    if (key == "Kassara") {
        return (MakeHoverable(key,
            "Pronounced /kɐsˈɑːrə/ (\""
                + MakeTwiceHoverable("kuh", "(like in \"cup\")")
            + "-"
                + MakeTwiceHoverable("SAR", "(like \"star\")")
            + "-"
                + MakeTwiceHoverable("ruh", "(like at the end of \"Cassandra\")")
            + "\")."
        ))
    } 
    else if (key == "Boér") {
        return (MakeHoverable(key,
            "Pronounced /boˈɛːɹ/ (\""
                + MakeTwiceHoverable("boh", "(like in \"bone\")")
            + "-"
                + MakeTwiceHoverable("AIR", "(like in \"error\")")
            + "\"). A distinctly northern-sounding name for anyone familiar with the human territories."
        ))
    }
    else if (key == "Ondarch") {
        return(MakeHoverable(key,
            "Pronounced /ˈɔːndaɹk/ (\""
                + MakeTwiceHoverable("OND", "(like in \"pond\")")
            + "-"
                + MakeTwiceHoverable("ark", "(like in \"park\")")
            + "\"). A small village on the northeast edge of human territories, a few miles inland from the Naked Shore. You were found a short ways outside of Ondarch—an event that marks the start of this journey."
        ))
    }
    else if (key == "kites" || key == "kite") {
        return(MakeHoverable(key,
            "A wolf-like creature native"
            ))
    }
}