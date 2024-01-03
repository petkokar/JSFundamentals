function solve (input) {

    let index = 0;
    let accountGames = input.shift().split(' ');

    while (input[index] !== 'Play!') {
        let currAction = input[index].split(' ');
        let command = currAction[0];
        let currGame = currAction[1];
        let expansion = '';

        if (command === 'Expansion') {
            let gameWithExpansion = currGame.split('-');
            currGame = gameWithExpansion[0];
            expansion = currGame + ':' + gameWithExpansion[1];
        }
        let gameIndex = accountGames.indexOf(currGame);

        switch(command) {
            case 'Install':
                if (accountGames.includes(currGame)) {
                    break;
                } else {
                    accountGames.push(currGame);
                }
            break;
            case 'Uninstall': 
                if (accountGames.includes(currGame)) {
                    accountGames.splice(gameIndex, 1);
                }
            break;
            case 'Update':
                if (accountGames.includes(currGame)) {
                    accountGames.splice(gameIndex, 1);
                    accountGames.push(currGame);
                }
            break;
            case 'Expansion': 
                if (accountGames.includes(currGame)) {
                    accountGames.splice(gameIndex + 1, 0, expansion);
                }
            break;
        }
        index++;
    }
    console.log(accountGames.join(' '));

}

solve(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])