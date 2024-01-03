function solve(arr) {

    let rotationsCount = Number(arr[arr.length - 1]);
    arr.pop(arr.length - 1, 1);
    
    
    for (let i = 0; i < rotationsCount; i++) {
        let firstElement = arr.pop();
        arr.unshift(firstElement);
    }

    console.log(arr.join(' '));

}

solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);