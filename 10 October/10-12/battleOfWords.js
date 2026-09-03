function battle(ourTeam, opponent) {
  let ourTeamScore = 0, 
      opponentScore = 0;

  const ourTeamWords = ourTeam.split(" ");
  const opponentWords = opponent.split(" ");

  for (const wordIndex in ourTeamWords) {
    const ourTeamWordValue = wordValue(ourTeamWords[wordIndex]);
    const opponentWordValue = wordValue(opponentWords[wordIndex]);

    if (ourTeamWordValue > opponentWordValue)
      ourTeamScore ++;

    else if (ourTeamWordValue < opponentWordValue)
      opponentScore ++;
  }

  return ourTeamScore > opponentScore ? "We win" : ourTeamScore < opponentScore ? "We lose" : "Draw";
}

function wordValue(word) {
  const codeOfLowerCaseA = 'a'.charCodeAt(0);
  const codeOfLowerCaseZ = 'z'.charCodeAt(0);
  let wordValue = 0;

  word.split("").forEach(letter => {
    const codeOfLetter = letter.charCodeAt(0);

    if (codeOfLowerCaseA <= codeOfLetter && codeOfLetter <= codeOfLowerCaseZ)
      wordValue += codeOfLetter - codeOfLowerCaseA + 1;
    
    else
      wordValue += (letter.toLowerCase().charCodeAt(0) - codeOfLowerCaseA + 1) * 2;
  })

  return wordValue;
}

console.log(battle("hello world", "hello word"));
console.log(battle("Hello world", "hello world"));
console.log(battle("lorem ipsum", "kitty ipsum"));
console.log(battle("hello world", "world hello"));
console.log(battle("git checkout", "git switch"));
console.log(battle("Cheeseburger with fries", "Cheeseburger with Fries"));
console.log(battle("We must never surrender", "Our team must win"));

// --- TEST SUITE ---

const testsText = `
1. battle("hello world", "hello word") should return "We win".
2. battle("Hello world", "hello world") should return "We win".
3. battle("lorem ipsum", "kitty ipsum") should return "We lose".
4. battle("hello world", "world hello") should return "Draw".
5. battle("git checkout", "git switch") should return "We win".
6. battle("Cheeseburger with fries", "Cheeseburger with Fries") should return "We lose".
7. battle("We must never surrender", "Our team must win") should return "Draw".
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