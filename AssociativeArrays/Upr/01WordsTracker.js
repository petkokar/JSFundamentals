function wordsTracker(input) {

    let map = new Map();
    let wordsToCheck = input.shift().split(' ');
    wordsToCheck.forEach(element => {
        map.set(element, 0);
    });
    for (const line of input) {
        for (const word of wordsToCheck) {
            if (line === word) {
                let currentQuantity = map.get(line);
                map.set(line, currentQuantity + 1);
            }
        }
    }

    let array = Array.from(map.entries())
    .sort((a,b) => b[1] - a[1]); 
    for (const [word, words] of array) {
        console.log(word, '-', words);
    }
}

wordsTracker([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])