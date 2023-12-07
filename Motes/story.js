function JumpStart() {
    ButtonAppear();
    LeftAppear();
    ClearButtons();
    StoryStart(0);
}

async function StoryStart(key) {
    if (key == 0) {
        document.body.classList.add('fade');
        await timer(2000);
        
        document.getElementById("stylesheet").setAttribute("href", "papyrus.css");
        document.getElementById("displaycontent").onclick = function() {
            let paragraphs = document.getElementsByTagName("p");
            for(let i = 0; i < paragraphs.length; i++) {
                paragraphs[i].classList.add("faded");
            }
            if (printQueue.length > 0) {
                if (printQueue[0][1] == true) {
                    Append(printQueue[0][0]);
                }
                else {
                    AppendP(printQueue[0][0]);
                }
                printQueue.shift();
            }
            
        }
        
        locale = "An Unfamiliar Clearing";
        hour = 11;
        minute = 43;
        day = 1;
        UpdateMeters();
        
        Output("");
        Print([
            ["<q>Thank you, girls,</q> the magister said. <q>Next, allow me to present Mrs. Corma Totham and her householded daughter, Miss Ermintrude Totham.</q>"],
            ["The old lady and the whey-faced blonde creature stood. The magister said, <q>Mrs. Totham is an accomplished body scientist, and Miss Totham is a cloved woman.</q>"],
            ["There was a sound like a strong wind blowing through from the women gasping or murmuring or shifting in their chairs. <i>Body scientist</i> was what polite water-drinking types called <i>necromancers</i>, and up till now Delly had been reasonably fucking certain that cloved women were just a goblin story for scaring kids with and not a type of person that actually existed in this particular and late period of human fucking endeavor."],
            ["<q>She ain’t, <i>either</i>,</q> said Delly, before she had time to tell herself to keep her damn herring-hole shut. Cloved women were supposed to be wild-eyed hillclanners who turned into feral pigs at will and ate men who came into their villages after dark, and this girl looked like she could be overcome by a largish pork sausage."],
            ["<q>Are you implying, Miss Wells, that I don’t know my own business?</q> inquired the magister."],
            ["Delly shook her head, feeling her innards clamp up. She didn’t know why she had to always go and <i>talk</i> when all she relefting well needed to do was <i>sit still</i> and <i>be quiet</i>. <q>No, Magister. I only meant to express my surprise, Magister, that a young lady of such daintitudinous aspect might be a cloved woman, Magister.</q>"],
            ["The magister looked at her cross-eyedwardly. <q><i>Daintitudinous,</i></q> she said, <q>is not a <i>word</i>. And I have been made perfectly satisfied as to Miss Totham’s abilities. As are the Bastennes, who have engaged the Tothams on more than one occasion for their services as bounty hunters.</q>"],
            ["The handsome trollish woman looked interested in that. <q>The Bastennes? My mother and father worked for them back when I was still the proverbial twinkle in dear Pop’s eye. Jolly small world, eh?</q>"],
            ["Delly blinked, not sure which way to squint at the expensive silver-coated plum-puddingness of <i>that</i> accent coming from <i>this</i> woman. The magister just looked resigned. <q>I suppose that I might as well introduce you, Miss Cynallum.</q>"],
            ["The big troll gull popped up to her feet. <q>Winnifer Cynallumwynsurai, at your service and keen as razors,</q> she said. <q>Winn Cynallum if you’re short on time.</q> Then she popped right back down again."],
            ["<br/><p>Waggoner, C. M.. <i>The Ruthless Lady's Guide to Wizardry</i> (pp. 19-20). Penguin Publishing Group. Kindle Edition.</p>", true]
        ]);
        
        document.body.classList.remove('fade');
    }
    if (key == 1) {
        Output("<p>You gaze out at an unwritten landscape.</p>");
        ClearButtons();
    }
}