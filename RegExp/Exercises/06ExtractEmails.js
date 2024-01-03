function extract(input) {
    let regex = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-][A-Za-z]+)+))(\b|(?=\s))/g;

    let result = input.match(regex); 
    for(let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

extract('Please contact us at: support@github.com')