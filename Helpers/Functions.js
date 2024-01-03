
const nether = (input) => {
    const sortedInput = input.sort();
    for (const name of sortedInput) {
      const monsterAlpaCharacters = getAlpabeticalCharacters(name);
      const monsterNumericalCharacters = getMonsterNumericalCharacters(name);
   
      const monsterHealth = getMonsterHealth(monsterAlpaCharacters);
      const monsterDamage = getMonsterDamage(monsterNumericalCharacters);
    }
  }
   
  const getAlpabeticalCharacters = (name) => {
    const reg = '/[a-zA-Z]/g';
    const matches = name.match(reg);
   
    return matches;
  }
   
  const getMonsterNumericalCharacters = (name) => {
    const reg = '/[0-9]/g';
    const matches = name.match(reg);
   
    return matches;
  }
   
  const getMonsterHealth = (name) => {
    const result = 0;
    for (let i = 0; i < name.length; i++) {
      console.log(name[i]);
    }
   
    return result;
  }
   
  const getMonsterDamage = (name) => {
    const result = 0;
    for (let i = 0; i < name.length; i++) {
      console.log(name[i]);
    }
   
    return result;
  }
   
  nether('Me3dwq123')