function furniture(input) {
  let furnitureList = {};
  let regex = new RegExp(
    ">>(?<furniture>[\\w]+)<<(?<price>[\\d]+[.]?[\\d]+)!(?<quantity>[\\d]+)"
  );
  let line = input.shift();
  let furnitures = [];

  while (line !== "Purchase") {
    let match = line.match(regex);

    if (match) {
      let { furniture, price, quantity } = match.groups;
      let totalPrice = Number(price) * Number(quantity);
      furnitures.push(furniture);

      if (!furnitureList.hasOwnProperty(furniture)) {
        furnitureList[furniture] = 0;
      }

      furnitureList[furniture] += totalPrice;
    }
    line = input.shift();
  }

  let totalMoneySpend = 0;

  if (Object.keys(furnitureList).length === 0) {
    console.log(`Bought furniture:`);
    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);
  } else {
    console.log("Bought furniture:");
    console.log(furnitures.join("\n"));

    for (const furniture in furnitureList) {
      totalMoneySpend += furnitureList[furniture];
    }

    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);
  }
}

furniture([
  ">>Laptop<<312.2323!3",

  ">>TV<<300.21314!5",

  ">Invalid<<!5",

  ">>TV<<300.21314!20",

  ">>Invalid<!5",

  ">>TV<<30.21314!5",

  ">>Invalid<<!!5",

  "Purchase",
]);
