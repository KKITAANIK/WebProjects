function JumpStart() {
    ButtonAppear();
    LeftAppear();
    ClearButtons();
    StoryStart(0);
}

function StoryStart(key) {
    if (key == 0) {
        inStart = false;
        locale = "An Unknown Place";
        UpdateMeters();
        Output("<p>There is a young woman in front of you. She appears mostly human, save for thin brown antlers emerging from her head, rooted just behind her temples. Her eyes are not human. They seem to be spheres of bronze, cratered in the center as if to evoke some sense of an iris and pupil.</p>");
        ClearButtons();
        buttons[0][0].update(StoryStart.bind(null, 2), "What just happened?");
        buttons[0][1].update(StoryStart.bind(null, 3), "Where am I?");
        buttons[0][2].update(StoryStart.bind(null, 4), "Who is she?");
        buttons[0][3].update(StoryStart.bind(null, 1), "Look closer.");
        document.body.classList.remove('fade');
    }
    else if (key == 1) {
        Append("<p>She has fair skin and straight, brown hair that comes down to her shoulders. Some freckles dot the base of her neck, but there are none on her face. Her eyes are not human.</p>");
    }
    else if (key == 2) {
        Append("<p>A beginning. More things seem to be happening than were before. You don't know if it involved emerging.</p>");
    }
    else if (key == 3) {
        Append("<p>You don't know. It says so on the left side of your screen.</p>");
    }
    else if (key == 4) {
        Append("<p>That's a good question. You should ask her.</p>");
        ClearButtons();
        buttons[0][0].update(StartMeeting.bind(null, 0), "\"Who are you?\"");
    }
}

function StartMeeting(key) {
    if (key == 0) {
        Output("\"Hm?\"");
        ClearButtons();
        buttons[0][0].update(StartMeeting.bind(null, 1), "\"What's your name?\"");
        buttons[0][1].update(StartMeeting.bind(null, 2), "\"Where am I?\"");
        buttons[0][2].update(StartMeeting.bind(null, 3), "\"What's happening to me?\"");
        buttons[0][3].update(StartMeeting.bind(null, 4), "\"What happened to your eyes?\"");
    }
    else if (key == 1) {
    
    }
    else if (key == 2) {

    }
    else if (key == 3) {

    }
    else if (key == 4) {
        
    }
}