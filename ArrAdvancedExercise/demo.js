function solve(array) {
    let result = '';

    let arrLength = array.length;

    for (let i = 1; i <= arrLength; i++) {
        let isMax = true;

        let currNum = Number(array[i - 1]);

        for (let j = i; j <= arrLength; j++) {
            let nextNum = Number(array[j]);

            if (nextNum >= currNum){
                isMax = false;
                break;
            }
        }
        if (isMax) {
            result += `${currNum} `
        }
    }
    console.log(result);

}

solve([1, 4, 3, 2]);