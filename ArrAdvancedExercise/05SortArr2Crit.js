function sort(array) {

    let sorted = array.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    })

    console.log(sorted.join('\n'));

}

sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])