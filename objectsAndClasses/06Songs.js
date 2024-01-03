function solve(array) {

    let songs = [];
    let songsCount = array.shift();
    let typeSong = array.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let arr = array.map(el => {
        let [type, name, time] = el.split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    })

    // for(let arr of array) {
    //     let [type, name, time] = arr.split('_');
    //     let song = new Song(type, name, time);
    //     songs.push(song);
    // }

    if (typeSong === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}

solve([3,

    'favourite_DownTown_3:14',
    
    'favourite_Kiss_4:16',
    
    'favourite_Smooth Criminal_4:01',
    
    'all']);