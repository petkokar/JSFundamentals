function solve(n) {
    let index = 1;
    let number = 0;
    let sumNums = 0;

    while (index <= n) {
        number += 1;
        if (number % 2 === 0) {
            continue;
        } else {
            console.log(number);
            sumNums += number;
        }
        index++
    }
    console.log(`Sum: ${sumNums}`);

}

solve(5);