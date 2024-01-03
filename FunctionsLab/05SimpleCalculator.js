function simpleCalculator (numOne, numTwo, operator) {

    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    switch(operator) {
        case 'add': return add(numOne, numTwo);
        case 'subtract': return subtract(numOne, numTwo);
        case 'multiply': return multiply(numOne, numTwo);
        case 'divide': return divide(numOne, numTwo);
    }
}

simpleCalculator(5, 5, 'add');