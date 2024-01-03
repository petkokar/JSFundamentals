function charsInRange(firstChar, secondChar) {
    let startChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let endChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

    let charArr = [];

    for (let currentChar = startChar; currentChar <= endChar; currentChar++) {
        charArr.push(String.fromCharCode(currentChar));
    }

    return charArr.join(' ');
}

console.log(charsInRange('!', '+'));

// let text = String.fromCharCode(72, 69, 76, 76, 79);
// console.log(text);