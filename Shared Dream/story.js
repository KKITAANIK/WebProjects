//subject, object, pronominal adjective, predicative adjective, reflexive, contraction

function Awaken() {
    let output = "&emsp;&emsp;&emsp;&emsp;\"Hey! Cáel! I think.. I think ".concat(gender[0], " ", isconj, " waking up!\"\
        <br />&emsp;&emsp;&emsp;&emsp;\"If only ", gender[0], " were so lucky...\"\
        <br /><br />&emsp;&emsp;&emsp;&emsp;You open your eyes slowly. ");
    if (time == 0) {
        output = output.concat("The room is filled with the soft glow of morning, streaming in through an as-yet unseen window.")
    }
    else if (time == 1) {
        output = output.concat("The room is well-lit, the afternoon sun streaming in through an as-yet unseen window.")
    }
    else if (time == 2) {
        output = output.concat("The room is filled with the dim light of evening, shadows long from the low angle of the sun.")
    }
    else {
        output = output.concat("The room is evenly lit, the slight yellow tint betraying the lack of natural light.")
    }
    output = output.concat("");
    Output(output);
    ClearButtons();
    button[0].update(PassTime, "Pass the time.");
}