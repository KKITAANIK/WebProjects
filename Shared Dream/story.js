//subject, object, pronominal adjective, predicative adjective, reflexive, contraction

function Awaken() {
    time = 0;
    output = "&emsp;&emsp;&emsp;&emsp;\"Ho! Cáel! I trow ".concat(gender[0]);
    if (isconj == "is") {
        ouput = output.concat(" wakes!");
    }
    else {
        output = output.concat(" wake!");
    }
    output = output.concat("<br />&emsp;&emsp;&emsp;&emsp;\"If only ", gender[0], " were so lucky...\"\
        <br /><br />&emsp;&emsp;&emsp;&emsp;You open your eyes slowly. The soft glow of morning fills the room, streaming in through an as-yet unseen window and illuminating two figures. One, crouched over you, is a young boy, seemingly about sixteen years old and with wavy, dark brown hair hanging down to his shoulders. His eyes are wide and earnest, chestnut irises peeking out from under a furrowed, worried brow. Looking down, you can see he's wearing a simple and somewhat faded doublet with similiarly-worn hose. Frankly, he looks like someone out of a Shakespeare play.\
        <br />&emsp;&emsp;&emsp;&emsp;It takes you a moment to properly understand what you're looking at upon glancing at the second figure. His skin is a grey color, not in an pallid or corpse-like manner, but a true grey, like the maria of the moon. This skin is lightly sprinkled with scale-like freckles, ten or so of which dot his nose and cheeks, with a few more visible on the backs of his hands as well as his shoulders, not covered by his loose-fitting tunic. He seems to be about two meters tall, with pure white, back-length hair tied up in a carefree bun. His features are almost completely androgynous, leaving his lack of breasts as his most distinguishing sexual feature. His face shows a clear calm, with a hint of concern present around his eyes. Although bearing many familiar features, he certainly does not seem human.\
        <br /><br />&emsp;&emsp;&emsp;&emsp;The boy has turned to look up at the approaching \"man\", apparently named Cáel. ");
    Output(output);
    ClearButtons();
    button[0].update(PassTime, "Pass the time.");
}