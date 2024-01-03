function value(input) {
    let word = input.shift();
    let type = input.shift();
    let sum = 0;

    for (let i = 0; i < word.length; i++) {
        if (type === 'UPPERCASE') {
            if (word[i] >= 'A' && word[i] <= 'Z') {
                sum += word.charCodeAt(i);
            }
        } else if (type === 'LOWERCASE') {
            if (word[i] >= 'a' && word[i] <= 'z') {
                sum += word.charCodeAt(i);
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}

value(['HelloFromMyAwesomePROGRAM',

    'LOWERCASE'])