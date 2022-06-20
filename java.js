const display = document.querySelector(".calculator-screen");

let decimalPoint = false;
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
        console.log("Bippity Bop")
        clearAllNumbers = clearAll();
    }

}

function equalStuff (){
    console.log("Toppity Tip!")
    secondInput = display.value;
    if (whichOperator === "+") {
        display.value = addNumbers(firstInput, secondInput) * 1;
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
    /*console.log(inputNumber);*/
    if (isAfterOperator === true) {
        display.value="";
        isAfterOperator = false;
    }
    displayNumber (inputNumber);
    /*addToVariable (inputNumber);*/

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
    location.reload();
    /*
    firstInput.splice(0, firstInput.length);
    secondInput.splice(0, secondInput.length);
    display.value= "";*/


}

function deleteNumber() {
    firstInput.pop();
    display.value=display.value.slice(0, -1);
    history1=parseInt(firstInput.join(''))
    console.log(history1);
}
      
  
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
