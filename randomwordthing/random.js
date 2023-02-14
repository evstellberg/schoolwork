let rettOrd = "";
let resultat = "";
let svar = "";
const utskrift = document.querySelector("#utskrift");
let number = 0;
let start = 0;

document.onkeydown = function (e) {
    if (e.key === 'Enter') {
        if (start === 0) {
            fnc_fetch()
        } 
        else {
            fnc_svar()
        }
    }
}



document.getElementById("knapp").addEventListener("click", fnc_fetch);
document.getElementById("svarKnapp").addEventListener("click", fnc_svar)

function fnc_fetch() {
    if (document.getElementById("tall").value >= 2 && document.getElementById("tall").value <= 15) {
        document.getElementById("svarFelt").setAttribute('size',document.getElementById("tall").value)
        document.getElementById("svarFelt").setAttribute('maxlength',document.getElementById("tall").value)
        fetch('https://random-word-api.herokuapp.com/word?length=' + document.getElementById("tall").value)
            .then(response => response.json())
            .then(response => behandleSvar(response))
            .catch(err => console.error(err));
        document.getElementById("svarTekst").style.display = "inline";
        document.getElementById("svarFelt").style.display = "inline";
        document.getElementById("svarKnapp").style.display = "inline";
        document.getElementById("tall").style.display = "none";
        document.getElementById("spørsmål").style.display = "none";
        document.getElementById("knapp").style.display = "none";
        start = 1;
        document.getElementById("svarFelt").focus();
    }
    else {
        alert("Skriv et gyldig tall fra 2 til 15")
    }
}

function behandleSvar(svar) {
    console.log(svar);
    rettOrd = svar;
    console.log(rettOrd)
}

function ordbokDefinisjon(svar) {
    console.log(svar);
    if (svar.title == 'No Definitions Found') {
        ugyldigOrd()
    }
    else {
        gyldigOrd()
    }
}

function fnc_svar() {
    svar = document.getElementById("svarFelt").value;
    if (svar == rettOrd) {
        utskrift.innerHTML += "<li><span style = color:green>" + rettOrd + "</span></li>"
        document.getElementById("svarFelt").value = "";
    }
    else{
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + svar)
            .then(responseDic => responseDic.json())
            .then(responseDic => ordbokDefinisjon(responseDic))
    }
}

function gyldigOrd() {
    svar = document.getElementById("svarFelt").value;
    number = document.getElementById("tall").value;
    const oppdeltOrd = String(rettOrd).split("");
        const oppdeltSvar = String(svar).split("");
        let i = 0;
        resultat = "";
        while (i < oppdeltOrd.length) {
            if (oppdeltOrd[i] == oppdeltSvar[i]) {
                oppdeltSvar[i] = "<span style = color:green>" + oppdeltSvar[i] + "</span>";
            }
            else if (oppdeltOrd.includes(oppdeltSvar[i])){
                oppdeltSvar[i] = "<span style = color:goldenrod>" + oppdeltSvar[i] + "</span>";
            }
            else {
                oppdeltSvar[i] = "<span style = color:red>" + oppdeltSvar[i] + "</span>";
            }
            resultat = resultat + oppdeltSvar[i];
            i++
        }
        if (oppdeltSvar.includes('<span style = color:red>undefined</span>')) {
            ugyldigLengde()
        }
        else if (number == oppdeltSvar.length) {
            utskrift.innerHTML += "<li>" + resultat + "</li>";
        }
        else {
            ugyldigLengde()
        }
        console.log(oppdeltSvar);
        document.getElementById("svarFelt").value = "";
}

function ugyldigOrd() {
    utskrift.innerHTML += "<li><span style = color:red>Not a valid word!</span></li>"
}

function ugyldigLengde() {
    utskrift.innerHTML += "<li><span style = color:red>Not a valid length!</span></li>"
}