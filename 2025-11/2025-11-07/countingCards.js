function combinations(cards) {
  const cardsInDeck = 13 * 4;

  return factorial(cardsInDeck) / (factorial(cards) * factorial(cardsInDeck - cards));
}

const factorial = n => {
  if (n == 1 || n == 0)
    return 1;

  return n * factorial(n - 1);
}

console.log(combinations(52));
console.log(combinations(1));
console.log(combinations(2));
console.log(combinations(5));
console.log(combinations(10));
console.log(combinations(50));

console.log(combinations(0));

// --- TEST SUITE ---

const testsText = `
1. combinations(52) should return 1.
2. combinations(1) should return 52.
3. combinations(2) should return 1326.
4. combinations(5) should return 2598960.
5. combinations(10) should return 15820024220.
6. combinations(50) should return 1326.
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