function bossRush(input) {
    let inputsCount = Number(input.shift());
    input = input.splice(0, inputsCount);
    let regExp = /\|(?<name>[A-Z]{4,})\|:#(?<profession>[A-Za-z]+ [A-Za-z]+)#/g;

    for (let hero of input) {
        let match = regExp.exec(hero)

        if(match) {
            let name = match.groups.name;
            let profession = match.groups.profession;
            console.log(`${name}, The ${profession}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${profession.length}`);
        } else {
            console.log('Access denied!');
        }
    }
}

bossRush(['3', '|PETER|:#Lead architect#', '|GEORGE|:#High Overseer#', '|ALEX|:#Assistant Game Developer#']);