function bonusScoringSyst(input) {

    input = input.map(Number);
    let studentsCount = input.shift();
    let lecturesCount = input.shift();
    let bonus = input.shift();
    let max = 0;
    let studentAttendances = 0;
    // let [max, studentAttendances] = '';

    for (let student = 0; student < studentsCount; student++) {
        let currAttendances = input[student];
        let totalBonus = (currAttendances / lecturesCount) * (5 + bonus);

        if (totalBonus > max) {
            max = totalBonus; 
            studentAttendances = currAttendances;
        }
    }
    
    console.log(`Max Bonus: ${Math.round(max)}.`);
    console.log(`The student has attended ${studentAttendances} lectures.`);



}

bonusScoringSyst([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]);
  