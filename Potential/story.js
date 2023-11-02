function StoryStart(key) {
    // Output("<p>That strange, incomplete feeling fades. As you look around again you see that, while the space is indeed still empty, it feels a little less paradoxical. You now cast a shadow on yourself and the ground below, implying a light source above you, just slightly ahead. Your shadow on the ground helps assure you of a level plane, likely spanning all directions, but sure to support you should you chose to move across it.</p>");
    if (key == 0) {
        locale = "A Home In A Temporary Meadow";
        hour = 12;
        minute = 0;
        UpdateMeters();
        Output("<p>That strange, incomplete feeling fades, and as you look around again you see your surroundings seem to have changed almost completely while you were distracted. You are in a a vast meadow, surrounded by strong mountains, capped with ice. The meadow itself is filled with flowers, and a gentle breeze carries the soft sound of a several small streams running through the terrain. It is incredibly peaceful, and in some strange way almost familiar. You notice a house a little ways away, walls of simple stone blocks with rectangular slate shingles.</p>\
        <p>As you approach the house, for any reason you might come up with or for none at all, you can make out a stone porch at the front, supporting a simple wooden bench. You notice a waterwheel turning gently, touching down in a brook that runs just next to the house. Finally, you see a chimney rising from the top, currently producing no smoke.</p>\
        <p>You arrive at the front (and only) door. There is no sound coming from within, the windows' shutters closed. You reach out to enter, but as soon as you make contact with the brass handle you are struck with an obscure, sorrowful feeling. All of this is temporary. This is not somewhere you may stay forever, in fact this is not somewhere that will <i>be</i> here forever. It is a resting place, an intermediate location only here to stand in for something greater. It will give you all the comfort it can, but besides that which you make of it, its only purpose is to be replaced. You pause for a few seconds, this feeling for a moment holding you before you shake it off and push the door inward, stepping inside.</p>\
        <p>The room is rather dim, but you can make out that fact: that it is only one room. The floor is, predictably, more stone, and the furniture wood. You move to one of the windows, pulling open the shutters before continuing your exploration. Turning back around, you can better observe the simple accommodations. In one corner, there is a simple bed, dark green covers over linen sheets. In another, a simple wood-burning stove, a pipe moving up and along the ceiling to feed into the chimney. There is a small pile of firewood to the side. Finally, you see a desk and a chair, in front of the other window, which occupies the same wall as the front of the house. On instinct, you move over, opening the shutters there, too, and looking out at the landscape.</p>");
        ClearButtons();
        buttons[0][0].update(StoryStart.bind(null, 1), "Next")
    }
    if (key == 1) {
        Output("<p>You gaze out at an unwritten landscape.</p>");
        ClearButtons();
    }
}