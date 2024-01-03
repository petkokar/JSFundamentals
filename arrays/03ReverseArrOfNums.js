function solve(num, array) {

    let arr = [];
    for(let i = 0; i < num; i++) {
        arr.push(array[i]);
    }
    arr.reverse();
    console.log(arr.join(" "));


}

solve(3, [10, 20, 30, 40, 50])