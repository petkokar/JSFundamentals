function solve(input) {
    input = input.shift();
    let regex = /\+359([ -])2\1\d{3}\1\d{4}/g;

    let result = input.match(regex);
    console.log(result.join(', '));
}

solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);