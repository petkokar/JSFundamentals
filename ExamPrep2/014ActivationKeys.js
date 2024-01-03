function keys(input) {
    const flipUpper = (startIndex, endIndex) => {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        let substringToEdit = rawActivationKey.slice(startIndex, endIndex).toUpperCase();
        rawActivationKey = rawActivationKey.slice(0, startIndex) + substringToEdit + rawActivationKey.slice(endIndex);
        console.log(rawActivationKey);
    }

    const flipLower = (startIndex, endIndex) => {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        let substringToEdit = rawActivationKey.slice(startIndex, endIndex).toLowerCase();
        rawActivationKey = rawActivationKey.slice(0, startIndex) + substringToEdit + rawActivationKey.slice(endIndex);
        console.log(rawActivationKey);
    }

    const sliceString = (startIndex, endIndex) => {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        rawActivationKey = rawActivationKey.slice(0, startIndex) + rawActivationKey.slice(endIndex);
        console.log(rawActivationKey);
    }
    
    const checkContains = (substring) => {
        if (rawActivationKey.includes(substring)) {
            console.log(`${rawActivationKey} contains ${substring}`);
        } else {
            console.log('Substring not found!');
        }
    }
    
    let rawActivationKey = input.shift();
    let command = input.shift();

    while(command !== 'Generate') {
        let [action, firstArgument, secondArgument, thirdArgument] = command.split('>>>');

        switch(action) {
            case 'Contains':
                checkContains(firstArgument);
                break;
            case 'Flip':
                if (firstArgument === 'Upper') {
                    flipUpper(secondArgument, thirdArgument);
                } else if (firstArgument === 'Lower') {
                    flipLower(secondArgument, thirdArgument);
                }
                break;
            case 'Slice':
                sliceString(firstArgument, secondArgument);
                break;
        }
        command = input.shift();
    }

    console.log(`Your activation key is: ${rawActivationKey}`);

}



keys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

