function solve(input) {
    const printProduct = (digits) => {
        let result = console.log(`Product group: ${digits}`);
        return result;
    }
    let pattern = /@#+([A-Z][a-zA-Z\d]{4,}[A-Z])@#+/g;

    // /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    let digitsRegExp = /\d/g;
    let barcodesCount = Number(input.shift());

    for(let i = 0; i < barcodesCount; i++) {
        let match = input[i].match(pattern);
        
        if (match) {
            match = match.join("")
            let findDigits = match.match(digitsRegExp);
            if (findDigits) {
                findDigits = findDigits.join("")
                printProduct(findDigits);
            } else {
                findDigits = '00';
                printProduct(findDigits);
            }
        } else {
            console.log('Invalid barcode');
        }
    }

}

solve(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
