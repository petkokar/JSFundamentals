function burgerBus(input) {

    let citiesVisited = Number(input.shift());
    let totalProfit = 0;


    for (let city = 1; city <= citiesVisited; city++) {
        let currCity = input.shift();
        let earned = Number(input.shift());
        let expenses = Number(input.shift());
        let profit = 0;

        if (city % 3 === 0 && city % 5 === 0) {
            earned -= earned * 0.1;
        } else {
            if (city % 3 === 0) {
                expenses += expenses * 0.5;
            } else if (city % 5 === 0) {
                earned -= earned * 0.1;
            }
        }


        profit = earned - expenses;
        totalProfit += profit;

        console.log(`In ${currCity} Burger Bus earned ${profit.toFixed(2)} leva.`);
        
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);

}

burgerBus(["5",

"Lille",

"2226.00",

"1200.60",

"Rennes",

"6320.60",

"5460.20",

"Reims",

"600.20",

"452.32",

"Bordeaux",

"6925.30",

"2650.40",

"Montpellier",

"680.50",

"290.20"]);