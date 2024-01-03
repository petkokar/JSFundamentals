function store(stock, products) {

    let localStoreStorage = {};

    for (let i = 0; i < stock.length; i+=2) {
        let product = stock[i];
        
        localStoreStorage[product] = Number(stock[i + 1]);
    }

    for (let index = 0; index < products.length; index+=2) {
        const product = products[index];
        
        if (!localStoreStorage.hasOwnProperty(product)) {
            localStoreStorage[product] = 0;
        }

        localStoreStorage[product] += Number(products[index + 1]);
    }

    for (const productKey in localStoreStorage) {
        console.log(`${productKey} -> ${localStoreStorage[productKey]}`);
    }
}

store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])