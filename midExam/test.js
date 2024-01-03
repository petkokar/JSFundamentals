function solve(arr, point, typeS) {

    let excludedNum = arr[point];
    let arrLeft = arr.slice(0, point - 1);
    let arrRight = arr.slice(point + 1);
    let leftCheapSum = 0;
    let leftExpSum = 0;
    let rightCheapSum = 0;
    let rightExpSum = 0;
    

    if (typeS === 'cheap') {
        leftCheapSum = arrLeft.filter(el => el < excludedNum).reduce((a, b) => a + b, 0);
        rightCheapSum = arrRight.filter(el => el < excludedNum).reduce((a, b) => a + b, 0);
    }
    if (typeS === 'expensive') {
        rightExpSum = arrRight.filter(el => el >= excludedNum).reduce((a, b) => a + b, 0);
        leftExpSum = arrLeft.filter(el => el >= excludedNum).reduce((a, b) => a + b, 0);
    }

    console.log(leftCheapSum);
    console.log(rightCheapSum);
    console.log(rightExpSum);
    console.log(leftExpSum);
}

solve([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");