function solve(input) {
    let regex = /(#|@)(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/gi;

    let result = [];
    let count = 0;

    let match = regex.exec(input);

    while(match) {
        count++;
        let { first, second } = match.groups;
        
        if (first === second.split('').reverse().join('')) {
            result.push(`${first} <=> ${second}`)
        }
        
        match = regex.exec(input);
    }

    if (count == 0) {
        console.log('No word pairs found!');
    } else if (count > 0) {
        console.log(`${count} word pairs found!`);
    }

    if (result.length == 0) {
        console.log('No mirror words!');
    } else if (result.length > 0) {
        console.log('The mirror words are:');
        console.log(result.join(', '));
    }
}

solve('#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@');