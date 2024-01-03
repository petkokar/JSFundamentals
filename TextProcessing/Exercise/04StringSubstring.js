function solve(word, text) {
    text = text.split(' ').map(e => e.toLowerCase());
    if (text.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}

solve('javascript', 'JavaScript is the best programming language')