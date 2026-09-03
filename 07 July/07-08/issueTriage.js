function triageIssue(ms, message) {
  const durationTd = Temporal.Duration.from({ milliseconds: ms }).round({ largestUnit: "days" });

  return durationTd.days < 7 ? "leave it" 
    : durationTd.days >= 7 && message.toLowerCase().includes("bump") ? "close it" 
    : "bump it";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. triageIssue(86400000, "Lets fix it") should return "leave it".
2. triageIssue(1209600000, "still waiting") should return "bump it".
3. triageIssue(864000000, "bump") should return "close it".
4. triageIssue(604800000, "Do we still want this?") should return "bump it".
5. triageIssue(604800000, "Bumping this") should return "close it".
6. triageIssue(345600000, "I'll make a PR") should return "leave it".
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