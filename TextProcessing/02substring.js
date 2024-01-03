function solve(str, start, count) {
    let ened = start + count;
    let result = str.substring(start, ened);
    console.log(result);
}

solve('ASentence', 1, 8);