function sumEvenNum(nums) {

    let sum = 0;

    for (let num of nums) {
        num = Number(num);
        sum += num % 2 === 0 ? num : 0;
    }
    console.log(sum);
}

sumEvenNum(['1','3','5'])