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

// --- TEST SUITE ---

const testsText = `
1. battle("Hello", "World") should return "We lost".
2. battle("pizza", "salad") should return "We won".
3. battle("C@T5", "D0G$") should return "We won".
4. battle("kn!ght", "orc") should return "Opponent retreated".
5. battle("PC", "Mac") should return "We retreated".
6. battle("Wizards", "Dragons") should return "It was a tie".
7. battle("Mr. Smith", "Dr. Jones") should return "It was a tie".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let allPassed = true;
  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);
    let comparison;

    if (Array.isArray(testOutput))
      comparison = arraysEqual(functionCallOutput, testOutput);
    else
      comparison = functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      allPassed = false;
      failCount ++;
    }
  })

  console.log("----------------------------");

  if (allPassed)
    console.log("🎉SUCCESS: All tests PASSED.");
  else
    console.log(`⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`);
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (const index in a) {
    if (Array.isArray(a[index])) {
      if (Array.isArray(b[index])) {
        if (!arraysEqual(a[index], b[index]))
          return false;
      }
      else 
        return false;
    }

    else if (a[index] !== b[index])
      return false;
  }

  return true;
}

runTests(testData);