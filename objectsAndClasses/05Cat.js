function solve(arr) {
    let cats = [];

    class Cat {
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let cat of arr) {
        let currCat = cat.split(' ');
        let name, age;
        [name, age] = [currCat.shift(), Number(currCat.shift())];
        cats.push(new Cat(name, age));
    }

    for (let cat of cats) {
        cat.meow();
    }
}

solve(['Candy 1', 'Poppy 3', 'Nyx 2']);