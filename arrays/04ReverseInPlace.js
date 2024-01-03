// function reverse(arr) {

//     arr.reverse();
//     console.log(arr.join(" "));

// }

function reverse(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let currEl = array[i];
        let nextEl = array[array.length - 1 - i];
        array[i] = nextEl;
        array[array.length - 1 - i] = currEl;
    }
    console.log(array.join(" "));
}


reverse(['a', 'b', 'c', 'd', 'e']);
reverse(['abc', 'def', 'hig', 'klm', 'nop'])