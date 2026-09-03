function isSpam(number) {
  const { countryCode, areaCode, localNumber1, localNumber2 } = 
    /\+(?<countryCode>\d+) \((?<areaCode>\d{3})\) (?<localNumber1>\d{3})-(?<localNumber2>\d{4})/
    .exec(number)
    .groups;

  if (countryCode.length > 2 || countryCode[0] !== '0')
    return true;

  if (areaCode < 200 || 900 < areaCode)
    return true;

  const sumOfLocalNumber1 = 
    Array
    .from(localNumber1)
    .reduce((sum, digit) => sum + parseInt(digit), 0)
  if (localNumber2.indexOf(sumOfLocalNumber1) !== -1)
    return true;

  if (/(\d)\1{3,}/.test(countryCode + areaCode + localNumber1 + localNumber2))
    return true

  return false;
}

console.log(isSpam("+0 (200) 234-0182"));
console.log(isSpam("+091 (555) 309-1922"));
console.log(isSpam("+1 (555) 435-4792"));
console.log(isSpam("+0 (955) 234-4364"));
console.log(isSpam("+0 (155) 131-6943"));
console.log(isSpam("+0 (555) 135-0192"));
console.log(isSpam("+0 (555) 564-1987"));
console.log(isSpam("+00 (555) 234-0182"));

// --- TEST SUITE ---

const testsText = `
1. isSpam("+0 (200) 234-0182") should return false.
2. isSpam("+091 (555) 309-1922") should return true.
3. isSpam("+1 (555) 435-4792") should return true.
4. isSpam("+0 (955) 234-4364") should return true.
5. isSpam("+0 (155) 131-6943") should return true.
6. isSpam("+0 (555) 135-0192") should return true.
7. isSpam("+0 (555) 564-1987") should return true.
8. isSpam("+00 (555) 234-0182") should return false.
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
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