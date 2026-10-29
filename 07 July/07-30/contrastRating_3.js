function getContrastRating(rgb1, rgb2, isLargeText) {
  const WCAG_RATINGS = [
    { rating: "AAA", normalTextThreshold: 7.0, largeTextThreshold: 4.5 },
    { rating: "AA", normalTextThreshold: 4.5, largeTextThreshold: 3.0 }
  ];

  const calculateLuminanceFromRgb = rgb => {
    const gammaCorrected = rgb.map(channel => {
      const channelValue = channel / 255;
      return channelValue <= 0.04045 ? channelValue / 12.92 : ((channelValue + 0.055) / 1.055) ** 2.4;
    })

    return 0.2126 * gammaCorrected[0] + 0.7152 * gammaCorrected[1] + 0.0722 * gammaCorrected[2];
  }
    
  const contrastRatio = (calculateLuminanceFromRgb(rgb1) + 0.05) / (calculateLuminanceFromRgb(rgb2) + 0.05);

  for (const rule of WCAG_RATINGS) {
    if (contrastRatio >= rule[isLargeText ? 'largeTextThreshold' : 'normalTextThreshold']) {
      return rule['rating'];
    }
  }

  return "Fail";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getContrastRating([255, 255, 255], [0, 0, 0], false) should return "AAA".
2. getContrastRating([215, 188, 188], [55, 55, 55], false) should return "AA".
3. getContrastRating([143, 144, 210], [46, 47, 61], false) should return "Fail".
4. getContrastRating([167, 167, 210], [53, 10, 53], true) should return "AAA".
5. getContrastRating([135, 147, 155], [60, 70, 90], true) should return "AA".
6. getContrastRating([125, 210, 195], [105, 130, 90], true) should return "Fail".
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