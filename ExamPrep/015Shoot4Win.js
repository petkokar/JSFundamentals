function shootForTheWin(input) {

    let targets = input.shift().split(' ').map(Number);
    let index = input.shift();
    let shootCount = 0;

    while(index !== 'End') {
        index = Number(index);

        if (index >= 0 && index < targets.length) {
            for (let i = 0; i < targets.length; i++) {
                if (i != index && targets[i] != -1) {
                    if (targets[i] > targets[index]) {
                        targets[i] -= targets[index];
                        
                    } else {
                        targets[i] += targets[index];
                        
                    }
                }
            }
            targets[index] = -1;
            shootCount++;
        }

        index = input.shift();
    }

    console.log(`Shot targets: ${shootCount} -> ${targets.join(' ')}`);

    
}

shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])
;
