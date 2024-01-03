function censored(txt, word) {
    // let replaced = txt.replace(word, '*'.repeat(word.length));
    // console.log(replaced);
    let censored = txt;
    while(censored.includes(word)) {
        censored = censored.replace(word, '*'.repeat(word.length))
    }
    console.log(censored);
}

censored('A small sentence with some words small small', 'small');