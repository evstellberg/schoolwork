let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "æ", "ø", "å"]

for (let i = 0; i < alphabet.length; i++) {
    let bokstav = alphabet[i].charCodeAt(0).toString(2);
    console.log(bokstav);
};