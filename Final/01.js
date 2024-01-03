function hogwarts(input) {
    let spell = input.shift();

    let command = input.shift();

    const abjuration = (string) => {
        string = string.toUpperCase();
        console.log(string);
        return string;
    }

    const necromancy = (string) => {
        string = string.toLowerCase();
        console.log(string);
        return string;
    }

    const illusion = (string, index, letter) => {
        index = Number(index);
        if (index >= 0 && index < string.length) {
            string = string.substring(0, index) + letter + string.substring(index + 1);
            console.log('Done!');
            return string;
        } else {
            console.log('The spell was too weak.');
        }
    }

    const divination = (string, firstSubstring, secondSubstring) => {
        if (string.includes(firstSubstring)) {
            while(string.includes(firstSubstring)) {
                string = string.replace(firstSubstring, secondSubstring);
            }
            console.log(string);
            return string;
        }
    }

    const alteration = (string, substring) => {
        if (string.includes(substring)) {
            string = string.replace(substring, '');
            console.log(string);
            return string;
        }
    }

    while(command !== 'Abracadabra') {
        let [action, firstArgument, secondArgument] = command.split(' ');
        switch(action) {
            case 'Abjuration':
                spell = abjuration(spell);
                break;
            case 'Necromancy':
                spell = necromancy(spell);
                break;
            case 'Illusion':
                spell = illusion(spell, firstArgument, secondArgument)
                break;
            case 'Divination':
                spell = divination(spell, firstArgument, secondArgument);
                break;
            case 'Alteration':
                spell = alteration(spell, firstArgument)
                break;
            default:
                console.log('The spell did not work!');
                break;
        }

        command = input.shift();
    }
}

hogwarts(["SwordMaster",

"Target Target Target",

"Abjuration",

"Necromancy",

"Alteration master",

"Abracadabra"]);