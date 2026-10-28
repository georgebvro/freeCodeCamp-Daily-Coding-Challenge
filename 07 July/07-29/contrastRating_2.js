function getContrastRating(l1, l2, isLargeText) {
  const WCAG_RATINGS = [
    { rating: "AAA", normalTextThreshold: 7.0, largeTextThreshold: 4.5 },
    { rating: "AA", normalTextThreshold: 4.5, largeTextThreshold: 3.0 }
  ];

  const contrastRatio = (l1 + 0.05) / (l2 + 0.05);

  for (const rule of WCAG_RATINGS) {
    if (contrastRatio >= rule[isLargeText ? 'largeTextThreshold' : 'normalTextThreshold']) {
      return rule['rating'];
    }
  }

  return "Fail";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getContrastRating(1.0, 0.0, false) should return "AAA".
2. getContrastRating(0.9015, 0.1364, false) should return "AA".
3. getContrastRating(0.8965, 0.1628, false) should return "Fail".
4. getContrastRating(0.7469, 0.0957, true) should return "AAA".
5. getContrastRating(0.7489, 0.2018, true) should return "AA".
6. getContrastRating(0.6571, 0.1974, true) should return "Fail".
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