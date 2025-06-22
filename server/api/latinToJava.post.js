const BACKSPACE = String.fromCharCode(8)
const ESC = String.fromCharCode(27)

class Node {
    constructor(latin, java, next = new Map()) {
        this.latin = latin
        this.java = java
        this.next = next
    }

    addNext(target){
        let current = this
        for (let i = 0; i < target.latin.length - 1; ++i){
            const latinChr = target.latin[i]

            if (current.next.has(latinChr)){
                current = current.next.get(latinChr)
            }
            else{
                throw new Error("Error near " + target.latin)
            }
        }

        if (current.next.has(target.latin[target.latin.length - 1])){
            throw new Error("Duplicated state near " + target.latin)
        }
        else{
            current.next.set(target.latin[target.latin.length - 1], target)
        }
    }
}


function getAllCecaks(javaArr){
    return javaArr.map((arr) => ([BACKSPACE+BACKSPACE+"ꦁ", arr[1] + "ng"])).concat(
        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+"ꦁ", arr[1].substring(0, arr[1].length - 1) + "ung"])),
        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+"ꦁ", arr[1].substring(0, arr[1].length - 1) + "ing"])),
        javaArr.filter((arr) => arr[1] !== "ra" && arr[1] !== "la").map((arr) => ([BACKSPACE+BACKSPACE+"ꦁ", arr[1].substring(0, arr[1].length - 1) + "êng"])),
        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+"ꦁ", arr[1].substring(0, arr[1].length - 1) + "eng"])),
        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+"ꦁ", arr[1].substring(0, arr[1].length - 1) + "ong"])),

        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+"ꦁ", arr[1].substring(0, arr[1].length - 1) + "āng"])),
        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+"ꦁ", arr[1].substring(0, arr[1].length - 1) + "īng"])),
        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+"ꦁ", arr[1].substring(0, arr[1].length - 1) + "ūng"])),
        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+"ꦁ", arr[1].substring(0, arr[1].length - 1) + "aing"])),
        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+"ꦁ", arr[1].substring(0, arr[1].length - 1) + "aung"])),
        javaArr.filter((arr) => arr[1] !== "ra" && arr[1] !== "la").map((arr) => ([BACKSPACE+BACKSPACE+"ꦁ", arr[1].substring(0, arr[1].length - 1) + "êung"])),
    )
}

function getAllLayars(javaArr){
    return javaArr.map((arr) => (["ꦂ", arr[1] + "r"])).concat(
        javaArr.map((arr) => (["ꦂ", arr[1].substring(0, arr[1].length - 1) + "ur"])),
        javaArr.map((arr) => (["ꦂ", arr[1].substring(0, arr[1].length - 1) + "ir"])),
        javaArr.filter((arr) => arr[1] !== "ra" && arr[1] !== "la").map((arr) => (["ꦂ", arr[1].substring(0, arr[1].length - 1) + "êr"])),
        javaArr.map((arr) => (["ꦂ", arr[1].substring(0, arr[1].length - 1) + "er"])),
        javaArr.map((arr) => (["ꦂ", arr[1].substring(0, arr[1].length - 1) + "or"])),

        javaArr.map((arr) => (["ꦂ", arr[1].substring(0, arr[1].length - 1) + "ār"])),
        javaArr.map((arr) => (["ꦂ", arr[1].substring(0, arr[1].length - 1) + "īr"])),
        javaArr.map((arr) => (["ꦂ", arr[1].substring(0, arr[1].length - 1) + "ūr"])),
        javaArr.map((arr) => (["ꦂ", arr[1].substring(0, arr[1].length - 1) + "air"])),
        javaArr.map((arr) => (["ꦂ", arr[1].substring(0, arr[1].length - 1) + "aur"])),
        javaArr.filter((arr) => arr[1] !== "ra" && arr[1] !== "la").map((arr) => (["ꦂ", arr[1].substring(0, arr[1].length - 1) + "êur"])),
    )
}

function getAllN(javaArr){
    return javaArr.map((arr) => (["ꦤ꧀", arr[1] + "n"])).concat(
        javaArr.map((arr) => (["ꦤ꧀", arr[1].substring(0, arr[1].length - 1) + "un"])),
        javaArr.map((arr) => (["ꦤ꧀", arr[1].substring(0, arr[1].length - 1) + "in"])),
        javaArr.filter((arr) => arr[1] !== "ra" && arr[1] !== "la").map((arr) => (["ꦤ꧀", arr[1].substring(0, arr[1].length - 1) + "ên"])),
        javaArr.map((arr) => (["ꦤ꧀", arr[1].substring(0, arr[1].length - 1) + "en"])),
        javaArr.map((arr) => (["ꦤ꧀", arr[1].substring(0, arr[1].length - 1) + "on"])),

        javaArr.map((arr) => (["ꦤ꧀", arr[1].substring(0, arr[1].length - 1) + "ān"])),
        javaArr.map((arr) => (["ꦤ꧀", arr[1].substring(0, arr[1].length - 1) + "īn"])),
        javaArr.map((arr) => (["ꦤ꧀", arr[1].substring(0, arr[1].length - 1) + "ūn"])),
        javaArr.map((arr) => (["ꦤ꧀", arr[1].substring(0, arr[1].length - 1) + "ain"])),
        javaArr.map((arr) => (["ꦤ꧀", arr[1].substring(0, arr[1].length - 1) + "aun"])),
        javaArr.filter((arr) => arr[1] !== "ra" && arr[1] !== "la").map((arr) => (["ꦤ꧀", arr[1].substring(0, arr[1].length - 1) + "êun"])),
    )
}

function getAllPengkals(javaArr){
    return javaArr.filter((arr) => arr[1] !== "n" && arr[1] !== "N" && arr[1] !== "s").map((arr) => (["ꦪ꧀", arr[1] + "y"])).concat(
        javaArr.filter((arr) => arr[1] !== "n" && arr[1] !== "N" && arr[1] !== "s").map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦾ", arr[1] + "ya"])),
        javaArr.filter((arr) => arr[1] !== "n" && arr[1] !== "N" && arr[1] !== "s").map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦾ"+"ꦶ", arr[1] + "yi"])),
        javaArr.filter((arr) => arr[1] !== "n" && arr[1] !== "N" && arr[1] !== "s").map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦾ"+"ꦼ", arr[1] + "yê"])),
        javaArr.filter((arr) => arr[1] !== "n" && arr[1] !== "N" && arr[1] !== "s").map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦾ"+"ꦸ", arr[1] + "yu"])),
        javaArr.filter((arr) => arr[1] !== "n" && arr[1] !== "N" && arr[1] !== "s").map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦾ"+"ꦺ", arr[1] + "ye"])),
        javaArr.filter((arr) => arr[1] !== "n" && arr[1] !== "N" && arr[1] !== "s").map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦾ"+"ꦺ"+"ꦴ", arr[1] + "yo"])),

        javaArr.filter((arr) => arr[1] !== "n" && arr[1] !== "N" && arr[1] !== "s").map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦾ"+"ꦴ", arr[1] + "yā"])),
        javaArr.filter((arr) => arr[1] !== "n" && arr[1] !== "N" && arr[1] !== "s").map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦾ"+"ꦷ", arr[1] + "yī"])),
        javaArr.filter((arr) => arr[1] !== "n" && arr[1] !== "N" && arr[1] !== "s").map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦾ"+"ꦹ", arr[1] + "yū"])),
        javaArr.filter((arr) => arr[1] !== "n" && arr[1] !== "N" && arr[1] !== "s").map((arr) => (["ꦻ", arr[1] + "yai"])),
        javaArr.filter((arr) => arr[1] !== "n" && arr[1] !== "N" && arr[1] !== "s").map((arr) => (["ꦻ"+"ꦴ", arr[1] + "yau"])),
        javaArr.filter((arr) => arr[1] !== "n" && arr[1] !== "N" && arr[1] !== "s").map((arr) => (["ꦴ", arr[1] + "yêu"])),
    )
}

function getAllR(javaArr){
    return javaArr.map((arr) => (["ꦫ꧀", arr[1] + "r"])).concat(
        getAllCakras(javaArr)
    )
}

function getAllCakras(javaArr){
    return javaArr.map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦿ", arr[1] + "ra"])).concat(
        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦿ"+"ꦸ", arr[1] + "ru"])),
        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦿ"+"ꦶ", arr[1] + "ri"])),
        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦽ", arr[1] + "rê"])),
        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦿ"+"ꦺ", arr[1] + "re"])),
        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦿ"+"ꦺ"+"ꦴ", arr[1] + "ro"])),

        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦿ"+"ꦴ", arr[1] + "rā"])),
        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦿ"+"ꦷ", arr[1] + "rī"])),
        javaArr.map((arr) => ([BACKSPACE+BACKSPACE+BACKSPACE+"ꦿ"+"ꦹ", arr[1] + "rū"])),
        javaArr.map((arr) => (["ꦻ", arr[1] + "rai"])),
        javaArr.map((arr) => (["ꦻ"+"ꦴ", arr[1] + "rau"])),
        javaArr.map((arr) => (["ꦴ", arr[1] + "rêu"])),
    )
}

function getAllVocals(javaArr){
    return javaArr.map((arr) => ([BACKSPACE+"ꦸ", arr[1].substring(0, arr[1].length - 1) + "u"])).concat(
        javaArr.map((arr) => ([BACKSPACE+"ꦶ", arr[1].substring(0, arr[1].length - 1) + "i"])),
        javaArr.filter((arr) => arr[1] !== "ra" && arr[1] !== "la").map((arr) => ([BACKSPACE+"ꦼ", arr[1].substring(0, arr[1].length - 1) + "ê"])),
        javaArr.map((arr) => ([BACKSPACE+"ꦺ", arr[1].substring(0, arr[1].length - 1) + "e"])),
        javaArr.map((arr) => ([BACKSPACE+"ꦺ"+"ꦴ", arr[1].substring(0, arr[1].length - 1) + "o"])),

        javaArr.map((arr) => ([BACKSPACE+"ꦴ", arr[1].substring(0, arr[1].length - 1) + "ā"])),
        javaArr.map((arr) => ([BACKSPACE+"ꦷ", arr[1].substring(0, arr[1].length - 1) + "ī"])),
        javaArr.map((arr) => ([BACKSPACE+"ꦹ", arr[1].substring(0, arr[1].length - 1) + "ū"])),
        javaArr.map((arr) => (["ꦻ", arr[1].substring(0, arr[1].length - 1) + "ai"])),
        javaArr.map((arr) => (["ꦻ"+"ꦴ", arr[1].substring(0, arr[1].length - 1) + "au"])),
        javaArr.filter((arr) => arr[1] !== "ra" && arr[1] !== "la").map((arr) => (["ꦴ", arr[1].substring(0, arr[1].length - 1) + "êu"])),
    )
}

function getAllWignyans(javaArr){
    return javaArr.map((arr) => (["ꦃ", arr[1] + "h"])).concat(
        javaArr.map((arr) => (["ꦃ", arr[1].substring(0, arr[1].length - 1) + "uh"])),
        javaArr.map((arr) => (["ꦃ", arr[1].substring(0, arr[1].length - 1) + "ih"])),
        javaArr.filter((arr) => arr[1] !== "ra" && arr[1] !== "la").map((arr) => (["ꦃ", arr[1].substring(0, arr[1].length - 1) + "êh"])),
        javaArr.map((arr) => (["ꦃ", arr[1].substring(0, arr[1].length - 1) + "eh"])),
        javaArr.map((arr) => (["ꦃ", arr[1].substring(0, arr[1].length - 1) + "oh"])),

        javaArr.map((arr) => (["ꦃ", arr[1].substring(0, arr[1].length - 1) + "āh"])),
        javaArr.map((arr) => (["ꦃ", arr[1].substring(0, arr[1].length - 1) + "īh"])),
        javaArr.map((arr) => (["ꦃ", arr[1].substring(0, arr[1].length - 1) + "ūh"])),
        javaArr.map((arr) => (["ꦃ", arr[1].substring(0, arr[1].length - 1) + "aih"])),
        javaArr.map((arr) => (["ꦃ", arr[1].substring(0, arr[1].length - 1) + "auh"])),
        javaArr.filter((arr) => arr[1] !== "ra" && arr[1] !== "la").map((arr) => (["ꦃ", arr[1].substring(0, arr[1].length - 1) + "êuh"])),
    )
}


// =========================================================================== //


const nglegenaPangkons = [
    ["ꦲ꧀", "h"], ["ꦤ꧀", "n"], ["ꦕ꧀", "c"], ["ꦫ꧀", "r"], ["ꦏ꧀", "k"],
    ["ꦢ꧀", "d"], ["ꦠ꧀", "t"], ["ꦱ꧀", "s"], ["ꦮ꧀", "w"], ["ꦭ꧀", "l"],
    ["ꦥ꧀", "p"], [BACKSPACE+BACKSPACE+"ꦣ꧀", "dh"], ["ꦗ꧀", "j"], ["ꦪ꧀", "y"], [BACKSPACE+BACKSPACE+"ꦚ꧀", "ny"],
    ["ꦩ꧀", "m"], ["ꦒ꧀", "g"], ["ꦧ꧀", "b"], [BACKSPACE+BACKSPACE+"ꦛ꧀", "th"], [BACKSPACE+BACKSPACE+"ꦔ꧀", "ng"],
]

const murdaPangkons = [
    ["ꦟ꧀", "N"], ["ꦑ꧀", "K"], ["ꦡ꧀", "T"], ["ꦯ꧀", "S"],
    ["ꦦ꧀", "P"], [BACKSPACE+BACKSPACE+"ꦘ꧀", "Ny"], ["ꦓ꧀", "G"], ["ꦨ꧀", "B"],
    ["ꦖ꧀", "C"], ["ꦙ꧀", "J"], ["ꦬ꧀", "R"]
]

const rekanPangkons = [
    [BACKSPACE+BACKSPACE+"ꦏ꦳꧀", "kh"], ["ꦐ꧀", "q"], ["ꦲ꦳꧀", "ḥ"], [BACKSPACE+BACKSPACE+"ꦢ꦳꧀", "dz"], ["ꦗ꦳꧀", "z"],
    ["ꦔ꦳꧀", "'"], [BACKSPACE+BACKSPACE+"ꦒ꦳꧀", "gh"], ["ꦥ꦳꧀", "f"], ["ꦮ꦳꧀", "v"], [BACKSPACE+BACKSPACE+"ꦱ꦳꧀", "ts"],
    [BACKSPACE+BACKSPACE+"ꦰ꦳꧀", "sh"], [BACKSPACE+BACKSPACE+"ꦯ꦳꧀", "sy"], [BACKSPACE+BACKSPACE+"ꦭ꦳꧀", "dl"], ["ꦡ꦳꧀", "ṭ"], [BACKSPACE+BACKSPACE+BACKSPACE+"ꦣ꦳꧀", "zh"],
    ["ꦑ꦳꧀", "x"],
]

const nglegenas = [
    ["ꦲ", "ha"], ["ꦤ", "na"], ["ꦕ", "ca"], ["ꦫ", "ra"], ["ꦏ", "ka"],
    ["ꦢ", "da"], ["ꦠ", "ta"], ["ꦱ", "sa"], ["ꦮ", "wa"], ["ꦭ", "la"],
    ["ꦥ", "pa"], ["ꦣ", "dha"], ["ꦗ", "ja"], ["ꦪ", "ya"], ["ꦚ", "nya"],
    ["ꦩ", "ma"], ["ꦒ", "ga"], ["ꦧ", "ba"], ["ꦛ", "tha"], ["ꦔ", "nga"],
]

const murdas = [
    ["ꦟ", "Na"], ["ꦑ", "Ka"], ["ꦡ", "Ta"], ["ꦯ", "Sa"], ["ꦦ", "Pa"], ["ꦘ", "Nya"], ["ꦓ", "Ga"], ["ꦨ", "Ba"], ["ꦖ", "Ca"], ["ꦙ", "Ja"], ["ꦬ", "Ra"]
]

const rekans = [
    ["ꦏ꦳", "kha"], ["ꦐ", "qa"], ["ꦲ꦳", "ḥa"], ["ꦢ꦳", "dza"], ["ꦗ꦳", "za"],
    ["ꦔ꦳", "'a"], ["ꦒ꦳", "gha"], ["ꦥ꦳", "fa"], ["ꦮ꦳", "va"], ["ꦱ꦳", "tsa"],
    ["ꦰ꦳", "sha"], ["ꦯ꦳", "sya"], ["ꦭ꦳", "dla"], ["ꦡ꦳", "ṭa"], ["ꦣ꦳", "zha"],
    ["ꦑ꦳", "xa"],
]

const swaras = [
    ["ꦄ", "a"], ["ꦆ", "i"], ["ꦈ", "u"], ["ꦌ", "e"], ["ꦎ", "o"],
    [BACKSPACE+BACKSPACE+"ꦉ", "rê"], [BACKSPACE+BACKSPACE+"ꦊ", "lê"], ["ꦄꦼ", "ê"],
    [BACKSPACE+"ꦍ", "ai"], [BACKSPACE+"ꦎꦴ", "au"], ["ꦴ", "rêu"], [BACKSPACE+"ꦋ", "lêu"], ["ꦄꦴ", "ā"], ["ꦇ", "ī"], ["ꦈꦴ", "ū"],
]

const padas = [
    ["꧈", ","],
    ["꧉", "."],
    ["꧉", ".."],
    [BACKSPACE+BACKSPACE+"꧞꧞꧞", "..."],
    ["ꧏ", "²"],
]

const angka = [
    ["꧐", "0"], ["꧑", "1"], ["꧒", "2"], ["꧓", "3"], ["꧔", "4"], ["꧕", "5"], ["꧖", "6"], ["꧗", "7"], ["꧘", "8"], ["꧙", "9"],
]

export const root = new Node("", "")
nglegenaPangkons.forEach((arr) => {
    const java = arr[0]
    const latin = arr[1]
    const node = new Node(latin, java)
    root.addNext(node)
})

murdaPangkons.forEach((arr) => {
    const java = arr[0]
    const latin = arr[1]
    const node = new Node(latin, java)
    root.addNext(node)
})

rekanPangkons.forEach((arr) => {
    const java = arr[0]
    const latin = arr[1]
    const node = new Node(latin, java)
    root.addNext(node)
})

nglegenas.forEach((arr) => {
    const latin = arr[1]
    const node = new Node(latin, BACKSPACE)
    root.addNext(node)
})

murdas.forEach((arr) => {
    const latin = arr[1]
    const node = new Node(latin, BACKSPACE)
    root.addNext(node)
})

rekans.forEach((arr) => {
    const latin = arr[1]
    const node = new Node(latin, BACKSPACE)
    root.addNext(node)
})

swaras.forEach((arr) => {
    const java = arr[0]
    const latin = arr[1]
    const node = new Node(latin, java)
    root.addNext(node)
})

angka.forEach((arr) => {
    const java = arr[0]
    const latin = arr[1]
    const node = new Node(latin, java)
    root.addNext(node)
})

padas.forEach((arr) => {
    const java = arr[0]
    const latin = arr[1]
    const node = new Node(latin, java)
    root.addNext(node)
})

const nglegenaVocals = getAllVocals(nglegenas)
const murdaVocals = getAllVocals(murdas)
const rekanVocals = getAllVocals(rekans)
const vocals = nglegenaVocals.concat(murdaVocals, rekanVocals)
vocals.forEach((arr) => {
    const java = arr[0]
    const latin = arr[1]
    const node = new Node(latin, java)

    root.addNext(node)
})

const nglegenaN = getAllN(nglegenas)
const murdaN = getAllN(murdas)
const rekanN = getAllN(rekans)
const swaraN = swaras.map((arr) => (["ꦤ꧀", arr[1] + "n"]))
const allN = nglegenaN.concat(murdaN, rekanN, swaraN)
allN.forEach((arr) => {
    const dummy = new Node(ESC, "", root.next.get("n").next)
    const java = arr[0]
    const latin = arr[1]
    const node = new Node(latin, java, new Map([[ESC, dummy]]))
    root.addNext(node)
})

const nglegenaPengkals = getAllPengkals(nglegenaPangkons)
const murdaPengkals = getAllPengkals(murdaPangkons)
const rekanPengkals = getAllPengkals(rekanPangkons)
const pengkals = nglegenaPengkals.concat(murdaPengkals, rekanPengkals)
pengkals.forEach((arr) => {
    const java = arr[0]
    const latin = arr[1]
    const node = new Node(latin, java)
    root.addNext(node)
})

const nglegenaR = getAllR(nglegenaPangkons)
const murdaR = getAllR(murdaPangkons)
const rekanR = getAllR(rekanPangkons)
const nglegenaCakraLayars = getAllCakras(nglegenaPangkons).map((arr) => ["ꦂ", arr[1]+"r"])
const murdaCakraLayars = getAllCakras(murdaPangkons).map((arr) => ["ꦂ", arr[1]+"r"])
const rekanCakraLayars = getAllCakras(rekanPangkons).map((arr) => ["ꦂ", arr[1]+"r"])
const nglegenaCakraWignyans = getAllCakras(nglegenaPangkons).map((arr) => ["ꦃ", arr[1]+"h"])
const murdaCakraWignyans = getAllCakras(murdaPangkons).map((arr) => ["ꦃ", arr[1]+"h"])
const rekanCakraWignyans = getAllCakras(rekanPangkons).map((arr) => ["ꦃ", arr[1]+"h"])
const nglegenaCakraN = getAllCakras(nglegenaPangkons).map((arr) => ["ꦤ꧀", arr[1] + "n"])
const murdaCakraN = getAllCakras(murdaPangkons).map((arr) => ["ꦤ꧀", arr[1] + "n"])
const rekanCakraN = getAllCakras(rekanPangkons).map((arr) => ["ꦤ꧀", arr[1] + "n"])
const nglegenaCakraCecaks = getAllCakras(nglegenaPangkons).map((arr) => [BACKSPACE+BACKSPACE+"ꦁ", arr[1] + "ng"])
const murdaCakraCecaks = getAllCakras(murdaPangkons).map((arr) => [BACKSPACE+BACKSPACE+"ꦁ", arr[1] + "ng"])
const rekanCakraCecaks = getAllCakras(rekanPangkons).map((arr) => [BACKSPACE+BACKSPACE+"ꦁ", arr[1] + "ng"])
const allR = nglegenaR.concat(murdaR, 
    rekanR, 
    nglegenaCakraLayars, 
    murdaCakraLayars, 
    rekanCakraLayars,
    nglegenaCakraWignyans,
    murdaCakraWignyans,
    rekanCakraWignyans,
    nglegenaCakraN,
    murdaCakraN,
    rekanCakraN,
    nglegenaCakraCecaks,
    murdaCakraCecaks,
    rekanCakraCecaks,
)
allR.forEach((arr) => {
    const java = arr[0]
    const latin = arr[1]
    const node = new Node(latin, java)
    root.addNext(node)
})

const nglegenaLayars = getAllLayars(nglegenas)
const murdaLayars = getAllLayars(murdas)
const rekanLayars = getAllLayars(rekans)
const swaraLayars = swaras.map((arr) => (["ꦂ", arr[1] + "r"]))
const layars = nglegenaLayars.concat(murdaLayars, rekanLayars, swaraLayars)
layars.forEach((arr) => {
    const java = arr[0]
    const latin = arr[1]
    const node = new Node(latin, java)
    root.addNext(node)

    const vocals = ["a", "i", "u", "e", "ê", "o", "ā", "ī", "ū"]
    for (const key of vocals){
        const dummy = new Node(ESC, BACKSPACE+"ꦫ꧀", new Map([["", root.next.get("r").next.get(key)]]))
        node.next.set(key, dummy)
    }
})

const nglegenaWignyans = getAllWignyans(nglegenas)
const murdaWignyans = getAllWignyans(murdas)
const rekanWignyans = getAllWignyans(rekans)
const swaraWignyans = swaras.map((arr) => (["ꦃ", arr[1] + "h"]))
const wignyans = nglegenaWignyans.concat(murdaWignyans, rekanWignyans, swaraWignyans)
wignyans.forEach((arr) => {
    const java = arr[0]
    const latin = arr[1]
    const node = new Node(latin, java)
    root.addNext(node)

    const vocals = ["a", "i", "u", "e", "ê", "o", "ā", "ī", "ū"]
    for (const key of vocals){
        const dummy = new Node(ESC, BACKSPACE+"ꦲ꧀", new Map([["", root.next.get("h").next.get(key)]]))
        node.next.set(key, dummy)
    }
})

const nglegenaCecaks = getAllCecaks(nglegenas)
const murdaCecaks = getAllCecaks(murdas)
const rekanCecaks = getAllCecaks(rekans)
const swaraCecaks = swaras.map((arr) => ([BACKSPACE+BACKSPACE+"ꦁ", arr[1] + "ng"]))
const cecaks = nglegenaCecaks.concat(murdaCecaks, rekanCecaks, swaraCecaks)
cecaks.forEach((arr) => {
    const java = arr[0]
    const latin = arr[1]
    const node = new Node(latin, java)
    root.addNext(node)

    const vocals = ["a", "i", "u", "e", "ê", "o", "ā", "ī", "ū"]
    for (const key of vocals){
        const dummy = new Node(ESC, BACKSPACE+"ꦔ꧀", new Map([["", root.next.get("n").next.get("g").next.get(key)]]))
        node.next.set(key, dummy)
    }
})

function isStringAnInteger(str){
    if (str === ""){
        return false
    }

    for (const chr of str){
        if (!Number.isInteger(+chr)){
            return false
        }
    }

    return true
}

function getJava(current, latinChr, java, isNumber){
    let javaChr = ""
    if (isStringAnInteger(latinChr)){
        if (!isNumber){
            javaChr += "꧇"
            isNumber = true
        }
    }
    else if (isNumber){
        javaChr += "꧇"
        isNumber = false
    }

    javaChr += current.next.get(latinChr).java
    let numberOfBackspaces = 0
    for (const chr of javaChr) {
        if (chr === BACKSPACE){
            numberOfBackspaces++
        }
        else{
            break
        }
    }

    return {
        java: java.substring(0, java.length - numberOfBackspaces) + javaChr.substring(numberOfBackspaces, javaChr.length),
        current: current.next.get(latinChr),
        isNumber: isNumber,
    }
}

export default defineEventHandler((event) => {
    const query = getQuery(event)
    const latin = query.latin
    let java = ""
    let current = root
    let isNumber = false
    for (let i = 0; i < latin.length; ++i){
        const latinChr = latin[i]
        if (current.next.has("")){
            ({java, current, isNumber} = getJava(current, "", java, isNumber))
            --i
        }
        else if (latinChr === " "){
            current = root
        }
        else if (current.next.has(latinChr)){
            ({java, current, isNumber} = getJava(current, latinChr, java, isNumber))
        }
        else if (current.next.has(ESC)){
            ({java, current, isNumber} = getJava(current, ESC, java, isNumber))
            --i
        }
        else{
            if (current === root){
                java += latinChr
            }
            else{
                current = root
                if (current.next.has(latinChr)){
                    ({java, current, isNumber} = getJava(current, latinChr, java, isNumber))
                }
                else{
                    java += latinChr
                }
            }
        }
    }

    while (current.next.has("")){
        ({java, current, isNumber} = getJava(current, "", java, isNumber))
    }

    if (isNumber){
        java += "꧇"
        isNumber = false
    }

    return java
})