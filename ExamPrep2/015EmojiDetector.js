function detector(input) {
    input = input.shift();
    let regExp = /(:{2}|\*{2})(?<text>[A-Z][a-z]{2,})(\1)/g;
    // /([*]{2}|[:]{2})(?<text>[A-Z][a-z]{2,})\1/g;
    // /(::|[*]{2})(?<text>[A-Z][a-z]{2,})(::|[*]{2})/g;
    let numsRegExp = /\d/g;
    let emojisArr = [];

    let match = regExp.exec(input);
    let coolTreshold = input.match(numsRegExp).map(Number).reduce((sum, curNum) => sum * curNum);
    let count = 0;

    while(match !== null) {
        count++;
        let { text } = match.groups;
        let coolnes = 0;

        for(let i = 0; i < text.length; i++) {
            coolnes += text.charCodeAt(i)
        }
        if (coolnes >= coolTreshold) {
            emojisArr.push(match[0])
        }

        match = regExp.exec(input)
    }
    console.log(`Cool threshold: ${coolTreshold}`);
    console.log(`${count} emojis found in the text. The cool ones are:`);
    // console.log('The cool ones are:');
    console.log(emojisArr.join('\n'));
    
}

detector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);