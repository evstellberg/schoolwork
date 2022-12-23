let solheimsviken = [];
let danmarksplass = [];
let sumSolheimsviken = 0;
let averageSolheimsviken = 0;
let sumDanmarksplass = 0;
let averageDanmarksplass = 0;

for (let i = 0; i < 1440; i++) {
    solheimsviken.push(Math.floor(Math.random() * 151));
    danmarksplass.push(Math.floor(Math.random() * 151));
}

function filtrer() {
    let danmarksplassFiltrert =danmarksplass.filter(function(x) {
        return x < 141;
    });
    
    let solheimsvikenFiltrert =solheimsviken.filter(function(x) {
        return x < 141;
    });
}

filtrer()

let danmarksplassFiltrert =danmarksplass.filter(function(x) {
    return x < 141;
});

let solheimsvikenFiltrert =solheimsviken.filter(function(x) {
    return x < 141;
});

console.log(danmarksplassFiltrert.length);
console.log(solheimsvikenFiltrert.length);

console.log(solheimsviken.length);
console.log(danmarksplass.length);
console.log(solheimsviken);
console.log(danmarksplass);

for (var i of solheimsvikenFiltrert) {
    sumSolheimsviken += i;
}

averageSolheimsviken = sumSolheimsviken / solheimsvikenFiltrert.length;

console.log(averageSolheimsviken);

for (var i of danmarksplassFiltrert) {
    sumDanmarksplass += i;
}

averageDanmarksplass = sumDanmarksplass / danmarksplassFiltrert.length;

console.log(averageDanmarksplass);

let hoeyestDanmarksplass = Math.max(...danmarksplassFiltrert);
let hoeyestSolheimsviken = Math.max(...solheimsvikenFiltrert);
let lavesteDanmarksplass = Math.min(...danmarksplassFiltrert);
let lavesteSolheimsviken = Math.min(...solheimsvikenFiltrert);

document.getElementById("averageDanmarksplass").innerText = "Gjennomsnittsmåling Danmarksplass: " + averageDanmarksplass;
document.getElementById("averageSolheimsviken").innerText = "Gjennomsnittsmåling Solheimsviken: " + averageSolheimsviken;
document.getElementById("hoeyestDanmarksplass").innerText = "Høyeste måling Danmarksplass:" + hoeyestDanmarksplass;
document.getElementById("hoeyestSolheimsviken").innerText = "Høyeste måling Solheimsviken:" + hoeyestSolheimsviken;
document.getElementById("lavesteDanmarksplass").innerText = "Laveste måling Danmarksplass:" + lavesteDanmarksplass;
document.getElementById("lavesteSolheimsviken").innerText = "Laveste måling Solheimsviken:" + lavesteSolheimsviken;

if (averageSolheimsviken > averageDanmarksplass) {
    document.getElementById("hoeyestGjennomsnitt").innerText = "Det er høyest konsentrasjon av svevestøv i Solheimsviken";
}
else {
    document.getElementById("hoeyestGjennomsnitt").innerText = "Det er høyest konsentrasjon av svevestøv på Danmarksplass";
}

if (hoeyestSolheimsviken > hoeyestDanmarksplass) {
    document.getElementById("hoeyest").innerText = "Den høyeste målingen ble funnet i Solheimsviken";
}
else if (hoeyestDanmarksplass > hoeyestSolheimsviken) {
    document.getElementById("hoeyest").innerText = "Den høyeste målingen ble funnet på Danmarksplass";
}
else {
    document.getElementById("hoeyest").innerText = "Den høyeste målingen var lik på Danmarksplass og i Solheimsviken";
}

if (lavesteSolheimsviken > lavesteDanmarksplass) {
    document.getElementById("lavest").innerText = "Den laveste målingen ble funnet i Solheimsviken";
}
else if (lavesteDanmarksplass > lavesteSolheimsviken) {
    document.getElementById("lavest").innerText = "Den laveste målingen ble funnet på Danmarksplass";
}
else {
    document.getElementById("lavest").innerText = "Den laveste målingen var lik på Danmarksplass og i Solheimsviken";
}