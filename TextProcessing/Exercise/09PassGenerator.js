function generator(input) {

    let firstArray = input.shift();
    let secondArray = input.shift();
    let concatArr = firstArray.concat(secondArray);
    let word = input.shift();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    let replacedString = concatArr.split('').map(char => {
        if (vowels.includes(char)) {
            let replacement = word.charAt(vowelCount % word.length).toUpperCase()
            vowelCount++;
            return replacement;
        } else {
            return char.toLowerCase();
        }
    }).join('')

    replacedString = replacedString.split('').reverse().join('');

    console.log(`Your generated password is ${replacedString}`);
    
}

generator([
    'easymoneyeazylife',
    'atleasttencharacters',
    'absolute'
    ])
