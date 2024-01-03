function radioCrystals (input) {

    let targetThickness = input[0];
    
    for (let i = 1; i < input.length; i++) {
        let startingChunks = input[i];
    

    let cutCount = 0;
    let lapCount = 0;
    let grindCount = 0;
    let EtchCount = 0;

    let cut = (number) => number / 4;
    let lap = (number) => number - number * 0.2;
    let grind = (number) => number - 20;
    let etch = (number) => number - 2;
    let xray = (number) => number + 1;

    console.log(`Processing chunk ${startingChunks} microns`);

    while (startingChunks !== targetThickness) {

        while (startingChunks / 4 >= targetThickness) {
            startingChunks = cut(startingChunks);
            cutCount++;
        }
        if (cutCount > 0) {
            console.log(`Cut x${cutCount}`);
            console.log(`Transporting and washing`);
            startingChunks = Math.floor(startingChunks);
        }

        while (startingChunks * 0.8 >= targetThickness) {
            startingChunks = lap(startingChunks);
            lapCount++;
        }
        if (lapCount > 0) {
            console.log(`Lap x${lapCount}`);
            console.log(`Transporting and washing`);
            startingChunks = Math.floor(startingChunks)
        }
        
        while (startingChunks - 20 >= targetThickness) {
            startingChunks = startingChunks - 20;
            grindCount++;
        }

        if  (grindCount > 0) {
            console.log(`Grind x${grindCount}`);
            console.log(`Transporting and washing`);
            startingChunks = Math.floor(startingChunks);
        }
        
        while (startingChunks - 2 >= targetThickness - 1) {
            startingChunks = startingChunks - 2;
            EtchCount++;
        }

        if (EtchCount > 0) {
            console.log(`Etch x${EtchCount}`);
            console.log(`Transporting and washing`);
            startingChunks = Math.floor(startingChunks);
        }
        
        if (startingChunks < targetThickness) {
            startingChunks = xray(startingChunks);
            console.log(`X-ray x1`);
        }
    }
    console.log(`Finished crystal ${targetThickness} microns`);
}

}

radioCrystals([1000, 4000, 8100]);