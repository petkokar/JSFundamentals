let person = {
    sayHello() {
        console.log('Hello!');
    }
}

let student3 = {
    name: "Petko",
    lastName: "Ivanov",
    age: 23,
    height: 179
}

student3.sayHi = () => console.log('Hi!')

for (let key of Object.keys(student3)) {
    // console.log(`${key} -> ${student[key]}`);
}

class Dog {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} says Woof!`);
    }
}

let dog = new Dog('Chochko');
dog.speak();