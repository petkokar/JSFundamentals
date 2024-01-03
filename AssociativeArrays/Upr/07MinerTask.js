function miner(input) {
    let storage = {};

    for(let i = 0; i < input.length; i+=2){
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        if (!storage.hasOwnProperty(resource)) {
            storage[resource] = quantity;
        } else {
            storage[resource] = storage[resource] + quantity;
        }
    }

    for(let [resource, quantity] of Object.entries(storage)) {
        console.log(resource, '->', quantity);
    }
}

miner([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17'
    
    ])

miner([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])