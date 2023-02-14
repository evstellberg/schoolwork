let verdi = 0;
const ferdig = [];
let merFerdig = "";

document.getElementById("knapp").addEventListener("click", fnc_click);

function fnc_click() {
    verdi = (document.getElementById("lmao").value).split(" ");
    console.log(verdi);
    for (let i = 0; i < verdi.length; i++) {
        fetch('https://api.datamuse.com/sug?s=' + verdi[i])
            .then(response => response.json())
            .then(response => behandleSvar(response[0].word))
            .catch(err => console.error(err));
    }
    console.log(ferdig);
    //for (let i = 0; i < ferdig.length; i++) {
      //  merFerdig = merFerdig + ferdig[i];
    //}
    console.log(merFerdig);
}

function behandleSvar(svar) {
    ferdig.push((svar));
    merFerdig = merFerdig + " " + svar;
    console.log(merFerdig);
    document.getElementById("lmaa").value = merFerdig;
}