function rightPlace(string, char, stringa) {

    let res = string.replace('_', char);
    let output = res ===stringa? 'Matched' : 'Not Matched';

    console.log(output);

}

rightPlace('Str_ng', 'I', 'Strong' )