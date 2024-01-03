function solve(input) {
  const piecesCount = Number(input.shift());
  const getCollections = (singles) => {
    let result = {};
    for (let single of singles) {
      let [piece, composer, key] = single.split("|");
      result[piece] = {
        composer,
        key,
      };
    }
    return result;
  };

  let singles = input.splice(0, piecesCount);
  let collections = getCollections(singles);

  let command = input.shift();

  const addCollection = (collections, command, piece) => {
    if (!collections.hasOwnProperty(piece)) {
      const composer = command.split("|")[2];
      const key = command.split("|")[3];

      collections[piece] = {
        composer,
        key,
      };
      console.log(`${piece} by ${composer} in ${key} added to the collection!`);
    } else {
      console.log(`${piece} is already in the collection!`);
    }

    // return collections;
  };

  const removeCollection = (collections, piece) => {
    if (collections.hasOwnProperty(piece)) {
      delete collections[piece];
      console.log(`Successfully removed ${piece}!`);
    } else {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`
      );
    }

    // return collections;
  };

  const changeKey = (collections, piece) => {
    if (collections.hasOwnProperty(piece)) {
      const newKey = command.split("|")[2];
      collections[piece].key = newKey;
      console.log(`Changed the key of ${piece} to ${newKey}!`);
    } else {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`
      );
    }
    // return collections;
  };

  while (command !== "Stop") {
    const action = command.split("|")[0];
    const piece = command.split("|")[1];
    switch (action) {
      case "Add":
        addCollection(collections, command, piece);
        break;
      case "Remove":
        removeCollection(collections, piece);
        break;
      case "ChangeKey":
        changeKey(collections, piece);
        break;
    }
    command = input.shift();
  }

  const printPieces = (collections) => {
    for (const piece in collections) {
      let pieceName = collections[piece];
      let composer = pieceName.composer;
      let key = pieceName.key;
      console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    }
  };
  printPieces(collections);
}

solve([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);
