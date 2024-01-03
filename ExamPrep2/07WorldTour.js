function tour(input) {
  let string = input.shift();
  let command = input.shift();

  while (command !== "Travel") {
    let [action, argument1, argument2] = command.split(":");

    switch (action) {
      case "Add Stop":
        let index = Number(argument1);
        if (index >= 0 && index < string.length) {
          let str = argument2;
          let firstHalf = string.substring(0, index);
          let secondHalf = string.substring(index);
          string = firstHalf + `${str}` + secondHalf;
        }
        console.log(string);
        break;
      case "Remove Stop":
        let startIndex = Number(argument1);
        let endIndex = Number(argument2);
        if (
          startIndex >= 0 &&
          startIndex < string.length &&
          endIndex >= 0 &&
          endIndex < string.length && startIndex <= endIndex
        ) {
          let remove = string.slice(startIndex, endIndex + 1);
          string = string.replace(remove, '');
        }
        console.log(string);
        break;
      case "Switch":
        if (string.includes(argument1)) {
            // while(string.includes(argument1)) {
                string = string.replace(argument1, argument2);
            // }
        }
        console.log(string);
        break;
    }
    command = input.shift();
  }

  console.log(`Ready for world tour! Planned stops: ${string}`);
}

tour(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"]);
