function arrayModifier(input) {

    let array = input.shift().split(' ').map(Number);
    let action = input.shift();

    while(action !== 'end') {
        
        let commands = action.split(' ');
        let command = commands.shift();
        let firstIndex = Number(commands.shift());
        let secondIndex = Number(commands.shift());
        
        if (command === 'swap') {
            let firstNum = array[firstIndex];
            let secondNum = array[secondIndex];
            array[firstIndex] = secondNum;
            array[secondIndex] = firstNum;
        } else if (command === 'multiply') {
            array[firstIndex] = array[firstIndex] * array[secondIndex];
        } else if (command === 'decrease') {
            array = array.map((num) => num - 1);
        }
        action = input.shift();
    }
    console.log(array.join(', '));
}

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
   ]
   );