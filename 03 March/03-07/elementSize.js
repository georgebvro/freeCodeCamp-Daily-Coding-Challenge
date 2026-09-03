function getElementSize(windowSize, elementVw, elementVh) {
  const { windowWidth, windowHeight } = /(?<windowWidth>\d+) x (?<windowHeight>\d+)/.exec(windowSize).groups;
  const { viewportWidthUnits } = /(?<viewportWidthUnits>\d+)vw/.exec(elementVw).groups;
  const { viewportHeightUnits } = /(?<viewportHeightUnits>\d+)vh/.exec(elementVh).groups;

  return `${windowWidth * viewportWidthUnits / 100} x ${windowHeight * viewportHeightUnits / 100}`;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getElementSize("1200 x 800", "50vw", "50vh") should return "600 x 400".
2. getElementSize("320 x 480", "25vw", "50vh") should return "80 x 240".
3. getElementSize("1000 x 500", "7vw", "3vh") should return "70 x 15".
4. getElementSize("1920 x 1080", "95vw", "100vh") should return "1824 x 1080".
5. getElementSize("1200 x 800", "0vw", "0vh") should return "0 x 0".
6. getElementSize("1440 x 900", "100vw", "114vh") should return "1440 x 1026".
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