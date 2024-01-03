function echoType(object) {
    console.log(typeof(object));
    if(typeof(object) === 'number' || typeof(object) === 'string') {
        console.log(object);
    } else {
        console.log('Parameter is not suitable for printing');
    }

}

echoType(null)