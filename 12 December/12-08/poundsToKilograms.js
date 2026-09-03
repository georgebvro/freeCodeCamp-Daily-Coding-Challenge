function convertToKgs(lbs) {
  const poundsToKgsConversion = 0.453592;
  const kgs = (lbs * poundsToKgsConversion).toFixed(2);

  return `${lbs} ${lbs === 1 ? "pound" : "pounds"} equals ${kgs} ${kgs == 1 ? "kilogram" : "kilograms"}.`;
}

console.log(convertToKgs(1));
console.log(convertToKgs(0));
console.log(convertToKgs(100));
console.log(convertToKgs(2.5));
console.log(convertToKgs(2.20462));

// --- TEST SUITE ---

const testsText = `
1. convertToKgs(1) should return "1 pound equals 0.45 kilograms.".
2. convertToKgs(0) should return "0 pounds equals 0.00 kilograms.".
3. convertToKgs(100) should return "100 pounds equals 45.36 kilograms.".
4. convertToKgs(2.5) should return "2.5 pounds equals 1.13 kilograms.".
5. convertToKgs(2.20462) should return "2.20462 pounds equals 1.00 kilogram.".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+)\.$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let allPassed = true;
  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);
    let comparison;

    if (Array.isArray(testOutput))
      comparison = arraysEqual(functionCallOutput, testOutput);
    else
      comparison = functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      allPassed = false;
      failCount ++;
    }
  })

  console.log("----------------------------");

  if (allPassed)
    console.log("🎉SUCCESS: All tests PASSED.");
  else
    console.log(`⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`);
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (const index in a) {
    if (Array.isArray(a[index])) {
      if (Array.isArray(b[index])) {
        if (!arraysEqual(a[index], b[index]))
          return false;
      }
      else 
        return false;
    }

    else if (a[index] !== b[index])
      return false;
  }

  return true;
}

runTests(testData);