let deltakere = [
    { navn: "Olaug", alder: 52, resultatRunde1 : 0, resultatRunde2: 0, resultatRunde3: 0, resultatSum: 0},
    { navn: "Harriett", alder: 67, resultatRunde1 : 0, resultatRunde2: 0, resultatRunde3: 0, resultatSum: 0},
    { navn: "Ottar", alder: 49, resultatRunde1 : 0, resultatRunde2: 0, resultatRunde3: 0, resultatSum: 0},
    { navn: "Ann Kristin", alder: 60, resultatRunde1 : 0, resultatRunde2: 0, resultatRunde3: 0, resultatSum: 0},
    { navn: "Bjørn Olav", alder: 167, resultatRunde1 : 0, resultatRunde2: 0, resultatRunde3: 0, resultatSum: 0}
]


const utskrift = document.querySelector("#utskrift");
    for (let deltaker of deltakere) {
        utskrift.innerHTML += "<li>" + deltaker.navn + " (alder: " + deltaker.alder +")" + "</li>";
    };
