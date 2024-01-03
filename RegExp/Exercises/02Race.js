function race(input) {
    let participants = input.shift();
    let records = {};

    let regex = /[A-Za-z]+/g;
    let regexNums = /[0-9]/g;
    let line = input.shift();
    while (line !== 'end of race') {

        let digitsSum = line.match(regexNums).map(Number).reduce((sum, curNum) => sum + curNum, 0);
        let matches = line.match(regex);
        let name = matches.join('')

        if (participants.includes(name)) {

            if (!records.hasOwnProperty(name)) {
                records[name] = 0;
            }

            records[name] += digitsSum;
        }

        line = input.shift();
    }

    const sortedArray = Object.entries(records).sort(([, valueA], [, valueB]) => valueB - valueA).slice(0, 3);
    let top3Key = sortedArray.map(([key]) => key);
    console.log(`1st place: ${top3Key.shift()}`);
    console.log(`2nd place: ${top3Key.shift()}`);
    console.log(`3rd place: ${top3Key.shift()}`);
}

race(['George, Peter, Bill, Tom',

'G4e@55or%6g6!68e!!@ ',

'R1@!3a$y4456@',

'B5@i@#123ll',

'G@e54o$r6ge#',

'7P%et^#e5346r',

'T$o553m&6',

'end of race'])