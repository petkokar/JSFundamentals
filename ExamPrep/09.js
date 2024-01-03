function softUniReception(input) {

    let studentsCount = Number(input.pop());
    input = input.map(Number);
    let employeesEffPerHour = input.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    },0);
    let hours = 0;

    while (studentsCount > 0) {
        studentsCount -= employeesEffPerHour;
        hours++;
        if (hours % 4 === 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`);
    
}

// softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);
// softUniReception(['3','2','5','40']);