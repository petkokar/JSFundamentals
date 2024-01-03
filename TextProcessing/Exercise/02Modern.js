function modern(str) {
    str = str.split(' ');
    for (let word of str) {
        if (word.includes('#') && word.length > 1) {
            let charArray = word.split('');
            charArray.shift();
            let wordToPrint = '';
            for (const char of charArray) {
                if (!isNaN(char)) {
                    wordToPrint = '';
                    break;
                } else {
                    wordToPrint += char;
                }
            }
            if (wordToPrint.length > 0) {
                console.log(wordToPrint);
            }
        }
    }
}

modern('Nowadays everyone uses # to tag a #special word in #socialMedia')