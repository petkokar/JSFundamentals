function meetings(input) {

    let objArr = {};

    for (const days of input) {
        let [day, name] = days.split(' ');
        
        if (!objArr.hasOwnProperty(day)) {
            objArr[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let [day, name] of Object.entries(objArr)) {
        console.log(day, '->', name);
    }

}

meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])