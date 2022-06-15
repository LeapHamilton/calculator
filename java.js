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
console.log(operate('+', 10,4));
console.log(operate('-',10,4));
console.log(operate('*',10,4));
console.log(operate('/',10,4));