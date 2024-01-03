function counter(text, str) {

    text = text.split(' ');
    let matches = text.filter(word => word === str);
    console.log(matches.length);
    // let counter = 0;
    // for (const word of text) {
    //     if (word === str) {
    //         counter++;
    //     }
    // }

    // console.log(counter);
}

counter('This is a word and it also is a sentence', 'is');