function solve(input) {
    let result = '';
    for(let i = 0; i < input.length; i++) {
        if (input[i] !== input[i + 1]) {
            result += input[i]
        }
    }
    console.log(result);
}

solve('qqqwerqwecccwd');