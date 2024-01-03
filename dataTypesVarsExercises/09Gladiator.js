function gladiator(fightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetBrokenTimes = 0;
    let swordBrokenTimes = 0;
    let shieldBrokenTimes = 0;
    let armorBrokenTimes = 0;
   

    for (let i = 1; i <= fightsCount; i++) {
        let isSwordBroken = false;
        let isHelmetBroken = false;

        if (i % 2 === 0) {
            helmetBrokenTimes += 1;
            isHelmetBroken = true;
        }
        if (i % 3 === 0) {
            swordBrokenTimes += 1;
            isSwordBroken = true;
        }

        if (isSwordBroken && isHelmetBroken) {
            shieldBrokenTimes += 1;
            if (shieldBrokenTimes % 2 === 0) {
                armorBrokenTimes += 1;
            }
        }
    }

    let total = (helmetBrokenTimes * helmetPrice) + (swordBrokenTimes * swordPrice) + (shieldBrokenTimes * shieldPrice) + (armorBrokenTimes * armorPrice);
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

gladiator(7, 2, 3, 4, 5);