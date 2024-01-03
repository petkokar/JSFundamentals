function nfs(input) {
  let carsCount = Number(input.shift());
  let cars = input.splice(0, carsCount);
  let carsCollection = {};
  for (let auto of cars) {
    let [car, mileage, fuel] = auto.split("|");
    carsCollection[car] = {
      mileage: Number(mileage),
      fuel: Number(fuel),
    };
  }

  let command = input.shift();
  while (command !== "Stop") {
    let [action, car, argument1, argument2] = command.split(" : ");
    argument1 = Number(argument1);
    argument2 = Number(argument2);

    switch (action) {
      case "Drive":
        if (carsCollection[car].fuel >= argument2) {
          carsCollection[car].mileage += argument1;
          carsCollection[car].fuel -= argument2;
          console.log(
            `${car} driven for ${argument1} kilometers. ${argument2} liters of fuel consumed.`
          );
        } else {
          console.log("Not enough fuel to make that ride");
        }

        if (carsCollection[car].mileage >= 100000) {
          console.log(`Time to sell the ${car}!`);
          delete carsCollection[car];
        }
        break;
      case "Refuel":
        if (carsCollection[car].fuel + argument1 > 75) {
          console.log(
            `${car} refueled with ${75 - carsCollection[car].fuel} liters`
          );
          carsCollection[car].fuel = 75;
        } else {
          carsCollection[car].fuel += argument1;
          console.log(`${car} refueled with ${argument1} liters`);
        }
        break;
      case "Revert":
        if (carsCollection[car].mileage < 10000) {
          carsCollection[car].mileage = 10000;
        } else {
          carsCollection[car].mileage -= argument1;
          console.log(`${car} mileage decreased by ${argument1} kilometers`);
        }
        break;
    }
    command = input.shift();
  }

  Object.keys(carsCollection).forEach((car) => {
    const mileage = carsCollection[car].mileage;
    const fuel = carsCollection[car].fuel;
    console.log(
      `${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`
    );
  });
}
nfs([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
