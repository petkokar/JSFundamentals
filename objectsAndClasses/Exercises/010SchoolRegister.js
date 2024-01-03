function register(input) {
    let obj = {};

    for (let line of input) {
        let parts = line.split(', ');
        let name = parts[0].split(':')[1].trim();
        let grade = Number(parts[1].split(':')[1].trim()) + 1;
        let score = Number(parts[2].split(':')[1].trim());
        if (score > 3) {
            let student = {
                name,
                score
            };
            if (!obj.hasOwnProperty(grade)) {
                obj[grade] = [];
            }
            obj[grade].push(student);
        }

        
    }

    let sortedGrades = Object.keys(obj).sort((a, b) => a - b);
    for(let grade of sortedGrades) {
        let students = obj[grade];
        console.log(`${grade} Grade`);
        console.log(`List of students: ${students.map(s => s.name).join(', ')}`);
        console.log(`Average annual score from last year: ${avg(students.map(s => s.score)).toFixed(2)}`);
        console.log();
    }

    function avg(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }

}

register([

    'Student name: George, Grade: 5, Graduated with an average score: 2.75', 'Student name: Alex, Grade: 9, Graduated with an average score: 3.66', 'Student name: Peter, Grade: 8, Graduated with an average score: 2.83', 'Student name: Boby, Grade: 5, Graduated with an average score: 4.20', 'Student name: John, Grade: 9, Graduated with an average score: 2.90', 'Student name: Steven, Grade: 2, Graduated with an average score: 4.90', 'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    
    ])