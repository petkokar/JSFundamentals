function sumator(input) {
    let firstSymbol = input.shift();
    let secondSymbol = input.shift();
    let str = input.shift();

    let firstAscii = firstSymbol.charCodeAt(0);
    let secondAscii = secondSymbol.charCodeAt(0);
    if (firstAscii > secondAscii) {
        let temp = firstAscii;
        firstAscii = secondAscii;
        secondAscii = temp;
    }

    let sum = 0;
    for(let i = 0; i < str.length; i++) {
        let currChar = str[i]
        let currCode = currChar.charCodeAt(0)
        if (currCode > firstAscii && currCode < secondAscii) {
            sum += currCode;
        }
    }
   console.log(sum);
}

sumator(['a', '1',
'jfe392$#@j24ui9ne#@$']);