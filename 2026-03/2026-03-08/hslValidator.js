function isValidHSL(hsl) {
  const matchResult = /^hsl\( *(?<hue>\d{1,3}) *, *(?<saturation>\d{1,3})% *, *(?<lightness>\d{1,3})% *\) *;?$/.exec(hsl)?.groups;
  
  if (matchResult 
    && 0 <= matchResult.hue && matchResult.hue <= 360
    && 0 <= matchResult.saturation && matchResult.saturation <= 100
    && 0 <= matchResult.lightness && matchResult.lightness <= 100
  )
    return true;
  else
    return false;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. isValidHSL("hsl(240, 50%, 50%)") should return true.
2. isValidHSL("hsl( 200 , 50% , 75% )") should return true.
3. isValidHSL("hsl(99,60%,80%);") should return true.
4. isValidHSL("hsl(0, 0%, 0%) ;") should return true.
5. isValidHSL("hsl(  10  ,  20%   ,  30%   )    ;") should return true.
6. isValidHSL("hsl(361, 50%, 80%)") should return false.
7. isValidHSL("hsl(300, 101%, 70%)") should return false.
8. isValidHSL("hsl(200, 55%, 75)") should return false.
9. isValidHSL("hsl (80, 20%, 10%)") should return false.
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