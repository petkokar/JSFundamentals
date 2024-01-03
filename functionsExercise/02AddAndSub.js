function demo (first, second, third) {

    function sum(first, second) {
        return first + second;
    }

    let sumResult = sum(first, second);

    function subtract(sum, third) {
        return sum - third;
    }

    return subtract(sumResult, third)

}

console.log(demo(23, 6, 10));