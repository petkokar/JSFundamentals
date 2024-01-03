function counterStrike (input) {

    let energy = Number(input.shift());
    let command = input.shift();
    let wonBattlesCount = 0;

    while (command !== 'End of battle') {
        let currDistance = Number(command);

        if (energy - currDistance >= 0) {
            energy -= currDistance;
            wonBattlesCount++;
        } else {
            console.log(`Not enough energy! Game ends with ${wonBattlesCount} won battles and ${energy} energy`);
            break;
        }

        if (wonBattlesCount % 3 === 0) {
            energy += wonBattlesCount;
        }
        
        command = input.shift();
    }

    if (command === 'End of battle') {
        console.log(`Won battles: ${wonBattlesCount}. Energy left: ${energy}`);
    }

}

counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"]);