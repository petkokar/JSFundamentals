function towns(input) {

    for (const townInfo of input) {
        
        let [name, latitude, longitude] = townInfo.split(' | ');
        let currTown = {
            town: name,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }

        console.log(currTown);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])