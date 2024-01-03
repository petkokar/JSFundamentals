function solve(input) {
    let inputPass = input.shift()

    let command = input.shift();
    while(command !== 'Done') {
        let [action, argument1, argument2] = command.split(' ');
        switch(action) {
            case 'TakeOdd':
                inputPass = inputPass.split('')
                .filter((char, index) => index % 2 !== 0)
                .join('');
                console.log(inputPass);
                break;
            case 'Cut':
                let index = Number(argument1);
                let length = Number(argument2);
                let substringToRemove = inputPass.substring(index, index + length);
                inputPass = inputPass.replace(substringToRemove, '');
                console.log(inputPass);
                break;
            case 'Substitute':
                let substring = argument1;
                let substitue = argument2;
                if (inputPass.includes(substring)) {
                    while(inputPass.includes(substring)) {
                        inputPass = inputPass.replace(substring, substitue)
                    }
                    console.log(inputPass);
                } else {
                    console.log('Nothing to replace!');
                }
                break;
            
        }

        command = input.shift();
    }

    console.log(`Your password is: ${inputPass}`);

}

solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])
