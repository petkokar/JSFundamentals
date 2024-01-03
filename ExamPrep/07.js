function shoppingList(input) {

    let initialList = input.shift().split('!');

    while(input[0] !== 'Go Shopping!') {

        let currAction = input.shift().split(' ');
        let command = currAction.shift();
        let item = currAction.shift();

        switch(command) {
            case 'Urgent': 
                if (!initialList.includes(item)) {
                    initialList.unshift(item);
                }
            break;
            case 'Unnecessary':
                if (initialList.includes(item)) {
                    let indexToRemove = initialList.indexOf(item);
                    initialList.splice(indexToRemove, 1);
                }
            break;
            case 'Correct':
                if (initialList.includes(item)) {
                    let newItem = currAction.shift();
                    let indexToReplace = initialList.indexOf(item);
                    initialList.splice(indexToReplace, 1, newItem);
                }
            break;
            case 'Rearrange':
                if (initialList.includes(item)) {
                    let indexToRemove = initialList.indexOf(item);
                    initialList.splice(indexToRemove, 1);
                    initialList.push(item);
                }
            break;
            default: break;
        }
        
    }
    console.log(initialList.join(', '));
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion", "Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);