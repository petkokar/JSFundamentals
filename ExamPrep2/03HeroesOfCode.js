function solve(input) {
    let heroesCount = Number(input.shift());
    let chosenHeroes = input.splice(0, heroesCount);
    let herosObj = {};

    for (let hero of chosenHeroes) {
        let [name, hp, mana] = hero.split(' ');
        hp = Number(hp);
        mana = Number(mana);
        herosObj[name] = { hp, mana };
        
    }

    let command = input.shift();

    while (command !== 'End') {
        let [action, name, number, argument] = command.split(' - ');

        if (herosObj.hasOwnProperty(name)) {

            if (action === 'CastSpell') {
                if (herosObj[name]['mana'] >= Number(number)) {
                    herosObj[name]['mana'] -= Number(number);
                    console.log(`${name} has successfully cast ${argument} and now has ${herosObj[name]['mana']} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${argument}!`);
                }
            } else if (action === 'TakeDamage') {
                herosObj[name]['hp'] -= Number(number);
                if (herosObj[name]['hp'] > 0) {
                    console.log(`${name} was hit for ${Number(number)} HP by ${argument} and now has ${herosObj[name]['hp']} HP left!`);
                } else {
                    delete herosObj[name];
                    console.log(`${name} has been killed by ${argument}!`);
                }
            } else if (action === 'Recharge') {
                if (herosObj[name]['mana'] + Number(number) > 200) {
                    let amountRecovered = 200 - herosObj[name]['mana'];
                    herosObj[name]['mana'] = 200;
                    console.log(`${name} recharged for ${amountRecovered} MP!`);
                } else {
                    herosObj[name]['mana'] += Number(number);
                    console.log(`${name} recharged for ${Number(number)} MP!`);
                }
            } else if (action === 'Heal') {
                if (herosObj[name]['hp'] + Number(number) > 100) {
                    let amountHealed = 100 - herosObj[name]['hp'];
                    herosObj[name]['hp'] = 100;
                    console.log(`${name} healed for ${amountHealed} HP!`);
                } else {
                    herosObj[name]['hp'] += Number(number);
                    console.log(`${name} healed for ${Number(number)} HP!`);
                }
            }
        }

        command = input.shift();
    }

    for(let heroName in herosObj) {
        console.log(heroName);
        let hero = herosObj[heroName]
        let mana = hero['mana'];
        let hp = hero['hp'];
        console.log(`  HP: ${hp}`);
        console.log(`  MP: ${mana}`);
    }
    

}

// solve(['2', 'Solmyr 85 120', 'Kyrre 99 50', 'Heal - Solmyr - 10', 'Recharge - Solmyr - 50', 'TakeDamage - Kyrre - 66 - Orc', 'CastSpell - Kyrre - 15 - ViewEarth', 'End'])
solve(['4', 'Adela 90 150', 'SirMullich 70 40', 'Ivor 1 111', 'Tyris 94 61', 'Heal - SirMullich - 50', 'Recharge - Adela - 100', 'CastSpell - Tyris - 1000 - Fireball', 'TakeDamage - Tyris - 99 - Fireball', 'TakeDamage - Ivor - 3 - Mosquito', 'End'])