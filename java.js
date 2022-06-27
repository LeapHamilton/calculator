const display = document.querySelector(".calculator-screen");

let decimalPoint = false;
let posNeg = false;
let isAfterOperator = false;
let whichOperator 
let firstInput = [];
let mathOperator;
let secondInput = [];
let displayValue = display.value;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
   
      checkInput(button.id) /* button.id referenced as inputNumber or operator in later function parameters*/
    })})


function checkInput(inputNumber) {

    if (inputNumber === "posneg") {
        togglePosNeg();
    }

    if (inputNumber === "equal") {
       
        equalStuff();
    }
  
    if (inputNumber === "+" || inputNumber === "-" || inputNumber === "/" || inputNumber === "*") {
        useOperator(inputNumber);
    }

    if (!isNaN(inputNumber)) {
      
        displayAndAddToUserInput(inputNumber);
    }
    if (inputNumber === "point" && decimalPoint === false) {
        displayAndAddToUserInput(".");
        decimalPoint = true
    }

    if (inputNumber === "Del") {
        inputNumberPop = deleteNumber();
    }

    if (inputNumber ==="AC") {
        clearAllNumbers = clearAll();
    }

}

function togglePosNeg() {

    if (display.value.includes("-")) {
        display.value = display.value.slice(1)}
        else {
        display.value = "-" + display.value;}
    
        if ( isAfterOperator === true){
            console.log (posNeg);
            display.value = "-";}

    /*
if (posNeg === false) {
    display.value = "-" + display.value;
} 

if (posNeg === true && display.value.includes("-")) {
    display.value = display.value.slice(1)
};

if ( isAfterOperator === true){
    console.log (posNeg);
    display.value = "-";}

console.log(posNeg);
posNeg = posNeg !== true;
*/
};


function equalStuff() {
    posNeg = posNeg !== true;
    console.log("Toppity Tip!")
    secondInput = display.value;
    if (whichOperator === "+") {
        display.value = addNumbers(firstInput*1, secondInput*1);
}

    if (whichOperator === "-") {
    display.value = subtractNumbers(firstInput*1, secondInput*1);
}

    if (whichOperator === "/") {
    display.value = divideNumbers(firstInput*1, secondInput*1);
}
    if (whichOperator === "*") {
    display.value = multiplyNumbers(firstInput*1, secondInput*1);
}


}

function useOperator(operator) {
 console.log(operator)
    whichOperator = operator;
    firstInput = display.value;
    isAfterOperator = true;
    decimalPoint = false;
} 


function displayAndAddToUserInput(inputNumber) {
   
    if (isAfterOperator === true && display.value !== "-") {
        display.value="";
        isAfterOperator = false;
    }

    displayNumber (inputNumber);

}

function displayNumber(inputNumber) {

    display.value += inputNumber;
}

function addToVariable(inputNumber){
    firstInput.push(inputNumber);
    history1=parseInt(firstInput.join(''))
    console.log(history1);
};

function clearAll() {
    display.value = "";
    firstInput = "";
    secondInput = "";
    decimalPoint= false;
    posNeg= false;
}

function deleteNumber() {
    display.value=display.value.slice(0, -1);
    return;
}
      
  
function addNumbers(a,b) {
    return a + b;
}

function subtractNumbers(a,b) {
    return a - b;
}

function multiplyNumbers(a,b){
    return a * b;
}

function divideNumbers(a,b) {
    if (a === 0 && b === 0) {
        display.value = "";
        alert("Joker, eh? Why, I oughta divide YOU by zero!");
        return 0;}
        

    return a / b;
}


function operate(operator,a,b) {

    if (operator === '+' ) {
        return addNumbers (a,b);
    }
    if (operator === '-') {
    return subtractNumbers (a,b);
    } 
    if (operator === '*') {
        multiplyNumbers (a,b);
    } 
    if (operator === '/') {
        return divideNumbers (a,b);
    }

}