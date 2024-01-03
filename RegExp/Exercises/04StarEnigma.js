function enigma(input) {
    let messagesCount = Number(input.shift());
    let charsToFind = ['s', 't', 'a', 'r'];
    let regex = /@(?<planetName>[A-Za-z]+)([^@\-:!>]*):[\d]+([^@\-:!>]*)!(?<attackType>[AD])!([^@\-:!>]*)\->[\d]+([^@\-:!>]*)/;
    let attacked = [];
    let destroyed = [];

    for(let i = 0; i < messagesCount; i++) {
        let charsCount = 0;
        let message = input[i].split('').map(e => e.toLowerCase());
        for (let char of message) {
            if (charsToFind.includes(char)) {
                charsCount++
            }
        }
        let resultMessage = '';
        message = input[i];
        for (let i = 0; i < message.length; i++) {
            let result = message.charCodeAt(i) - charsCount;
            resultMessage += String.fromCharCode(result);
        }

        let match = resultMessage.match(regex);
        if (match && match.groups) {
            let { planetName, planetPopulation, attackType, soldierCount } = match.groups;
            if (attackType === 'A') {
                attacked.push(planetName);
            } else if (attackType === 'D') {
                destroyed.push(planetName);
            }
        }
    }

    console.log(`Attacked planets: ${attacked.length}`);
    if (attacked.length !== 0) {
        attacked.sort();
        for (const planet of attacked) {
            console.log(`-> ${planet}`);
        }
    }
    console.log(`Destroyed planets: ${destroyed.length}`);
    if (destroyed.length !== 0) {
        destroyed.sort();
        for (const planet of destroyed) {
            console.log(`-> ${planet}`);
        }
    }
}

enigma(['3',

"tt(''DGsvywgerx>6444444444%H%1B9444",

'GQhrr|A977777(H(TTTT',

'EHfsytsnhf?8555&I&2C9555SR'])