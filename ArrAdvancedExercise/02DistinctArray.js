function solve(numbers) {
    let newElArray = [];

    for (let number of numbers) {
        if (!newElArray.includes(number)) {
            newElArray.push(number);
        }
    }

    console.log(newElArray.join(' '));
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2])