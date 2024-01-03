// function repeat(str, n) {

//     let result = '';
//     result = str.repeat(n);

//     return result;

// }

// console.log(repeat('abc', 3));

function repeat(str, n) {
    let result = '';

    for(let i = 0; i < n; i++) {
        result += str;
    }

    return result;
}