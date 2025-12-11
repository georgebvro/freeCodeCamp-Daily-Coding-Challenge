function isUnnaturalPrime(n) {
  n = Math.abs(n);

  if (n == 0 || n == 1) 
    return false;
  else
    for (let i = 2; i <= n / 2; i ++) {
      if (n % i == 0)
        return false;
    }

  return true;
}

console.log(isUnnaturalPrime(1));
console.log(isUnnaturalPrime(-1));
console.log(isUnnaturalPrime(19));
console.log(isUnnaturalPrime(-23));
console.log(isUnnaturalPrime(0));
console.log(isUnnaturalPrime(97));
console.log(isUnnaturalPrime(-61));
console.log(isUnnaturalPrime(99));
console.log(isUnnaturalPrime(-44));

// --- TEST SUITE ---

const testsText = `
1. isUnnaturalPrime(1) should return false.
2. isUnnaturalPrime(-1) should return false.
3. isUnnaturalPrime(19) should return true.
4. isUnnaturalPrime(-23) should return true.
5. isUnnaturalPrime(0) should return false.
6. isUnnaturalPrime(97) should return true.
7. isUnnaturalPrime(-61) should return true.
8. isUnnaturalPrime(99) should return false.
9. isUnnaturalPrime(-44) should return false.
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