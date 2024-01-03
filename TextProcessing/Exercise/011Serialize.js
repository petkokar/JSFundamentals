function serialize(input) {
    input = input.shift().split('')
    for (let j = 0; j < input.length; j++) {
        let char = input[j];
        for (let i = 0; i < input.length; i++) {
            if (char === input[i]) {
                console.log(`${char}:` + `${i}/`);
            }
        }
    }
}

serialize(["abababa"])