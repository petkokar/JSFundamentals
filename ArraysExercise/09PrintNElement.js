function solve(arr) {

    let n = Number(arr.pop());
    let result = [];

    for (let i = 0; i < arr.length; i += n) {
        result.push(arr[i]);
    }
    console.log(result.join(' '));
    
}

solve(['5', '20', '31', '4', '20', '2'] );