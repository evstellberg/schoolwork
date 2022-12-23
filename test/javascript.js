let strDone = "";
let randomArray = ["lmao"];
let arrDone = [];
let textbox1 = "";
let textbox2 = "";
let textbox3 = "";

document.getElementById("knapp").addEventListener("click", klikk)
reverseArray(randomArray);

function klikk() {
    textbox1 = (document.getElementById("strInput1").value).toString();
    textbox2 = (document.getElementById("strInput2").value).toString();
    textbox3 = (document.getElementById("strInput3").value).toString();
    randomArray = ["textbox1", "textbox2", "textbox3"];
    reverseString(randomArray);
}

function reverseString(str) {
    let splitStr = str.split("");
    strDone = "";
    for (let i = 0; i < splitStr.length; i++) {
        strDone = splitStr[i] + strDone;
    }
    console.log(strDone);
    return strDone;
}

function reverseArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arrDone.unshift(reverseString(arr[i]))
    }
    console.log(arrDone);
}