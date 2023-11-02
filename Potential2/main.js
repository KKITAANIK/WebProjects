class BodyPartParent {
    constructor() {}
}
class BodyPartComponent {
    constructor() {}
}
class BodyPartDetail {
    constructor() {}
}

class Body {
    constructor(head, torso, arms, legs, wings=undefined) {
        this.head = head;
        this.torso = torso;
        this.arms = arms; //this should be an array
        this.legs = legs; //this should be an array
        if (wings !== undefined) {
            this.wings = wings; //this should be an array
        }

        let maxleg = 0;
        for (let i = 0; i < this.legs.length; i++) {
            if (this.legs[i].length > maxleg) {
                maxleg = this.legs[i].length;
            } 
        }
        this.height = maxleg + this.torso.length + this.head.lenghtincludingneck;
    }
}
    class Head extends BodyPartParent {
        constructor(length, hair, eyes, mouth, nose, ears, horns, forehead, cheeks, chin, neck) {
            this.length = length;
            this.lenghtincludingneck =  + neck.length
            this.hair = hair;
            this.eyes = eyes; //this should be an array
            this.mouth = mouth;
            this.nose = nose;
            this.ears = ears; //this should be an array
            this.horns = horns; //this should be an array
            this.forehead = forehead;
            this.cheeks = cheeks; //this should be an array
            this.chin = chin;
            this.neck = neck;
        }
    }
        class Hair extends BodyPartParent {
            constructor(eyebrows, headhair, facialhair) {
                this.eyebrows = eyebrows; //this should be an array
                this.headhair = headhair;
                this.facialhair = facialhair;
            }
        }
            class Eyebrow extends BodyPartComponent {
                constructor(identifier, color, material, prominence, shape, style, piercings) {
                    this.identifier = identifier;
                    this.color = color;
                    this.material = material;
                    this.prominence = prominence; //this can be considered similar to "bushiness"
                    this.shape = shape; //soft-angled arch, hard-angled arch, rounded, S-shaped, straight
                    this.style = style;
                    this.piercings = piercings; //this should be an array
                }
            }
            class HeadHair extends BodyPartParent {
                constructor(texture, bangs, top, sides, back) {
                    this.texture = texture; //straight, wavy, curly, coily
                    this.bangs = bangs;
                    this.top = top;
                    this.sides = sides; //this should be an array
                    this.back = back;
                }
            }
                class Bangs extends BodyPartComponent {
                    constructor(color, material, length, style) {
                        this.color = color;
                        this.material = material;
                        this.length = length;
                        this.style = style;
                    }
                }
                class HeadHairTop extends BodyPartComponent {
                    constructor(color, material, length, style) {
                        this.color = color;
                        this.material = material;
                        this.length = length;
                        this.style = style;
                    }
                }
                class HeadHairSide extends BodyPartComponent {
                    constructor(color, material, length, style) {
                        this.color = color;
                        this.material = material;
                        this.length = length;
                        this.style = style;
                    }
                }
                class HeadHairBack extends BodyPartComponent {
                    constructor(color, material, length, style) {
                        this.color = color;
                        this.material = material;
                        this.length = length;
                        this.style = style;
                    }
                }
            class FacialHair extends BodyPartParent {
                constructor(moustache, beard) {
                    this.moustache = moustache;
                    this.beard = beard;
                }
            }
                class Moustache extends BodyPartComponent {
                    constructor(color, material, prominence, style) {
                        this.color = color;
                        this.material = material;
                        this.prominence = prominence;
                        this.style = style;
                    }
                }
                class Beard extends BodyPartParent {
                    constructor(texture, sideburns, cheeks, chin, neck) {
                        this.texture = texture; //straight, wavy, curly, coily
                        this.sideburns = sideburns; //this should be an array
                        this.cheeks = cheeks; //this should be an array
                        this.chin = chin;
                        this.neck = neck;
                    }
                }
                    class Sideburn extends BodyPartComponent {
                        constructor(identifier, color, material, length, prominence, style) {
                            this.identifier = identifier; //left, right
                            this.color = color;
                            this.material = material;
                            this.length = length;
                            this.prominence = prominence;
                            this.style = style;
                        }
                    }
                    class BeardCheek extends BodyPartComponent {
                        constructor(color, material, length, prominence, style) {
                            this.color = color;
                            this.material = material;
                            this.length = length;
                            this.prominence = prominence;
                            this.style = style;
                        }
                    }
                    class BeardChin extends BodyPartComponent {
                        constructor(color, material, length, prominence, style) {
                            this.color = color;
                            this.material = material;
                            this.length = length;
                            this.prominence = prominence;
                            this.style = style;
                        }
                    }
                    class BeardNeck extends BodyPartComponent {
                        constructor(color, material, length, prominence, style) {
                            this.color = color;
                            this.material = material;
                            this.length = length;
                            this.prominence = prominence;
                            this.style = style;
                        }
                    }
        class Eye extends BodyPartParent {
            constructor(identifier, eyelids, eyeball, tearduct) {
                this.identifier = identifier; //i.e. "left", "right", "central"
                this.eyelids = eyelids; //this should be an array
                this.eyeball = eyeball;
                this.tearduct = tearduct;
            }
        }
            class Eyelid extends BodyPartComponent {
                constructor(identifier, color, material, identifier, eyelash) {
                    this.identifier = identifier; //i.e. "upper", "lower", "left", "right"
                    this.color = color;
                    this.material = material;
                    this.eyelash = eyelash;
                }
            }
                class Eyelash extends BodyPartDetail {
                    constructor(color, material, length) {
                        this.color = color;
                        this.material = material;
                        this.length = length;
                    }
                }
            class Eyeball extends BodyPartComponent {
                constructor(material, sclera, iris, pupil) {
                    this.material = material;
                    this.sclera = sclera;
                    this.iris = iris;
                    this.pupil = pupil;
                }
            }
                class Sclera extends BodyPartDetail {
                    constructor(color) {
                        this.color = color;
                    }
                }
                class Iris extends BodyPartDetail {
                    constructor(color) {
                        this.color = color;
                    }
                }
                class Pupil extends BodyPartDetail {
                    constructor(color, shape) {
                        this.color = color;
                        this.shape = shape;
                    }
                }
            class TearDuct extends BodyPartComponent {
                constructor(production) {
                    this.production = production;
                }
            }
        class Mouth extends BodyPartParent { // Mouth and Nose may be subsections of a muzzle/snout for animal facial features
            constructor(lips, jaws, tongue, oralcavity, throat) {
                this.lips = lips; //this should be an array
                this.jaws = jaws; //this should be an array
                this.tongue = tongue;
                this.oralcavity = oralcavity;
                this.throat = throat;
            }
        }
            class MouthLip extends BodyPartComponent {
                constructor(identifier, color, material, prominence, fullness, piercings) {
                    this.identifier = identifier; //i.e. "upper", "lower"
                    this.color = color;
                    this.material = material;
                    this.prominence = prominence;
                    this.fullness = fullness;
                    this.piercings = piercings; //this should be an array
                }
            }
            class Jaw extends BodyPartComponent {
                constructor(identifier, teeth) {
                    this.identifier = identifier; //i.e. "upper", "lower"
                    this.teeth = teeth; //this should be an array
                }
            }
                class Tooth extends BodyPartDetail {
                    constructor(identifier, color, material, shape) {
                        this.identifier = identifier; //https://www.news-medical.net/health/Universal-Numbering-System-for-Teeth.aspx
                        this.color = color;
                        this.material = material;
                        this.shape = shape; //i.e. "incisor", "canine", "premolar", "molar", "fang"
                    }
                }
            class Tongue extends BodyPartComponent {
                constructor (color, material, length, width, tip, frenulum, body, root) {
                    this.color = color;
                    this.material = material;
                    this.length = length;
                    this.width = width;
                    this.tip = tip;
                    this.frenulum = frenulum;
                    this.body = body;
                    this.root = root;
                }
            }
                class TongueTip extends BodyPartDetail {
                    constructor(shape, piercings) {
                        this.shape = shape;
                        this.piercings = piercings; //this should be an array
                    }
                }
                class TongueFrenulum extends BodyPartDetail {
                    constructor(piercings) {
                        this.piercings = piercings; //this should be an array
                    }
                }
                class TongueBody extends BodyPartDetail {
                    constructor(piercings) {
                        this.piercings = piercings; //this should be an array
                    }
                }
                class TongueRoot extends BodyPartDetail {}
            class OralCavity extends BodyPartComponent{
                constructor(color, material, palate, uvula) {
                    this.color = color;
                    this.material = material;
                    this.palate = palate;
                    this.uvula = uvula;
                }
            }
                class OralCavityPalate extends BodyPartDetail {}
                class Uvula extends BodyPartDetail {
                    constructor (piercings) {
                        this.piercings = piercings; //this should be an array
                    }
                }
            class Throat extends BodyPartComponent {
                constructor(color, material, nasopharynx, epiglottis, trachea, esophagus) {
                    this.color = color;
                    this.material = material;
                    this.nasopharynx = nasopharynx;
                    this.epiglottis = epiglottis;
                    this.trachea = trachea;
                    this.esophagus = esophagus;
                }
            }
                class Nasopharynx extends BodyPartDetail {}
                class Epiglottis extends BodyPartDetail {}
                class Trachea extends BodyPartDetail {}
                class Esophagus extends BodyPartComponent { //this also encompasses the oropharynx and laryngopharynx
                    constructor(depth, tightness, elasticity, resilience) {
                        this.depth = depth;
                        this.tightness = tightness;
                        this.elasticity = elasticity;
                        this.resilience = resilience;
                    }
                }
        class Nose extends BodyPartParent {
            constructor(dorsum, tip, alae, nasalcavity) {
                this.dorsum = dorsum;
                this.tip = tip;
                this.alae = alae; //this should be an array
                this.nasalcavity = nasalcavity;
            }
        }
            class NoseDorsum extends BodyPartComponent {
                constructor(color, material, length, prominence, piercings, septum) {
                    this.color = color;
                    this.material = material;
                    this.length = length;
                    this.prominence = prominence;
                    this.piercings = piercings; //this should be an array
                    this.septum = septum;
                }
            }
                class Septum extends BodyPartDetail {
                    constructor(piercings) {
                        this.piercings = piercings; //this should be an array
                    }
                }
            class NoseTip extends BodyPartComponent {
                constructor(color, material, prominence, piercings) {
                    this.color = color;
                    this.material = material;
                    this.prominence = prominence;
                    this.piercings = piercings; //this should be an array
                }
            }
            class NoseAla extends BodyPartComponent {
                constructor(identifier, color, material, width, prominence, piercings, nostril) {
                    this.identifier = identifier //left, right
                    this.color = color;
                    this.material = material;
                    this.width = width;
                    this.prominence = prominence;
                    this.piercings = piercings; //this should be an array
                    this.nostril = nostril;
                }
            }
                class Nostril extends BodyPartDetail {
                    constructor(size) {
                        this.size = size;
                    }
                }
            class NasalCavity extends BodyPartComponent {}
        class Ear extends BodyPartParent {
            constructor(identifier, outerear, canal) {
                this.identifier = identifier; //left, right
                this.outerear = outerear;
                this.canal = canal;
            }
        }
            class OuterEar extends BodyPartComponent {
                constructor(color, material, height, width, prominence, shape, helix = undefined, tragus = undefined, lobe = undefined) {
                    this.color = color;
                    this.material = material;
                    this.height = height;
                    this.width = width;
                    this.prominence = prominence;
                    this.shape = shape;
                    if (shape == "human") {
                        this.helix = helix;
                        this.tragus = tragus;
                        this.lobe = lobe;
                    }
                }
            }
                class EarHelix extends BodyPartDetail {
                    constructor(shape, piercings) {
                        this.shape = shape;
                        this.piercings = piercings; //this should be an array
                    }
                }
                class EarTragus extends BodyPartDetail {
                    constructor(piercings) {
                        this.piercings = piercings; //this should be an array
                    }
                }
                class EarLobe extends BodyPartDetail {
                    constructor(attached, piercings) {
                        this.attached = attached;
                        this.piercings = piercings; //this should be an array
                    }
                }
            class EarCanal extends BodyPartComponent {}
        class Horn extends BodyPartComponent {
            constructor(identifier, color, material, length, basewidth, shape, anchor) {
                this.identifier = identifier;
                this.color = color;
                this.material = material;
                this.length = length;
                this.basewidth = basewidth;
                this.shape = shape;
                this.anchor = anchor;
            }
        }
        class Forehead extends BodyPartComponent {
            constructor(color, material, size, prominence, temples) {
                this.color = color;
                this.material = material;
                this.size = size;
                this.prominence = prominence;
                this.temples = temples;
            }
        }
            class Temple extends BodyPartDetail {}
        class FaceCheek extends BodyPartComponent {
            constructor(identifier, color, material, rosiness, cheekbone) {
                this.identifier = identifier; //such as "left", "right"
                this.color = color;
                this.material = material;
                this.rosiness = rosiness;
                this.cheekbone = cheekbone;
            }
        }
            class Cheekbone extends BodyPartDetail {
                constructor(prominence) {
                    this.prominence = prominence;
                }
            }
        class Chin extends BodyPartComponent {
            constructor(color, material, length, shape, prominence, clefted) {
                this.color = color;
                this.material = material;
                this.length = length;
                this.shape = shape;
                this.prominence = prominence;
                this.clefted = clefted;
            }
        }
        class Neck extends BodyPartComponent {
            constructor(color, material, length, width, adamsapple){
                this.color = color;
                this.material = material;
                this.length = length;
                this.width = width;
                this.adamsapple = adamsapple;
            }
        }
            class AdamsApple extends BodyPartDetail {
                constructor(prominence) {
                    this.prominence = prominence;
                }
            }
    class Torso extends BodyPartParent {
        constructor(length, chest, abdomen, back, waist, hips, groin, rear) {
            this.length = length;
            this.chest = chest;
            this.abdomen = abdomen;
            this.back = back;
            this.waist = waist;
            this.hips = hips;
            this.groin = groin;
            this.rear = rear;
        }
    }
        class Chest extends BodyPartParent {
            constructor(collarbone, breasts) {
                this.collarbone = collarbone;
                this.breasts = breasts; //this should be an array of either Pecs or Breasts
            }
        }
            class Collarbone extends BodyPartComponent {
                constructor(prominence) {
                    this.prominence = prominence;
                }
            }
            class Pec extends BodyPartComponent {
                constructor(identifier, color, material, nipple) {
                    this.identifier = identifier;
                    this.color = color;
                    this.material = material;
                    this.nipple = nipple;
                }
            }
                class Nipple extends BodyPartComponent {
                    constructor(areola, teat) {
                        this.areola = areola;
                        this.teat = teat;
                    }
                }
                    class Areola extends BodyPartDetail {
                        constructor(color, material, texture, diameter, prominence) {
                            this.color = color;
                            this.material = material;
                            this.texture = texture;
                            this.diameter = diameter;
                            this.prominence = prominence;
                        }
                    }
                    class Teat extends BodyPartDetail {
                        constructor(color, material, shape, prominence) {
                            this.color = color;
                            this.material = material;
                            this.shape = shape;
                            this.prominence = prominence;
                        }
                    }
            class Breast extends BodyPartComponent {
                constructor(identifier, color, material, size, shape, give, capacity, production, fluidstored, nipple) {
                    this.identifier = identifier;
                    this.color = color;
                    this.material = material;
                    this.size = size;
                    this.shape = shape;
                    this.give = give;
                    this.capacity = capacity;
                    this.production = production;
                    this.fluidstored = fluidstored;
                    this.nipple = nipple;
                }
            }
                //class Nipple {}
                    //class Areola {}
                    //class Teat {}
        class Abdomen extends BodyPartComponent {
            constructor(color, material, firmness, cushion, navel, lowerabdomen) {
                this.color = color;
                this.material = material;
                this.firmness = firmness;
                this.cushion = cushion;
                this.navel = navel;
                this.lowerabdomen = lowerabdomen;
            }
        }
            class Navel extends BodyPartDetail {
                constructor(shape) {
                    this.shape = shape;
                }
            }
            class LowerAbdomen extends BodyPartDetail {}
        class TorsoBack extends BodyPartParent {
            constructor(upperback, lowerback, wings = undefined) {
                this.upperback = upperback;
                this.lowerback = lowerback;
                if (wings !== undefined) {
                    this.wings = wings; //this should be an array
                }
            }
        }
            class UpperBack extends BodyPartComponent {
                constructor (color, material) {
                    this.color = color;
                    this.material = material;
                }
            }
            class LowerBack extends BodyPartComponent {
                constructor(color, material) {
                    this.color = color;
                    this.material = material;
                }
            }
            class Wing extends BodyPartComponent { // Wings can also be mounted to shoulders, or replace arms entirely
                constructor(identifier, base, body, tip) {
                    this.identifier = identifier;
                    this.base = base;
                    this.body = body;
                    this.tip = tip;
                }
            }
                class WingBase extends BodyPartDetail {
                    constructor(color, material, piercings) {
                        this.color = color;
                        this.material = material;
                        this.piercings = piercings; //this should be an array
                    }
                }
                class WingBody extends BodyPartDetail {
                    constructor(color, material, piercings) {
                        this.color = color;
                        this.material = material;
                        this.piercings = piercings; //this should be an array
                    }
                }
                class WingTip extends BodyPartDetail {
                    constructor(color, material, piercings) {
                        this.color = color;
                        this.material = material;
                        this.piercings = piercings; //this should be an array
                    }
                }
        class Waist extends BodyPartComponent {
            constructor(color, material, width) {
                this.color = color;
                this.material = material;
                this.width = width;
            }
        }
        class Hip extends BodyPartComponent {
            constructor(identifier, color, material, width) {
                this.identifier = identifier;
                this.color = color;
                this.material = material;
                this.width = width;
            }
        }
        class Groin extends BodyPartParent {
            constructor(vulva = undefined, penis = undefined, scrotum = undefined) {
                if (vulva !== undefined) {
                    this.vulva = vulva;
                }
                if (penis !== undefined) {
                    this.penis = penis;
                }
                if (scrotum !== undefined) {
                    this.scrotum = scrotum;
                }
            }
        }
            class Vulva extends BodyPartParent {
                constructor(mons, clitoris, labia, urethra, vagina) {
                    this.mons = mons;
                    this.clitoris = clitoris;
                    this.labia = labia;
                    this.urethra = urethra;
                    this.vagina = vagina;
                }
            }
                class Mons extends BodyPartComponent {
                    constructor(color, material, prominence, piercings) {
                        this.color = color;
                        this.material = material;
                        this.prominence = prominence;
                        this.piercings = piercings; //this should be an array
                    }
                }
                class Clitoris extends BodyPartDetail {
                    constructor(color, material, piercings) {
                        this.color = color;
                        this.material = material;
                        this.piercings = piercings; //this should be an array
                    }
                }
                class Labia extends BodyPartComponent {
                    constructor(color, material, shape, prominence, piercings) {
                        this.color = color;
                        this.material = material;
                        this.shape = shape;
                        this.prominence = prominence;
                        this.piercings = piercings; //this should be an array
                    }
                }
                class Urethra extends BodyPartDetail {}
                class Vagina extends BodyPartParent {
                    constructor(canal, cervix, uterus) {
                        this.canal = canal;
                        this.cervix = cervix;
                        this.uterus = uterus;
                    }
                }
                    class VaginalCanal extends BodyPartComponent {
                        constructor(color, material, depth, tightness, elasticity, resilience, capacity) {
                            this.color = color;
                            this.material = material;
                            this.depth = depth;
                            this.tightness = tightness;
                            this.elasticity = elasticity;
                            this.resilience = resilience;
                            this.capacity = capacity;
                        }
                    }
                    class Cervix extends BodyPartDetail {
                        constructor(tightness, elasticity, resilience) {
                            this.tightness = tightness;
                            this.elasticity = elasticity;
                            this.resilience = resilience;
                        }
                    }
                    class Uterus extends BodyPartComponent {
                        constructor(capacity) {
                            this.capacity = capacity;
                        }
                    }
            class Penis extends BodyPartComponent {
                constructor(length, base, shaft, glans) {
                    this.length = length;
                    this.base = base;
                    this.shaft = shaft;
                    this.glans = glans;
                }
            }
                class PenisBase extends BodyPartDetail {
                    constructor(color, material, shape, width) {
                        this.color = color;
                        this.material = material;
                        this.shape = shape;
                        this.width = width;
                    }
                }
                class PenisShaft extends BodyPartDetail {
                    constructor(color, material, shape, piercings) {
                        this.color = color;
                        this.material = material;
                        this.shape = shape;
                        this.piercings = piercings; //this should be an array
                    }
                }
                class Glans extends BodyPartDetail {
                    constructor(color, material, shape, piercings, urethra) {
                        this.color = color;
                        this.material = material;
                        this.shape = shape;
                        this.piercings = piercings; //this should be an array
                        this.urethra = urethra;
                    }
                }
                    //class Urethra {}
            class Scrotum extends BodyPartComponent {
                constructor(color, material, piercings, testicles) {
                    this.color = color;
                    this.material = material;
                    this.piercings = piercings; //this should be an array
                    this.testicles = testicles; //this should be an array
                }
            }
                class Testicle extends BodyPartDetail {
                    constructor(identifier, size, capacity, production, fluidstored) {
                        this.identifier = identifier;
                        this.size = size;
                        this.capacity = capacity;
                        this.production = production;
                        this.fluidstored = fluidstored;
                    }
                }
        class TorsoRear extends BodyPartParent {
            constructor(buttocks, ass, tail = undefined, insectileabdomen = undefined) {
                this.buttocks = buttocks;
                this.ass = ass;
                if (tail !== undefined) {
                    this.tail = tail;
                }
                if (insectileabdomen !== undefined) {
                    this.insectileabdomen = insectileabdomen;
                }
            }
        }
            class Buttocks extends BodyPartComponent {
                constructor(color, material, size, shape, firmness, cushion, cleft) {
                    this.color = color;
                    this.material = material;
                    this.size = size;
                    this.shape = shape;
                    this.firmness = firmness;
                    this.cushion = cushion;
                    this.cleft = cleft;
                }
            }
                class ButtocksCleft extends BodyPartDetail {
                    constructor(perineum) {
                        this.perineum = perineum;
                    }
                }
                    class Perineum extends BodyPartDetail {
                        constructor(piercings) {
                            this.piercings = piercings; //this should be an array
                        }
                    }
            class Ass extends BodyPartParent {
                constructor(anus, sphincter, analcavity) {
                    this.anus = anus;
                    this.sphincer = sphincter;
                    this.analcavity = analcavity;
                }
            }
                class Anus extends BodyPartDetail {
                    constructor(color, material) {
                        this.color = color;
                        this.material = material;
                    }
                }
                class Sphincter extends BodyPartDetail {
                    constructor(tightness, elasticity, resilience) {
                        this.tightness = tightness;
                        this.elasticity = elasticity;
                        this.resilience = resilience;
                    }
                }
                class AnalCavity extends BodyPartComponent {
                    constructor(color, material, depth, tightness, elasticity, resilience, prostate) {
                        this.color = color;
                        this.material = material;
                        this.depth = depth;
                        this.tightness = tightness;
                        this.elasticity = elasticity;
                        this.resilience = resilience;
                        this.prostate = prostate;
                    }
                }
                    class Prostate extends BodyPartDetail {}
            class Tail extends BodyPartComponent {
                constructor(identifier, length, base, body, tip) {
                    this.identifier = identifier;
                    this.length = length;
                    this.base = base;
                    this.body = body;
                    this.tip = tip;
                    }
                }
                class TailBase extends BodyPartDetail {
                    constructor(color, material, shape, width) {
                        this.color = color;
                        this.material = material;
                        this.shape = shape;
                        this.width = width;
                    }
                }
                class TailBody extends BodyPartDetail {
                    constructor(color, material, shape, piercings) {
                        this.color = color;
                        this.material = material;
                        this.shape = shape;
                        this.piercings = piercings; //this should be an array
                    }
                }
                class TailTip extends BodyPartDetail {
                    constructor(color, material, shape, piercings) {
                        this.color = color;
                        this.material = material;
                        this.shape = shape;
                        this.piercings = piercings; //this should be an array
                    }
                }
            class InsectileAbdomen extends BodyPartParent {} //This can be considered a placeholder, as more subdivision will be required (see spinnaret, ovipositor)
    class Arm extends BodyPartParent {
        constructor(identifier, shoulder, bicep, elbow, forearm, hand) {
            this.identifier = identifier;
            this.shoulder = shoulder;
            this.bicep = bicep;
            this.elbow = elbow;
            this.forearm = forearm;
            this.hand = hand;

            let maxdigit = 0;
            for (let i = 0; i < this.hand.digits.length; i++) {
                if (this.hand.digits[i].length > maxdigit) {
                    maxdigit = this.hand.digits[i].length;
                }
            }
            this.length = this.bicep.length + this.forearm.length + this.hand.dorsum.length + maxdigit;
        }
    }
        class Shoulder extends BodyPartParent {
            constructor(deltoid, armpit, wing=undefined) {
                this.deltoid = deltoid;
                this.armpit = armpit;
                if (wing !== undefined) {
                    this.wing = wing;
                }
            }
        }
            class Deltoid extends BodyPartDetail {
                constructor(color, material, prominence) {
                    this.color = color;
                    this.material = material;
                    this.prominence = prominence; //this can be considered similar to "shoulder broadness"
                }
            }
            class Armpit extends BodyPartDetail {
                constructor(color, material) {
                    this.color = color;
                    this.material = material;
                }
            }
            /*class Wing {}
                class WingBase {}
                class WingBody {}
                class WingTip {}*/
        class Bicep extends BodyPartComponent {
            constructor(color, material, length, width, firmness, cushion) {
                this.color = color;
                this.material = material;
                this.length = length;
                this.width = width;
                this.firmness = firmness;
                this.cushion = cushion;
            }
        }
        class Elbow extends BodyPartParent {
            constructor(point, pit) {
                this.point = point;
                this.pit = pit;
            }
        }
            class ElbowPoint extends BodyPartDetail {
                constructor(color, material, prominence) {
                    this.color = color;
                    this.material = material;
                    this.prominence = prominence;
                }
            }
            class ElbowPit extends BodyPartDetail {
                constructor(color, material) {
                    this.color = color;
                    this.material = material;
                }
            }
        class Forearm extends BodyPartComponent {
            constructor(color, material, length, width, firmness, cushion) {
                this.color = color;
                this.material = material;
                this.length = length;
                this.width = width;
                this.firmness = firmness;
                this.cushion = cushion;
            }
        }
        class Hand extends BodyPartComponent {
            constructor(size, wrist, dorsum, palm, digits) {
                this.size = size;
                this.wrist = wrist;
                this.dorsum = dorsum;
                this.palm = palm;
                this.digits = digits; //this should be an array
            }
        }
            class Wrist extends BodyPartDetail {
                constructor(color, material, width) {
                    this.color = color;
                    this.material = material;
                    this.width = width;
                }
            }
            class HandDorsum extends BodyPartDetail {
                constructor(color, material, length) {
                    this.color = color;
                    this.material = material;
                    this.length = length;
                }
            }
            class Palm extends BodyPartDetail {
                constructor(color, material) {
                    this.color = color;
                    this.material = material;
                }
            }
            class Digit extends BodyPartComponent {
                constructor(identifier, length, width, opposing, base, body, tip) {
                    this.identifier = identifier;
                    this.length = length
                    this.width = width;
                    this.opposing = opposing; //boolean, is it opposing the other fingers? (minimum 1 for grasping)
                    this.base = base;
                    this.body = body;
                    this.tip = tip;
                }
            }
                class DigitBase extends BodyPartDetail {
                    constructor(color, material) {
                        this.color = color;
                        this.material = material;
                    }
                }
                class DigitBody extends BodyPartDetail {
                    constructor(color, material, joints) {
                        this.color = color;
                        this.material = material;
                        this.joints = joints; //this is just the number of joints, not an array. We're counting MCP, PIP, and DIP, but not the base of the carpalmetacarpal
                    }
                }
                class DigitTip extends BodyPartDetail {
                    constructor(pad, nail) {
                        this.pad = pad;
                        this.nail = nail;
                    }
                }
                    class DigitTipPad extends BodyPartDetail {
                        constructor(color, material) {
                            this.color = color;
                            this.material = material;
                        }
                    }
                    class Nail extends BodyPartDetail {
                        constructor(color, material, length, shape) {
                            this.color = color;
                            this.material = material;
                            this.length = length;
                            this.shape = shape;
                        }
                    }
    class Leg extends BodyPartParent {
        constructor(identifier, thigh, knee, calf, foot) {
            this.identifier = identifier;
            this.thigh = thigh;
            this.knee = knee;
            this.calf = calf;
            this.foot = foot;

            this.length = this.thigh.length + this.calf.length + this.foot.heel.height;
        }
    }
        class Thigh extends BodyPartComponent {
            constructor(color, material, length, width, firmness, cushion) {
                this.color = color;
                this.material = material;
                this.length = length;
                this.width = width;
                this.firmness = firmness;
                this.cushion = cushion;
            }
        }
        class Knee extends BodyPartParent {
            constructor(kneecap, pit) {
                this.kneecap = kneecap;
                this.pit = pit;
            }
        }
            class Kneecap extends BodyPartDetail {
                constructor(color, material, prominence) {
                    this.color = color;
                    this.material = material;
                    this.prominence = prominence;
                }
            }
            class KneePit extends BodyPartDetail {
                constructor(color, material) {
                    this.color = color;
                    this.material = material;
                }
            }
        class Calf extends BodyPartComponent {
            constructor(color, material, length, width, firmness, cushion) {
                this.color = color;
                this.material = material;
                this.length = length;
                this.width = width;
                this.firmness = firmness;
                this.cushion = cushion;
            }
        }
        class Foot extends BodyPartComponent {
            constructor(length, width, ankle, heel, instep, sole, digits) {
                this.length = length;
                this.width = width;
                this.ankle = ankle;
                this.heel = heel;
                this.instep = instep;
                this.sole = sole;
                this.digits = digits; //this should be an array
            }
        }
            class Ankle extends BodyPartDetail {
                constructor(color, material) {
                    this.color = color;
                    this.material = material;
                }
            }
            class Heel extends BodyPartDetail {
                constructor(color, material, height) {
                    this.color = color;
                    this.material = material;
                    this.height = height;
                }
            }
            class Instep extends BodyPartDetail {
                constructor(color, material) {
                    this.color = color;
                    this.material = material;
                }
            }
            class Sole extends BodyPartDetail {
                constructor(arch, ball) {
                    this.arch = arch;
                    this.ball = ball;
                }
            }
                class SoleArch extends BodyPartDetail {
                    constructor(color, material) {
                        this.color = color;
                        this.material = material;
                    }
                }
                class SoleBall extends BodyPartDetail {
                    constructor(color, material) {
                        this.color = color;
                        this.material = material;
                    }
                }
            //class Digit {}
                //class DigitBase {}
                //class DigitBody {}
                //class DigitTip {}
                    //class DigitTipPad {}
                    //class Nail {}
    /*class Wing {}
        class WingBase {}
        class WingBody {}
        class WingTip {}*/

let prominenceValues = ["unnoticeable", "subtle", "mild", "visible", "notable", "prominent", "very prominent"];

let humanteethidentifiers = [
    "left third molar", "left second molar", "left first molar",
    "left second bicuspid", "left first bicuspid",
    "left cuspid",
    "left lateral incisor", "left central incisor",
    "right central incisor", "right lateral incisor",
    "right cuspid",
    "right first bicuspid", "right second bicuspid",
    "right first molar", "right second molar", "right third molar"
];
let humanteethshapes = [
    "molar", "molar", "molar",
    "premolar", "premolar",
    "canine",
    "incisor", "incisor",
    "incisor", "incisor",
    "canine",
    "premolar", "premolar",
    "molar", "molar", "molar"
];

function GenerateUniformTeeth(identifiers, color, material, shapes) {
    if (identifiers.length != shapes.length) {
        throw new Error("GenerateUniformTeeth() indentifiers.length/shapes.length mismatch!")
    }
    let teeth = [];
    for (let i = 0; i < identifiers.length; i++) {
        teeth.push(new Tooth(identifiers[i], color, material, shapes[i]));
    }
    return teeth;
}

function EmptyChimera() {
    let head = new Head(
        0,
        new Hair(
            [
                new Eyebrow("left", "", "", 0, "", "", []),
                new Eyebrow("right", "", "", 0, "", "", [])
            ],
            new HeadHair(
                "",
                new Bangs("", "", 0, ""),
                new HeadHairTop("", "", 0, ""),
                [
                    new HeadHairSide("left", "", 0, ""),
                    new HeadHairSide("right", "", 0, "")
                ],
                new HeadHairBack("", "", 0, "")
            ),
            new FacialHair(
                new Moustache("", "", 0, ""),
                new Beard(
                    "",
                    [
                        new Sideburn("left", "", "", 0, 0, ""),
                        new Sideburn("right", "", "", 0, 0, "")
                    ],
                    [
                        new BeardCheek("left", "", 0, 0, ""),
                        new BeardCheek("right", "", 0, 0, "")
                    ],
                    new BeardChin("", "", 0, 0, ""),
                    new BeardNeck("", "", 0, 0, "")
                )
            )
        ),
        [
            new Eye(
                "left",
                [
                    new Eyelid(
                        "upper", "", "",
                        new Eyelash("", "", 0)
                    ),
                    new Eyelid(
                        "lower", "", "",
                        new Eyelash("", "", 0)
                    )
                ],
                new Eyeball(
                    "",
                    new Sclera(""),
                    new Iris(""),
                    new Pupil("", "")
                ),
                new TearDuct(0)
            ),
            new Eye(
                "right",
                [
                    new Eyelid(
                        "upper", "", "",
                        new Eyelash("", "", 0)
                    ),
                    new Eyelid("lower", "", "",
                        new Eyelash("", "", 0)
                    )
                ],
                new Eyeball(
                    "",
                    new Sclera(""),
                    new Iris(""),
                    new Pupil("", "")
                ),
                new TearDuct(0)
            )
        ],
        new Mouth(
            [
                new MouthLip("upper", "", "", 0, 0, []),
                new MouthLip("lower", "", "", 0, 0, [])
            ],
            [
                new Jaw("upper", GenerateUniformTeeth(humanteethidentifiers, "", "", humanteethshapes)),
                new Jaw("lower", GenerateUniformTeeth(humanteethidentifiers, "", "", humanteethshapes))
            ],
            new Tongue(
                "", "", 0, 0,
                new TongueTip("", []),
                new TongueFrenulum([]),
                new TongueBody([]),
                new TongueRoot()
            ),
            new OralCavity(
                "", "",
                new OralCavityPalate(),
                new Uvula([])
            ),
            new Throat(
                "",
                "",
                new Nasopharynx(),
                new Epiglottis(),
                new Trachea(),
                new Esophagus(0, 0, 0, 0)
            )
        ),
        new Nose(
            new NoseDorsum(
                "", "", 0, 0, [],
                new Septum([])
            ),
            new NoseTip("", "", 0, []),
            [
                new NoseAla(
                    "", "", "", 0, 0, [],
                    new Nostril()
                ),
                new NoseAla(
                    "", "", "", 0, 0, [],
                    new Nostril()
                )
            ],
            new NasalCavity()
        ),
        [
            new Ear(
                "left",
                new OuterEar(
                    "", "", 0, 0, 0, "human",
                    new EarHelix("", []),
                    new EarTragus([]),
                    new EarLobe(true, [])
                ),
                new EarCanal()
            ),
            new Ear(
                "right",
                new OuterEar(
                    "", "", 0, 0, 0, "human",
                    new EarHelix("", []),
                    new EarTragus([]),
                    new EarLobe(true, [])
                ),
                new EarCanal()
            )
        ],
        [
            new Horn("left", "", "", 0, 0, "", "", pointer),
            new Horn("right", "", "", 0, 0, "", "", pointer)
        ],
        new Forehead(
            "", "", 0, 0,
            [
                new Temple(),
                new Temple(),
            ]
        ),
        [
            new FaceCheek(
                "", "", "", 0,
                new Cheekbone(0)
            ),
            new FaceCheek(
                "", "", "", 0,
                new Cheekbone(0)
            )
        ],
        new Chin("", "", 0, "", 0, true),
        new Neck(
            "", "", 0, 0,
            new AdamsApple(0)
        )
    );
    let torso = new Torso(
        0,
        new Chest(
            new Collarbone(0),
            [
                new Pec(
                    "left", "", "",
                    new Nipple(
                        new Areola("", "", "", 0, 0),
                        new Teat("", "", "", 0)
                    ),

                ),
                new Breast(
                    "right", "", "", "", "", 0, 0, 0, 0,
                    new Nipple(
                        new Areola("", "", "", 0, 0),
                        new Teat("", "", "", 0)
                    )
                )
            ]
        ),
        new Abdomen(
            "", "", 0, 0,
            new Navel(""),
            new LowerAbdomen()
        ),
        new TorsoBack(
            new UpperBack("", ""),
            new LowerBack("", ""),
            [
                new Wing(
                    "left",
                    new WingBase("", "", []),
                    new WingBody("", "", []),
                    new WingTip("", "", [])
                ),
                new Wing(
                    "right",
                    new WingBase("", "", []),
                    new WingBody("", "", []),
                    new WingTip("", "", [])
                )
            ]
        ),
        new Waist("", "", 0),
        [
            new Hip("left", "", "", 0),
            new Hip("right", "", "", 0)
        ],
        new Groin(
            new Vulva(
                new Mons("", "", 0, []),
                new Clitoris("", "", []),
                new Labia("", "", "", 0, []),
                new Urethra(),
                new Vagina(
                    new VaginalCanal("", "", 0, 0, 0, 0, 0),
                    new Cervix(0, 0, 0),
                    new Uterus(0)
                )
            ),
            new Penis(
                0,
                new PenisBase("", "", "", 0),
                new PenisShaft("", "", "", []),
                new Glans(
                    "", "", "", [],
                    new Urethra()
                )
            ),
            new Scrotum(
                "", "", [],
                [
                    new Testicle("left", 0, 0, 0, 0),
                    new Testicle("right", 0, 0, 0, 0)
                ]
            )
        ),
        new TorsoRear(
            new Buttocks(
                "", "", 0, "", 0, 0,
                new ButtocksCleft(
                    new Perineum([])
                )
            ),
            new Ass(
                new Anus("", ""),
                new Sphincter(0, 0, 0),
                new AnalCavity(
                    "", "", 0, 0, 0, 0,
                    new Prostate()
                )
            ),
            new Tail(
                "primary", 0,
                new TailBase("", "", "", 0),
                new TailBody("", "", "", []),
                new TailTip("", "", "", [])
            )
        )
    );
    let arms = [
        new Arm(
            "left",
            new Shoulder(
                new Deltoid("", "", 0),
                new Armpit("", ""),
                new Wing(
                    "left",
                    new WingBase("", "", []),
                    new WingBody("", "", []),
                    new WingTip("", "", [])
                )
            ),
            new Bicep("", "", 0, 0, 0, 0),
            new Elbow(
                new ElbowPoint("", "", 0),
                new ElbowPit("", "")
            ),
            new Forearm("", "", 0, 0, 0, 0),
            new Hand(
                0,
                new Wrist("", "", 0),
                new HandDorsum("", "", 0),
                new Palm("", ""),
                [
                    new Digit(
                        "thumb", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 2),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    ),
                    new Digit(
                        "index", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 3),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    ),
                    new Digit(
                        "middle", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 3),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    ),
                    new Digit(
                        "ring", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 3),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    ),
                    new Digit(
                        "pinkie", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 3),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    )
                ]
            )
        ),
        new Arm(
            "right",
            new Shoulder(
                new Deltoid("", "", 0),
                new Armpit("", ""),
                new Wing(
                    "left",
                    new WingBase("", "", []),
                    new WingBody("", "", []),
                    new WingTip("", "", [])
                )
            ),
            new Bicep("", "", 0, 0, 0, 0),
            new Elbow(
                new ElbowPoint("", "", 0),
                new ElbowPit("", "")
            ),
            new Forearm("", "", 0, 0, 0, 0),
            new Hand(
                0,
                new Wrist("", "", 0),
                new HandDorsum("", "", 0),
                new Palm("", ""),
                [
                    new Digit(
                        "thumb", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 2),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    ),
                    new Digit(
                        "index", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 3),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    ),
                    new Digit(
                        "middle", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 3),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    ),
                    new Digit(
                        "ring", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 3),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    ),
                    new Digit(
                        "pinkie", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 3),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    )
                ]
            )
        )
    ];
    let legs = [
        new Leg(
            "left",
            new Thigh("", "", 0, 0, 0, 0),
            new Knee(
                new Kneecap("", "", 0),
                new KneePit("", "")
            ),
            new Calf("", "", 0, 0, 0, 0),
            new Foot(
                0, 0,
                new Ankle("", ""),
                new Heel("", "", 0),
                new Instep("", ""),
                new Sole(
                    new SoleArch("", ""),
                    new SoleBall("", "")
                ),
                [
                    new Digit(
                        "first", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 2),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    ),
                    new Digit(
                        "second", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 3),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    ),
                    new Digit(
                        "third", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 3),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    ),
                    new Digit(
                        "fourth", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 3),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    ),
                    new Digit(
                        "fifth", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 3),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    )
                ]
            )
        ),
        new Leg(
            "right",
            new Thigh("", "", 0, 0, 0, 0),
            new Knee(
                new Kneecap("", "", 0),
                new KneePit("", "")
            ),
            new Calf("", "", 0, 0, 0, 0),
            new Foot(
                0, 0,
                new Ankle("", ""),
                new Heel("", "", 0),
                new Instep("", ""),
                new Sole(
                    new SoleArch("", ""),
                    new SoleBall("", "")
                ),
                [
                    new Digit(
                        "first", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 2),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    ),
                    new Digit(
                        "second", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 3),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    ),
                    new Digit(
                        "third", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 3),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    ),
                    new Digit(
                        "fourth", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 3),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    ),
                    new Digit(
                        "fifth", 0, 0, true,
                        new DigitBase("", ""),
                        new DigitBody("", "", 3),
                        new DigitTip(
                            new DigitTipPad("", ""),
                            new Nail("", "", 0, "")
                        )
                    )
                ]
            )
        )
    ];
    let wings = [
        new Wing(
            "left",
            new WingBase("", "", []),
            new WingBody("", "", []),
            new WingTip("", "", [])
        ),
        new Wing(
            "right",
            new WingBase("", "", []),
            new WingBody("", "", []),
            new WingTip("", "", [])
        )
    ]
    return new Body(head, torso, arms, legs, wings);
}



/*class thingthatspointedto {
    constructor(val) {
        this.val = val;
    }
};
let a = new thingthatspointedto(0);
class thingthatpoints {
    constructor(pointer) {
        this.pointer = pointer;
    }
};
let x = new thingthatpoints(a);
console.log(a.val);
console.log(x.pointer.val);
a.val++;
console.log(a.val);
console.log(x.pointer.val);*/


/*class Form {
    constructor(hasform, pseudoform, segments) {
        this.hasform = hasform; //bool, formless or no
        if (this.hasform == 0) {
            this.pseudoform = pseudoform; //bool, can assume forms
        }
        if (this.hasform == 1 || this.pseudoform == 1) {
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
    new Segment("left arm", 4, "skin", ["torso"], ["bicep", "forearm", "hand"]),
    new Segment("right arm", 4, "skin", ["torso"], ["bicep", "forearm", "hand"]),
    new Segment("left leg", 4, "skin", ["torso"], ["thigh", "calf", "foot"]),
    new Segment("right leg", 4, "skin", ["torso"], ["thigh", "calf", "foot"])]
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
}*/