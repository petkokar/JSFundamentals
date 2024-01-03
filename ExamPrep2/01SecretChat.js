function solve(input) {
    let message = input.shift();

    let command = input.shift();
    while(command !== 'Reveal') {
        let [action, firstArgument, secondArgument] = command.split(':|:');

        if (action === 'InsertSpace') {
            let firstPart = message.substring(0, Number(firstArgument));
            let secondPart = message.substring(Number(firstArgument));
            message = firstPart + ' ' + secondPart;
            console.log(message);
        } else if (action === 'Reverse') {
            if (message.includes(firstArgument)) {
                let reversed = firstArgument.split('').reverse().join('');
                // firstArgument = firstArgument.split('').reverse().join('');
                message = message.replace(firstArgument, '') + reversed;
                console.log(message);
            } else {
                console.log('error');
            }
        } else if (action === 'ChangeAll') {
            let regex = new RegExp(firstArgument, 'g');
            message = message.replace(regex, secondArgument);
            console.log(message);
        }

        command = input.shift();
    }

    console.log(`You have a new text message: ${message}`);
}

solve([

    'Hiware?uiy',
    
    'ChangeAll:|:i:|:o',
    
    'Reverse:|:?uoy',
    
    'Reverse:|:jd',
    
    'InsertSpace:|:3',
    
    'InsertSpace:|:7',
    
    'Reveal'])