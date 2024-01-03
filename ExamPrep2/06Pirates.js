function solve(input) {
    let targets = {};
    let command = input.shift();

    while (command !== 'Sail') {
        let [city, population, gold] = command.split('||');
        population = Number(population);
        gold = Number(gold);
        if (targets.hasOwnProperty(city)) {
            targets[city]['population'] += population;
            targets[city]['gold'] += gold;
        } else {
            targets[city] = {
                population,
                gold
            }
        }
        command = input.shift();
    }
    while (command !== 'End') {
        let [action, city, argument1, argument2] = command.split('=>');

        switch (action) {
            case 'Plunder':

                targets[city]['population'] -= Number(argument1);
                // targets[city]['gold'] -= Number(argument2);
                targets[city].gold -= Number(argument2);
                
                console.log(`${city} plundered! ${Number(argument2)} gold stolen, ${Number(argument1)} citizens killed.`);

                if (targets[city]['population'] <= 0 || targets[city]['gold'] <= 0) {
                    console.log(`${city} has been wiped off the map!`);
                    delete targets[city];
                }
                break;
            case 'Prosper':

                argument1 = Number(argument1);

                if (argument1 > 0) {
                    targets[city]['gold'] += Number(argument1);
                    console.log(`${Number(argument1)} gold added to the city treasury. ${city} now has ${targets[city]['gold']} gold.`);
                } else {
                    console.log(`Gold added cannot be a negative number!`);
                }
                break;
        }

        command = input.shift();
    }

    if (Object.keys(targets).length == 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${Object.keys(targets).length} wealthy settlements to go to:`);
        for (const key in targets) {
            console.log(`${key} -> Population: ${targets[key]['population']} citizens, Gold: ${targets[key]['gold']} kg`);
        }
    }
}

solve(["Nassau||95000||1000",

"San Juan||930000||1250",

"Campeche||270000||690",

"Port Royal||320000||1000",

"Port Royal||100000||2000",

"Sail",

"Prosper=>Port Royal=>-200",

"Plunder=>Nassau=>94000=>750",

"Plunder=>Nassau=>1000=>150",

"Plunder=>Campeche=>150000=>690",

"End"])