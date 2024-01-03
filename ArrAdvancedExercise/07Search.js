function search(arrayNums, commands) {

    let numsCountToTake = commands[0];
    let numsCountToDelete = commands[1];
    let numToSearch = commands[2];

    let newArr = arrayNums.slice(0, numsCountToTake);
    newArr.splice(0, numsCountToDelete);

    let numberCounter = newArr.filter(e => e === numToSearch).length;

    console.log(`Number ${numToSearch} occurs ${numberCounter} times.`);


}

search([5, 2, 3, 4, 1, 6], [5, 2, 3])