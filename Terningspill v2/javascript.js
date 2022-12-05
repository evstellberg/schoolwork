let terning1;
let terning2;
let terning3;
let terning4;
let terning5;
let aces = 0;
let twoes = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;
let sum = 0;
let bonus = 0;
let onePair = 0;
let twoPairs = 0;
let threeOfAKind = 0;
let fourOfAKind = 0;
let smallStraight = 0;
let bigStraight = 0;
let house = 0;
let chance = 0;
let yatzy = 0;
let totalSum = 0;
let rollOne = true;
let rollTwo = true;
let rollThree = true;
let rollFour = true;
let rollFive = true;
let amountRolled = 3;
let extremelyStupidOffset = 0;
let ogExtremelyStupidOffset = 0;
let highscore = 0;



document.getElementById("trillTerning").addEventListener("click", fnc_trillTerning);

document.getElementById("ones").addEventListener("click", fnc_ones);
document.getElementById("twoes").addEventListener("click", fnc_twoes);
document.getElementById("threes").addEventListener("click", fnc_threes);
document.getElementById("fours").addEventListener("click", fnc_fours);
document.getElementById("fives").addEventListener("click", fnc_fives);
document.getElementById("sixes").addEventListener("click", fnc_sixes);
document.getElementById("1pair").addEventListener("click", fnc_onePair);
document.getElementById("2pairs").addEventListener("click", fnc_twoPairs);
document.getElementById("3OfAKind").addEventListener("click", fnc_threeOfAKind);
document.getElementById("4OfAKind").addEventListener("click", fnc_fourOfAKind);
document.getElementById("smallStraight").addEventListener("click", fnc_smallStraight);
document.getElementById("bigStraight").addEventListener("click", fnc_bigStraight);
document.getElementById("house").addEventListener("click", fnc_house);
document.getElementById("chance").addEventListener("click", fnc_chance);
document.getElementById("Yatzy").addEventListener("click", fnc_yatzy);
document.getElementById("terning1").addEventListener("click", fnc_rollOne);
document.getElementById("terning2").addEventListener("click", fnc_rollTwo);
document.getElementById("terning3").addEventListener("click", fnc_rollThree);
document.getElementById("terning4").addEventListener("click", fnc_rollFour);
document.getElementById("terning5").addEventListener("click", fnc_rollFive);
window.addEventListener("load", fnc_load)

function fnc_load() {
    highscore = localStorage.getItem("highscore");
    document.getElementById("highscore").innerText = ("Highscore: " + highscore);
}

function fnc_rollOne() {
    if (rollOne == true) {
        rollOne = false;
        document.getElementById("terning1").style.color = "red";
    }
    else {
        rollOne = true;
        document.getElementById("terning1").style.color = "black";
    }
}
function fnc_rollTwo() {
    if (rollTwo == true) {
        rollTwo = false;
        document.getElementById("terning2").style.color = "red";
    }
    else {
        rollTwo = true;
        document.getElementById("terning2").style.color = "black";
    }
}
function fnc_rollThree() {
    if (rollThree == true) {
        rollThree = false;
        document.getElementById("terning3").style.color = "red";
    }
    else {
        rollThree = true;
        document.getElementById("terning3").style.color = "black";
    }
}
function fnc_rollFour() {
    if (rollFour == true) {
        rollFour = false;
        document.getElementById("terning4").style.color = "red";
    }
    else {
        rollFour = true;
        document.getElementById("terning4").style.color = "black";
    }
}
function fnc_rollFive() {
    if (rollFive == true) {
        rollFive = false;
        document.getElementById("terning5").style.color = "red";
    }
    else {
        rollFive = true;
        document.getElementById("terning5").style.color = "black";
    }
}


function fnc_trillTerning() {
    if (amountRolled > 0) { 
        if (rollOne == true) {
            terning1 = Math.floor(Math.random() * 6 + 1);
        }
        if (rollTwo == true) {
            terning2 = Math.floor(Math.random() * 6 + 1);
        }
        if (rollThree == true) {
            terning3 = Math.floor(Math.random() * 6 + 1);
        }
        if (rollFour == true) {
            terning4 = Math.floor(Math.random() * 6 + 1);
        }
        if (rollFive == true) {
            terning5 = Math.floor(Math.random() * 6 + 1);
        }
        document.getElementById("terning1").innerText = (terning1);
        document.getElementById("terning2").innerText = (terning2);
        document.getElementById("terning3").innerText = (terning3);
        document.getElementById("terning4").innerText = (terning4);
        document.getElementById("terning5").innerText = (terning5);
        amountRolled = amountRolled - 1;
        document.getElementById("rollsLeft").innerText = ("Rolls left: " + amountRolled);
    }
}

function count() {
    const terninger = [terning1, terning2, terning3, terning4, terning5];
    const count = {};
    for (const num of terninger) {
        count[num] = count[num] ? count[num] + 1 : 1;
    }
    console.log(count);
        
}

function diceReset() {
    terning1 = 0;
    terning2 = 0;
    terning3 = 0;
    terning4 = 0;
    terning5 = 0;
    document.getElementById("terning1").innerText = (terning1);
    document.getElementById("terning2").innerText = (terning2);
    document.getElementById("terning3").innerText = (terning3);
    document.getElementById("terning4").innerText = (terning4);
    document.getElementById("terning5").innerText = (terning5);
    amountRolled = 3;
    document.getElementById("rollsLeft").innerText = ("Rolls left: " + amountRolled);
    rollOne = true;
    rollTwo = true;
    rollThree = true;
    rollFour = true;
    rollFive = true;
    document.getElementById("terning1").style.color = "black";
    document.getElementById("terning2").style.color = "black";
    document.getElementById("terning3").style.color = "black";
    document.getElementById("terning4").style.color = "black";
    document.getElementById("terning5").style.color = "black";
}

function sumCalc() {
    sum = aces + twoes + threes + fours + fives + sixes + ogExtremelyStupidOffset;
    document.getElementById("sum").innerText = ("Sum: " + sum);
    if (sum >= 63) {
        bonus = 50;
        document.getElementById("bonus").innerText = ("Bonus: " + bonus);
    }
    totalSumCalc()
}

function fnc_ones() {
    count()
    console.log(count[1]);
    if (aces == 0) {
        aces = parseInt(count[1]);
        if (aces > 0) {
            document.getElementById("ones").innerText = ("Ones: " + aces);
        }
        diceReset()
        sumCalc()
    }
}
function fnc_twoes() {
    if (twoes == 0) {
        if (terning1 == 2 || terning2 == 2 || terning3 == 2 || terning4 == 2 || terning5 == 2) {
            if (terning1 == 2) {
                twoes = twoes + 2;
            }
            if (terning2 == 2) {
                twoes = twoes + 2;
            }
            if (terning3 == 2) {
                twoes = twoes + 2;
            }
            if (terning4 == 2) {
                twoes = twoes + 2;
            }
            if (terning5 == 2) {
                twoes = twoes + 2;
            }
            document.getElementById("twoes").innerText = ("Twoes: " + twoes);
        }
        else {
            document.getElementById("twoes").innerText = "Twoes: -";
            twoes = -1;
            extremelyStupidOffset = ogExtremelyStupidOffset + 1;
        }
        diceReset()
        sumCalc()
    }
}
function fnc_threes() {
    if (threes == 0) {
        if (terning1 == 3 || terning2 == 3 || terning3 == 3 || terning4 == 3 || terning5 == 3) {
            if (terning1 == 3) {
                threes = threes + 3;
            }
            if (terning2 == 3) {
                threes = threes + 3;
            }
            if (terning3 == 3) {
                threes = threes + 3;
            }
            if (terning4 == 3) {
                threes = threes + 3;
            }
            if (terning5 == 3) {
                threes = threes + 3;
            }
            document.getElementById("threes").innerText = ("Threes: " + threes);
        }
        else {
            document.getElementById("threes").innerText = "Threes: -";
            threes = -1;
            extremelyStupidOffset = ogExtremelyStupidOffset + 1;
        }
        diceReset()
        sumCalc()
    }
}
function fnc_fours() {
    if (fours == 0) {
        if (terning1 == 4 || terning2 == 4 || terning3 == 4 || terning4 == 4 || terning5 == 4) {
            if (terning1 == 4) {
                fours = fours + 4;
            }
            if (terning2 == 4) {
                fours = fours + 4;
            }
            if (terning3 == 4) {
                fours = fours + 4;
            }
            if (terning4 == 4) {
                fours = fours + 4;
            }
            if (terning5 == 4) {
                fours = fours + 4;
            }
            document.getElementById("fours").innerText = ("Fours: " + fours);
        }
        else {
            document.getElementById("fours").innerText = "Fours: -";
            fours = -1;
            extremelyStupidOffset = ogExtremelyStupidOffset + 1;
        }
        diceReset()
        sumCalc()
    }
}
function fnc_fives() {
    if (fives == 0) {
        if (terning1 == 5 || terning2 == 5 || terning3 == 5 || terning4 == 5 || terning5 == 5) {
            if (terning1 == 5) {
                fives = fives + 5;
            }
            if (terning2 == 5) {
                fives = fives + 5;
            }
            if (terning3 == 5) {
                fives = fives + 5;
            }
            if (terning4 == 5) {
                fives = fives + 5;
            }
            if (terning5 == 5) {
                fives = fives + 5;
            }
            document.getElementById("fives").innerText = ("Fives: " + fives);
        }
        else {
            document.getElementById("fives").innerText = "Fives: -";
            fives = -1;
            extremelyStupidOffset = ogExtremelyStupidOffset + 1;
        }
        diceReset()
        sumCalc()
    }
}
function fnc_sixes() {
    if (sixes == 0) {
        if (terning1 == 6 || terning2 == 6 || terning3 == 6 || terning4 == 6 || terning5 == 6) {
            if (terning1 == 6) {
                sixes = sixes + 6;
            }
            if (terning2 == 6) {
                sixes = sixes + 6;
            }
            if (terning3 == 6) {
                sixes = sixes + 6;
            }
            if (terning4 == 6) {
                sixes = sixes + 6;
            }
            if (terning5 == 6) {
                sixes = sixes + 6;
            }
            document.getElementById("sixes").innerText = ("Sixes: " + sixes);
        }
        else {
            document.getElementById("sixes").innerText = "Sixes: -";
            sixes = -1;
            extremelyStupidOffset = ogExtremelyStupidOffset + 1;
        }
        diceReset()
        sumCalc()
    }
}
function fnc_onePair() {
    if (onePair == 0) {
        if (terning1 == 6 && terning2 == 6 || terning1 == 6 && terning3 == 6 || terning1 == 6 && terning4 == 6 || terning1 == 6 && terning5 == 6 || terning2 == 6 && terning3 == 6 || terning2 == 6 && terning4 == 6 || terning2 == 6 && terning5 == 6 || terning3 == 6 && terning4 == 6 || terning3 == 6 && terning5 == 6 || terning4 == 6 && terning5 == 6) {
            onePair = 12;
            document.getElementById("1pair").innerText = ("1 pair: 12");
        }
        else if (terning1 == 5 && terning2 == 5 || terning1 == 5 && terning3 == 5 || terning1 == 5 && terning4 == 5 || terning1 == 5 && terning5 == 5 || terning2 == 5 && terning3 == 5 || terning2 == 5 && terning4 == 5 || terning2 == 5 && terning5 == 5 || terning3 == 5 && terning4 == 5 || terning3 == 5 && terning5 == 5 || terning4 == 5 && terning5 == 5) {
            onePair = 10;
            document.getElementById("1pair").innerText = ("1 pair: 10");
        }
        else if (terning1 == 4 && terning2 == 4 || terning1 == 4 && terning3 == 4 || terning1 == 4 && terning4 == 4 || terning1 == 4 && terning5 == 4 || terning2 == 4 && terning3 == 4 || terning2 == 4 && terning4 == 4 || terning2 == 4 && terning5 == 4 || terning3 == 4 && terning4 == 4 || terning3 == 4 && terning5 == 4 || terning4 == 4 && terning5 == 4) {
            onePair = 8;
            document.getElementById("1pair").innerText = ("1 pair: 8");
        }
        else if (terning1 == 3 && terning2 == 3 || terning1 == 3 && terning3 == 3 || terning1 == 3 && terning4 == 3 || terning1 == 3 && terning5 == 3 || terning2 == 3 && terning3 == 3 || terning2 == 3 && terning4 == 3 || terning2 == 3 && terning5 == 3 || terning3 == 3 && terning4 == 3 || terning3 == 3 && terning5 == 3 || terning4 == 3 && terning5 == 3) {
            onePair = 6;
            document.getElementById("1pair").innerText = ("1 pair: 6");
        }
        else if (terning1 == 2 && terning2 == 2 || terning1 == 2 && terning3 == 2 || terning1 == 2 && terning4 == 2 || terning1 == 2 && terning5 == 2 || terning2 == 2 && terning3 == 2 || terning2 == 2 && terning4 == 2 || terning2 == 2 && terning5 == 2 || terning3 == 2 && terning4 == 2 || terning3 == 2 && terning5 == 2 || terning4 == 2 && terning5 == 2) {
            onePair = 4;
            document.getElementById("1pair").innerText = ("1 pair: 4");
        }
        else if (terning1 == 1 && terning2 == 1 || terning1 == 1 && terning3 == 1 || terning1 == 1 && terning4 == 1 || terning1 == 1 && terning5 == 1 || terning2 == 1 && terning3 == 1 || terning2 == 1 && terning4 == 1 || terning2 == 1 && terning5 == 1 || terning3 == 1 && terning4 == 1 || terning3 == 1 && terning5 == 1 || terning4 == 1 && terning5 == 1) {
            onePair = 2;
            document.getElementById("1pair").innerText = ("1 pair: 2");
        }
        else {
            document.getElementById("1pair").innerText = ("1 pair: -");
            onePair = -1;
            extremelyStupidOffset = extremelyStupidOffset + 1;
        }
        diceReset()
        totalSumCalc()
    }
}
function fnc_threeOfAKind() {
    if (threeOfAKind == 0) {
        if (terning1 == 6 && terning2 == 6 && terning3 == 6 || terning1 == 6 && terning2 == 6 && terning4 == 6 || terning1 == 6 && terning2 == 6 && terning5 == 6 || terning1 == 6 && terning3 == 6 && terning4 == 6 || terning1 == 6 && terning3 == 6 && terning5 == 6 || terning1 == 6 && terning4 == 6 && terning5 == 6 || terning2 == 6 && terning3 == 6 && terning4 == 6 || terning2 == 6 && terning3 == 6 && terning5 == 6 || terning2 == 6 && terning4 == 6 && terning5 == 6 || terning3 == 6 && terning4 == 6 && terning5 == 6) {
            threeOfAKind = 18;
            document.getElementById("3OfAKind").innerText = ("3 of a kind: 18")
        }
        else if (terning1 == 5 && terning2 == 5 && terning3 == 5 || terning1 == 5 && terning2 == 5 && terning4 == 5 || terning1 == 5 && terning2 == 5 && terning5 == 5 || terning1 == 5 && terning3 == 5 && terning4 == 5 || terning1 == 5 && terning3 == 5 && terning5 == 5 || terning1 == 5 && terning4 == 5 && terning5 == 5 || terning2 == 5 && terning3 == 5 && terning4 == 5 || terning2 == 5 && terning3 == 5 && terning5 == 5 || terning2 == 5 && terning4 == 5 && terning5 == 5 || terning3 == 5 && terning4 == 5 && terning5 == 5) {
            threeOfAKind = 15;
            document.getElementById("3OfAKind").innerText = ("3 of a kind: 15")
        }
        else if (terning1 == 4 && terning2 == 4 && terning3 == 4 || terning1 == 4 && terning2 == 4 && terning4 == 4 || terning1 == 4 && terning2 == 4 && terning5 == 4 || terning1 == 4 && terning3 == 4 && terning4 == 4 || terning1 == 4 && terning3 == 4 && terning5 == 4 || terning1 == 4 && terning4 == 4 && terning5 == 4 || terning2 == 4 && terning3 == 4 && terning4 == 4 || terning2 == 4 && terning3 == 4 && terning5 == 4 || terning2 == 4 && terning4 == 4 && terning5 == 4 || terning3 == 4 && terning4 == 4 && terning5 == 4) {
            threeOfAKind = 12;
            document.getElementById("3OfAKind").innerText = ("3 of a kind: 12")
        }
        else if (terning1 == 3 && terning2 == 3 && terning3 == 3 || terning1 == 3 && terning2 == 3 && terning4 == 3 || terning1 == 3 && terning2 == 3 && terning5 == 3 || terning1 == 3 && terning3 == 3 && terning4 == 3 || terning1 == 3 && terning3 == 3 && terning5 == 3 || terning1 == 3 && terning4 == 3 && terning5 == 3 || terning2 == 3 && terning3 == 3 && terning4 == 3 || terning2 == 3 && terning3 == 3 && terning5 == 3 || terning2 == 3 && terning4 == 3 && terning5 == 3 || terning3 == 3 && terning4 == 3 && terning5 == 3) {
            threeOfAKind = 9;
            document.getElementById("3OfAKind").innerText = ("3 of a kind: 9")
        }
        else if (terning1 == 2 && terning2 == 2 && terning3 == 2 || terning1 == 2 && terning2 == 2 && terning4 == 2 || terning1 == 2 && terning2 == 2 && terning5 == 2 || terning1 == 2 && terning3 == 2 && terning4 == 2 || terning1 == 2 && terning3 == 2 && terning5 == 2 || terning1 == 2 && terning4 == 2 && terning5 == 2 || terning2 == 2 && terning3 == 2 && terning4 == 2 || terning2 == 2 && terning3 == 2 && terning5 == 2 || terning2 == 2 && terning4 == 2 && terning5 == 2 || terning3 == 2 && terning4 == 2 && terning5 == 2) {
            threeOfAKind = 6;
            document.getElementById("3OfAKind").innerText = ("3 of a kind: 6")
        }
        else if (terning1 == 1 && terning2 == 1 && terning3 == 1 || terning1 == 1 && terning2 == 1 && terning4 == 1 || terning1 == 1 && terning2 == 1 && terning5 == 1 || terning1 == 1 && terning3 == 1 && terning4 == 1 || terning1 == 1 && terning3 == 1 && terning5 == 1 || terning1 == 1 && terning4 == 1 && terning5 == 1 || terning2 == 1 && terning3 == 1 && terning4 == 1 || terning2 == 1 && terning3 == 1 && terning5 == 1 || terning2 == 1 && terning4 == 1 && terning5 == 1 || terning3 == 1 && terning4 == 1 && terning5 == 1) {
            threeOfAKind = 3;
            document.getElementById("3OfAKind").innerText = ("3 of a kind: 3")
        }
        else {
            document.getElementById("3OfAKind").innerText = ("3 of a kind: -")
            threeOfAKind = -1;
            extremelyStupidOffset = extremelyStupidOffset + 1;
        }
        diceReset()
        totalSumCalc()
    }
}
function fnc_twoPairs() {
    if (twoPairs == 0) {
        if (terning1 == 6 && terning2 == 6 || terning1 == 6 && terning3 == 6 || terning1 == 6 && terning4 == 6 || terning1 == 6 && terning5 == 6 || terning2 == 6 && terning3 == 6 || terning2 == 6 && terning4 == 6 || terning2 == 6 && terning5 == 6 || terning3 == 6 && terning4 == 6 || terning3 == 6 && terning5 == 6 || terning4 == 6 && terning5 == 6) {
            if (terning1 == 5 && terning2 == 5 || terning1 == 5 && terning3 == 5 || terning1 == 5 && terning4 == 5 || terning1 == 5 && terning5 == 5 || terning2 == 5 && terning3 == 5 || terning2 == 5 && terning4 == 5 || terning2 == 5 && terning5 == 5 || terning3 == 5 && terning4 == 5 || terning3 == 5 && terning5 == 5 || terning4 == 5 && terning5 == 5) {
                twoPairs = 22;
                document.getElementById("2pairs").innerText = ("2 pairs: 22");
            }
            else if (terning1 == 4 && terning2 == 4 || terning1 == 4 && terning3 == 4 || terning1 == 4 && terning4 == 4 || terning1 == 4 && terning5 == 4 || terning2 == 4 && terning3 == 4 || terning2 == 4 && terning4 == 4 || terning2 == 4 && terning5 == 4 || terning3 == 4 && terning4 == 4 || terning3 == 4 && terning5 == 4 || terning4 == 4 && terning5 == 4) {
                twoPairs = 20;
                document.getElementById("2pairs").innerText = ("2 pairs: 8");
            }
            else if (terning1 == 3 && terning2 == 3 || terning1 == 3 && terning3 == 3 || terning1 == 3 && terning4 == 3 || terning1 == 3 && terning5 == 3 || terning2 == 3 && terning3 == 3 || terning2 == 3 && terning4 == 3 || terning2 == 3 && terning5 == 3 || terning3 == 3 && terning4 == 3 || terning3 == 3 && terning5 == 3 || terning4 == 3 && terning5 == 3) {
                twoPairs = 18;
                document.getElementById("2pairs").innerText = ("2 pairs: 18");
            }
            else if (terning1 == 2 && terning2 == 2 || terning1 == 2 && terning3 == 2 || terning1 == 2 && terning4 == 2 || terning1 == 2 && terning5 == 2 || terning2 == 2 && terning3 == 2 || terning2 == 2 && terning4 == 2 || terning2 == 2 && terning5 == 2 || terning3 == 2 && terning4 == 2 || terning3 == 2 && terning5 == 2 || terning4 == 2 && terning5 == 2) {
                twoPairs = 16;
                document.getElementById("2pairs").innerText = ("2 pairs: 16");
            }
            else if (terning1 == 1 && terning2 == 1 || terning1 == 1 && terning3 == 1 || terning1 == 1 && terning4 == 1 || terning1 == 1 && terning5 == 1 || terning2 == 1 && terning3 == 1 || terning2 == 1 && terning4 == 1 || terning2 == 1 && terning5 == 1 || terning3 == 1 && terning4 == 1 || terning3 == 1 && terning5 == 1 || terning4 == 1 && terning5 == 1) {
                twoPairs = 14;
                document.getElementById("2pairs").innerText = ("2 pairs: 14");
            }
        }
        else if (terning1 == 5 && terning2 == 5 || terning1 == 5 && terning3 == 5 || terning1 == 5 && terning4 == 5 || terning1 == 5 && terning5 == 5 || terning2 == 5 && terning3 == 5 || terning2 == 5 && terning4 == 5 || terning2 == 5 && terning5 == 5 || terning3 == 5 && terning4 == 5 || terning3 == 5 && terning5 == 5 || terning4 == 5 && terning5 == 5) {
            if (terning1 == 4 && terning2 == 4 || terning1 == 4 && terning3 == 4 || terning1 == 4 && terning4 == 4 || terning1 == 4 && terning5 == 4 || terning2 == 4 && terning3 == 4 || terning2 == 4 && terning4 == 4 || terning2 == 4 && terning5 == 4 || terning3 == 4 && terning4 == 4 || terning3 == 4 && terning5 == 4 || terning4 == 4 && terning5 == 4) {
                twoPairs = 18;
                document.getElementById("2pairs").innerText = ("2 pairs: 18");
            }
            else if (terning1 == 3 && terning2 == 3 || terning1 == 3 && terning3 == 3 || terning1 == 3 && terning4 == 3 || terning1 == 3 && terning5 == 3 || terning2 == 3 && terning3 == 3 || terning2 == 3 && terning4 == 3 || terning2 == 3 && terning5 == 3 || terning3 == 3 && terning4 == 3 || terning3 == 3 && terning5 == 3 || terning4 == 3 && terning5 == 3) {
                twoPairs = 16;
                document.getElementById("2pairs").innerText = ("2 pairs: 16");
            }
            else if (terning1 == 2 && terning2 == 2 || terning1 == 2 && terning3 == 2 || terning1 == 2 && terning4 == 2 || terning1 == 2 && terning5 == 2 || terning2 == 2 && terning3 == 2 || terning2 == 2 && terning4 == 2 || terning2 == 2 && terning5 == 2 || terning3 == 2 && terning4 == 2 || terning3 == 2 && terning5 == 2 || terning4 == 2 && terning5 == 2) {
                twoPairs = 14;
                document.getElementById("2pairs").innerText = ("2 pairs: 14");
            }
            else if (terning1 == 1 && terning2 == 1 || terning1 == 1 && terning3 == 1 || terning1 == 1 && terning4 == 1 || terning1 == 1 && terning5 == 1 || terning2 == 1 && terning3 == 1 || terning2 == 1 && terning4 == 1 || terning2 == 1 && terning5 == 1 || terning3 == 1 && terning4 == 1 || terning3 == 1 && terning5 == 1 || terning4 == 1 && terning5 == 1) {
                twoPairs = 12;
                document.getElementById("2pairs").innerText = ("2 pairs: 12");
            }
        }
        else if (terning1 == 4 && terning2 == 4 || terning1 == 4 && terning3 == 4 || terning1 == 4 && terning4 == 4 || terning1 == 4 && terning5 == 4 || terning2 == 4 && terning3 == 4 || terning2 == 4 && terning4 == 4 || terning2 == 4 && terning5 == 4 || terning3 == 4 && terning4 == 4 || terning3 == 4 && terning5 == 4 || terning4 == 4 && terning5 == 4) {
            if (terning1 == 3 && terning2 == 3 || terning1 == 3 && terning3 == 3 || terning1 == 3 && terning4 == 3 || terning1 == 3 && terning5 == 3 || terning2 == 3 && terning3 == 3 || terning2 == 3 && terning4 == 3 || terning2 == 3 && terning5 == 3 || terning3 == 3 && terning4 == 3 || terning3 == 3 && terning5 == 3 || terning4 == 3 && terning5 == 3) {
                twoPairs = 14;
                document.getElementById("2pairs").innerText = ("2 pairs: 14");
            }
            else if (terning1 == 2 && terning2 == 2 || terning1 == 2 && terning3 == 2 || terning1 == 2 && terning4 == 2 || terning1 == 2 && terning5 == 2 || terning2 == 2 && terning3 == 2 || terning2 == 2 && terning4 == 2 || terning2 == 2 && terning5 == 2 || terning3 == 2 && terning4 == 2 || terning3 == 2 && terning5 == 2 || terning4 == 2 && terning5 == 2) {
                twoPairs = 12;
                document.getElementById("2pairs").innerText = ("2 pairs: 12");
            }
            else if (terning1 == 1 && terning2 == 1 || terning1 == 1 && terning3 == 1 || terning1 == 1 && terning4 == 1 || terning1 == 1 && terning5 == 1 || terning2 == 1 && terning3 == 1 || terning2 == 1 && terning4 == 1 || terning2 == 1 && terning5 == 1 || terning3 == 1 && terning4 == 1 || terning3 == 1 && terning5 == 1 || terning4 == 1 && terning5 == 1) {
                twoPairs = 10;
                document.getElementById("2pairs").innerText = ("2 pairs: 10");
            }
        }
        else if (terning1 == 3 && terning2 == 3 || terning1 == 3 && terning3 == 3 || terning1 == 3 && terning4 == 3 || terning1 == 3 && terning5 == 3 || terning2 == 3 && terning3 == 3 || terning2 == 3 && terning4 == 3 || terning2 == 3 && terning5 == 3 || terning3 == 3 && terning4 == 3 || terning3 == 3 && terning5 == 3 || terning4 == 3 && terning5 == 3) {
            if (terning1 == 2 && terning2 == 2 || terning1 == 2 && terning3 == 2 || terning1 == 2 && terning4 == 2 || terning1 == 2 && terning5 == 2 || terning2 == 2 && terning3 == 2 || terning2 == 2 && terning4 == 2 || terning2 == 2 && terning5 == 2 || terning3 == 2 && terning4 == 2 || terning3 == 2 && terning5 == 2 || terning4 == 2 && terning5 == 2) {
                twoPairs = 10;
                document.getElementById("2pairs").innerText = ("2 pairs: 10");
            }
            else if (terning1 == 1 && terning2 == 1 || terning1 == 1 && terning3 == 1 || terning1 == 1 && terning4 == 1 || terning1 == 1 && terning5 == 1 || terning2 == 1 && terning3 == 1 || terning2 == 1 && terning4 == 1 || terning2 == 1 && terning5 == 1 || terning3 == 1 && terning4 == 1 || terning3 == 1 && terning5 == 1 || terning4 == 1 && terning5 == 1) {
                twoPairs = 8;
                document.getElementById("2pairs").innerText = ("2 pairs: 8");
            }
        }
        else if (terning1 == 2 && terning2 == 2 || terning1 == 2 && terning3 == 2 || terning1 == 2 && terning4 == 2 || terning1 == 2 && terning5 == 2 || terning2 == 2 && terning3 == 2 || terning2 == 2 && terning4 == 2 || terning2 == 2 && terning5 == 2 || terning3 == 2 && terning4 == 2 || terning3 == 2 && terning5 == 2 || terning4 == 2 && terning5 == 2) {
            if (terning1 == 1 && terning2 == 1 || terning1 == 1 && terning3 == 1 || terning1 == 1 && terning4 == 1 || terning1 == 1 && terning5 == 1 || terning2 == 1 && terning3 == 1 || terning2 == 1 && terning4 == 1 || terning2 == 1 && terning5 == 1 || terning3 == 1 && terning4 == 1 || terning3 == 1 && terning5 == 1 || terning4 == 1 && terning5 == 1) {
                twoPairs = 6;
                document.getElementById("2pairs").innerText = ("2 pairs: 6");
            }
        }
        else {
            document.getElementById("2pairs").innerText = ("2 pairs: -");
            twoPairs = -1;
            extremelyStupidOffset = extremelyStupidOffset + 1;
        }
        diceReset()
        totalSumCalc()
    }
}
function fnc_fourOfAKind() {
    if (fourOfAKind == 0) {
        if (terning1 == 6 && terning2 == 6 && terning3 == 6 && terning4 == 6 || terning1 == 6 && terning2 == 6 && terning3 == 6 && terning5 == 6 || terning1 == 6 && terning2 == 6 && terning4 == 6 && terning5 == 6 || terning1 == 6 && terning3 == 6 && terning4 == 6 && terning5 == 6 || terning2 == 6 && terning3 == 6 && terning4 == 6 && terning5 == 6) {
            fourOfAKind = 24;
            document.getElementById("4OfAKind").innerText = ("4 of a kind: " + fourOfAKind)
        }
        else if (terning1 == 5 && terning2 == 5 && terning3 == 5 && terning4 == 5 || terning1 == 5 && terning2 == 5 && terning3 == 5 && terning5 == 5 || terning1 == 5 && terning2 == 5 && terning4 == 5 && terning5 == 5 || terning1 == 5 && terning3 == 5 && terning4 == 5 && terning5 == 5 || terning2 == 5 && terning3 == 5 && terning4 == 5 && terning5 == 5) {
            fourOfAKind = 20;
            document.getElementById("4OfAKind").innerText = ("4 of a kind: " + fourOfAKind)
        }
        else if (terning1 == 4 && terning2 == 4 && terning3 == 4 && terning4 == 4 || terning1 == 4 && terning2 == 4 && terning3 == 4 && terning5 == 4 || terning1 == 4 && terning2 == 4 && terning4 == 4 && terning5 == 4 || terning1 == 4 && terning3 == 4 && terning4 == 4 && terning5 == 4 || terning2 == 4 && terning3 == 4 && terning4 == 4 && terning5 == 4) {
            fourOfAKind = 16;
            document.getElementById("4OfAKind").innerText = ("4 of a kind: " + fourOfAKind)
        }
        else if (terning1 == 3 && terning2 == 3 && terning3 == 3 && terning4 == 3 || terning1 == 3 && terning2 == 3 && terning3 == 3 && terning5 == 3 || terning1 == 3 && terning2 == 3 && terning4 == 3 && terning5 == 3 || terning1 == 3 && terning3 == 3 && terning4 == 3 && terning5 == 3 || terning2 == 3 && terning3 == 3 && terning4 == 3 && terning5 == 3) {
            fourOfAKind = 12;
            document.getElementById("4OfAKind").innerText = ("4 of a kind: " + fourOfAKind)
        }
        else if (terning1 == 2 && terning2 == 2 && terning3 == 2 && terning4 == 2 || terning1 == 2 && terning2 == 2 && terning3 == 2 && terning5 == 2 || terning1 == 2 && terning2 == 2 && terning4 == 2 && terning5 == 2 || terning1 == 2 && terning3 == 2 && terning4 == 2 && terning5 == 2 || terning2 == 2 && terning3 == 2 && terning4 == 2 && terning5 == 2) {
            fourOfAKind = 8;
            document.getElementById("4OfAKind").innerText = ("4 of a kind: " + fourOfAKind)
        }
        else if (terning1 == 1 && terning2 == 1 && terning3 == 1 && terning4 == 1 || terning1 == 1 && terning2 == 1 && terning3 == 1 && terning5 == 1 || terning1 == 1 && terning2 == 1 && terning4 == 1 && terning5 == 1 || terning1 == 1 && terning3 == 1 && terning4 == 1 && terning5 == 1 || terning2 == 1 && terning3 == 1 && terning4 == 1 && terning5 == 1) {
            fourOfAKind = 4;
            document.getElementById("4OfAKind").innerText = ("4 of a kind: " + fourOfAKind)
        }
        else {
            document.getElementById("4OfAKind").innerText = ("4 of a kind: -")
            fourOfAKind = -1;
            extremelyStupidOffset = extremelyStupidOffset + 1;
        }
        diceReset()
        totalSumCalc()
    }
}
function fnc_smallStraight() {
    if (smallStraight == 0) {
        if (terning1 == 1 || terning2 == 1 || terning3 == 1 || terning4 == 1 || terning5 == 1) {
            if (terning1 == 2 || terning2 == 2 || terning3 == 2 || terning4 == 2 || terning5 == 2) {
                if (terning1 == 3 || terning2 == 3 || terning3 == 3 || terning4 == 3 || terning5 == 3) {
                    if (terning1 == 4 || terning2 == 4 || terning3 == 4 || terning4 == 4 || terning5 == 4) {
                        if (terning1 == 5 || terning2 == 5 || terning3 == 5 || terning4 == 5 || terning5 == 5) {
                            smallStraight = 15;
                            document.getElementById("smallStraight").innerText = ("Small straight: " + smallStraight);
                        }
                    }
                }
            }
        }
        else {
            document.getElementById("smallStraight").innerText = ("Small straight: -");
            smallStraight = -1;
            extremelyStupidOffset = extremelyStupidOffset + 1;
        }
        diceReset()
        totalSumCalc()
    }
}
function fnc_bigStraight() {
    if (bigStraight == 0) {
        if (terning1 == 2 || terning2 == 2 || terning3 == 2 || terning4 == 2 || terning5 == 2) {
            if (terning1 == 3 || terning2 == 3 || terning3 == 3 || terning4 == 3 || terning5 == 3) {
                if (terning1 == 4 || terning2 == 4 || terning3 == 4 || terning4 == 4 || terning5 == 4) {
                    if (terning1 == 5 || terning2 == 5 || terning3 == 5 || terning4 == 5 || terning5 == 5) {
                        if (terning1 == 6 || terning2 == 6 || terning3 == 6 || terning4 == 6 || terning5 == 6) {
                            bigStraight = 20;
                            document.getElementById("bigStraight").innerText = ("Big straight: " + bigStraight);
                        }
                    }
                }
            }
        }
        else {
            document.getElementById("bigStraight").innerText = ("Big straight: -");
            bigStraight = -1;
            extremelyStupidOffset = extremelyStupidOffset + 1;
        }
        diceReset()
        totalSumCalc()
    }
}
function fnc_house() {
    if (house == 0) {
        if (terning1 == 6 && terning2 == 6 && terning3 == 6 || terning1 == 6 && terning2 == 6 && terning4 == 6 || terning1 == 6 && terning2 == 6 && terning5 == 6 || terning1 == 6 && terning3 == 6 && terning4 == 6 || terning1 == 6 && terning3 == 6 && terning5 == 6 || terning1 == 6 && terning4 == 6 && terning5 == 6 || terning2 == 6 && terning3 == 6 && terning4 == 6 || terning2 == 6 && terning3 == 6 && terning5 == 6 || terning2 == 6 && terning4 == 6 && terning5 == 6 || terning3 == 6 && terning4 == 6 && terning5 == 6) {
            if (terning1 == 5 && terning2 == 5 || terning1 == 5 && terning3 == 5 || terning1 == 5 && terning4 == 5 || terning1 == 5 && terning5 == 5 || terning2 == 5 && terning3 == 5 || terning2 == 5 && terning4 == 5 || terning2 == 5 && terning5 == 5 || terning3 == 5 && terning4 == 5 || terning3 == 5 && terning5 == 5 || terning4 == 5 && terning5 == 5) {
                house = 28;
                document.getElementById("house").innerText = ("House: 28");
            }
            else if (terning1 == 4 && terning2 == 4 || terning1 == 4 && terning3 == 4 || terning1 == 4 && terning4 == 4 || terning1 == 4 && terning5 == 4 || terning2 == 4 && terning3 == 4 || terning2 == 4 && terning4 == 4 || terning2 == 4 && terning5 == 4 || terning3 == 4 && terning4 == 4 || terning3 == 4 && terning5 == 4 || terning4 == 4 && terning5 == 4) {
                house = 26;
                document.getElementById("house").innerText = ("House: 26");
            }
            else if (terning1 == 3 && terning2 == 3 || terning1 == 3 && terning3 == 3 || terning1 == 3 && terning4 == 3 || terning1 == 3 && terning5 == 3 || terning2 == 3 && terning3 == 3 || terning2 == 3 && terning4 == 3 || terning2 == 3 && terning5 == 3 || terning3 == 3 && terning4 == 3 || terning3 == 3 && terning5 == 3 || terning4 == 3 && terning5 == 3) {
                house = 24;
                document.getElementById("house").innerText = ("House: 24");
            }
            else if (terning1 == 2 && terning2 == 2 || terning1 == 2 && terning3 == 2 || terning1 == 2 && terning4 == 2 || terning1 == 2 && terning5 == 2 || terning2 == 2 && terning3 == 2 || terning2 == 2 && terning4 == 2 || terning2 == 2 && terning5 == 2 || terning3 == 2 && terning4 == 2 || terning3 == 2 && terning5 == 2 || terning4 == 2 && terning5 == 2) {
                house = 22;
                document.getElementById("house").innerText = ("House: 22");
            }
            else if (terning1 == 1 && terning2 == 1 || terning1 == 1 && terning3 == 1 || terning1 == 1 && terning4 == 1 || terning1 == 1 && terning5 == 1 || terning2 == 1 && terning3 == 1 || terning2 == 1 && terning4 == 1 || terning2 == 1 && terning5 == 1 || terning3 == 1 && terning4 == 1 || terning3 == 1 && terning5 == 1 || terning4 == 1 && terning5 == 1) {
                house = 20;
                document.getElementById("house").innerText = ("House: 20");
            }
        }
        else if (terning1 == 5 && terning2 == 5 && terning3 == 5 || terning1 == 5 && terning2 == 5 && terning4 == 5 || terning1 == 5 && terning2 == 5 && terning5 == 5 || terning1 == 5 && terning3 == 5 && terning4 == 5 || terning1 == 5 && terning3 == 5 && terning5 == 5 || terning1 == 5 && terning4 == 5 && terning5 == 5 || terning2 == 5 && terning3 == 5 && terning4 == 5 || terning2 == 5 && terning3 == 5 && terning5 == 5 || terning2 == 5 && terning4 == 5 && terning5 == 5 || terning3 == 5 && terning4 == 5 && terning5 == 5) {
            if (terning1 == 6 && terning2 == 6 || terning1 == 6 && terning3 == 6 || terning1 == 6 && terning4 == 6 || terning1 == 6 && terning5 == 6 || terning2 == 6 && terning3 == 6 || terning2 == 6 && terning4 == 6 || terning2 == 6 && terning5 == 6 || terning3 == 6 && terning4 == 6 || terning3 == 6 && terning5 == 6 || terning4 == 6 && terning5 == 6) {
                house = 27;
                document.getElementById("house").innerText = ("House: 27");
            }
            else if (terning1 == 4 && terning2 == 4 || terning1 == 4 && terning3 == 4 || terning1 == 4 && terning4 == 4 || terning1 == 4 && terning5 == 4 || terning2 == 4 && terning3 == 4 || terning2 == 4 && terning4 == 4 || terning2 == 4 && terning5 == 4 || terning3 == 4 && terning4 == 4 || terning3 == 4 && terning5 == 4 || terning4 == 4 && terning5 == 4) {
                house = 23;
                document.getElementById("house").innerText = ("House: 23");
            }
            else if (terning1 == 3 && terning2 == 3 || terning1 == 3 && terning3 == 3 || terning1 == 3 && terning4 == 3 || terning1 == 3 && terning5 == 3 || terning2 == 3 && terning3 == 3 || terning2 == 3 && terning4 == 3 || terning2 == 3 && terning5 == 3 || terning3 == 3 && terning4 == 3 || terning3 == 3 && terning5 == 3 || terning4 == 3 && terning5 == 3) {
                house = 21;
                document.getElementById("house").innerText = ("House: 21");
            }
            else if (terning1 == 2 && terning2 == 2 || terning1 == 2 && terning3 == 2 || terning1 == 2 && terning4 == 2 || terning1 == 2 && terning5 == 2 || terning2 == 2 && terning3 == 2 || terning2 == 2 && terning4 == 2 || terning2 == 2 && terning5 == 2 || terning3 == 2 && terning4 == 2 || terning3 == 2 && terning5 == 2 || terning4 == 2 && terning5 == 2) {
                house = 19;
                document.getElementById("house").innerText = ("House: 19");
            }
            else if (terning1 == 1 && terning2 == 1 || terning1 == 1 && terning3 == 1 || terning1 == 1 && terning4 == 1 || terning1 == 1 && terning5 == 1 || terning2 == 1 && terning3 == 1 || terning2 == 1 && terning4 == 1 || terning2 == 1 && terning5 == 1 || terning3 == 1 && terning4 == 1 || terning3 == 1 && terning5 == 1 || terning4 == 1 && terning5 == 1) {
                house = 17;
                document.getElementById("house").innerText = ("House: 17");
            }
        }
        else if (terning1 == 4 && terning2 == 4 && terning3 == 4 || terning1 == 4 && terning2 == 4 && terning4 == 4 || terning1 == 4 && terning2 == 4 && terning5 == 4 || terning1 == 4 && terning3 == 4 && terning4 == 4 || terning1 == 4 && terning3 == 4 && terning5 == 4 || terning1 == 4 && terning4 == 4 && terning5 == 4 || terning2 == 4 && terning3 == 4 && terning4 == 4 || terning2 == 4 && terning3 == 4 && terning5 == 4 || terning2 == 4 && terning4 == 4 && terning5 == 4 || terning3 == 4 && terning4 == 4 && terning5 == 4) {
            if (terning1 == 5 && terning2 == 5 || terning1 == 5 && terning3 == 5 || terning1 == 5 && terning4 == 5 || terning1 == 5 && terning5 == 5 || terning2 == 5 && terning3 == 5 || terning2 == 5 && terning4 == 5 || terning2 == 5 && terning5 == 5 || terning3 == 5 && terning4 == 5 || terning3 == 5 && terning5 == 5 || terning4 == 5 && terning5 == 5) {
                house = 22;
                document.getElementById("house").innerText = ("House: 22");
            }
            else if (terning1 == 6 && terning2 == 6 || terning1 == 6 && terning3 == 6 || terning1 == 6 && terning4 == 6 || terning1 == 6 && terning5 == 6 || terning2 == 6 && terning3 == 6 || terning2 == 6 && terning4 == 6 || terning2 == 6 && terning5 == 6 || terning3 == 6 && terning4 == 6 || terning3 == 6 && terning5 == 6 || terning4 == 6 && terning5 == 6) {
                house = 24;
                document.getElementById("house").innerText = ("House: 24");
            }
            else if (terning1 == 3 && terning2 == 3 || terning1 == 3 && terning3 == 3 || terning1 == 3 && terning4 == 3 || terning1 == 3 && terning5 == 3 || terning2 == 3 && terning3 == 3 || terning2 == 3 && terning4 == 3 || terning2 == 3 && terning5 == 3 || terning3 == 3 && terning4 == 3 || terning3 == 3 && terning5 == 3 || terning4 == 3 && terning5 == 3) {
                house = 18;
                document.getElementById("house").innerText = ("House: 18");
            }
            else if (terning1 == 2 && terning2 == 2 || terning1 == 2 && terning3 == 2 || terning1 == 2 && terning4 == 2 || terning1 == 2 && terning5 == 2 || terning2 == 2 && terning3 == 2 || terning2 == 2 && terning4 == 2 || terning2 == 2 && terning5 == 2 || terning3 == 2 && terning4 == 2 || terning3 == 2 && terning5 == 2 || terning4 == 2 && terning5 == 2) {
                house = 16;
                document.getElementById("house").innerText = ("House: 16");
            }
            else if (terning1 == 1 && terning2 == 1 || terning1 == 1 && terning3 == 1 || terning1 == 1 && terning4 == 1 || terning1 == 1 && terning5 == 1 || terning2 == 1 && terning3 == 1 || terning2 == 1 && terning4 == 1 || terning2 == 1 && terning5 == 1 || terning3 == 1 && terning4 == 1 || terning3 == 1 && terning5 == 1 || terning4 == 1 && terning5 == 1) {
                house = 14;
                document.getElementById("house").innerText = ("House: 14");
            }
        }
        else if (terning1 == 3 && terning2 == 3 && terning3 == 3 || terning1 == 3 && terning2 == 3 && terning4 == 3 || terning1 == 3 && terning2 == 3 && terning5 == 3 || terning1 == 3 && terning3 == 3 && terning4 == 3 || terning1 == 3 && terning3 == 3 && terning5 == 3 || terning1 == 3 && terning4 == 3 && terning5 == 3 || terning2 == 3 && terning3 == 3 && terning4 == 3 || terning2 == 3 && terning3 == 3 && terning5 == 3 || terning2 == 3 && terning4 == 3 && terning5 == 3 || terning3 == 3 && terning4 == 3 && terning5 == 3) {
            if (terning1 == 5 && terning2 == 5 || terning1 == 5 && terning3 == 5 || terning1 == 5 && terning4 == 5 || terning1 == 5 && terning5 == 5 || terning2 == 5 && terning3 == 5 || terning2 == 5 && terning4 == 5 || terning2 == 5 && terning5 == 5 || terning3 == 5 && terning4 == 5 || terning3 == 5 && terning5 == 5 || terning4 == 5 && terning5 == 5) {
                house = 19;
                document.getElementById("house").innerText = ("House: 19");
            }
            else if (terning1 == 4 && terning2 == 4 || terning1 == 4 && terning3 == 4 || terning1 == 4 && terning4 == 4 || terning1 == 4 && terning5 == 4 || terning2 == 4 && terning3 == 4 || terning2 == 4 && terning4 == 4 || terning2 == 4 && terning5 == 4 || terning3 == 4 && terning4 == 4 || terning3 == 4 && terning5 == 4 || terning4 == 4 && terning5 == 4) {
                house = 17;
                document.getElementById("house").innerText = ("House: 17");
            }
            else if (terning1 == 6 && terning2 == 6 || terning1 == 6 && terning3 == 6 || terning1 == 6 && terning4 == 6 || terning1 == 6 && terning5 == 6 || terning2 == 6 && terning3 == 6 || terning2 == 6 && terning4 == 6 || terning2 == 6 && terning5 == 6 || terning3 == 6 && terning4 == 6 || terning3 == 6 && terning5 == 6 || terning4 == 6 && terning5 == 6) {
                house = 21;
                document.getElementById("house").innerText = ("House: 21");
            }
            else if (terning1 == 2 && terning2 == 2 || terning1 == 2 && terning3 == 2 || terning1 == 2 && terning4 == 2 || terning1 == 2 && terning5 == 2 || terning2 == 2 && terning3 == 2 || terning2 == 2 && terning4 == 2 || terning2 == 2 && terning5 == 2 || terning3 == 2 && terning4 == 2 || terning3 == 2 && terning5 == 2 || terning4 == 2 && terning5 == 2) {
                house = 13;
                document.getElementById("house").innerText = ("House: 13");
            }
            else if (terning1 == 1 && terning2 == 1 || terning1 == 1 && terning3 == 1 || terning1 == 1 && terning4 == 1 || terning1 == 1 && terning5 == 1 || terning2 == 1 && terning3 == 1 || terning2 == 1 && terning4 == 1 || terning2 == 1 && terning5 == 1 || terning3 == 1 && terning4 == 1 || terning3 == 1 && terning5 == 1 || terning4 == 1 && terning5 == 1) {
                house = 11;
                document.getElementById("house").innerText = ("House: 11");
            }
        }
        else if (terning1 == 2 && terning2 == 2 && terning3 == 2 || terning1 == 2 && terning2 == 2 && terning4 == 2 || terning1 == 2 && terning2 == 2 && terning5 == 2 || terning1 == 2 && terning3 == 2 && terning4 == 2 || terning1 == 2 && terning3 == 2 && terning5 == 2 || terning1 == 2 && terning4 == 2 && terning5 == 2 || terning2 == 2 && terning3 == 2 && terning4 == 2 || terning2 == 2 && terning3 == 2 && terning5 == 2 || terning2 == 2 && terning4 == 2 && terning5 == 2 || terning3 == 2 && terning4 == 2 && terning5 == 2) {
            if (terning1 == 5 && terning2 == 5 || terning1 == 5 && terning3 == 5 || terning1 == 5 && terning4 == 5 || terning1 == 5 && terning5 == 5 || terning2 == 5 && terning3 == 5 || terning2 == 5 && terning4 == 5 || terning2 == 5 && terning5 == 5 || terning3 == 5 && terning4 == 5 || terning3 == 5 && terning5 == 5 || terning4 == 5 && terning5 == 5) {
                house = 16;
                document.getElementById("house").innerText = ("House: 16");
            }
            else if (terning1 == 4 && terning2 == 4 || terning1 == 4 && terning3 == 4 || terning1 == 4 && terning4 == 4 || terning1 == 4 && terning5 == 4 || terning2 == 4 && terning3 == 4 || terning2 == 4 && terning4 == 4 || terning2 == 4 && terning5 == 4 || terning3 == 4 && terning4 == 4 || terning3 == 4 && terning5 == 4 || terning4 == 4 && terning5 == 4) {
                house = 14;
                document.getElementById("house").innerText = ("House: 14");
            }
            else if (terning1 == 3 && terning2 == 3 || terning1 == 3 && terning3 == 3 || terning1 == 3 && terning4 == 3 || terning1 == 3 && terning5 == 3 || terning2 == 3 && terning3 == 3 || terning2 == 3 && terning4 == 3 || terning2 == 3 && terning5 == 3 || terning3 == 3 && terning4 == 3 || terning3 == 3 && terning5 == 3 || terning4 == 3 && terning5 == 3) {
                house = 12;
                document.getElementById("house").innerText = ("House: 12");
            }
            else if (terning1 == 6 && terning2 == 6 || terning1 == 6 && terning3 == 6 || terning1 == 6 && terning4 == 6 || terning1 == 6 && terning5 == 6 || terning2 == 6 && terning3 == 6 || terning2 == 6 && terning4 == 6 || terning2 == 6 && terning5 == 6 || terning3 == 6 && terning4 == 6 || terning3 == 6 && terning5 == 6 || terning4 == 6 && terning5 == 6) {
                house = 18;
                document.getElementById("house").innerText = ("House: 18");
            }
            else if (terning1 == 1 && terning2 == 1 || terning1 == 1 && terning3 == 1 || terning1 == 1 && terning4 == 1 || terning1 == 1 && terning5 == 1 || terning2 == 1 && terning3 == 1 || terning2 == 1 && terning4 == 1 || terning2 == 1 && terning5 == 1 || terning3 == 1 && terning4 == 1 || terning3 == 1 && terning5 == 1 || terning4 == 1 && terning5 == 1) {
                house = 8;
                document.getElementById("house").innerText = ("House: 8");
            }
        }
        else if (terning1 == 1 && terning2 == 1 && terning3 == 1 || terning1 == 1 && terning2 == 1 && terning4 == 1 || terning1 == 1 && terning2 == 1 && terning5 == 1 || terning1 == 1 && terning3 == 1 && terning4 == 1 || terning1 == 1 && terning3 == 1 && terning5 == 1 || terning1 == 1 && terning4 == 1 && terning5 == 1 || terning2 == 1 && terning3 == 1 && terning4 == 1 || terning2 == 1 && terning3 == 1 && terning5 == 1 || terning2 == 1 && terning4 == 1 && terning5 == 1 || terning3 == 1 && terning4 == 1 && terning5 == 1) {
            if (terning1 == 5 && terning2 == 5 || terning1 == 5 && terning3 == 5 || terning1 == 5 && terning4 == 5 || terning1 == 5 && terning5 == 5 || terning2 == 5 && terning3 == 5 || terning2 == 5 && terning4 == 5 || terning2 == 5 && terning5 == 5 || terning3 == 5 && terning4 == 5 || terning3 == 5 && terning5 == 5 || terning4 == 5 && terning5 == 5) {
                house = 13;
                document.getElementById("house").innerText = ("House: 13");
            }
            else if (terning1 == 4 && terning2 == 4 || terning1 == 4 && terning3 == 4 || terning1 == 4 && terning4 == 4 || terning1 == 4 && terning5 == 4 || terning2 == 4 && terning3 == 4 || terning2 == 4 && terning4 == 4 || terning2 == 4 && terning5 == 4 || terning3 == 4 && terning4 == 4 || terning3 == 4 && terning5 == 4 || terning4 == 4 && terning5 == 4) {
                house = 11;
                document.getElementById("house").innerText = ("House: 11");
            }
            else if (terning1 == 3 && terning2 == 3 || terning1 == 3 && terning3 == 3 || terning1 == 3 && terning4 == 3 || terning1 == 3 && terning5 == 3 || terning2 == 3 && terning3 == 3 || terning2 == 3 && terning4 == 3 || terning2 == 3 && terning5 == 3 || terning3 == 3 && terning4 == 3 || terning3 == 3 && terning5 == 3 || terning4 == 3 && terning5 == 3) {
                house = 9;
                document.getElementById("house").innerText = ("House: 9");
            }
            else if (terning1 == 2 && terning2 == 2 || terning1 == 2 && terning3 == 2 || terning1 == 2 && terning4 == 2 || terning1 == 2 && terning5 == 2 || terning2 == 2 && terning3 == 2 || terning2 == 2 && terning4 == 2 || terning2 == 2 && terning5 == 2 || terning3 == 2 && terning4 == 2 || terning3 == 2 && terning5 == 2 || terning4 == 2 && terning5 == 2) {
                house = 7;
                document.getElementById("house").innerText = ("House: 7");
            }
            else if (terning1 == 6 && terning2 == 6 || terning1 == 6 && terning3 == 6 || terning1 == 6 && terning4 == 6 || terning1 == 6 && terning5 == 6 || terning2 == 6 && terning3 == 6 || terning2 == 6 && terning4 == 6 || terning2 == 6 && terning5 == 6 || terning3 == 6 && terning4 == 6 || terning3 == 6 && terning5 == 6 || terning4 == 6 && terning5 == 6) {
                house = 15;
                document.getElementById("house").innerText = ("House: 15");
            }
        }
        else {
            document.getElementById("house").innerText = ("House: -")
            house = -1;
            extremelyStupidOffset = extremelyStupidOffset + 1;
        }
        diceReset()
        totalSumCalc()
    }
}
function fnc_chance() {
    chance = terning1 + terning2 + terning3 + terning4 + terning5;
    document.getElementById("chance").innerText = ("Chance: " + chance)
    diceReset()
    totalSumCalc()
}
function fnc_yatzy() {
    if (yatzy == 0 && terning1 == terning2 && terning1 == terning3 && terning1 == terning3 && terning1 == terning4 && terning1 == terning5) {
        yatzy = 50;
        document.getElementById("Yatzy").innerText = ("Yatzy: " + yatzy);
        diceReset()
    }
    else if (yatzy == 0) {
        document.getElementById("Yatzy").innerText = ("Yatzy: -")
        yatzy = -1;
        extremelyStupidOffset = extremelyStupidOffset + 1;
        diceReset()
    }
    totalSumCalc()

}

function totalSumCalc() {
    totalSum = sum + onePair + twoPairs + threeOfAKind + fourOfAKind + house + bonus + smallStraight + bigStraight + yatzy + chance + extremelyStupidOffset + ogExtremelyStupidOffset;
    document.getElementById("totalSum").innerText = ("Total sum: " + totalSum);
    if (totalSum > highscore) {
        highscore = totalSum;
        localStorage.setItem("highscore", highscore);
    }
    document.getElementById("highscore").innerText = ("Highscore: " + highscore);
}
