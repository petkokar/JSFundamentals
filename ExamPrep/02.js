function treasureHunt(input) {

    let initialLoot = input[0].split('|');
    let index = 1;

    while (input[index] !== "Yohoho!") {

        let currAction = input[index].split(' ');
        let command = currAction[0];

        if (command === 'Loot') {
            //currAction.filter(item => !initialLoot.includes(item)).forEach(item => initialLoot.unshift(item))
            for (let j = 1; j < currAction.length; j++) {

                if (!initialLoot.includes(currAction[j])) {
                    initialLoot.unshift(currAction[j])
                }
            }

        } else if (command === 'Drop') {

            let indexToRemove = Number(currAction[1]);
            if (indexToRemove >= 0 && indexToRemove < initialLoot.length) {
                let removedItem = initialLoot.splice(indexToRemove, 1);
                initialLoot.push(removedItem);
            }
            // let currItem = initialLoot.at(indexToRemove);
            // initialLoot.splice(indexToRemove, 1);
            // initialLoot.push(currItem);

        } else if (command === 'Steal') {

            let stolenItemsCount = Number(currAction[1]);
            let newInitialLoot = initialLoot.splice(-stolenItemsCount, stolenItemsCount);
            console.log(newInitialLoot.join(', '));
        }

        index++;

    }

    let initialLootLength = initialLoot.length;
    let sumOfAllItemsLength = 0;

    if (initialLootLength < 1) {

        console.log("Failed treasure hunt.");

    } else {

        for (let i = 0; i < initialLootLength; i++) {
            let currTreasure = initialLoot[i];
            let treasureLength = currTreasure.length;
            sumOfAllItemsLength += treasureLength;
        }

        let averageGain = (sumOfAllItemsLength / initialLootLength).toFixed(2);

        console.log(`Average treasure gain: ${averageGain} pirate credits.`);
    }

}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",

"Loot Wood Gold Coins",

"Loot Silver Pistol",

"Drop 3",

"Steal 3",

"Yohoho!"]);