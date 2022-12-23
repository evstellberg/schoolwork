let a = 0;
let b = 0;
let h = 0;
let resultat = 0;

document.getElementById("knapp").addEventListener("click", regnUt);

function regnUt() {
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
    h = parseInt(document.getElementById("h").value);
    console.log(a + b + h);
    resultat = ((a+b)*h)/2;
    document.getElementById("resultat").innerText = "Resultat: " + resultat;
}