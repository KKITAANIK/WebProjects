var p = {health: 100, sanity: 100, strength: 3, constitution: 3, agility: 3, perception: 3, control: 3, cleverness: 3, race: "", gender: 0, hair: "", eyes: "", oniSkin: "", background: "", affinity: "", name: "", corrupted: 0, diminished: 0};
var output;

function NewGame() {
    document.getElementById("map").style.backgroundImage = "url(\"-.png\"), url(\"-.png\")";
    output = document.getElementById("output");
    p.strength = 3;
    p.constitution = 3;
    p.agility = 3;
    p.perception = 3;
    p.control = 3;
    p.cleverness = 3;
    UpdateMeters();
    output.style.textAlign = "left";
    output.innerHTML = "&emsp;&emsp;&emsp;&emsp;You are about to embark on an adventure that will test both your abilities and who you are as a person. First, however, certain aspects of your character must be decided. While nothing is meaningless, things such as hair color will have far less of an effect than race. As such, race will be the first decision. Please think long and hard about this, and feel free to look over each race's profile at <a href=\"https://bit.ly/PlanaBible-Races\" target=\"_blank\">https://bit.ly/PlanaBible-Races.</a><br /><br />What race do you choose?";
    Buttons("Dwarf", "Elf", "Human", "Min", "Oni", "Orc", "Open Races Page<span class=\"tooltip\">This will open the above link in a new tab or window.</span>", "Back", Dwarf, Elf, Human, Min, OniChoice, Orc, BibleRaces, Menu);
}
function Dwarf() {
    p.constitution++;
    output.innerHTML = "Are you a hill dwarf or a mountain dwarf?";
    Buttons("Hill dwarf", "Mountain dwarf", "", "", "", "", "", "Back", HDwarf, MDwarf, 0, 0, 0, 0, 0, NewGame);
}
function Elf() {
    p.perception++;
    p.race = "elf";
    Gender();
}
function Human() {
    p.agility++;
    p.race = "human";
    Gender();
}
function Min() {
    p.cleverness++;
    p.race = "min";
    Gender();
}
function OniChoice() {
    p.control++;
    output.innerHTML = "Are you a pureblooded Oni or a tainted Oni?";
    Buttons("Pureblooded Oni", "Tainted Oni", "", "", "", "", "", "Back", Oni, TOni, 0, 0, 0, 0, 0, NewGame);
}
function Orc() {
    p.strength++;
    p.race = "orc";
    Gender();
}
function BibleRaces() {
    window.open("https://bit.ly/PlanaBible-Races");
}
function HDwarf() {
    p.race = "hdwarf";
    Gender();
}
function MDwarf() {
    p.race = "mdwarf";
    Gender();
}
function Oni() {
    p.race = "oni";
    Gender();
}
function TOni() {
    p.race = "toni";
    Gender();
}
function Gender() {
    UpdateMeters();
    output.innerHTML = "What is your gender?";
    Buttons("Male", "Female", "Neutral (they pronouns)", "Neutral (it pronouns)", "", "", "", "Back", Male, Female, They, It, 0, 0, 0, NewGame);
}
function Male() {
    p.gender = 1;
    Hair();
}
function Female() {
    p.gender = 2;
    Hair();
}
function They() {
    p.gender = 3;
    Hair();
}
function It() {
    p.gender = 4;
    Hair();
}
function Hair() {
    output.innerHTML = "Now for appearance. As stated earlier, your appearance is not as significant as your race, however that does not mean that it will have no effect on your experience. That said, no trait of your appearance is inherently better than another.<br /><br />";
    if (p.race == "hdwarf") {
        output.innerHTML = "What is your hair color?";
        Buttons("Mud (dark brown)", "Dirt (brown)", "Twigs (desaturated light brown)", "Moss (dark green)", "Greenery (light green)", "Clay (reddish-brown)", "Sand (sand)", "Back", Mud, Dirt, Twigs, Moss, Greenery, ClayHair, Sand, Gender);
    }
    else if (p.race == "mdwarf") {
        output.innerHTML = "What is your hair color?";
        Buttons("Coal (black)", "Basalt (dark grey)", "Limestone (grey)", "Slate (light grey)", "Shale (dark brown)", "Bog Iron (brown)", "Sandstone (light orange)", "Back", Coal, Basalt, Limestone, Slate, Shale, BogIron, Sandstone, Gender);
    }
    else if (p.race == "elf") {
        output.innerHTML = "What is your hair color?";
        Buttons("Papyrus (dark gold/straw)", "Gold (gold)", "Sunlight (light gold)", "Flora (light green)", "Silver (silver)", "Platinum (light silver)", "Purity (white)", "Back", Papyrus, Gold, Sunlight, Flora, Silver, Platinum, Purity, Gender);
    }
    else if (p.race == "human") {
        output.innerHTML = "What is your hair color?";
        Buttons("Black", "Brown", "Auburn", "Ginger", "Blond(e)", "Grey", "White", "Back", BlackHair, BrownHair, Auburn, Ginger, Blond, GreyHair, WhiteHair, Gender);
    }
    else if (p.race == "min") {
        output.innerHTML = "As a Min, your hair is colorless (white).";
        p.hair = "colorless";
        Buttons("Next", "", "", "", "", "", "", "Back", Eyes, 0, 0, 0, 0, 0, 0, Gender);
    }
    else if (p.race == "oni") {
        output.innerHTML = "What is your hair color?";
        Buttons("Kurikawacha (dark red)", "Murasaki (dark purple)", "Konkikyou (dark blue)", "Kourainando (dark green)", "Sumi-iro (black)", "Ginnezumi (silvery grey)", "Aijiro (white)", "Back", Kurikawacha, Murasaki, Konkikyou, Kourainando, SumiIro, Ginnezumi, Aijiro, Gender);
    }
    else if (p.race == "toni") {
        output.innerHTML = "What is your hair color?";
        Buttons("Black", "Dark Grey", "Grey", "Light Grey", "White", "Brown", "Blond(e)", "Back", BlackHair, DarkGreyHair, GreyHair, LightGreyHair, WhiteHair, BrownHair, Blond, Gender);
    }
    else if (p.race == "orc") {
        output.innerHTML = "As an orc, your hair is black and transitions to white with age.";
        Buttons("Wrought Iron (black)", "Steel (grey)", "Bone (white)", "", "", "", "", "Back", WroughtIron, Steel, Bone, 0, 0, 0, 0, Gender);
    }
}
function Mud() {
    p.hair = "mud";
    Eyes();
}
function Dirt() {
    p.hair = "dirt";
    Eyes();
}
function Twigs() {
    p.hair = "twigs";
    Eyes();
}
function Moss() {
    p.hair = "moss";
    Eyes();
}
function Greenery() {
    p.hair = "greenery";
    Eyes();
}
function ClayHair() {
    p.hair = "clay";
    Eyes();
}
function Sand() {
    p.hair = "sand";
    Eyes();
}
function Coal() {
    p.hair = "coal";
    Eyes();
}
function Basalt() {
    p.hair = "basalt";
    Eyes();
}
function Limestone() {
    p.hair = "limestone";
    Eyes();
}
function Slate() {
    p.hair = "slate";
    Eyes();
}
function Shale() {
    p.hair = "shale";
    Eyes();
}
function BogIron() {
    p.hair = "bog iron";
    Eyes();
}
function Sandstone() {
    p.hair = "sandstone";
    Eyes();
}
function Papyrus() {
    p.hair = "papyrus";
    Eyes();
}
function Gold() {
    p.hair = "gold";
    Eyes();
}
function Sunlight() {
    p.hair = "sunlight";
    Eyes();
}
function Flora() {
    p.hair = "flora";
    Eyes();
}
function Silver() {
    p.hair = "silver";
    Eyes();
}
function Platinum() {
    p.hair = "platinum";
    Eyes();
}
function Purity() {
    p.hair = "purity";
    Eyes();
}
function BlackHair() {
    p.hair = "black";
    Eyes();
}
function BrownHair() {
    p.hair = "brown";
    Eyes();
}
function Auburn() {
    p.hair = "auburn";
    Eyes();
}
function Ginger() {
    p.hair = "ginger";
    Eyes();
}
function Blond() {
    if (p.gender == 2) {
        p.hair = "blonde";
    }
    else {
        p.hair = "blond";
    }
    Eyes();
}
function GreyHair() {
    p.hair = "grey";
    Eyes();
}
function WhiteHair() {
    p.hair = "white";
    Eyes();
}
function Kurikawacha() {
    p.hair = "kurikawacha";
    Eyes();
}
function Murasaki() {
    p.hair = "murasaki";
    Eyes();
}
function Konkikyou() {
    p.hair = "konkikyou";
    Eyes();
}
function Kourainando() {
    p.hair = "kourainando";
    Eyes();
}
function SumiIro() {
    p.hair = "sumi-iro";
    Eyes();
}
function Ginnezumi() {
    p.hair = "ginnezumi";
    Eyes();
}
function Aijiro() {
    p.hair = "aijiro";
    Eyes();
}
function DarkGreyHair() {
    p.hair = "dark grey";
    Eyes();
}
function LightGreyHair() {
    p.hair = "light grey";
    Eyes();
}
function WroughtIron() {
    p.hair = "wrought iron";
    Eyes();
}
function Steel() {
    p.hair = "steel";
    Eyes();
}
function Bone() {
    p.hair = "bone";
    Eyes();
}
function Eyes() {
    if (p.race == "hdwarf") {
        output.innerHTML = "Now, what is your eye color?";
        Buttons("Chestnut (dark brown)", "Hazelnut (brown)", "Green Cap (dark green)", "Gooseberry (light green)", "Kola Nut (reddish-brown)", "", "", "Back", Chestnut, Hazelnut, GreenCap, Gooseberry, KolaNut, 0, 0, Hair);
    }
    else if (p.race == "mdwarf") {
        output.innerHTML = "Now, what is your eye color?";
        Buttons("Onyx (black)", "Magnetite (grey)", "Moonstone (light grey)", "Bronzite (brown)", "Sunstone (orange)", "", "", "Back", Onyx, Magnetite, Moonstone, Bronzite, Sunstone, 0, 0, Hair);
    }
    else if (p.race == "elf") {
        output.innerHTML = "Now, what is your eye color?";
        Buttons("Sol (white)", "Radiance (light gold)", "Sunrise (gold)", "Clear Sky (blue)", "Airglow (green)", "", "", "Back", Sol, Radiance, Sunrise, ClearSky, Airglow, 0, 0, Hair);
    }
    else if (p.race == "human") {
        output.innerHTML = "Now, what is your eye color?";
        Buttons("Brown", "Hazel", "Green", "Blue", "Grey", "", "", "Back", BrownEyes, Hazel, Green, Blue, GreyEyes, 0, 0, Hair);
    }
    else if (p.race == "min") {
        output.innerHTML = "As a Min, your eyes are colorless.";
        Buttons("Black", "Dark Grey", "Grey", "Light Grey", "White", "", "", "Back", BlackEyes, DarkGreyEyes, GreyEyes, LightGreyEyes, WhiteEyes, 0, 0, Hair);
    }
    else if (p.race == "oni") {
        output.innerHTML = "Now, what is your eye color?";
        Buttons("Shinsha (red)", "Kin-cha (yellow)", "Rokushou (green)", "Gunjou (blue)", "Kaimurasaki-iro (purple)", "", "", "Back", Shinsha, KinCha, Rokushou, Gunjou, KaimurasakiIro, 0, 0, Hair);
    }
    else if (p.race == "toni") {
        output.innerHTML = "Now, what is your eye color?";
        Buttons("Red", "Yellow", "Violet", "Grey", "Light Grey", "", "", "Back", Red, Yellow, Violet, GreyEyes, LightGreyEyes, 0, 0, Hair);
    }
    else if (p.race == "orc") {
        output.innerHTML = "Now, what is your eye color?";
        Buttons("Ichor (black)", "Storm (grey)", "Clay (brown)", "Blood (red)", "Soul (white)", "", "", "Back", Ichor, Storm, ClayEyes, Blood, Soul, 0, 0, Hair);
    }
}
function Chestnut() {
    p.eyes = "chestnut";
    Appearance();
}
function Hazelnut() {
    p.eyes = "hazelnut";
    Appearance();
}
function GreenCap() {
    p.eyes = "a green cap";
    Appearance();
}
function Gooseberry() {
    p.eyes = "gooseberry";
    Appearance();
}
function KolaNut() {
    p.eyes = "kola nut";
    Appearance();
}
function Onyx() {
    p.eyes = "onyx";
    Appearance();
}
function Magnetite() {
    p.eyes = "magnetite";
    Appearance();
}
function Moonstone() {
    p.eyes = "moonstone";
    Appearance();
}
function Bronzite() {
    p.eyes = "bronze";
    Appearance();
}
function Sunstone() {
    p.eyes = "sunstone";
    Appearance();
}
function Sol() {
    p.eyes = "Sol";
    Appearance();
}
function Radiance() {
    p.eyes = "radiance";
    Appearance();
}
function Sunrise() {
    p.eyes = "sunrise";
    Appearance();
}
function ClearSky() {
    p.eyes = "clear sky";
    Appearance();
}
function Airglow() {
    p.eyes = "airglow";
    Appearance();
}
function BrownEyes() {
    p.eyes = "brown";
    Appearance();
}
function Hazel() {
    p.eyes = "hazel";
    Appearance();
}
function Green() {
    p.eyes = "green";
    Appearance();
}
function Blue() {
    p.eyes = "blue";
    Appearance();
}
function GreyEyes() {
    p.eyes = "grey";
    Appearance();
}
function BlackEyes() {
    p.eyes = "black";
    Appearance();
}
function DarkGreyEyes() {
    p.eyes = "dark grey";
    Appearance();
}
function LightGreyEyes() {
    p.eyes = "light grey";
    Appearance();
}
function WhiteEyes() {
    p.eyes = "white";
    Appearance();
}
function Shinsha() {
    p.eyes = "shinsha";
    OniSkin();
}
function KinCha() {
    p.eyes = "kin-cha";
    OniSkin();
}
function Rokushou() {
    p.eyes = "rokushou";
    OniSkin();
}
function Gunjou() {
    p.eyes = "gunjou";
    OniSkin();
}
function KaimurasakiIro() {
    p.eyes = "kaimurasaki-iro";
    OniSkin();
}
function Red() {
    p.eyes = "red";
    Appearance();
}
function Yellow() {
    p.eyes = "yellow";
    Appearance();
}
function Violet() {
    p.eyes = "violet";
    Appearance();
}
function Ichor() {
    p.eyes = "ichor";
    Appearance();
}
function Storm() {
    p.eyes = "storm";
    Appearance();
}
function ClayEyes() {
    p.eyes = "clay";
    Appearance();
}
function Blood() {
    p.eyes = "blood";
    Appearance();
}
function Soul() {
    p.eyes = "soul";
    Appearance();
}
function OniSkin() {
    output.innerHTML = "As an Oni, the color of your skin can vary greatly. What is your skin color?";
    Buttons("Red", "Purple", "Blue", "Grey", "White", "", "", "Back", RedSkin, Purple, BlueSkin, GreySkin, WhiteSkin, 0, 0, Eyes);
}
function RedSkin() {
    p.oniSkin = "red";
    Appearance();
}
function Purple() {
    p.oniSkin = "purple";
    Appearance();
}
function BlueSkin() {
    p.oniSkin = "blue";
    Appearance();
}
function GreySkin() {
    p.oniSkin = "grey";
    Appearance();
}
function WhiteSkin() {
    p.oniSkin = "white";
    Appearance();
}

function Appearance() {
    output.innerHTML = AppearanceGen().concat(" Is this correct?");
    Buttons("Yes", "No", "", "", "", "", "", "Back", Background, NewGame, 0, 0, 0, 0, 0, Eyes);
}
function AppearanceGen() {
    var appearance = "You are a";
    if (p.gender == 1)
    {
        appearance = appearance.concat(" male ");
    }
    else if (p.gender == 2)
    {
        appearance = appearance.concat(" female ");
    }
    else if (p.gender == 3 || p.gender == 4)
    {
        appearance = appearance.concat("n androgynous ");
    }
    if (p.race == "hdwarf") {
        appearance = appearance.concat("hill dwarf with hair the color of ", p.hair, " and eyes the color of ", p.eyes);
    }
    else if (p.race == "mdwarf") {
        appearance = appearance.concat("mountain dwarf with hair the color of ", p.hair, " and eyes the color of ", p.eyes);
    }
    else if (p.race == "elf") {
        appearance = appearance.concat("elf with hair the color of ", p.hair, " and eyes the color of ", p.eyes);
    }
    else if (p.race == "human") {
        appearance = appearance.concat("human with ", p.hair, " hair and ", p.eyes, " eyes");
    }
    else if (p.race == "min") {
        appearance = appearance.concat("Min with colorless hair and colorless eyes");
    }
    else if (p.race == "oni") {
        appearance = appearance.concat("Oni with ", p.hair, " hair and eyes the color of ", p.eyes, ". As an Oni, you have ", p.oniSkin, " skin");
    }
    else if (p.race == "toni") {
        appearance = appearance.concat("tainted Oni with ", p.hair, " hair and ", p.eyes, " eyes");
    }
    else if (p.race == "orc") {
        appearance = appearance.concat("orc with hair the color of ", p.hair, " and eyes the color of ", p.eyes);
    }
    return appearance.concat(".");
}

function Background() {
    p.diminished = 0;
    p.corrupted = 0;
    p.strength = 3;
    p.constitution = 3;
    p.agility = 3;
    p.perception = 3;
    p.control = 3;
    p.cleverness = 3;
    if (p.race == "hdwarf" || p.race == "mdwarf") {
        p.constitution++;
    }
    else if (p.race == "elf") {
        p.perception++;
    }
    else if (p.race == "human") {
        p.agility++;
    }
    else if (p.race == "min") {
        p.cleverness++;
    }
    else if (p.race == "oni" || p.race == "toni") {
        p.control++;
    }
    else if (p.race == "orc") {
        p.strength++;
    }
    UpdateMeters();
    output.innerHTML = "&emsp;&emsp;&emsp;&emsp;Your appearance is only part of the story. What you are born with will never have a greater effect than what you choose to do with it. It is time to select your background. This will make certain paths easier, however your choice will not outright prevent you from taking certain actions. Your background will also dictate what knowledge and experience you have. A military background may come in handy in a game of chess (or shah, its equivalent in Plana), and an herbologist would be less likely to eat poisonous berries.<br />&emsp;&emsp;&emsp;&emsp;There are nine categories of background. Choosing one will elaborate on the backgrounds it contains. You will be able to go back after selecting a background if you would like to look at others or change your mind.<br /><br />What category will you view?"
    Buttons("The Charmer", "The Fighter", "The Healer", "The Mage", "The Merchant", "The Priest", "Next Page", "Back", Charmer, Fighter, Healer, Mage, Merchant, Priest, Background2, Appearance);
}
function Background2() {
    output.innerHTML = "&emsp;&emsp;&emsp;&emsp;Your appearance is only part of the story. What you are born with will never have a greater effect than what you choose to do with it. It is time to select your background. This will make certain paths easier, however your choice will not outright prevent you from taking certain actions. Your background will also dictate what knowledge and experience you have. A military background may come in handy in a game of chess (or shah, its equivalent in Plana), and an herbologist would be less likely to eat poisonous berries.<br />&emsp;&emsp;&emsp;&emsp;There are nine categories of background. Choosing one will elaborate on the backgrounds it contains. You will be able to go back after selecting a background if you would like to look at others or change your mind.<br /><br />What category will you view?"
    Buttons("The Scholar", "The Thief", "The Traveler", "", "", "", " ", "Back", Scholar, Thief, Traveler, 0, 0, 0, 0, Background);
}
function Charmer() {
    output.innerHTML = "&emsp;&emsp;&emsp;&emsp;The Bard: A musician, you entertain and enthrall. Your music may soothe or bolster certain allies and enemies, however for the most part you will not do well in combat without help. Musical ability also, perhaps more importantly, provides opportunities to earn a little extra coin.<br />&emsp;&emsp;&emsp;&emsp;The Courtesan: An escort, you entertain and entice through romance and desire. You have little skill in combat, but you are perhaps the most charismatic of the Charmer backgrounds. Your experience in reading the desires of others will serve you well, and your comeliness will give you an upper hand in most social endeavors.<br />&emsp;&emsp;&emsp;&emsp;The Con Artist: A silver-tongued trickster, you are well versed in convincing people that their desires align with your own. With enough experience to protect yourself when the going gets rough, you will not be defenseless, however those less gullible of victims may see through your attempted deception if you misjudge them.<br />&emsp;&emsp;&emsp;&emsp;The Diplomat: A political emissary, you are above all sensitive to the tensions and triggers of your partners in conversation. Your ability to walk the narrow line between passion and disinterest is what made you a professional, however, always accompanied by some form of guard, you will struggle to protect yourself.";
    Buttons("The Bard", "The Courtesan", "The Con Artist", "The Diplomat", "", "", "", "Back", Bard, Courtesan, ConArtist, Diplomat, 0, 0, 0, Background);
}
function Fighter() {
    output.innerHTML = "&emsp;&emsp;&emsp;&emsp;The Bandit: A marauder, you have no problems relieving innocents of their coin and/or lives. Dilemmas may become much easier when self-interest is placed above such immaterial things as morals, and when it comes to combat you will fight tooth and claw to emerge victorious. That said, your education and knowledge of current events is somewhat lacking.<br />&emsp;&emsp;&emsp;&emsp;The Crusader: A noble warrior, you are motivated to fight by a cause you believe in. You will not falter, and your victory will be one well-earned. Your dedication is almost unparalleled, however certain advantageous actions will conflict with your steadfast principles.<br />&emsp;&emsp;&emsp;&emsp;The Mercenary: A soldier of fortune, you fight for the highest bidder. You have much experience behind the sword, and a knowledge of current events that allows you to be in the right place at the right time. With such a profession, you have no need for an understanding of higher concepts beyond how they influence the battles you take part in.<br />&emsp;&emsp;&emsp;&emsp;The Soldier: A militant, you trained hard to join some military or guard. You know your way around a battlefield or obstacle course, but more importantly you know how citizens behave and how to deal with them. You are well-trained and disciplined, but such training can only prepare you so much for the world beyond your home.";
    Buttons("The Bandit", "The Crusader", "The Mercenary", "The Soldier", "", "", "", "Back", Bandit, Crusader, Mercenary, Soldier, 0, 0, 0, Background);
}
function Healer() {
    output.innerHTML = "&emsp;&emsp;&emsp;&emsp;The Apothecary: An herbalist, your cures are medicinal in nature. You make balms and poultices from the fruits of the natural world, and your specialization is in long-term treatment. You can do little for broken bones in the heat of combat, but illness and infection will bow to you, as will pain and troubled minds.<br />&emsp;&emsp;&emsp;&emsp;The Physician: A doctor, you understand the anatomy of the civilized races. You can use this knowledge to set bones, safely remove arrows, and amputate limbs that are beyond treatment. You have the most combat experience of the Healer category, and the most immediate of cures, but on the battlefield there is only ever time for \"good enough\".<br />&emsp;&emsp;&emsp;&emsp;The Miracle Worker: A theurgist, your cures are the work of the gods rather than your own hands. Your power comes from your connection to the gods, and your skill in communicating with them. You have the potential to do far more than the other healers, but miracles are not to be relied upon.";
    Buttons("The Apothecary", "The Physician", "The Miracle Worker", "", "", "", "", "Back", Apothecary, Physician, MiracleWorker, 0, 0, 0, 0, Background);
}
function Mage() {
    output.innerHTML = "&emsp;&emsp;&emsp;&emsp;The Autodidact: A self-taught mage, you learned the art of magic through the development of understanding through trial and error. You have explored your own magical system thoroughly in your attempts, and you can use this knowledge in learning new spells. That said, the collection of spells you have mastered is likely not the most standard or traditionally useful.<br />&emsp;&emsp;&emsp;&emsp;The Hobbyist: A minor spellcaster, you use magic for convenience rather than craft. You are capable of those few feats of magic you have learned, such as the levitation of objects or the creation of fire, and have experience in other fields besides, but your understanding of magic is much less than that of a more dedicated mage.<br />&emsp;&emsp;&emsp;&emsp;The Student: A mage trained by one more experienced, your education when it comes to magic was much more structured than the other Mages. You have the greatest understanding of the core concepts of magic, and why it works how it does, and the spells you know may prove the most traditionally useful, but you may struggle to continue your education on your own.";
    Buttons("The Autodidact", "The Hobbyist", "The Student", "", "", "", "", "Back", Autodidact, Hobbyist, Student, 0, 0, 0, 0, Background);
}
function Merchant() {
    output.innerHTML = "&emsp;&emsp;&emsp;&emsp;The Farmer: A vendor of crops, dairy, and/or eggs, you have experience with farming the land and livestock. You may not be particularly experienced with combat, if at all, but your ability to relate to the working man may prove useful, as may your experience with agriculture and animals.<br />&emsp;&emsp;&emsp;&emsp;The Hunter: A vendor of meats and pelts, you have experience with stalking or trapping prey. Your skills transfer to combat the most out of the Merchants, but civilized races are different from beasts, so it is unlikely you will do too well against trained fighters. You will find greater fortune hunting for food, a useful skill when away from the city.<br />&emsp;&emsp;&emsp;&emsp;The Smith: A vendor of tools and utensils, you have experience with shaping metal to your vision. Your experience in beating metal to shape and enduring heat has made you strong, and while swords and armor are rare orders in times of peace such skills could be learned. That said, straying from home will put you unsurprisingly out of your element.<br />&emsp;&emsp;&emsp;&emsp;The Tailor: A vendor of clothing, you have experience fitting, mending, and making garments and accessories. You will be able to fix and make adjustments to your own clothes, and your work and clientele is perhaps the most refined or upper-class of the Merchants, but those without a taste for fashion will have no need for you.<br />&emsp;&emsp;&emsp;&emsp;The Trader: A vendor of general goods, your have experience with buying and selling items and wares of all kinds. You have a good understanding of the values of items, and your bartering skills have been trained thoroughly, but the advantages of specialization are unavailable to you, as are the sympathies of those specialists.";
    Buttons("The Farmer", "The Hunter", "The Smith", "The Tailor", "The Trader", "", "", "Back", Farmer, Hunter, Smith, Tailor, Trader, 0, 0, Background);
}
function Priest() {
    p.strength += 0;
    p.constitution += 0;
    p.agility += 0;
    p.perception += 0;
    p.control += 2;
    p.cleverness += 1;
    UpdateMeters();
    var priestText = "&emsp;&emsp;&emsp;&emsp;As a priest, you worship, serve, or otherwise follow one of the fifteen gods or Mahth. Before making your choice, you are encouraged to read through the gods at <a href=\"https://bit.ly/PlanaBible-Gods\" target=\"_blank\">https://bit.ly/PlanaBible-Gods<\a>.<br />&emsp;&emsp;&emsp;&emsp;";
    if (p.race == "hdwarf" || p.race == "mdwarf") {
        priestText = priestText.concat("As a dwarf, your patron god is Tyruth, and this is the most common choice, however you are in no way constrained to your patron god.");
    }
    else if (p.race == "elf") {
        priestText = priestText.concat("As an elf, your patron god is Syssil, and this is the most common choice, however you are in no way constrained to your patron god.");
    }
    else if (p.race == "human") {
        priestText = priestText.concat("As a human, your patron god is Mann, and this is the most common choice, however you are in no way constrained to your patron god.");
    }
    else if (p.race == "min") {
        priestText = priestText.concat("As a Min, your patron god is Minor, and this is the most common choice, however you are in no way constrained to your patron god.");
    }
    else if (p.race == "oni" || p.race == "toni") {
        priestText = priestText.concat("As an Oni, your patron god is Eyia, and this is the most common choice, however you are in no way constrained to your patron god.");
    }
    else if (p.race == "orc") {
        priestText = priestText.concat("As an orc, your patron god is not the obvious choice it would be for other races. Orcs tend to be somewhat irreverent towards their patron god, and while Whyne is still an option, most other gods are more likely to be chosen by an orc.");
    }
    priestText = priestText.concat("<br /><br />&emsp;&emsp;&emsp;&emsp;And then this bit explains each one because I'm a fucking masochist<br /><br />Which god do you pledge yourself to?");
    output.innerHTML = priestText;
    if (p.gender == 1) {
        Buttons("Collaborator of An", "Servant of Drunn", "Servant of Eless", "Geki of Eyia", "Cultist of F'fara", "Worshipper of Krish", "Next Page", "Back", An, Drunn, Eless, Eyia, FFara, Krish, Priest2, Background);
    }
    else {
        Buttons("Collaborator of An", "Servant of Drunn", "Servant of Eless", "Miko of Eyia", "Cultist of F'fara", "Worshipper of Krish", "Next Page", "Back", An, Drunn, Eless, Eyia, FFara, Krish, Priest2, Background);
    }
}
function Priest2() {
    Buttons("Follower of Mann", "Facilitator of Massan", "Architect of Minor", "Worshipper of Nascence", "Augur of Srann", "Student of Syssil", "Next Page", "Back", Mann, Massan, Minor, Nascence, Srann, Syssil, Priest3, Priest);
}
function Priest3() {
    Buttons("Survivor of Thee", "Guardian of Tyruth", "Supplicant of Whyne", "Disciple of Mahth", "", "", "", "Back", Thee, Tyruth, Whyne, Mahth, 0, 0, 0, Priest2);
}
function Scholar() {
    p.strength -= 1;
    p.constitution -= 1;
    p.agility += 0;
    p.perception += 0;
    p.control += 0;
    p.cleverness += 3;
    output.innerHTML = "&emsp;&emsp;&emsp;&emsp;All Scholar backgrounds share certain similarities that will be covered here to avoid repetition. The Scholar is thoroughly inexperienced in combat and has few skills viewed as traditionally useful, such as manual labor or social skills. The Scholar does, however, have the most knowledge in their field of any given background, and can provide valuable insight into the functions of Plana. The Scholar is intended for those that want to discover some of the deeper lore of Plana, and is not recommended for new players.";
    Buttons("The Botanist", "The Historian", "The Magus", "The Philosopher", "The Zoologist", "", "", "Back", Botanist, Historian, Magus, Philosopher, Zoologist, 0, 0, Background2);
}
function Thief() {
    output.innerHTML = "";
    Buttons("The Burglar", "The Contractor", "The Heistmaster", "The Pickpocket", "", "", "", "Back", Burglar, Contractor, Heistmaster, Pickpocket, 0, 0, 0, Background2);
}
function Traveler() {
    output.innerHTML = "";
    Buttons("The Nomad", "The Outsider", "The Unknown", "", "", "", "", "Back", Nomad, Outsider, Unknown, 0, 0, 0, 0, Background2);
}
function Bard() {
    p.strength += 0;
    p.constitution += 0;
    p.agility += 1;
    p.perception += 1;
    p.control += 2;
    p.cleverness += 0;
    p.background += "bard";
    Affinity();
}
function Courtesan() {
    p.strength += 0;
    p.constitution += 0;
    p.agility += 0;
    p.perception += 2;
    p.control += 2;
    p.cleverness += 0;
    p.background = "courtesan";
    Affinity();
}
function ConArtist() {
    p.strength += 0;
    p.constitution += 0;
    p.agility += 0;
    p.perception += 1;
    p.control += 2;
    p.cleverness += 1;
    p.background = "con artist";
    Affinity();
}
function Diplomat() {
    p.strength -= 1;
    p.constitution -= 1;
    p.agility += 0;
    p.perception += 2;
    p.control += 2;
    p.cleverness += 2;
    p.background = "diplomat";
    Affinity();
}
function Bandit() {
    p.strength += 2;
    p.constitution += 2;
    p.agility += 1;
    p.perception += 0;
    p.control -= 1;
    p.cleverness -= 2;
    p.background = "bandit";
    Affinity();
}
function Crusader() {
    p.strength += 2;
    p.constitution += 3;
    p.agility -= 1;
    p.perception += 0;
    p.control += 1;
    p.cleverness -= 1;
    p.background = "crusader";
    Affinity();
}
function Mercenary() {
    p.strength += 1;
    p.constitution += 2;
    p.agility += 1;
    p.perception += 1;
    p.control += 0;
    p.cleverness -= 1;
    p.background = "mercenary";
    Affinity();
}
function Soldier() {
    p.strength += 2;
    p.constitution += 2;
    p.agility += 0;
    p.perception += 0;
    p.control += 1;
    p.cleverness -= 1;
    p.background = "soldier";
    Affinity();
}
function Apothecary() {
    p.strength += 0;
    p.constitution += 0;
    p.agility += 0;
    p.perception += 2;
    p.control += 0;
    p.cleverness += 2;
    p.background = "apothecary";
    Affinity();
}
function Physician() {
    p.strength += 0;
    p.constitution += 1;
    p.agility += 0;
    p.perception += 0;
    p.control += 1;
    p.cleverness += 2;
    p.background = "physician";
    Affinity();
}
function MiracleWorker() {
    p.strength -= 1;
    p.constitution -= 1;
    p.agility -= 1;
    p.perception += 1;
    p.control += 3;
    p.cleverness += 1;
    p.background = "miracle worker";
    Affinity();
}
function Autodidact() {
    p.strength -= 1;
    p.constitution += 0;
    p.agility += 0;
    p.perception += 0;
    p.control += 1;
    p.cleverness += 2;
    p.background = "autodidact";
    Affinity();
}
function Hobbyist() {
    p.strength += 0;
    p.constitution += 0;
    p.agility += 0;
    p.perception += 0;
    p.control += 1;
    p.cleverness += 1;
    p.background = "hobbyist";
    Affinity();
}
function Student() {
    p.strength -= 1;
    p.constitution += 0;
    p.agility += 0;
    p.perception += 0;
    p.control += 0;
    p.cleverness += 3;
    p.background = "student";
    Affinity();
}
function Farmer() {
    p.strength += 2;
    p.constitution += 2;
    p.agility += 0;
    p.perception += 0;
    p.control += 0;
    p.cleverness += 0;
    p.background = "farmer";
    Affinity();
}
function Hunter() {
    p.strength += 0;
    p.constitution += 0;
    p.agility += 2;
    p.perception += 2;
    p.control += 0;
    p.cleverness += 0;
    p.background = "hunter";
    Affinity();
}
function Smith() {
    p.strength += 2;
    p.constitution += 3;
    p.agility -= 1;
    p.perception += 0;
    p.control += 0;
    p.cleverness += 0;
    p.background = "smith";
    Affinity();
}
function Tailor() {
    p.strength += 0;
    p.constitution += 0;
    p.agility += 0;
    p.perception += 2;
    p.control += 1;
    p.cleverness += 0;
    p.background = "tailor";
    Affinity();
}
function Trader() {
    p.strength += 0;
    p.constitution += 0;
    p.agility += 0;
    p.perception += 2;
    p.control += 1;
    p.cleverness += 1;
    p.background = "trader";
    Affinity();
}
function An() {
    p.background = "collaborator of An";
    Affinity();
}
function Drunn() {
    p.constitution--;
    p.background = "servant of Dunn";
    Affinity();
}
function Eless() {
    p.background = "servant of Eless";
    Affinity();
}
function Eyia() {
    p.control++;
    if (p.gender == 1) {
        p.background = "geki of Eyia";
    }
    else {
        p.background = "miko of Eyia"
    }
    Affinity();
}
function FFara() {
    p.control--;
    p.background = "cultist of F'fara";
    Affinity();
}
function Krish() {
    p.strength++;
    p.background = "worshipper of Krish";
    Affinity();
}
function Mann() {
    p.agility++;
    p.strength++;
    p.cleverness--;
    p.background = "follower of Mann";
    Affinity();
}
function Massan() {
    p.agility++;
    p.cleverness--;
    p.background = "facilitator of Massan";
    Affinity();
}
function Minor() {
    p.control++;
    p.background = "architect of Minor";
    Affinity();
}
function Nascence() {
    p.cleverness++;
    p.background = "worshipper of Nascence";
    Affinity();
}
function Srann() {
    p.cleverness--;
    p.perception++;
    p.background = "augur of Srann";
    Affinity();
}
function Syssil() {
    p.cleverness+= 2;
    p.control++;
    p.strength--;
    p.constitution--;
    p.background = "student of Syssil";
    Affinity();
}
function Thee() {
    p.control = 0;
    p.cleverness -= 3;
    p.constitution--;
    p.strength--;
    p.agility--;
    p.perception -= 2;
    p.diminished = 1;
    p.background = "survivor of Thee";
    Affinity();
}
function Tyruth() {
    p.constitution += 2;
    p.cleverness--;
    p.background = "guardian of Tyruth";
    Affinity();
}
function Whyne() {
    p.cleverness--;
    p.background = "supplicant of Whyne";
    Affinity();
}
function Mahth() {
    p.strength++;
    p.constitution++;
    p.agility++; 
    p.control -= 2;
    p.corrupted = 1;
    p.background = "disciple of Mahth";
    Affinity();
}
function Botanist() {
    p.perception++;
    p.background = "botanist";
    Affinity();
}
function Historian() {
    p.background = "historian";
    Affinity();
}
function Magus() {
    p.control++;
    p.background = "magus";
    Affinity();
}
function Philosopher() {
    p.background = "philosopher";
    Affinity();
}
function Zoologist() {
    p.perception++;
    p.background = "zoologist";
    Affinity();
}
function Burglar() {
    p.strength += 0;
    p.constitution += 0;
    p.agility += 2;
    p.perception += 2;
    p.control += 0;
    p.cleverness += 0;
    p.background = "burglar";
    Affinity();
}
function Contractor() {
    p.strength += 0;
    p.constitution += 0;
    p.agility += 1;
    p.perception += 2;
    p.control += 1;
    p.cleverness += 0;
    p.background = "contractor";
    Affinity();
}
function Heistmaster() {
    p.strength += 0;
    p.constitution += 0;
    p.agility += 1;
    p.perception += 2;
    p.control += 0;
    p.cleverness += 1;
    p.background = "heistmaster";
    Affinity();
}
function Pickpocket() {
    p.strength += 0;
    p.constitution += 0;
    p.agility += 1;
    p.perception += 3;
    p.control += 0;
    p.cleverness += 0;
    p.background = "pickpocket";
    Affinity();
}
function Nomad() {
    p.strength += 1;
    p.constitution += 1;
    p.agility += 1;
    p.perception += 0;
    p.control += 1;
    p.cleverness += 0;
    p.background = "nomad";
    Affinity();
}
function Outsider() {
    p.strength += 0;
    p.constitution += 0;
    p.agility += 1;
    p.perception += 1;
    p.control += 1;
    p.cleverness += 1;
    p.background = "outsider";
    Affinity();
}
function Unknown() {
    p.strength += 0;
    p.constitution += 0;
    p.agility += 0;
    p.perception += 0;
    p.control += 0;
    p.cleverness += 0;
    p.background = "unknown";
    Affinity();
}
function Affinity() {
    UpdateMeters();
    if (!p.diminished) {
        output.innerHTML = "&emsp;&emsp;&emsp;&emsp;People are not so one-dimensional as to be described in a couple words. While the complexity of your character will mostly exist within your head, you may communicate some of this complexity by selecting an affinity for one of the six attributes this game uses to quantify your character's abilities.<br />&emsp;&emsp;&emsp;&emsp;The six attributes are strength, constitution, agility, perception, control, and cleverness. These attributes form the core of your character's abilities, and while you are still the final arbiter on what choices you make, how successful you are will be determined by these attributes and the skills you have developed.<br /><br />Which attribute do you have an affinity for?<br /><br />&emsp;&emsp;&emsp;&emsp;Strength: Strength is a measure of your ability to physically impact the world of Plana. Strength may allow you to lift a fallen log off of a crushed leg, or even to intimidate a mugger to avoid a fight altogether.<br />&emsp;&emsp;&emsp;&emsp;Constitution: Constitution is a measure of your ability to perform feats of endurance. Constitution may allow you to carry a heavier load, sprint long distances, or endure an onslaught of attacks.<br />&emsp;&emsp;&emsp;&emsp;Agility: Agility is a measure of your ability to move and adapt. Agility may allow you to find secure footholds when scaling a mountain, jump across a large gap, or react quickly to an incoming attack.<br />&emsp;&emsp;&emsp;&emsp;Perception: Perception is a measure of your ability to notice finer details within Plana. Perception may allow you to notice the breeze changing direction, find a hidden door, or catch someone in a lie.<br />&emsp;&emsp;&emsp;&emsp;Control: Control is a measure of your ability to maintain composure no matter what. Control may allow you to focus under pressure, avoid temptation, and resist magics that target the mind.<br />&emsp;&emsp;&emsp;&emsp;Cleverness: Cleverness is a measure of your ability to process and understand information. Cleverness may allow you to acquire new skills more quickly, put together the pieces of a puzzle, or come up with new ideas.";
        Buttons("Strength", "Constitution", "Agility", "Perception", "Control", "Cleverness", "", "Back", Strength, Constitution, Agility, Perception, Control, Cleverness, 0, Background);
    }
    else {
        output.innerHTML = "&emsp;&emsp;&emsp;&emsp;People are not so one-dimensional as to be described in a couple words. While the complexity of your character will mostly exist within your head, you may communicate some of this complexity by selecting an affinity for one of the six attributes this game uses to quantify your character's abilities.<br />&emsp;&emsp;&emsp;&emsp;Unfortunately, with your being diminished through interactions with Thee, the benefits of your affinity will be faded. Also note that you will gain no benefit from an affinity for control, which will remain at 0 for your entire adventure.<br />&emsp;&emsp;&emsp;&emsp;The six attributes are strength, constitution, agility, perception, control, and cleverness. These attributes form the core of your character's abilities, and while you are still the final arbiter on what choices you make, how successful you are will be determined by these attributes and the skills you have developed.<br /><br />Which attribute do you have an affinity for?<br /><br />&emsp;&emsp;&emsp;&emsp;Strength: Strength is a measure of your ability to physically impact the world of Plana. Strength may allow you to lift a fallen log off of a crushed leg, or even to intimidate a mugger to avoid a fight altogether.<br />&emsp;&emsp;&emsp;&emsp;Constitution: Constitution is a measure of your ability to perform feats of endurance. Constitution may allow you to carry a heavier load, sprint long distances, or endure an onslaught of attacks.<br />&emsp;&emsp;&emsp;&emsp;Agility: Agility is a measure of your ability to move and adapt. Agility may allow you to find secure footholds when scaling a mountain, jump across a large gap, or react quickly to an incoming attack.<br />&emsp;&emsp;&emsp;&emsp;Perception: Perception is a measure of your ability to notice finer details within Plana. Perception may allow you to notice the breeze changing direction, find a hidden door, or catch someone in a lie.<br />&emsp;&emsp;&emsp;&emsp;Control: Control is a measure of your ability to maintain composure no matter what. Control may allow you to focus under pressure, avoid temptation, and resist magics that target the mind.<br />&emsp;&emsp;&emsp;&emsp;Cleverness: Cleverness is a measure of your ability to process and understand information. Cleverness may allow you to acquire new skills more quickly, put together the pieces of a puzzle, or come up with new ideas.";
        Buttons("Strength", "Constitution", "Agility", "Perception", "Control<span class=\"tooltip\">Diminished by your interactions with Thee, you will gain nothing from choosing this option.</span>", "Cleverness", "", "Back", Strength, Constitution, Agility, Perception, Control, Cleverness, 0, Background);
    }
    
}
function Strength() {
    p.affinity = "strength";
    if (!p.diminished) {
        p.strength += 2;
    }
    else {
        p.strength++;
    }
    Willpower();
}
function Constitution() {
    p.affinity = "constitution";
    if (!p.diminished) {
        p.constitution += 2;
    }
    else {
        p.constitution++;
    }
    Willpower();
}
function Agility() {
    p.affinity = "agility";
    if (!p.diminished) {
        p.agility += 2;
    }
    else {
        p.agility++;
    }
    Willpower();
}
function Perception() {
    p.affinity = "perception";
    if (!p.diminished) {
        p.perception += 2;
    }
    else {
        p.perception++;
    }
    Willpower();
}
function Control() {
    p.affinity = "control";
    if (!p.diminished) {
        p.control += 2;
    }
    Willpower();
}
function Cleverness() {
    p.affinity = "cleverness";
    if (!p.diminished) {
        p.cleverness += 2;
    }
    else {
        p.cleverness++;
    }
    Willpower();
}
function Willpower() {
    UpdateMeters();
    output.innerHTML = "&emsp;&emsp;&emsp;&emsp;You may note that willpower is not a quantified attribute. Your character's willpower/determination directly mirrors your own, and what your character is willing to confront, combat, and endure will not exceed your own willingness. Quitting will be a decision from both parties, and finding another path in the face of adversity will always be a character decision. In short, all choices made in this game will be canon.";
    Buttons("Next", "", "", "", "", "", "", "", ConfirmBackground, 0, 0, 0, 0, 0, 0, 0);
}
function ConfirmBackground() {
    output.innerHTML = BackgroundGen().concat(" Is this correct?");
    Buttons("Yes", "No", "", "", "", "", "", "Back", Name, Background, 0, 0, 0, 0, 0, 0);
}
function BackgroundGen() {
    var backgroundText = "You have the background of a";
    if (p.background.charAt(0) == 'a' || p.background.charAt(0) == 'e' || p.background.charAt(0) == 'i' || p.background.charAt(0) == 'o' || p.background.charAt(0) == 'u') {
        backgroundText = backgroundText.concat("n");
    }
    return backgroundText.concat(" ", p.background, " and an affinity for ", p.affinity, ".");
}
function Name() {
    output.innerHTML = "&emsp;&emsp;&emsp;&emsp;Finally, now that you have a perhaps more concrete idea of what your character will be, it is time to choose a name. This could be seen as either the least or most important choice. Your name may impact how some people think of you, but otherwise it has very little bearing on your adventure and experiences. That said, your name is who you are, a collection of sounds used as shorthand for your being. However you see it, take your time and choose wisely, as you will be unable to change your name in-game after this point.<br /><br />What is your name?<br /><input id=\"nameInput\"><br />Please note that your name must be more than one character long.";
    Buttons("Next", "", "", "", "", "", "", "Back", NameConfirm, 0, 0, 0, 0, 0, 0, ConfirmBackground);
}
function NameConfirm() {
    p.name = document.getElementById("nameInput").value;
    if (p.name.length <= 1) {
        Name();
    }
    else {
        output.innerHTML = "Your name is ".concat(p.name, ".<br /><br />Is this correct?");
        Buttons("Yes", "No", "", "", "", "", "", "Back", FinalConfirm, ConfirmBackground, 0, 0, 0, 0, 0, Name);
    }
}
function FinalConfirm() {
    output.innerHTML = AppearanceGen().concat(" ", BackgroundGen(), " Your name is ", p.name, ".<br /><br />Please make sure this is correct, as there will be no way to change it in-game.");
    Buttons("Yes", "No", "", "", "", "", "", "Return to Start", Initialization, NameConfirm, 0, 0, 0, 0, 0, NewGame);
}
function Initialization() {
    if (p.race == "hdwarf") {
        xpos = 8;
        ypos = 19;
    }
    else if (p.race == "mdwarf") {
        xpos = 13;
        ypos = 20;
    }
    else if (p.race == "elf") {
        xpos = 4;
        ypos = 12;
    }
    else if (p.race == "human") {
        xpos = 9;
        ypos = 4;
    }
    else if (p.race == "min") {
        xpos = 11;
        ypos = 15;
    }
    else if (p.race == "toni") {
        xpos = 17;
        ypos = 14;
    }
    else if (p.race == "oni") {
        xpos = 17;
        ypos = 17;
    }
    else if (p.race == "orc") {
        xpos = 8;
        ypos = 25;
    }
    UpdateMeters();
    document.getElementById("map").style.backgroundImage = "url(\"personicon.png\"), url(\"Plana220x330.png\")";
    Awaken();
}