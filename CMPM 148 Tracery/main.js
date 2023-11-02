function choose(arr){
	return arr[Math.floor(Math.random()*(arr.length))]
}
function capitalize (string){return  string.replace(/^\w/, c => c.toUpperCase())}

let grammars = {
	GenerationSimple : function (gram){
		//console.log(gram)
		g = tracery.createGrammar(gram);
		return g.flatten("#origin#")
	}
}

function RaceGen() {
	const raceGenObj = {
		"origin":["The [thisRace:#race#]#thisRace# are #descriptor# people. They hail from the #location# #landmark#. #thisRace# are known for their #goods#, and their #personality# temperament. They are often #relationship# the #otherraces#."],
		"race":["Elves[otherraces:#elfothers#]", "Dwarves[otherraces:#dwarfothers#]", "Orcs[otherraces:#orcothers#]", "Humans[otherraces:#humanothers#]"],
		"descriptor":["a proud", "a timid", "a peaceful", "a warlike", "an ignorant", "a wise", "an artistic"],
		"location":["Ar'tuk", "Deadmany", "Haven", "Cragspire", "Foolsfollow", "Toraya", "Roguesrest"],
		"landmark":["Mountains", "Plains", "Forest", "Jungle", "Valleys", "Islands"],
		"goods":["poetry", "weapons", "crafts", "jewelry", "spellbooks", "food", "enchanted items"],
		"personality":["stern", "playful", "easygoing", "suspicious", "combative"],
		"elfothers":["Dwarves", "Orcs", "Humans"],
		"dwarfothers":["Elves", "Orcs", "Humans"],
		"orcothers":["Dwarves", "Elves", "Humans"],
		"humanothers":["Dwarves", "Orcs", "Elves"],
		"relationship":["at war with", "partners with", "at peace with", "welcoming of", "fast friends with", "annoyed by"]
	};
	document.getElementById('output').innerHTML = grammars.GenerationSimple(raceGenObj);
}

function NPCGen() {
	const NPCGenObj = {
		"origin":["#intro# #pronoun# the #relation# of #city# - #race# that wields #weapon#."],
		"intro":["Have I told you about #name#?", "Let me tell you about #name#.", "If you're looking for NPCs, #name# is a great choice.", "How about #name#?"],
		"name":["#firstname# #lastname#"],
		"firstname":["Ash", "Robin", "Riley", "Sam", "Artreia", "Kuroa", "Gurdash", "Theroa"],
		"lastname":["Silverclaw", "Burrow", "the Wanderer", "Suddenfist", "of Archenvale", "Gassara", "Tek'for", "Addalon"],
		"pronoun":["He is", "She is", "They are"],
		"relation": ["hero", "scourge", "beggar", "embarrassment", "envy"],
		"city": ["Archenvale", "Benissia", "Aboreium", "Thogur", "Haven", "Porthaven", "Kingsfall"],
		"race":["an elf", "a dwarf", "a human", "an orc", "a halfling"],
		"weapon":["an ancient staff", "arcane powers", "forbidden magics", "a great battleaxe", "a historic lance", "daggers of shadow"]
	}
	document.getElementById('output').innerHTML = grammars.GenerationSimple(NPCGenObj);
}