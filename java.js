const display = document.querySelector(".calculator-screen");

let decimalPoint = false
let currentInput = []
let mathOperator
let totalOperation

let displayValue = display.value;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        
      checkInput(button.id) /* the button.id will be called inputNumber later*/
    })})


function checkInput(inputNumber) {
    if (!isNaN(inputNumber)) {
        displayAndAddToUserInput(inputNumber);
}
    if (inputNumber === "." && decimalPoint === false) {
        displayAndAddToUserInput(inputNumber);
        decimalPoint = true
    }
}


function displayAndAddToUserInput(inputNumber) {
    console.log(inputNumber);
    displayNumber (inputNumber);
    addToVariable (inputNumber);

}

function displayNumber(inputNumber) {
display.value += inputNumber;
}

function addToVariable (){};


       /*
        let userInput = button.id
        if (display.value === "0") {
            display.value = "";
        }
display.value += userInput;
displayValue = display.value;
console.log(displayValue)
*/

  
function addNumbers(a,b) {
    return a + b
}

function subtractNumbers(a,b) {
    return a - b
}

function multiplyNumbers(a,b){
    return a * b 
}

function divideNumbers(a,b) {
    return a / b
}


function operate(operator,a,b) {

    if (operator === '+' ) {
        return addNumbers (a,b);
    }
    if (operator === '-') {
    return subtractNumbers (a,b);
    } 
    if (operator === '*') {
        return multiplyNumbers (a,b);
    } 
    if (operator === '/') {
        return divideNumbers (a,b);
    }

}

/*
console.log(operate('+', 10,4));
console.log(operate('-',10,4));
console.log(operate('*',10,4));
console.log(operate('/',10,4));*/
