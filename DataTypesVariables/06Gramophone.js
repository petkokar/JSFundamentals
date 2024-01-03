function gramophone(band, album, song) {
    
    let songDurationInSec = (album.length * band.length) * song.length / 2;
    let output = Math.ceil(songDurationInSec / 2.5);
    
    console.log(`The plate was rotated ${output} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')