function inventory(input) {

    let heroes = [];

    for (const element of input) {
        let [name, level, items] = element.split(' / ');

        let hero = {
            name: name,
            level: Number(level),
            items: items
        }

        heroes.push(hero);

    }

    heroes.sort((a, b) => a.level - b.level);

    for (const heroObject of heroes) {
        console.log(`Hero: ${heroObject.name}`);
        console.log(`level => ${heroObject.level}`);
        console.log(`items => ${heroObject.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);