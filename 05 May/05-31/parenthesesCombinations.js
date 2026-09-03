function getCombinations(n) {
  let combinationsCount = 0;

  const backtrack = (currentString, openPsRemaining, closedPsRemaining) => {
    if (currentString.length === n * 2) {
      ++combinationsCount;
      return;
    }

    if (openPsRemaining > 0) {
      backtrack(currentString + "(", openPsRemaining - 1, closedPsRemaining);
    }
    
    if (closedPsRemaining > openPsRemaining) {
      backtrack(currentString + ")", openPsRemaining, closedPsRemaining - 1);
    }
  };

  backtrack("", n, n);

  return combinationsCount;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getCombinations(2) should return 2.
2. getCombinations(3) should return 5.
3. getCombinations(5) should return 42.
4. getCombinations(8) should return 1430.
5. getCombinations(13) should return 742900.
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("——————————————————————————",
            "\n🧪Starting Verification...",
            "\n——————————————————————————");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(`(${test.output})`);

    if (JSON.stringify(functionCallOutput) === JSON.stringify(testOutput)) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${JSON.stringify(testOutput)}\nGot: ${JSON.stringify(functionCallOutput)}`);

      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

runTests(testData);