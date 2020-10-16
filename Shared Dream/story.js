//subject, object, pronominal adjective, predicative adjective, reflexive, contraction

function Awaken() {
    time = 1;
    Output("&emsp;&emsp;&emsp;&emsp;\"There you are. Waking up, huh? If only you were so lucky...\"\
    <br><br>&emsp;&emsp;&emsp;&emsp;You open your eyes slowly. The first thing you are able to process about your surroundings is that you seem to be outside. There's a slight breeze, along with soft grass, brushing against your skin, the latter tickling the back of your neck as you turn your head. Your eyes finally focusing, you're able to make out a little more detail. You seem to be in the middle of a tract of rolling hills, a vast expanse of meadow with quite a variety of flowers on display. There are a few streams winding through the lows and valleys, not powerful enough to carve away much at the landscape and likely originating from a range of mountains several miles in the distance, capped in ice.\
    <br>&emsp;&emsp;&emsp;&emsp;To shift focus to a more immediate element of your surroundings, there is what at first looks like a man sitting to your right. He is watching you, one arm resting on his raised knee. Breaking expectations, his skin is a grey color, not in a pallid or corpse-like manner, but a true grey, like the maria of the moon. This skin is lightly sprinkled with scale-like freckles, ten or so of which dot his nose and cheeks, with a few more visible on the backs of his hands as well as his shoulders, the latter peeking out through slits in the loose-fitting, lining tunic he is wearing. The \"man\" seems to be about two meters tall, with pure white, back-length hair tied up in a carefree bun. His features are almost completely androgynous, leaving the lightly masculine proportions of his body as the biggest hint to his sex. His face shows a clear calm, with a hint of concern present around and within his eyes. Despite the familiar shape, he certainly doesn't seem to be human.");
    ClearButtons();
    button[0].update(IntroWhere.bind(null, 0), "Where am I?");
}

function IntroWhere(step) {
    ClearButtons();
    if (step == 0) {
        Output("&emsp;&emsp;&emsp;&emsp;He smiles slightly before nodding, turning to look up at the bright blue sky. \"That <i>is</i> the question, is it not? I have been in this place for perhaps a quartermonth, judging by the movement of the sun. I will tell you what I discovered, but you bring with yourself your own mysteries, so I would like to ask you some questions of my own. May I?\"");
        button[0].update(IntroWhere.bind(null, 1), "Okay.");
        button[1].update(IntroWhere.bind(null, 2), "No, tell me where this is, first.");
    }
    else if (step == 1) {
        Output("&emsp;&emsp;&emsp;&emsp;\"Very well, let us start simply: What is your name?\"");
        button[0].update(IntroQuestions.bind(null, 0), "<i>Tell him your name.</i>");
        button[1].update(IntroWhere.bind(null, 3), "Tell me yours, first.");
        button[2].update(IntroWhere.bind(null, 4), "<i>Remain silent.</i>");
    }
    else if (step == 2) {
        Output("&emsp;&emsp;&emsp;&emsp;He sighs softly before nodding. \"I have reason to believe that none of this is real. Or at least, real in the objective sense. The stars have remained static, and I have no memory of how I would have arrived here. It is as if this world were a potent dream, a true simulation and fully realized in experience, but lacking in worldly substance&mdash;in construction. I do not yet know how you fit in to this dream, however I will relate to you my most complete speculation if you would be willing answer a few of my questions. Let us start simply: What is you name?\"");
        button[0].update(IntroQuestions.bind(null, 0), "<i>Tell him your name.</i>");
        button[1].update(IntroWhere.bind(null, 3), "Tell me yours, first.");
        button[2].update(IntroWhere.bind(null, 4), "<i>Remain silent.</i>");
    }
    else if (step == 3) {
        Output("&emsp;&emsp;&emsp;&emsp;\"I cannot say I understand your suspicion, but I will respect it. My name is Cáel. It can mean both 'warrior' and 'poet', but I hope to affirm only the latter. I could talk long over the meaning of names, but let us save that for another time. Do you feel ready to share your own?\"");
        button[0].update(IntroQuestions.bind(null, 0), "<i>Tell him your name.</i>");
    }
    else if (step == 4) {
        Output("&emsp;&emsp;&emsp;&emsp;\"Come, now. Let this relationship be rooted in cooporation. We may be with one another for a long time.\"");
        button[0].update(IntroQuestions.bind(null, 0), "<i>Tell him your name.</i>");
        button[2].update(IntroWhere.bind(null, 5), "<i>Remain silent.</i>");
    }
    else if (step == 6) {
        Output("&emsp;&emsp;&emsp;&emsp;\"What if I were to tell you mine, to show you there is no danger in the action? My name is Cáel. It can mean both 'warrior' and 'poet', but I hope to affirm only the latter. I could talk long over the meaning of names, but let us save that for another time. Do you feel ready to share your own?\"");
        button[0].update(IntroQuestions.bind(null, 0), "<i>Tell him your name.</i>");
    }
}

function IntroQuestions(step) {
    ClearButtons();
    Output("end of build")
}