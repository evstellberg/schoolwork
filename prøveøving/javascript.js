const land = ["Norge", "Japan", "USA", "Italia", "Canada", "Russland", "Sør-Korea", "Kina"];
const sted = ["Lillehammer", "Nagano", "Salt Lake City", "Torino", "Vancouver", "Sotsji", "Pyeongchang", "Beijing"];
const årstall = ["1994", "1998", "2002", "2006", "2010", "2014", "2018", "2022"];
document.getElementById("result").addEventListener("click", printOut());


function printOut() {
    for (let i = 0; i < land.length; i++) {
        console.log("Vinter-OL i " + land[i] + " ble arrangert i " +  sted[i] + " i " + årstall[i])
    }
    whichPlace(årstall[Math.floor(Math.random() * 8)]);
    whichYear(sted[Math.floor(Math.random() * 8)]);
    randomYear()
}

function whichPlace(year) {
    let rightPlace = årstall.indexOf(year)
    console.log("OL i " + year + " ble arrangert i " + sted[rightPlace])
}

function whichYear(places) {
    let rightYear = sted.indexOf(places)
    console.log("OL i " + places + " ble arrangert i " + årstall[rightYear])
}

function randomYear() {
    console.log(årstall[Math.floor(Math.random() * 8)])
}