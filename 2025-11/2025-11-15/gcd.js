function gcd(x, y) {

  return Math.max(...findDivisors(x).intersection(findDivisors(y)));
}

const findDivisors = n => {
  const divisors = new Set([1, n]);

  for (let testDivisor = 2; testDivisor <= Math.floor(n / 2); testDivisor ++)
    if (n % testDivisor === 0)
      divisors.add(testDivisor);

  return divisors;
}

console.log(gcd(4, 6));
console.log(gcd(20, 15));
console.log(gcd(13, 17));
console.log(gcd(654, 456));
console.log(gcd(3456, 4320));

// --- TEST SUITE ---

const testsText = `
1. gcd(4, 6) should return 2.
2. gcd(20, 15) should return 5.
3. gcd(13, 17) should return 1.
4. gcd(654, 456) should return 6.
5. gcd(3456, 4320) should return 864.
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