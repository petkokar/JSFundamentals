function addAndSubstract(input) {

    let sumOldArr = 0;
    let sumNewArr = 0;
    let arrayLength = input.length;

    for (let i = 0; i < arrayLength; i++) {

        let currNum = Number(input[i]);
        sumOldArr += currNum;
        if (currNum % 2 === 0) {
            currNum += i;
        } else {
            currNum -= i;
        }

        input[i] = currNum;
        sumNewArr += currNum;
    }

    console.log(input);
    console.log(sumOldArr);
    console.log(sumNewArr);

}

addAndSubstract([5, 15, 23, 56, 35])

// let newArray = [];
//     let newArraySum = 0;
//     let oldArraySum = 0;

//     for (let number of array) {
//         oldArraySum += number;
//         if (number % 2 === 0) {
//             number += array.indexOf(number);
//             newArraySum += number;
//             newArray.push(number);
//         } else {
//             number -= array.indexOf(number);
//             newArraySum += number;
//             newArray.push(number);
//         }
//     }
//     console.log(newArray);
//     console.log(newArraySum);
//     console.log(oldArraySum);  