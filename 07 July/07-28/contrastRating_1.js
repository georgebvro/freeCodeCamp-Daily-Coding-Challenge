function getContrastRating(ratio, isLargeText) {
  const WCAG_RATINGS = {
    "AAA": [ ratio >= 7.0 && !isLargeText, ratio >= 4.5 && isLargeText ],
    "AA": [ ratio >= 4.5 && !isLargeText, ratio >= 3.0 && isLargeText ],
    "Fail": [ ratio < 4.5 && !isLargeText, ratio < 3.0 && isLargeText ]
  };

  for (const [rating, conditions] of Object.entries(WCAG_RATINGS)) {
    if (conditions.some(condition => condition)) {
      return rating;
    }
  }
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getContrastRating("7.5", false) should return "AAA".
2. getContrastRating("4.8", false) should return "AA".
3. getContrastRating("4.2", false) should return "Fail".
4. getContrastRating("4.5", true) should return "AAA".
5. getContrastRating("3.0", true) should return "AA".
6. getContrastRating("2.7", false) should return "Fail".
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