function party(input) {

    let regularGuest = [];
    let vipGuest = [];
    let command = input.shift();

    while(command !== 'PARTY') {
        let firstChar = command[0];

        if (isNaN(firstChar)) {
            regularGuest.push(command)
        } else {
            vipGuest.push(command)
        }

        command = input.shift();
    }

    let allGuests = vipGuest.concat(regularGuest);

    for (const guest of input) {
        if (allGuests.includes(guest)){
            allGuests.splice(allGuests.indexOf(guest), 1);
        }

    }

    console.log(allGuests.length);
    allGuests.forEach(guest => console.log(guest))

}

party(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])