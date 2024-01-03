function bitcoin(input) {

    let bitcoinCost = 11949.16;
    let gGoldCost = 67.51;
    let moneySaved = 0;
    let daysCount = 0;
    let boughtBitcoins = 0;
    let firstDay = 0;
    let sumBitcoins = 0;
    let purchasedBitcoins = 0;

    for(let day = 1; day <= input.length; day++) {
        daysCount += 1;
        let currDigDay = Number(input[day - 1]);

        if (day % 3 === 0) {
            currDigDay = currDigDay * 0.7;
        }

        moneySaved += currDigDay * gGoldCost;

        if(moneySaved >= bitcoinCost) {
            purchasedBitcoins = Math.floor(moneySaved / bitcoinCost);
            moneySaved = moneySaved - (bitcoinCost * purchasedBitcoins);
            sumBitcoins += purchasedBitcoins;
            boughtBitcoins += 1;
        }

        if (boughtBitcoins == 1) {
            firstDay = daysCount;
        }
    }

    console.log(`Bought bitcoins: ${sumBitcoins}`);
    if (firstDay != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${moneySaved.toFixed(2)} lv.`);

}

bitcoin([3124.15, 504.212, 2511.124]);