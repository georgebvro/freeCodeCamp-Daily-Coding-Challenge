function rookBishopAttack(rook, bishop) {
  if (rook[0] === bishop[0] || rook[1] === bishop[1])
    return "rook";

  if (Math.abs(rook.charCodeAt(0) - bishop.charCodeAt(0)) === Math.abs(rook[1] - bishop[1]))
    return "bishop";

  return "neither";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. rookBishopAttack("A1", "A5") should return "rook".
2. rookBishopAttack("C3", "F6") should return "bishop".
3. rookBishopAttack("D4", "D7") should return "rook".
4. rookBishopAttack("B7", "H1") should return "bishop".
5. rookBishopAttack("B3", "C5") should return "neither".
6. rookBishopAttack("G3", "E8") should return "neither".
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
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i])) {
          return false;
        }
      } else {
        return false;
      }
    } else if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

runTests(testData);