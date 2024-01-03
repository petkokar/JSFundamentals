function addBook(input) {

    let obj = {};

    for(let element of input) {
        let [name, address] = element.split(':');
        obj[name] = address;
    }

    let convert = Object.entries(obj);
    convert.sort((a, b) => 
        a[0].localeCompare(b[0]));

    obj = Object.fromEntries(convert);
    for(let [name, address] of Object.entries(obj)) {
        console.log(name, '->', address);
    }
}

addBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])

addBook(['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])