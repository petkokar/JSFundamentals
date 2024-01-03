// function smallestNum (num1, num2, num3) {

//     let newArr = [];
//     newArr.push(num1, num2, num3);

//     newArr.sort(function(a, b) {
//         return a - b
//     });
//     let smallestNumber = newArr[0];
//     return smallestNumber;

// }
// console.log(smallestNum(2, 5, 3));

function demo (first, second, third) {

    return Math.min(first, second, third)

}

demo(5, 3, 2);