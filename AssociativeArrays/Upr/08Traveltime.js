function travel(input) {
    let obj = {};

    for (let destination of input) {
        let [country, town, cost] = destination.split(' > ');
        if (!obj.hasOwnProperty(country)) {
            obj[country] = {};
        }

        if (!obj[country].hasOwnProperty(town)) {
            obj[country][town] = Number(cost);
        } else if (obj[country][town] > Number(cost)) {
            obj[country][town] = Number(cost);
        }
    }  

    let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [country, town] of sorted) {
        let finalString = `${country} -> `;
        let sortedTowns = Object.entries(town).sort((a, b) => a[1] - b[1]);
        sortedTowns.forEach(([town, price]) => {
            finalString += `${town} -> ${price} `;
        })

        console.log(finalString.trim());
    }

    // for (const [country, town, cost] of Object.entries(sorted)) {
    //     console.log(country, '>', town, '>', cost);
        
    // }
}

travel([

    "Bulgaria > Sofia > 500",
    
    "Bulgaria > Sopot > 800",
    
    "France > Paris > 2000",
    
    "Albania > Tirana > 1000",
    
    "Bulgaria > Sofia > 200"
    
    ])