let verdiPre = ["&ml=", "&sl=", "&sp=", "&rel_rhy=", "&rel_jjb=", "&topics=", "&rel_jja=", "&lc=", "&rel_trg=", "&sp=", "&sp=*"]
let link = "https://api.datamuse.com/words?"
let midlertidig = "";


document.getElementById("knapp").addEventListener("click", fnc_click);

function fnc_click() {
    for (let  i = 0; i < 11; i++) {
        midlertidig = document.getElementById("verdi" + i);
        if (midlertidig && midlertidig.value) {
            link = link + verdiPre[i] + midlertidig.value;
            if (i == 9) {
                link = link + "*"
            }
        }
    }
    console.log(link);
    fetch(link)
        .then(response => response.json())
        .then(response => behandleSvar(response[0].word))
        .catch(err => console.error(err));
}

function behandleSvar(svar) {
    console.log(svar);
    document.getElementById("result").innerText = svar;
}