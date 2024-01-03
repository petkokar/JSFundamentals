function negativePositiveNums(array) {

    let result = [];

    for (let num of array) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    return result.join('\n');
    
}
negativePositiveNums(['7', '-2', '8', '9']);