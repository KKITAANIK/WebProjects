class Form {
    constructor(hasform, pseudoform, segments) {
        this.hasform = hasform; //bool, formless or no
        if (this.hasform == 0) {
            this.pseudoform = pseudoform; //bool, can assume forms
        }
        if (this.hasform == 1 || this.pseudoform == 1) {
            /*this.hascore; //bool, is there a core of all operations? Most creatures this will be a brain, slimes have a central core/nucleus, etc. Some creatures like wisps may have no core
            if (this.hascore == 1) {
                this.coretype; //string, see above, specifying what to call this core (most likely brain)
            }*/
            this.segments = segments; //array of segment objects for distinct sections (head, torso, limbs, tail)
        }
    }
}

class Segment {
    constructor(name, solidity, material, connections, subsections) {
        this.name = name; //string, name of segment
        this.solidity = solidity; //1-7, the solidity of the segment, 1) solid (stone golem), 2) armored (chitin), 3) firm (dragon), 4) squishy (human), 5) semi-solid (slime), 6) fluid (water elemental), 7) etherial/gaseous (wisp)
        this.material = material; //string, noun, describes the surface (scales, feathers, skin, etc.)
        this.connections = connections; //list, which segments is this segment in contact with? (humans pretty much everything = torso, torso = everything else)
        this.subsections = subsections; //list, these are not distinct from the segment, but extra stuff (like feet, hands, etc, head will have loads)
    }
}

let presetHuman = new Form(
    1, undefined,
    [new Segment("torso", 4, "skin", ["head", "left arm", "right arm", "left leg", "right leg"], ["groin", "stomach", "chest", "spine"]),
    new Segment("head", 4, "skin", ["torso"], ["eyes", "mouth", "nose", "ears", "neck", "hair"]),
    new Segment("left arm", 4, "skin", ["bicep", "forearm", "hand"]),
    new Segment("right arm", 4, "skin", ["bicep", "forearm", "hand"]),
    new Segment("left leg", 4, "skin", ["thigh", "calf", "foot"]),
    new Segment("right leg", 4, "skin", ["thigh", "calf", "foot"])]
);


class Character {
    // initialize
    constructor(name, sexattr, gender, appearance, species) {
        if (name != undefined) {
            this.name = name;
        }
        // sexattr must be an array with three binary values
        if (sexattr != undefined) {
            this.breasts = sexattr[0];
            this.vagina = sexattr[1];
            this.penis = sexattr[2];
        }
        // Gender: subject, object, pronominal adjective, predicative adjective, reflexive, "is" contraction
        if (gender != undefined) {
            this.subject = gender[0];
            this.object = gender[1];
            this.proadj = gender[2];
            this.predadj = gender[3];
            this.reflex = gender[4];
            this.contrac = gender[5];
            this.isconj = gender[6];
        }
        // Appearance
        if (appearance != undefined) {
            if (metric == 0) {
                this.height = CmToIn(appearance[0]);
            }
            else if (metric == 1) {
                this.height = appearance[0];
            }
            this.thickness = appearance[1];
            this.musculature = appearance[2];
            this.breastSize = appearance[3];
            if (metric == 0) {
                this.penisSize = CmToIn(appearance[4]);
            }
            else if (metric == 1) {
                this.penisSize = appearance[4];
            }
            this.skinTone = appearance[5];
            this.hairColor = appearance[6];
            this.eyeColor = appearance[7];
        }
        this.species = species;
    }
}