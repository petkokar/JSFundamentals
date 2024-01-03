function signCheck(numOne, numTwo, numThree) {
    let multiply = (numOne, numTwo) => numOne * numTwo;
    let result = multiply(numOne, numTwo) * numThree;

    return result < 0 ? 'Negative' : 'Positive';
}

console.log(signCheck(5, 12, -15));