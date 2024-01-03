function solve(input) {
    input = input.shift();
    let pattern = /([|#])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let caloriesPerDay = 2000;
    // let items = {};
    let items = [];

    let match = pattern.exec(input);
    let totalCalories = 0;

    while (match) {
        let { item, date, calories} = match.groups;
        items.push({ item: item, date: date, calories: calories });
        
        // calories = Number(calories);
        // items[item] = {
        //     date,
        //     calories
        // }
        totalCalories += Number(calories);

        match = pattern.exec(input);
    }

    console.log(`You have food to last you for: ${Math.floor(totalCalories / caloriesPerDay)} days!`);
    // for(let itemName in items) {
    //     let item = items[itemName]
    //     let date = item.date;
    //     let calories = item.calories;
    //     console.log(`Item: ${itemName}, Best before: ${date}, Nutrition: ${calories}`);
    // }
    for(let i = 0; i < items.length; i++) {
        console.log(`Item: ${items[i].item}, Best before: ${items[i].date}, Nutrition: ${items[i].calories}`);
    }
    
}

solve([

    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);