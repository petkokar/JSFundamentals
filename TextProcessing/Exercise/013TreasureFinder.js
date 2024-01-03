function finder(input) {
    let key = input.shift().split(' ').map(Number);

    let command = input.shift();
    while(command !== 'find') {
        let result = '';
        for(let i = 0; i < command.length; i++) {
            let asciiCode = command.charCodeAt(i);
            let keyChar = key.charAt(i % key.length);
            let newChar = String.fromCharCode(asciiCode - keyChar);
            result += newChar;
        }
    }
}

finder(["1 2 1 3", "ikegfp'jpne)bv=41P83X@", "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA", "find"])