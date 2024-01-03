function solve(input) {
  let regExp = /(=|\/)(?<destination>[A-Z][a-zA-Z]{2,}?)\1/g;
  let destinations = [];

  let travelPoints = 0;

  let matches = regExp.exec(input);
  while (matches) {

    let { destination } = matches.groups;

    destinations.push(destination);
    travelPoints += destination.length;
    matches = regExp.exec(input);

  }

  console.log(`Destinations: ${destinations.join(', ')}`);
  console.log(`Travel Points: ${travelPoints}`);
}

solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
solve('ThisIs some InvalidInput')
