function storage(input) {

    let map = new Map();
    
    for (const string of input) {
        let token = string.split(' ');
        let item = token.shift();
        let quantity = Number(token.shift());

        if (!map.has(item)) {
            map.set(item, +quantity);
        } else {
            let currQuantity = map.get(item);
            let newQuantity = currQuantity += quantity;
            map.set(item, newQuantity)
        }
    }

    
    for (const kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }

    // let storage = {};

    // input.map((el) => {
    //     let [item, quantity] = el.split(' ');
    //     if (storage.hasOwnProperty(item)) {
    //         storage[item] += Number(quantity);
    //     } else {
    //         storage[item] = Number(quantity);
    //     }
        
    // })

    // for(let [product, quantity] of Object.entries(storage)) {
    //     console.log(product, '->', quantity);
    // }
}

storage(['apple 50',

'apple 61',

'coffee 115',

'coffee 40'])