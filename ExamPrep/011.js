function hearDelivery(input) {

    let neighborhood = input.shift().split('@').map(Number);
    let action = input.shift();
    let neighborhoodLength = neighborhood.length;
    let currIndex = 0;

    while(action !== 'Love!') {
        let actionSplitted = action.split(' ');
        let jump = actionSplitted.shift();
        let jumpLength = Number(actionSplitted.shift());
        currIndex += jumpLength;

        if (currIndex >= neighborhoodLength) {
            currIndex = 0;
        }

        if (neighborhood[currIndex] != 0) {
            neighborhood[currIndex] -= 2;

            if (neighborhood[currIndex] === 0) {
                console.log(`Place ${currIndex} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${currIndex} already had Valentine's day.`);
        }
        action = input.shift(); 
    }

    console.log(`Cupid's last position was ${currIndex}.`);
    let isSuccesful = true;
    
    for (const house of neighborhood) {
        if (house !== 0) {
            isSuccesful = false;
            break;
        }
    }

    if (isSuccesful) {
        console.log('Mission was successful.');
    } else {
        let count = 0;
        for (const house of neighborhood) {
            if (house != 0) {
                count++;
            }
        }
        console.log(`Cupid has failed ${count} places.`);
    }
}

hearDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])
;