function reveal(word, text) {
    let words = word.split(', ')
    
    for (const word of words) {
        let wordLength = '*'.repeat(word.length);
        text = text.replace(wordLength, word)
    }
    console.log(text);
}
reveal('great, learning',

'softuni is ***** place for ******** new programming languages')
