function manOWar(input) {

    let statusPirateShip = input.shift().split('>').map(Number);
    let statusWarShip = input.shift().split('>').map(Number);
    let statusPirateShipLength = statusPirateShip.length;
    let statusWarShipLength = statusWarShip.length;
    let maxHealthCapacity = Number(input.shift());

    let index = 0;
    let isDead = false;

    while (input[index] !== 'Retire') {
        if (isDead) {
            break;
        }
        let currAction = input[index].split(' ');
        let command = currAction[0];
        let damage = '';

        switch (command) {
            case 'Fire':

                let indexToDamage = Number(currAction[1]);
                damage = Number(currAction[2]);

                if (indexToDamage >= 0 && indexToDamage < statusWarShipLength) {

                    statusWarShip[indexToDamage] = statusWarShip[indexToDamage] - damage;

                    if (statusWarShip[indexToDamage] <= 0) {
                        isDead = true;
                        console.log("You won! The enemy ship has sunken.");
                        break;
                    }
                }
                break;
            case 'Defend':

                let startIndex = Number(currAction[1]);
                let endIndex = Number(currAction[2]);
                damage = Number(currAction[3]);

                if ((startIndex >= 0 && startIndex < statusPirateShipLength) && (endIndex >= startIndex && endIndex < statusPirateShipLength)) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        statusPirateShip[i] -= damage;
                        if (statusPirateShip[i] <= 0) {
                            isDead = true;
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }
                    }
                }

                break;
            case 'Repair':

                let indexToRepair = Number(currAction[1]);
                let addHealth = Number(currAction[2]);
                if (indexToRepair >= 0 && indexToRepair < statusPirateShipLength) {

                    if (statusPirateShip[indexToRepair] + addHealth > maxHealthCapacity) {
                        statusPirateShip[indexToRepair] = maxHealthCapacity;
                    } else {
                        statusPirateShip[indexToRepair] += addHealth;
                    }
                }

                break;
            case 'Status':

                let limitForRepair = maxHealthCapacity * 0.2;
                let filteredPirateShip = statusPirateShip.filter(el => el < limitForRepair);
                let sectionsCountForRepair = filteredPirateShip.length;
                console.log(`${sectionsCountForRepair} sections need repair.`);

                break;
        }

        index++;
    }

    if (!isDead) {
        let warShipPoints = statusWarShip.reduce((acc, el) => acc + el, 0);
        let pirateShipPoints = statusPirateShip.reduce((acc, el) => acc + el, 0);

        console.log(`Pirate ship status: ${pirateShipPoints}`);
        console.log(`Warship status: ${warShipPoints}`);
    }


}

manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]);