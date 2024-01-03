// function schoolGrades(students) {
//     let studentList = students.reduce((acc, curr, index) => {
//         let [name, ...grades] = curr.split(' ');
//         grades = grades.map((g) => Number(g));
//         let currentStudent = acc.find((s) => s.name === name);

//         if (currentStudent) {
//             currentStudent.grades.push(...grades);
//         } else {
//             currentStudent = {
//                 name,
//                 grades,
//                 average: 0,
//             };

//             acc.push(currentStudent);
//         }

//         const totalGrades = currentStudent.grades.reduce((acc, curr) => { acc += curr; return acc; }, 0);
//         currentStudent.average = (totalGrades / currentStudent.grades.length).toFixed(2);

//         return acc;
//     }, []);

//     studentList = studentList.sort((a, b) => a.name.localeCompare(b.name));
//     studentList.forEach((stu) => console.log(`${stu.name}: ${stu.average}`));
// }

function schoolGrades(input) {

    let obj = {};
    for (const student of input) {
        let [name, ...grade] = student.split(' ');
        grade = grade.map(Number)
        if (obj.hasOwnProperty(name)) {
            obj[name].grade.push(...grade)
        } else {
            obj[name] = { grade: [...grade]};
        }
    }

    let sortedStudents = Object.keys(obj).sort();
    for (const name of sortedStudents) {
        let totalGrade = obj[name].grade.reduce((a, b) => a + b, 0);
        let averageGrade = totalGrade / obj[name].grade.length;
        obj[name].averageGrade = averageGrade.toFixed(2);
    }

    for (const student of sortedStudents) {
        console.log(`${student}: ${obj[student].averageGrade}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6']);