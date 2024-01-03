function solve(input) {
    
    input = input.map(Number);
    let days = 30;
    let foodInGrams = input[0] * 1000;
    let hayInGrams = input[1] * 1000;
    let coverInGrams = input[2] * 1000;
    let weightInGrams = input[3] * 1000;

    for (let day = 1; day <= days; day++) {
        foodInGrams -= 300;
        if (day % 2 === 0) {
            hayInGrams -= foodInGrams * 0.05;
        }
        if (day % 3 === 0) {
            coverInGrams -= weightInGrams / 3;
        }
    }

    if (foodInGrams > 0 && hayInGrams > 0 && coverInGrams > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`);
    } else {
        console.log("Merry must go to the pet store!");
    }

}

solve(["10", "5", "5.2", "1"])