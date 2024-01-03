function manipulations (commands) {

    let arrayNums = commands.shift().split(' ').map(Number);
    for (let i = 0; i < commands.length; i++) {
        let [command, firstNumber, secondNumber] 
        = commands[i].split(' ');
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
        switch(command) {
            case 'Add': add(firstNumber); break;
            case 'Remove': remove(firstNumber); break;
            case 'RemoveAt': removeAt(firstNumber); break;
            case 'Insert': insert(firstNumber, secondNumber); break;
        }
    }

    function add(el) {
        arrayNums.push(el)
    }

    function remove(num) {
        arrayNums = arrayNums.filter(el => el !== num);
    }

    function removeAt(index) {
        arrayNums.splice(index, 1)
    }

    function insert(num, index) {
        arrayNums.splice(index, 0, num)
    }

    console.log(arrayNums.join(' '));
}

manipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])