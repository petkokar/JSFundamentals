const nether = (input) => {
    input = input.split(', ').sort();
    let excludeRegEx = /[0-9+\-*\.]/g;
    let excludeChars = /[0-9]+/g;
    for (let name of input) {
        // let name = input[i]
        let filtered = name.replace(excludeRegEx, '');
        let totalHealth = 0;
        for(let i = 0; i < filtered.length; i++) {
            totalHealth += filtered.charCodeAt(i);
        }

        let match = name.match(excludeChars);
        console.log(match);
    }

}

nether('M3ph1st0**, Azazel');