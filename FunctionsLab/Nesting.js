function formatGrade (grade) {

    if (grade < 3.00) {
        console.log('Fail (2)');
    } else if (grade >= 3.00 && grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade >= 3.50 && grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade >= 4.50 && grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else if (grade >= 5.50) {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }

}

function readFullName (firstName, lastName) {
    return firstName + " " + lastName;
}

function pass(grade) {
    return grade < 3;
}

function printCertif(grade, arr) {
    if (pass(grade)) {
        return console.log('No');
    }
    console.log(`${readFullName(arr[0], arr[1])}`);
    formatGrade(grade);
}

printCertif(2.20, ["Petko", "Ivanov"]);