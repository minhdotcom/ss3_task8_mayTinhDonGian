function show_screen () {
    document.getElementById("screen").innerHTML = screen;
}

function Numbers (value) {
    this.value = value;
    this.onScreen = function () {
        screen += this.value;
        tempNumber = Number(tempNumber + "" + this.value);
        show_screen();
        trackPoint = "";
    }
}

function Calculation (calc) {
    this.calc = calc;
    this.action = function () {
        if (trackPoint == "after calc") {

        } else {
            screen += this.calc;
            show_screen();
            if (trackPoint == "after equal") {
                number1 = result;
            } else number1 = tempNumber;
            tempNumber = 0;
            console.log("number1: " + number1);
            tempCalc = this.calc;
            console.log(tempCalc);
            trackPoint = "after calc";
        }
    }

}

function equal () {
    number2 = tempNumber;
    console.log("number2: " + number2);
    switch (tempCalc) {
        case " + ":
            result = number1 + number2;
            break;
        case " - ":
            result = number1 - number2;
            break;
        case " x ":
            result = number1 * number2;
            break;
        case " / ":
            result = number1 / number2;
            break;
    }

    console.log(result);
    screen = result;
    show_screen();
    screen = "";
    tempNumber = 0;
    tempCalc = "";
    trackPoint = "after equal";
}

function bigC () {
    screen = "";
    tempNumber = 0;
    tempCalc = "";
    show_screen();
}