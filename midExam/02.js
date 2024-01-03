function spaceTravel (input) {

    let travelRoute = input.shift().split('||');
    let startFuel = Number(input.shift());
    let ammunition = Number(input.shift());
    let commands = travelRoute.shift();

    while (commands !== 'Titan') {
        let action = commands.split(' ');
        let command = action.shift();
        let integer = Number(action.shift());
        let isFailed = false;

        switch(command) {
            case 'Travel':
                if (startFuel >= integer * 1) {
                    console.log(`The spaceship travelled ${integer} light-years.`);
                    startFuel -= integer * 1;
                } else {
                    console.log('Mission failed.');
                    isFailed = true;
                }
            break;

            case 'Enemy':
                if (ammunition >= integer) {
                    ammunition -= integer;
                    console.log(`An enemy with ${integer} armour is defeated.`);
                } else {
                    if (startFuel >= integer * 2) {
                        console.log(`An enemy with ${integer} armour is outmaneuvered.`);
                        startFuel -= integer * 2;
                    } else {
                        console.log('Mission failed.');
                        isFailed = true;
                    }
                }
            break;

            case 'Repair':
                let addedAmmo = integer * 2;
                ammunition += addedAmmo;
                let addedFuel = integer;
                startFuel += addedFuel;
                console.log(`Ammunitions added: ${addedAmmo}.`);
                console.log(`Fuel added: ${addedFuel}.`);
            break;
        }

        if (isFailed) {
            break;
        }

        commands = travelRoute.shift();
    }

    if (commands === 'Titan') {
        console.log('You have reached Titan, all passengers are safe.');
    }
}

spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan', '50', '80']);