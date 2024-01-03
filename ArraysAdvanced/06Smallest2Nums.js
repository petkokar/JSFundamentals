function solve(array) {

    array = array.sort((a, b) => a - b)
    .slice(0, 2)
    console.log(array.join(' '));

}

solve([30, 15, 50, 5]);