function angryCat (array, entry, type) {

    let leftCheapSum = 0;
    let leftExpSum = 0;
    let rightCheapSum = 0;
    let rightExpSum = 0;
    let number = array[entry];

    for (let i = 0; i < array.length; i++) {
        if (type === 'cheap') {
            if (array[i] < number) {
                if (i < entry) {
                    leftCheapSum += array[i];
                } else if (i > entry) {
                    rightCheapSum += array[i];
                }
            } 
        }
        if (type === 'expensive') {
            if (array[i] >= number) {
                if (i < entry) {
                    leftExpSum += array[i];
                } else if (i > entry) {
                    rightExpSum += array[i];
                }

            }
        }
    }

    if (type == 'cheap') {
        if (leftCheapSum >= rightCheapSum) {
            console.log(`Left - ${leftCheapSum}`);
        } else {
            console.log(`Right - ${rightCheapSum}`);
        }
    }

    if (type == 'expensive') {
        if (leftExpSum >= rightExpSum) {
            console.log(`Left - ${leftExpSum}`);
        } else {
            console.log(`Right - ${rightExpSum}`);
        }
    }
    // console.log(leftCheapSum);
    // console.log(rightCheapSum);
    // console.log(rightExpSum);
    // console.log(leftExpSum);

    return [leftCheapSum, rightCheapSum, rightExpSum, leftExpSum];
}

    


let result = angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive")
console.log(result);