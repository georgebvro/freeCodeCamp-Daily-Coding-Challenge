function calculateHandicap(scores, pars) {

  return Number((scores.reduce((sum, score, index) => sum + score - pars[index], 0) / scores.length).toFixed(1));
}

// --- TEST SUITE ---

const testsText = String.raw`
1. calculateHandicap([72, 72, 72], [72, 72, 72]) should return 0.
2. calculateHandicap([80, 76, 78, 78], [72, 72, 72, 72]) should return 6.
3. calculateHandicap([42, 45, 46, 45], [36, 36, 36, 36]) should return 8.5.
4. calculateHandicap([85, 80, 76, 79, 82], [72, 72, 72, 71, 71]) should return 8.8.
5. calculateHandicap([41, 50, 48, 52, 46, 49], [35, 37, 35, 37, 35, 37]) should return 11.7.
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