function solve(input) {

    let map = new Map();

    for (const word of input) {
        let occur = 1;
        if (map.has(word)) {
            occur += map.get(word)
        }
        map.set(word, occur);   
    }

    let sort = Array.from(map);
    sort.sort((a, b) => b[1] - a[1]);

    for (const [word, times] of sort) {
        console.log(word, '->', times, 'times');
    }
}

solve(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])