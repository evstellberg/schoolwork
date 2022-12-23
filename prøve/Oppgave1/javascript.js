let loop = 1;
document.getElementById("knapp").addEventListener("click", fnc_knapp)

function fnc_knapp() {
    for (let i = 0; i < 3; i++) {
        let inputValue = document.getElementById("input").value;
        let text = document.getElementById(loop.toString()).innerText;
        let result = text.replace(/300/g, inputValue);
        document.getElementById(loop.toString()).innerText = result;
        loop = loop + 1;
    }
}
