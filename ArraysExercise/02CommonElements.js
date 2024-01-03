function commonElements(arr1, arr2) {

    let arrayLength = arr1.length;

    for (let i = 0; i < arrayLength; i++) {
        let currEl = arr1[i];
        
        if (arr2.includes(currEl)) {
            console.log(currEl);
        }
    }

}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);