function solve(array) {

    array = array
    .filter((num, i) => i % 2 !== 0)
    .map(a => 2 * a)
    .reverse();
    console.log(array.join(' '));

}

solve([10, 15, 20, 25]);