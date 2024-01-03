function solve(input) {

    // for (const employee of input) {
    //     let number = employee.length;
    //     console.log(`Name: ${employee} -- Personal Number: ${number}`);
    // }

    let obj = {};

    for (const key of input) {
        obj[key] = key.length;
    }

    for (const key in obj) {
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
    }
}

solve([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])