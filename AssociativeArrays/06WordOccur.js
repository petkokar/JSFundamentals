function solve(input) {
    let map = new Map();

    for (const word of input) {
        let wordOccurencies = 1;

        if (map.has(word)) {
            wordOccurencies += map.get(word)
        }

        map.set(word, wordOccurencies);
    }

    let sorted = Array.from(map);
    sorted.sort((a, b) => b[1] - a[1]);

    for(let [word, words] of sorted) {
        console.log(word, '->', words, 'times');
    }
}

solve(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"]);