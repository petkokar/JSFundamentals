function leftRight (arr) {

    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
    let arrayLength = arr.length;

    for (let i = 0; i < arrayLength; i++) {
        for (let k = 0; k < arrayLength; k++) {
            if (k !== i) {
                let num = Number(arr[k]);
                if (k < i) {
                    leftSum += num;
                } else {
                    rightSum += num;
                }
            }
            if (i === 0) {
                leftSum = 0;
            } else if (i === arrayLength - 1) {
                rightSum = 0;
            }
        }

        if (leftSum === rightSum) {
            console.log(i);
            isEqual = true;
        } else {
            leftSum = 0;
            rightSum = 0;
        }
       
    }

    if (!isEqual) {
        console.log('no');
    }

}

leftRight([1, 2, 3, 3]);