function numbers(input) {

    input = input.split(' ').map(Number);
    let inputLength = input.length;
    // let average = 0;
    let filteredArray = [];
    let avg = input.reduce((acc, val) => acc + val) / inputLength;
    // for (const num of input) {
    //     average += num;
    // }

    // average = average / inputLength;
    filteredArray = input
        .filter(e => e > avg)
        .sort((a, b) => b - a)
        .slice(0, 5)
        .join(' ');

    if (filteredArray.length < 1) {
        console.log('No');
    } else {
        console.log(filteredArray);
    }

}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');