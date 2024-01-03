function game(input) {

    let health = 100;
    let coins = 0;
    let dungeon = input[0].split('|');
    let bestRoom = 0;
    
    for (let i = 0; i < dungeon.length; i++) {
        bestRoom++;
        let currentRoom = dungeon[i].split(' ');
        let command = currentRoom[0];
        let num = Number(currentRoom[1]);

        switch(command) {
            case 'potion': 
            if (num + health > 100) {
                num = 100 - health;
                health = 100;
            } else {
                health += num;
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);
            break;
            case 'chest':
                console.log(`You found ${num} coins.`);
                coins += num;                 
            break;
            default:
                health -= num;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                }
            break;
        }
        if (health <= 0) {
            console.log(`Best room: ${bestRoom}`);
            break;
        }
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}

game(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);