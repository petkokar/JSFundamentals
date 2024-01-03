function specialNums(number) {

    for (let i = 1; i <= number; i++) {
        let currNum = i;
        let sumOfDigits = 0;
        while (currNum > 0) {
            sumOfDigits += currNum % 10;
            currNum = Math.trunc(currNum / 10);
        }

        const isSpecialNumber = sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11;

        console.log(isSpecialNumber ? `${i} -> True` : `${i} -> False`);
    }

}

specialNums(15);