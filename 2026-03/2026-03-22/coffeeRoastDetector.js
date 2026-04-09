function detectRoast(beans) {
  const BEAN_VALUES = {
    '\'': 1,
    '-': 2,
    '.': 3
  };
  const LIGHT_TO_MEDIUM_THRESHOLD = 1.75;
  const MEDIUM_TO_DARK_THRESHOLD = 2.5;

  const roastLevel = beans.split("")
    .map(bean => BEAN_VALUES[bean])
    .reduce((sum, value) => sum + value)
    / beans.length;

  return roastLevel < LIGHT_TO_MEDIUM_THRESHOLD ? "Light" 
    : roastLevel <= MEDIUM_TO_DARK_THRESHOLD ? "Medium" 
    : "Dark";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. detectRoast("''-''''''-'-''--''''") should return "Light".
2. detectRoast(".'-''-''..'''.-.-''-") should return "Medium".
3. detectRoast("--.''--'-''.--..-.--") should return "Medium".
4. detectRoast("-...'-......-..-...-") should return "Dark".
5. detectRoast(".--.-..-......----.'") should return "Medium".
6. detectRoast("..-..-..-..-....-.-.") should return "Dark".
7. detectRoast("-'-''''''..-'.''-'.'") should return "Light".
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