function getTallyCount(str) {
  const COMPLETE_TALLY = "||||/";
  const tallies = str.split(" ");
  
  return tallies.slice(0, -1).some(tally => tally !== COMPLETE_TALLY) || !/^\|{1,4}\/?$/.test(tallies.at(-1))
    ? "invalid tallies"
    : tallies.length * COMPLETE_TALLY.length - (COMPLETE_TALLY.length - tallies.at(-1).length);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getTallyCount("||||") should return 4.
2. getTallyCount("||||/") should return 5.
3. getTallyCount("||||/ |||") should return 8.
4. getTallyCount("||||/ ||||/ ||||/ ||") should return 17.
5. getTallyCount("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |") should return 41.
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