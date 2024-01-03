
class Vehicle {
    constructor (type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
        this.parts.quality = parts.engine * parts.power;
    }

    drive(fuelLoss) {
        return this.fuel -= fuelLoss;
    }
}


let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.engine);

// let parts = {engine: 218, power: 300};
// const mercedes = new Vehicle ('Mercedes', 'S', {engine: 100, power: 200}, 50);
// // console.log(mercedes);

// const bmw = {
//     type: 'Car',
//     model: '535',
//     parts,
//     fuel: 'Diesel',

//     getFuel() {
//         console.log(this.fuel); 
//     },

//     setFuel(gasoline) {
//        this.fuel = gasoline 
//     },

//     getEngine() {
//         return this.parts.engine;
//     }

// }
// console.log(bmw.fuel);
// // console.log(bmw.setFuel('Benzin'));
// bmw.setFuel('Benzin');
// console.log(bmw.fuel);
