function sequences(input) {
    input = input.map(arr => JSON.parse(arr));
    input.forEach(el => el.sort((a, b) => b - a));
    let outputArr = [];

    for(let currArray of input) {
        let isUnique = true;
        for (let nextArr of outputArr) {
            if (nextArr.toString() === currArray.toString()) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            outputArr.push(currArray);
        }
    }

    outputArr.sort((a, b) => a.length - b.length);
    outputArr.forEach(el => console.log(`[${el.join(', ')}]`));

}

sequences(["[7.14, 7.180, 7.339, 80.099]",

"[7.339, 80.0990, 7.140000, 7.18]",

"[7.339, 7.180, 7.14, 80.099]"])