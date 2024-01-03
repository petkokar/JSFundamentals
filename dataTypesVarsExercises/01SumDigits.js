function sumDigits(number) {

    let sumNums = 0;
    number = number.toString();
    
    for(let i = 0; i < number.length; i++) {
        let curNum = Number(number[i]);
        sumNums += curNum;
    }

    console.log(sumNums);

}

sumDigits(245678)