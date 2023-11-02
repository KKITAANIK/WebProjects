function JumpStart() {
    ButtonAppear();
    LeftAppear();
    ClearButtons();
    StoryStart(0);
}

function StoryStart(key) {
    // Output("<p>That strange, incomplete feeling fades. As you look around again you see that, while the space is indeed still empty, it feels a little less paradoxical. You now cast a shadow on yourself and the ground below, implying a light source above you, just slightly ahead. Your shadow on the ground helps assure you of a level plane, likely spanning all directions, but sure to support you should you chose to move across it.</p>");
    if (key == 0) {
        inStart = false;
        locale = "TEMP";
        UpdateMeters();
        Output("<p>This is a test paragraph</p>");
        ClearButtons();
        buttons[0][0].update(StoryStart.bind(null, 1), "Next");
        document.body.classList.remove('fade');
    }
    if (key == 1) {
        Output("<p>You gaze out at an unwritten landscape.</p>");
        ClearButtons();
    }
}