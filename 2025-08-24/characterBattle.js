function battle(myArmy, opposingArmy) {
  if (myArmy.length > opposingArmy.length) 
    return "Opponent retreated";

  else if (myArmy.length < opposingArmy.length)
    return "We retreated";

  else {
    let myArmyScore = 0;
    let opposingArmyScore = 0;

    for (let i = 0; i < myArmy.length; i ++) {
      if (characterStrength(myArmy[i]) > characterStrength(opposingArmy[i])) 
        myArmyScore ++;

      else if (characterStrength(myArmy[i]) < characterStrength(opposingArmy[i]))
        opposingArmyScore ++;
    }

    return myArmyScore > opposingArmyScore ? "We won" : myArmyScore < opposingArmyScore ? "We lost" : "It was a tie";
  }
}

function characterStrength(character) {
  const codeOfLowerCaseA = 'a'.charCodeAt(0);
  const codeOfLowerCaseZ = 'z'.charCodeAt(0);
  const lowerCaseAStrength = 1;
  const lowerCaseDiff = codeOfLowerCaseA - lowerCaseAStrength;
  const codeOfUpperCaseA = 'A'.charCodeAt(0);
  const codeOfUpperCaseZ = 'Z'.charCodeAt(0);
  const upperCaseAStrength = 27;
  const upperCaseDiff = codeOfUpperCaseA - upperCaseAStrength;
  let strength = 0;

  if (codeOfLowerCaseA <= character.charCodeAt(0) && character.charCodeAt(0) <= codeOfLowerCaseZ)
    strength = character.charCodeAt(0) - lowerCaseDiff;
  
  else if (codeOfUpperCaseA <= character.charCodeAt(0) && character.charCodeAt(0) <= codeOfUpperCaseZ) 
    strength = character.charCodeAt(0) - upperCaseDiff;
  
  else if (0 <= character && character <= 9)
    strength = character;
  return strength;
}

console.log(battle("Hello", "World"));
console.log(battle("pizza", "salad"));
console.log(battle("C@T5", "D0G$"));
console.log(battle("kn!ght", "orc"));
console.log(battle("PC", "Mac"));
console.log(battle("Wizards", "Dragons"));
console.log(battle("Mr. Smith", "Dr. Jones"));
//console.log(battle("Aa2;", "Bb1:"));