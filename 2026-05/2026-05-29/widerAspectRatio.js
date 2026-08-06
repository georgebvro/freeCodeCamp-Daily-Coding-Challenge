function getWiderAspectRatio(a, b) {
  const getAspectRatio = dimensions => {
    const { width, height } = /^(?<width>\d+)x(?<height>\d+)$/.exec(dimensions).groups;
    const ratio = width / height;
    let w, h = 0;

    do {
      w = ++h * ratio;
    } while (!Number.isInteger(w));

    return { w, h };
  }

  const aAspectRatio = getAspectRatio(a);
  const bAspectRatio = getAspectRatio(b);

  return aAspectRatio.w / aAspectRatio.h > bAspectRatio.w / bAspectRatio.h 
    ? `${aAspectRatio.w}:${aAspectRatio.h}` 
    : `${bAspectRatio.w}:${bAspectRatio.h}`;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getWiderAspectRatio("1920x1080", "800x600") should return "16:9".
2. getWiderAspectRatio("1080x1350", "2048x1536") should return "4:3".
3. getWiderAspectRatio("640x480", "2440x1220") should return "2:1".
4. getWiderAspectRatio("360x640", "1080x1920") should return "9:16".
5. getWiderAspectRatio("3440x1440", "2048x858") should return "43:18".
6. getWiderAspectRatio("12345x61234", "12534x51234") should return "2089:8539".
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