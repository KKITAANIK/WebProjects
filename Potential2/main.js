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