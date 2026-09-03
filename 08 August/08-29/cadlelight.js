function burnCandles(candles, leftoversNeeded) {
  let candlesBurned = 0,
      leftovers,
      leftoversRemained,
      totalLeftovers = 0,
      availableCandles = candles;
  
  do {
    availableCandles += Math.floor(totalLeftovers / leftoversNeeded);
    leftovers = availableCandles;
    leftoversRemained = totalLeftovers % leftoversNeeded;
    totalLeftovers = leftovers + leftoversRemained;
    candlesBurned += availableCandles;
    availableCandles = 0;
  } while (totalLeftovers >= leftoversNeeded);

  return candlesBurned;
}

console.log(burnCandles(7, 2));
console.log(burnCandles(10, 5));
console.log(burnCandles(20, 3));
console.log(burnCandles(17, 4));
console.log(burnCandles(2345, 3));
console.log(burnCandles(1, 2));

// --- TEST SUITE ---

const testsText = `
1. burnCandles(7, 2) should return 13
2. burnCandles(10, 5) should return 12
3. burnCandles(20, 3) should return 29
4. burnCandles(17, 4) should return 22
5. burnCandles(2345, 3) should return 3517
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