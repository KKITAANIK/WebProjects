let buttons = [[], [], []];

function FillButtons() {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 7; j++) {
            buttons[i][j] = new Button(i.toString() + j.toString());
        }
    }
}

function Output(output) {
    document.getElementById("displaycontent").innerHTML = output;
}
class Button {
    constructor(num) {
        // initialize the button
        this.num = num;
        this.id = "b" + num;
    }

    update(func, text) {
        // update the attributes
        document.getElementById(this.id).disabled = false;
        document.getElementById(this.id).innerHTML = "<span class=\"buttoncontent\">" + text + "</span>";
        document.getElementById(this.id).onclick = func;
        $("#" + this.id.toString()).textfill({
            maxFontPixels: 0.015 * screen.width
        });
    }

    disable() {
        // disable the element and empty its attributes
        document.getElementById(this.id).disabled = true;
        document.getElementById(this.id).innerHTML = "";
        document.getElementById(this.id).onclick = "";
    }
}
function ClearButtons() {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 7; j++) {
            buttons[i][j].disable();
        }
    }
}

function InToCm(val) {
    return Math.round(val / 0.3937);
}

function CmToIn(val) {
    return Math.round(val * 0.3937);
}

class Character {
    // initialize
    constructor(name, sexattr, gender, appearance) {
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
            this.height = appearance[0];
            this.thickness = appearance[1];
            this.musculature = appearance[2];
            this.breastSize = appearance[3];
            this.cockSize = appearance[4];
            this.skinTone = appearance[5];
            this.hairColor = appearance[6];
            this.eyeColor = appearance[7];
        }
        /*
        Unanimous/semi-unanimous:
            height
            cock size
            breast size
            general build
            hair color
            eye color
            skin color
        Poll:
            Cock size
            Pubic hair (maybe length/color)
        TiTS:
            height
            How thickset (broadness of frame): very thin, thin, lithe, normal, husky, thickset
            hair color: black, brown, dirty blonde, blonde, auburn, red, gray
            eye color: blue, green, hazel, brown
            skin color: pale, fair, tan, olive, dark, ebony
            breast size: flat, A, B, C, (for females) D, DD
            penis size: 4-8 inches
            personality: kind, mischievous, hard
        CoC II:
            height
            frame built: bodybuilder, amazonian, well-built, average, thick, plush, overweight, bear, slender, lean, thin
            hair color: brown, blonde, red, black
            eye color: blue, green, hazel, brown
            skin color: pale, bronze, dark
            penis size: 4-9 inches
            breast size: B, C, D, DD
        Lith:
            penis length: 7, 10, 14 inches
            vagina or no
            breasts: none, C, DD
        Lilith's Throne:
            Start month
            Femininity
            Birthday
            Sexual orientation
            Personality (any combo or none, some exclude others): Confident, Shy, Kind, Selfish, Naive, Cynical, Brave,
                Cowardly, Lewd, Innocent, Prude, Lisp, Stutter, Slovenly
            Name *for each level of femininity*
            Appearance:
                Core:
                    height
                    skin pattern: Plain, Freckled (face), Freckled
                    skin color: pale, light, porcelain, rosy, olive, tanned, dark, chocolate, ebony
                    body size: skinny, slender, average, large, huge
                    muscle definition: soft, lightly muscled, toned, muscular, ripped
                                          skinny    slender     average  large    huge    
                                        x-------------------------------------------------
                        soft            | gaunt     slim        chubby   fat      obese   
                        lightly muscled | petite    thin        average  plump    chunky  
                        toned           | willowy   spry        healthy  burly    robust  
                        muscular        | lean      lithe       fit      powerful thickset
                        ripped          | gymnastic aerobicised athletic buff     jacked  
                Face:
                    lip size: thin, average-sized, full, plump, huge
                    puffy lips: normal, puffy
                    iris pattern: normal, heterochromia
                    iris color: brown, amber, hazel, dark blue, blue, light blue, aqua, green, grey-green, grey
                Hair:
                    hair length: bald, very short, short, shoulder-length, long, very long, incredibly long, floor-length
                    hair style:
                        (all)                natural
                        (at very short)      messy, loose, curly, straight, slicked-back, afro
                        (at short)           sidecut, mohawk, dreadlocks, pixie-cut
                        (at shoulder-length) topknot, bun, bob-cut, chonmage, wavy, ponytail, low ponytail, twintails
                        (at long)            chignon, braided, twin braids, crown braid, drill hair, hime-cut
                        (at floor-length)    bird cage
                    hair pattern: highlighted, striped, ombre, plain, marked, spotted, mottled
                    hair color: white, blonde, dirty-blonde, sandy, ginger, brown, dark brown, auburn, grey, black, pitch black
                        scarlet, light red, red, dark red, tan, orange, bleach-blonde, yellow, amber, green, dark green, light blue,
                        blue, dark blue, periwinkle, pale lilac, lilac, indigo, light purple, purple, dark purple, pink, light pink,
                        rainbow, pastel rainbow, metallic platinum, metallic rose gold, metallic gold, metallic silver, metallic bronze,
                        metallic copper, metallic brass, metallic steel, metallic black steel
                Breasts:
                    breast size:
                        males: flat, training AAA, training AA, training A
                        females: AA, A, B, C, D, DD, E
                    breast shape: round, pointy, perky, side-set, wide, narrow
                    nipple size: tiny, small, big, (for female) large, massive
                    areolae size: tiny, small. average=sized, (for female) large, massive
                    puffy nipples: normal, puffy
                    lactation
                Ass & Hips:
                    ass size: flat, tiny, small, round, large
                    hip size: completely straight, very narrow, narrow, girly, (for females) womanly, very wide, extremely wide, absurdly wide
                    bleached anus: normal, bleached
                (for males) Penis:
                    penis size: 1-8 inches
                    testicle size: vestigal, tiny, average-sized, large
                    cum sortage
                (for females) Vagina:
                    vagina capacity: extremely tight, tight, somewhat tight, slightly loose, loose, very loose, stretched open, gaping wide
                    labia size: tiny, small, average-sized, large, massive
                    clitoris size: small, big
            Wardobe
            Job: unemployed, office worker, student, musician, teacher, writer, chef, construction worker, soldier, athlete, aristocrat, maid/butler
            Sexual experience
        */
    }
}