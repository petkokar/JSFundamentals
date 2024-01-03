function flight(input) {
    let obj = {};
    let arrSpecificSector = input.shift();
    let arrChangedStatuses = input.shift();
    let flightStatus = input.shift();

    for (const flight of arrSpecificSector) {
        let [code, Destination] = flight.split(' ');
        obj[code] = {
            Destination: Destination,
            Status: 'Ready to fly'
        }
    }

    for (const flight of arrChangedStatuses) {
        let [code, status] = flight.split(' ');
        if (obj.hasOwnProperty(code)) {
            obj[code].Status = status;
        }
    }

    for (let key in obj) {
        if (obj[key].Status === String(flightStatus)) {
            console.log(obj[key]);
        }
    }
}

flight([['WN269 Delaware',

'FL2269 Oregon',

'WN498 Las Vegas',

'WN3145 Ohio',

'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'], ['Ready to fly'] ])