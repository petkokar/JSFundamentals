function memory(input) {

    let targets = input.shift().split(' ');
    let combination = input.shift();
    let moves = 0;

    while(combination !== 'end') {
        moves++;
        let targetsLength = targets.length;
        combination = combination.split(' ');
        let num1 = Number(combination.shift());
        let num2 = Number(combination.shift());

        if (num1 === num2 || num1 < 0 || num1 >= targetsLength || num2 < 0 || num2 >= targetsLength ) {
            let middle = targetsLength / 2;
            targets.splice(middle, 0, `-${moves}a`);
            targets.splice(middle, 0, `-${moves}a`);
            console.log("Invalid input! Adding additional elements to the board");
        } else if (targets[num1] == targets[num2]) {
            console.log(`Congrats! You have found matching elements - ${targets[num1]}!`);
            targets = targets.filter(el => el !== targets[num1]);
        } else if (targets[num1] !== targets[num2]) {
            console.log('Try again!');
        }

        if (targets.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }
        
        combination = input.shift();
    }

    if (targets.length > 0) {
        console.log('Sorry you lose :(');
        console.log(targets.join(' '));
    }

}

memory([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
])