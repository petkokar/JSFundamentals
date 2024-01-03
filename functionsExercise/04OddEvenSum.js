function oddEvenSum (number) {

    let numAsString = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let num of numAsString) {
        num = Number(num);
        if (num % 2 === 0) {
            evenSum += num
        } else {
            oddSum += num;
        }

    }

    // for (let i = 0; i < numAsString.length; i++) {
    //     let curNum = Number(numAsString[i]);
    //     if (curNum % 2 === 0) {
    //         evenSum += curNum;
    //     } else {
    //         oddSum += curNum
    //     }
    // }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    
}

console.log(oddEvenSum(3495892137259234));