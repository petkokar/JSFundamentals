function solve(input) {
    let message = input.shift();

    let command = input.shift();

    while(command !== 'Decode') {
        let token = command.split('|');
        let action = token.shift();
        switch(action) {
            case 'Move':
                let number = Number(token.shift());
                let firstLett = message.substring(0, number);
                let remaining = message.substring(number);
                message = remaining + '' + firstLett;
                break;
            case 'Insert':
                let index = Number(token.shift());
                let value = token.shift(); 
                let firstPart = message.substring(0, index);
                let secondPart = message.substring(index);
                message = firstPart+ `${value}` +secondPart;
                break;
            case 'ChangeAll':
                let substring = token.shift();
                let replacement = token.shift();
                while(message.includes(substring)) {
                    message = message.replace(substring, replacement)
                }
                break;
        }
        command = input.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

solve([

    'zzHe',
    
    'ChangeAll|z|l',
    
    'Insert|2|o',
    
    'Move|3',
    
    'Decode'
    
    ])