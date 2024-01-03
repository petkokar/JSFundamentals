function maxNum(arr) {
    let result = '';

    let arrLength = arr.length;

    for (let i = 1; i <= arrLength; i++) {
        let isMax = true;

        let curNum = Number(arr[i - 1]);

        for (let j = i; j <= arrLength; j++) {
            let nextNum = Number(arr[j]);

            if (nextNum >= curNum) {
                isMax = false;
                break;
            }
        }

        if (isMax) {
            result += `${curNum} `
        }
    }
    console.log(result);

}

maxNum([1, 4, 3, 2]);