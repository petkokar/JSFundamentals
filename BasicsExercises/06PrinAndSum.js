function solve(start, end) {

    let sum = 0;
    let numsRow = '';

    for (let i = start; i <= end; i++) {
        sum += i;
        numsRow += `${i} `;
    }

    console.log(numsRow);
    console.log(`Sum: ${sum}`);

}

solve(5, 10);