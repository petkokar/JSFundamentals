function barIncome(input) {
    let regex = /%(?<customer>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/;
    let line = input.shift();
    let totalIncome = 0;
    while(line !== 'end of shift') {
        let match = line.match(regex);

        if (match && match.groups) {
            let { customer, product, count, price} = match.groups;
            console.log(`${customer}: ${product} - ${(Number(count) * Number(price)).toFixed(2)}`);
            totalIncome += Number(count) * Number(price);
        }
        line = input.shift();
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

barIncome(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift'])