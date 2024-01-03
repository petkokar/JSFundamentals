function solve(input) {

    let object = {};

    for (const key of input) {
        let [name, phone] = key.split(' ');
        object[name] = phone;
    }

    for(let [name, phone] of Object.entries(object)) {
        console.log(name, '->', phone);
    }

    // let output = Object.entries(object)
    // .map(entry => entry.join(' -> '))
    // .join('\n');
    // console.log(output);

    // for(let entry of Object.entries(object)) {
    //     console.log(entry.join(' -> '));
    // }
}

solve(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])