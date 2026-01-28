function toConsonantCase(str) {

  return str
    .replace(/(?![aeiou])[a-z]/gi, lowercaseConsonant => lowercaseConsonant.toUpperCase())
    .replace(/[AEIOU]/gi, uppercaseVowel => uppercaseVowel.toLowerCase())
    .replaceAll("-", "_");
}

// --- TEST SUITE ---

const testsText = String.raw`
1. toConsonantCase("helloworld") should return "HeLLoWoRLD".
2. toConsonantCase("HELLOWORLD") should return "HeLLoWoRLD".
3. toConsonantCase("_hElLO-WOrlD-") should return "_HeLLo_WoRLD_".
4. toConsonantCase("_~-generic_~-variable_~-name_~-here-~_") should return "_~_GeNeRiC_~_VaRiaBLe_~_NaMe_~_HeRe_~_".
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