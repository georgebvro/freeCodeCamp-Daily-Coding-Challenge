function mixPaint(bucket1, bucket2) {

  return [
    Math.round((bucket1.color[0] * bucket1.fullness + bucket2.color[0] * bucket2.fullness) / (bucket1.fullness + bucket2.fullness)),
    Math.round((bucket1.color[1] * bucket1.fullness + bucket2.color[1] * bucket2.fullness) / (bucket1.fullness + bucket2.fullness)),
    Math.round((bucket1.color[2] * bucket1.fullness + bucket2.color[2] * bucket2.fullness) / (bucket1.fullness + bucket2.fullness))
  ];
}

// --- TEST SUITE ---

const testsText = String.raw`
1. mixPaint({ color: [250, 250, 250], fullness: 50 }, { color: [0, 0, 0], fullness: 50 }) should return [125, 125, 125].
2. mixPaint({ color: [250, 250, 250], fullness: 80 }, { color: [0, 0, 0], fullness: 20 }) should return [200, 200, 200].
3. mixPaint({ color: [100, 150, 200], fullness: 30 }, { color: [100, 150, 200], fullness: 70 }) should return [100, 150, 200].
4. mixPaint({ color: [143, 143, 101], fullness: 45 }, { color: [100, 204, 204], fullness: 90 }) should return [114, 184, 170].
5. mixPaint({ color: [15, 134, 249], fullness: 29 }, { color: [97, 178, 55], fullness: 54 }) should return [68, 163, 123].
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