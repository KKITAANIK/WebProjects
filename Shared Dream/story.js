//subject, object, pronominal adjective, predicative adjective, reflexive, contraction

let flag = new Object;
let details = new Object;

/*function Awaken() {
    time = 1;
    Output("&emsp;&emsp;&emsp;&emsp;You open your eyes slowly. The first thing you are able to process about your surroundings is that you seem to be outside. There's a slight breeze, along with soft grass, brushing against your skin, the latter tickling the back of your neck as you turn your head. Your eyes finally focusing, you're able to make out a little more detail. You seem to be in the middle of a tract of rolling hills, a vast expanse of meadow with quite a variety of flowers on display. There are a few streams winding through the lows and valleys, not powerful enough to carve away much at the landscape and likely originating from a range of mountains several kilometers in the distance, capped in ice.\
    <br>&emsp;&emsp;&emsp;&emsp;To shift focus to a more immediate element of your surroundings, there is what at first looks like a man sitting to your right. He is watching you, one arm resting on his raised knee. Breaking expectations, his skin is a grey color, not in a pallid or corpse-like manner, but a true grey, like the maria of the moon. This skin is lightly sprinkled with scale-like freckles, ten or so of which dot his nose and cheeks, with a few more visible on the backs of his hands as well as his shoulders, the latter peeking out through slits in the loose-fitting, linen tunic he is wearing. The \"man\" seems to be about two meters tall, with pure white, back-length hair tied up in a carefree bun. His features are almost completely androgynous, leaving the lightly masculine proportions of his figure as the biggest hint to his sex. His face shows a clear calm, with a hint of concern present around and within his eyes. Despite the familiar shape, he certainly doesn't seem to be human.");
    ClearButtons();
    button[0].update(IntroName.bind(null, 0), "Where am I?");
}

function IntroName(step) {
    ClearButtons();
    if (step == 0) {
        Output("&emsp;&emsp;&emsp;&emsp;He smiles slightly before nodding, turning to look up at the bright blue sky. \"That <i>is</i> the question, is it not? I have been in this place for perhaps a quartermonth, judging by the movement of its sun. I will tell you what I discovered, but you bring with yourself your own mysteries, so I would like to ask you some questions of my own. May I?\"");
        button[0].update(IntroName.bind(null, 1), "Okay.");
        button[1].update(IntroName.bind(null, 2), "No, tell me where this is, first.");
    }
    else if (step == 1) {
        Output("&emsp;&emsp;&emsp;&emsp;\"Very well, let us start simply: What is your name?\"");
        button[0].update(IntroWhere.bind(null, 0), "<i>Tell him your name.</i>");
        button[1].update(IntroName.bind(null, 3), "Tell me yours, first.");
        button[2].update(IntroName.bind(null, 4), "<i>Remain silent.</i>");
    }
    else if (step == 2) {
        Output("&emsp;&emsp;&emsp;&emsp;He sighs softly before nodding. \"I have reason to believe that none of this is real. Or at least, real in the objective sense. The stars have remained static, and I have no memory of how I would have arrived here. It is as if this world were a potent dream, a true simulation and fully realized in experience, but lacking in worldly substance&mdash;in construction. I do not yet know how you fit in to this dream, however I will relate to you my most complete speculation if you would be willing answer a few of my questions. Let us start simply: What is you name?\"");
        button[0].update(IntroWhere.bind(null, 0), "<i>Tell him your name.</i>");
        button[1].update(IntroName.bind(null, 3), "Tell me yours, first.");
        button[2].update(IntroName.bind(null, 4), "<i>Remain silent.</i>");
    }
    else if (step == 3) {
        Output("&emsp;&emsp;&emsp;&emsp;\"I cannot say I understand your suspicion, but I will respect it. My name is Cáel. It can mean both 'warrior' and 'poet', but I hope to affirm only the latter. I could talk long over the meaning of names, but let us save that for another time. Do you feel ready to share your own?\"");
        flag.cNameLearned = 1;
        button[0].update(IntroWhere.bind(null, 0), "<i>Tell him your name.</i>");
    }
    else if (step == 4) {
        Output("&emsp;&emsp;&emsp;&emsp;\"Come, now. Let this relationship be rooted in cooporation. We may be with one another for a long time.\"");
        button[0].update(IntroWhere.bind(null, 0), "<i>Tell him your name.</i>");
        button[2].update(IntroName.bind(null, 5), "<i>Remain silent.</i>");
    }
    else if (step == 5) {
        Output("&emsp;&emsp;&emsp;&emsp;\"What if I were to tell you mine, to show you there is no danger in the action? My name is Cáel. It can mean both 'warrior' and 'poet', but I hope to affirm only the latter. I could talk long over the meaning of names, but let us save that for another time. Do you feel ready to share your own?\"");
        flag.cNameLearned = 1;
        button[0].update(IntroWhere.bind(null, 0), "<i>Tell him your name.</i>");
    }
}

function IntroWhere(step) {
    ClearButtons();
    if (step == 0) {
        if (flag.cNameLearned != 1) {
            Output("&emsp;&emsp;&emsp;&emsp;\"I see. I would normaly express that it is a pleasure to make your acquaintance, " + pcname + ", however if this means you are trapped here with me then it may not be appropriate. My name is Cáel. It can mean both 'warrior' and 'poet', but I hope to affirm only the latter. I could talk long over the meaning of names, but let us save that for another time. I have noticed that you appear somewhat different from the humans I have met previously&mdash;your clothing and complextion stand out in this regard. If I may, from where do you hail?");
        }
        else {
            Output("&emsp;&emsp;&emsp;&emsp;\"Thank you. I would normaly express that it is a pleasure to make your acquaintance, " + pcname + ", however if this means you are trapped here with me then it may not be appropriate. I have noticed that you appear somewhat different from the humans I have met previously&mdash;your clothing and complextion stand out in this regard. If I may, from where do you hail?");
        }
        button[0].update(IntroWhere.bind(null, 1), "<i>Tell him your home city.</i>");
        button[1].update(IntroWhere.bind(null, 1), "<i>Tell him your home country.</i>");
        button[2].update(IntroWhere.bind(null, 2), "Earth.");
    }
    else if (step == 1) {
        Output("&emsp;&emsp;&emsp;&emsp;\"I cannot say I have ever heard of such a place. Within which kingdom does it reside?\"");
        button[0].update(IntroWhere.bind(null, 3), "<i>Explain.</i>");
    }
    else if (step == 2) {
        Output("&emsp;&emsp;&emsp;&emsp;Cáel chuckles, raising and looking at his palm. \"Yes, I suppose we all hail from earth. If philosophy is of your interest then I am certain we will have much do discuss, but before then do tell me from where you hail, such that I may better understand the context of your person.\"");
        button[0].update(IntroWhere.bind(null, 3), "<i>Explain Earth is the name of your world.</i>");
    }
    else if (step == 3) {
        Output("&emsp;&emsp;&emsp;&emsp;His brow furrows, and he drops his knee to lean forward. He looks somewhere between confused and concerned, like someone lost in the woods, expecting some danger around the next corner. \"Tell me...\" he starts, his voice lower, more grave, \"Do you... Rather, allow me to ask in such a way as to create a more meaningful answer for myself, and a more concise question for you. What are the gods of your world?\"");
        button[0].update(IntroGods.bind(null, "aetheistic"), "There are no gods.");
        button[1].update(IntroGods.bind(null, "monotheistic"), "There is only one god.");
        button[2].update(IntroGods.bind(null, "polytheistic"), "<i>Explain your polytheistic religion of choice.</i>");
        button[3].update(IntroGods.bind(null, "agnostic"), "<i>Explain agnosticism</i>");
    }
}

function IntroGods(religion) {
    details.religion = religion;
    Output("&emsp;&emsp;&emsp;&emsp;Cáel sighs softly, looking down at the earth beneath him. He sits there for a few seconds, seemingly processing the consequences of what you said before looking back up at you. \"The world I come from is known as Plana. It is one of the 15 planes of the gods, and the only one affiliated with all and none of them&mdash;though housing Massan. These gods are Eyia, Mann, Minor, Syssil, Tyruth, Whyne, Krish, Massan, Nascence, Srann, Drunn, An, Eless, F'fara, and Thee. These gods&mdash;\" he stops himself and looked up at you, a wry smile on his face, \"I am sure I will enjoy learning of your world, and I hope you of mine. I only wish it could be on better terms. Tell me, what is your most recent memory before waking here?\"");
    ClearButtons();
    button[0].update(IntroConclusion, "I was going to sleep.");
}

function IntroConclusion() {
    Output("&emsp;&emsp;&emsp;&emsp;\"As was I. That does lend credit to my feeling that this is somehow a dream. What that means, I do not yet know, but perhaps we will learn together. Or, gods willing, our situation will resolve itself into something more concrete.\"\
    <br><br>&emsp;&emsp;&emsp;&emsp;\"");
}*/

function InitializeFlags() {
    flag.waitCount = 0;
    flag.exploreCount = 0;
    flag.mountainCount = 0;
    flag.foundSlateTile = 0;
    flag.tookTile = 0;
    flag.houseSpawned = 0;
    flag.houseFound = 0;
}

function Awaken() {
    time = 1;
    InitializeFlags();
    Output("&emsp;&emsp;&emsp;&emsp;You open your eyes slowly. The first thing you are able to process about your surroundings is that you seem to be outside. There's a slight breeze, along with soft grass, brushing against your skin, the latter tickling the back of your neck as you turn your head. Your eyes finally focusing, you're able to make out a little more detail. You seem to be in the middle of a tract of rolling hills, a vast expanse of meadow with quite a variety of flowers on display. There are a few streams winding through the lows and valleys, not powerful enough to carve away much at the landscape and likely originating from a range of mountains several kilometers in the distance, capped in ice.");
    ClearButtons();
    button[0].update(IntroMenu, "<i>Next.</i>");
}

function StartLoop(step) {
    ClearButtons();
    if (step == 0) {
        flag.waitCount++;
        let rand = 0;
        if (flag.waitCount > 4) {
            rand = Rand(1, 4);
        }
        let output = "&emsp;&emsp;&emsp;&emsp;You lie back against the soft grass, looking up at the sky and watching the sun slowly move through the sky. Alone with your thoughts, you have time to contemplate the strange situation you find yourself in.";
        if (flag.waitCount == 1 || rand == 1) {
            output += "<br>&emsp;&emsp;&emsp;&emsp;You find yourself feeling very relaxed against the soft grass and flowers. After some time you realize you had dozed off, apparent mainly from the sun's new position in the sky and the imprint of blades of grass on the back of your hand.";
        }
        else if (flag.waitCount == 2 || rand == 2) {
            output += "<br>&emsp;&emsp;&emsp;&emsp;You notice that the gentle sound of trickling water, no doubt the result of the springs running through the landscape, sounds just slightly off. The sound quietly fills the background, and even though you can look at the nearest stream, it doesn't seem to be any louder coming from that particular direction. Curious.";
        }
        else if (flag.waitCount == 3 || rand == 3) {
            output += "<br>&emsp;&emsp;&emsp;&emsp;You can't tell for sure, but the sun feels just slightly bigger in the sky than it normally is. It doesn't actually seem to have grown larger, but it feels.. closer, somehow. It's as if it had been shifted, brought that smallest bit nearer to be focused just a little bit more on <i>you</i>. You're probably just imagining it.";
        }
        else if (flag.waitCount == 4 || rand == 4) {
            output += "<br>&emsp;&emsp;&emsp;&emsp;You wonder if the sun usually moves that quickly. It's hard to tell, but it feels like it should have taken just a slight bit longer for the sun to have gotten there from where it was when you started. You guess you just haven't paid much attention before.";
        }
        Output(output);
        button[0].update(IntroMenu, "<i>Next.</i>");
    }
    else if (step == 1) {
        flag.exploreCount++;
        let output = "&emsp;&emsp;&emsp;&emsp;You spend your time wandering aimlessly through the hills.";
        if (flag.foundSlateTile == 0) {
            let rand = Rand(1, 100);
            if ((rand % 2 == 0 && flag.exploreCount == 2) || flag.exploreCount == 3) {
                output += "<br>&emsp;&emsp;&emsp;&emsp;After twenty minutes or so of mindless walking, the acitivity mostly background for your thoughts, the previously consistent feeling of soft grass beneath your feet is interrupted by the firm resistance of stone. Looking down, you're able to identify a thin, somewhat large rectangle of grey slate, covered in dust and dirt. It was clearly cut to its size, and there seem to be two holes located in the center of the upper -left and -right quarters. However unimpresive a slate tile may be, it is the first unique object you've found in this world.";
                button[0].update(SlateTile.bind(null, "take"), "<i>Carry the tile with you.</i>");
                button[1].update(SlateTile.bind(null, "leave"), "<i>Leave the tile where you found it.</i>");
            }
            else {
                output += "<br>&emsp;&emsp;&emsp;&emsp;You feel a bit more able to find your way in this world, by feel rather than landmark given the endless expanse of rolling, flowered hills that lend very little to conventional navigation. You don't <i>find</i> anything in particular, but you get the feeling that doesn't mean there's nothing to be found.";
                button[0].update(IntroMenu, "<i>Next.</i>");
            }
        }
        Output(output);
    }
    else if (step == 2) {
        
    }
    else if (step == 3) {
        if (flag.houseFound == 0) {
            if (flag.houseSpawned == 0 && flag.tookTile == 1) {
                flag.houseSpawned = 1;
                flag.houseFound = 1;
                //house spawns
                Output("&emsp;&emsp;&emsp;&emsp;You wake up.");
            }
            else {
                //sleep in grass
                Output("&emsp;&emsp;&emsp;&emsp;You wake up.");
            }
        }
        else {
            //standard wake up in house
            Output("&emsp;&emsp;&emsp;&emsp;You wake up.");
        }
        button[0].update(IntroMenu, "<i>Next.</i>");
    }
}

function IntroMenu() {
    PassTime(1);
    if (time == 0) {
        Output("&emsp;&emsp;&emsp;&emsp;Menu text.");
    }
    else if (time == 1) {
        Output("&emsp;&emsp;&emsp;&emsp;Menu text.");
    }
    else if (time == 2) {
        Output("&emsp;&emsp;&emsp;&emsp;Menu text.");
    }
    else if (time == 3) {
        Output("&emsp;&emsp;&emsp;&emsp;Menu text.");
        button[0].update(StartLoop.bind(null, 3), "<i>Sleep in the grass.</i>");
    }
    if (time != 3) {
        button[0].update(StartLoop.bind(null, 0), "<i>Wait.</i>");
        button[1].update(StartLoop.bind(null, 1), "<i>Explore aimlessly.</i>");
        button[2].update(StartLoop.bind(null, 2), "<i>Walk in the direction of the mountain.</i>");
    }
}

function SlateTile(option) {
    flag.foundSlateTile = 1;
    if (option == "take") {
        Output("&emsp;&emsp;&emsp;&emsp;You decide it's best to take the tile with you. It must serve some purpose, or at the very least it's simply a possession, which is comforting in its own right.");
        flag.tookTile = 1;
    }
    else if (option == "leave") {
        Output("&emsp;&emsp;&emsp;&emsp;You decide it's leave the tile where you found it. It's just a piece of rock you can't be bothered to carry around with you.");
    }
    ClearButtons();
    button[0].update(IntroMenu, "<i>Next.</i>");
}