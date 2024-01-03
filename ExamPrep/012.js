function theLift(input) {

    let quene = Number(input.shift());
    let state = input.shift().split(' ').map(Number);
    let maxPerLift = 4;

    // if (state.every(el => el >= maxPerLift)) {
    //     console.log(`There isn't enough space! ${quene} people in a queue!`) 
    //     console.log(`${state.join(' ')}`);
    //     break;
    // }

    for (let i = 0; i < state.length; i++) {
        if (state[i] < maxPerLift) {
            if (quene >= maxPerLift - state[i]) {
                quene -= maxPerLift - state[i];
                state[i] = maxPerLift;
            } else {
                state[i] += quene;
                quene = 0;
            }
        }
    }
    let isAvailable = false;
    for (const lift of state) {
        if (lift < maxPerLift) {
            isAvailable = true;
            break;
        }
    }

    if (!isAvailable && quene > 0) {
        console.log(`There isn't enough space! ${quene} people in a queue!`)
    }

    if (isAvailable && quene == 0) {
        console.log(`The lift has empty spots!`);
    }

    console.log(state.join(' '));
}

// theLift(["20", "0 2 0"])
theLift([
    "15",
    "0 0 0 0 0"
]
)