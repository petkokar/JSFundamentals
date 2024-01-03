function train(array) {

    let wagons = array[0].split(' ').map(Number);
    let wagonCapacity = Number(array[1]);

    for (let i = 2; i < array.length; i++) {
        let command = array[i].split(' ');

        if (command[0] === 'Add') {
            wagons.push(Number(command[1]));
        } else {
            let passengers = Number(command[0]);

            for (let currentWagon = 0; currentWagon < wagons.length; currentWagon++) {
                if (wagonCapacity - wagons[currentWagon] >= passengers) {
                    wagons[currentWagon] += passengers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])