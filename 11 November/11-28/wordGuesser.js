function compare(word, guess) {
  const wordArray = word.split("");
  const guessArray = guess.split("");
  const correctPosition = "2";
  const wrongPosition = "1";
  const missingLetter = "0";

  for (const index in guessArray) {
    if (wordArray[index] === guessArray[index]) {
      wordArray[index] = "-";
      guessArray[index] = correctPosition;
    }

    if (/[A-Z]/.exec(guessArray[index]) && !new RegExp(guessArray[index]).exec(word))
      guessArray[index] = missingLetter;
  }
  
  for (const index in guessArray) {
    if (/[A-Z]/.exec(guessArray[index])) {
      const indexFound = wordArray.findIndex(letter => letter === guessArray[index]);
      
      if (indexFound !== -1) {
        wordArray[indexFound] = "-";
        guessArray[index] = wrongPosition;
      }
      else {
        guessArray[index] = missingLetter;
      }
    }
  }

  return guessArray.join("");
}

// --- TEST SUITE ---

const testsText = `
1. compare("APPLE", "POPPA") should return "10201".
2. compare("REACT", "TRACE") should return "11221".
3. compare("DEBUGS", "PYTHON") should return "000000".
4. compare("JAVASCRIPT", "TYPESCRIPT") should return "0000222222".
5. compare("ORANGE", "ROUNDS") should return "110200".
6. compare("WIRELESS", "ETHERNET") should return "10021000".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+)\.$/gm;
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

  for (const index in a)
    if (a[index] !== b[index])
      return false;
  
  return true;
}

runTests(testData);