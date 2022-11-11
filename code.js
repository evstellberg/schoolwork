const tall = [];
let tenCount = 0;
let overTenCount = 0;
let underTenCount = 0;
let buttonPressed = 0;
let highestTen = 0;


document.getElementById("button").addEventListener("click", fnc_button)

function fnc_button() {
    buttonPressed = 1;
    while(buttonPressed == 1) {
        tenCount = 0;
        overTenCount = 0;
        underTenCount = 0;
        for (let i = 0; i < 100; i++) {
            tall[i] = Math.floor(Math.random() * 101);
            if (tall[i] == 10) {
                tenCount = tenCount + 1;
            }
            else if (tall[i] > 10) {
                overTenCount = overTenCount + 1;
            }
            else if (tall[i] < 10) {
                underTenCount = underTenCount + 1;
            }
        }
        if (tenCount == 100) {
            console.log("Les go")
        }
        if (highestTen < tenCount) {
            highestTen = tenCount;
            document.getElementById("result").innerHTML = highestTen;
        }
        console.log(tall);
        console.log(tenCount);
        console.log(overTenCount);
        console.log(underTenCount);

    }
}




