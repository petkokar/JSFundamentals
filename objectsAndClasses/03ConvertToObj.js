function convert(obj) {
    let person = JSON.parse(obj);

    let entries = Object.entries(person);

    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}');