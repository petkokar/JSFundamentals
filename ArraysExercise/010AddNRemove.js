function solve(arr) {

    let initialNum = 1;
    let result = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += initialNum;
        if (arr[i] === 'add') {
            result.push(sum);
        } else if (arr[i] === 'remove') {
            result.pop(i - 1, 1);
        }
    }
    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));
    }

}

solve(['add', 'add', 'remove', 'add', 'add']);