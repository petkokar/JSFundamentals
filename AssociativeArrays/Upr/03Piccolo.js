function parking(input) {

    let parkingLot = new Set();

    for (const car of input) {
        let [direction, carNumber] = car.split(', ');

        if (direction === 'IN') {
            parkingLot.add(carNumber);
        } else if (direction === 'OUT') {
            parkingLot.delete(carNumber);
        }
    }

    if (parkingLot.size === 0) {
        console.log('Parking lot is empty!');
    } else {
        let sortedCarNums = Array.from(parkingLot).sort((a, b) => a.localeCompare(b));
        sortedCarNums.forEach(carNumber => console.log(carNumber))
    }

}

parking(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU']);