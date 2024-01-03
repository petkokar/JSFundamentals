function computerStore(input) {

    let totalPrice = 0;
    let index = 0;

    while (input[index] !== 'special' && input[index] !== 'regular') {
        let currPrice = Number(input[index]);

        if (currPrice <= 0) {
            console.log('Invalid price!');
            index++;
            continue;
        } else {
            totalPrice += currPrice;
        }
        index++;
    }
    if (totalPrice == 0) {
        console.log('Invalid order!');
    } else {
        let taxes = totalPrice * 0.2;
        let finalPrice = totalPrice + taxes;

        if (input[index] === 'special') {
            finalPrice -= finalPrice * 0.1;
        }

        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);
    }


}

computerStore([

    '1050',
    
    '200',
    
    '450',
    
    '2',
    
    '18.50',
    
    '16.86',
    
    'special'
    
    ]);