function blackFlag(input) {

    input = input.map(Number);
    let days = input.shift();
    let plunderPerDay = input.shift();
    let targetPlunder = input.shift();
    let totalPlunder = 0;

    for (let day = 1; day <= days; day++) {
        totalPlunder += plunderPerDay;

        if (day % 3 === 0) {
            totalPlunder += plunderPerDay * 0.5;
        } 
        if (day % 5 === 0) {
            totalPlunder -= totalPlunder * 0.3;
        }
    }

    if (totalPlunder >= targetPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = ((totalPlunder / targetPlunder) * 100);
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }

}

blackFlag(["10",
"20",
"380"]);