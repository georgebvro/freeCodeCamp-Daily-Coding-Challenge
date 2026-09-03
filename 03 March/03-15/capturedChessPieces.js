function getCapturedValue(pieces) {
  const chessPieces = {
    P: {quantity: 8, value: 1},
    R: {quantity: 2, value: 5},
    N: {quantity: 2, value: 3},
    B: {quantity: 2, value: 3},
    Q: {quantity: 1, value: 9},
    K: {quantity: 1, value: 0}
  };
  let lostValue = 0;

  if (!pieces.includes('K'))
    return "Checkmate";

  for (const piece in chessPieces) {
    const count = pieces.filter(p => p === piece).length;
    lostValue += (chessPieces[piece].quantity - count) * chessPieces[piece].value;
  }

  return lostValue;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getCapturedValue(["P", "P", "P", "P", "P", "P", "R", "R", "N", "B", "Q", "K"]) should return 8.
2. getCapturedValue(["P", "P", "P", "P", "P", "R", "B", "K"]) should return 26.
3. getCapturedValue(["K", "P", "P", "N", "P", "P", "R", "P", "B", "P", "N", "B"]) should return 16.
4. getCapturedValue(["P", "Q", "N", "P", "P", "B", "K", "P", "R", "R", "P", "P", "B", "P"]) should return 4.
5. getCapturedValue(["P", "K"]) should return 38.
6. getCapturedValue(["N", "P", "P", "B", "K", "P", "Q", "N", "P", "P", "R", "R", "P", "P", "P", "B"]) should return 0.
7. getCapturedValue(["N", "P", "P", "B", "P", "R", "Q", "P", "P", "P", "B"]) should return "Checkmate".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
  })

  console.log("----------------------------",
    failCount
    ? `\n⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "\n🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i]))
          return false;
      }
      else 
        return false;
    }

    else if (a[i] !== b[i])
      return false;
  }

  return true;
}

runTests(testData);