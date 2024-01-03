function degustation(input) {
    let guestCollection = {};
    let command = input.shift();
    let unlikedCount = 0;
    

    while(command !== 'Stop') {
        let [action, guest, meal] = command.split('-');
        
        switch(action) {
            case 'Like':
                if (!guestCollection.hasOwnProperty(guest)) {
                    guestCollection[guest] = {
                        meals: []
                    }
                }
                if (!guestCollection[guest].meals.includes(meal)) {
                    guestCollection[guest].meals.push(meal);
                }
                break;
            case 'Dislike':
                if (!guestCollection.hasOwnProperty(guest)) {
                    console.log(`${guest} is not at the party.`);
                } else {
                    if (guestCollection[guest].meals.includes(meal)) {
                        unlikedCount++;
                        console.log(`${guest} doesn't like the ${meal}.`);
                        let index = guestCollection[guest].meals.indexOf(meal);
                        guestCollection[guest].meals.splice(index, 1) 
                    } else {
                        console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                    }
                }        
                
                break;
        }
        command = input.shift();
    }

    for(let guest in guestCollection) {
        console.log(`${guest}: ${guestCollection[guest].meals.join(', ')}`);
    }
    console.log(`Unliked meals: ${unlikedCount}`);
}

degustation(["Like-Katy-fish",

"Dislike-Katy-fish",

"Stop"])