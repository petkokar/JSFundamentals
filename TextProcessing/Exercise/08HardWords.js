function hardWords(input) {
    let text = input.shift();
    let words = input.shift().sort((a, b) => b.length - a.length);
    // console.log(words);

    for(let word of words) {
        text = text.replace("_".repeat(word.length), word)
    }

    console.log(text);

    // for (let word of text) {
    //     if (word.includes('_')) {
    //         // let wordLength = word.length;
    //         let index = text.indexOf(word);
    //         for (let char of words) {
    //             if (char.length === word.length) {
    //                 text[index] = word.replace('_'.repeat(word.length), char);
    //                 break;
    //             }
    //         }
    //     }
    // }

    // let filledText = text.join(' ');
    // console.log(filledText);

    // console.log(text);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])