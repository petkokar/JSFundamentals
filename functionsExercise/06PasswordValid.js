function passwordValid(password) {

    let isValidPass = true;
    let isInValidLength = password.length < 6 || password.length > 10;

    if (isInValidLength) {
        isValidPass = false;
        console.log("Password must be between 6 and 10 characters");
    }

    let isOnlyLetterAndDigits = true;
    let digitsCounter = 0;

    for (let index = 0; index < password.length; index++) {
        let currentCode = password.charCodeAt(index);
        let isNotNumber = currentCode < 48 || currentCode > 57;
        let isNumber = currentCode >= 48 && currentCode <= 57;
        let isNotSmallLetter = currentCode < 97 || currentCode > 122;
        let isNotBigLetter = currentCode < 65 || currentCode > 90;

        if (isNumber) {
            digitsCounter++;
        }

        if (isNotNumber && isNotSmallLetter && isNotBigLetter) {
            isValidPass = false;
            isOnlyLetterAndDigits = false;
        }
    }

    if (!isOnlyLetterAndDigits) {
        console.log("Password must consist only of letters and digits");
    }
    if (!(digitsCounter >= 2)) {
        isValidPass = false;
        console.log("Password must have at least 2 digits");
    }

    if (isValidPass) {
        console.log('Password is valid');
    }
}

passwordValid('logIn')