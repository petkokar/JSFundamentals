function calculator(numberFirst, operator, numberSecond) {
    
    if (operator === '+') {
        console.log((numberFirst + numberSecond).toFixed(2));
    } else if (operator === '-'){
        console.log((numberFirst - numberSecond).toFixed(2));
    } else if (operator === '*') {
        console.log((numberFirst * numberSecond).toFixed(2));
    } else if (operator === '/') {
        console.log((numberFirst / numberSecond).toFixed(2));
    }
}

calculator(5, '+', 10);