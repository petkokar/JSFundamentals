function merge(array1, array2) {

    let newArr = [];
    for (let index = 0; index < array1.length; index++) {
        if (index % 2 === 0) {
            newArr[index] = Number(array1[index]) + Number(array2[index]);
        } else {
            newArr[index] = array1[index] + array2[index]
        }
    }
}

merge(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);