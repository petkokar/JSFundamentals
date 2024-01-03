function cityInfo(city) {

    let person = JSON.parse(city);

    for (const [key, value] of  Object.entries(person)) {
        console.log(`${key}: ${value}`);
    }
}

cityInfo('{"name": "George", "age": 40, "town": "Sofia"}')