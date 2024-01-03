function discovery(input) {
  let number = Number(input.shift());
  let plants = input.splice(0, number);
  let object = {};

  for (let cvete of plants) {
    let [plant, rarity] = cvete.split("<->");
    object[plant] = {
      rarity: Number(rarity),
      rating: [],
    };
  }

  let command = input.shift();

  while (command !== "Exhibition") {
    let [action, plant, argument] = command.split(/: | - /);
    argument = Number(argument);

    if (object.hasOwnProperty(plant)) {
      switch (action) {
        case "Rate":
          // object[plant].rating += argument;
          object[plant].rating.push(argument);
          break;
        case "Update":
          object[plant].rarity = argument;
          break;
        case "Reset":
          object[plant].rating = [];
          break;
      }
    } else {
      console.log("error");
    }

    command = input.shift();
  }
  console.log("Plants for the exhibition:");
  for (let plant in object) {
    let ratingArr = object[plant].rating;
    if (ratingArr.length > 0) {
      const avg = ratingArr.reduce((a, b) => a + b, 0) / ratingArr.length;
      object[plant].rating = avg;
    } else {
      object[plant].rating = Number(ratingArr.join(""));
    }

    let rating = object[plant].rating;
    console.log(`- ${plant}; Rarity: ${object[plant].rarity}; Rating: ${rating.toFixed(2)}`
    );
  }
}

discovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
;
