function sorting(array) {

    let sortedArray = array.sort((a, b) => b - a);
    let newArray = [];
    let sortedLength = sortedArray.length;
    
    for (let i = 0; i < sortedLength; i++) {
        let biggerNum = sortedArray.shift();
        let smallNum = sortedArray.pop();
        newArray.push(biggerNum);
        newArray.push(smallNum);
    }

    console.log(newArray.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])