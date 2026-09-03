function nthPrime(n) {
  if (n == 1)
    return 2;

  let testedNumber = 1;
  let primesFound = 1;

  while (primesFound < n) {
    testedNumber += 2;
    let isPrime = true;

    for (let divisor = 3; divisor < testedNumber / 2; divisor += 2)
      if (testedNumber % divisor === 0) {
        isPrime = false;
        break;
      }

    if (isPrime)
        primesFound ++;
  }
  
  return testedNumber;
}

console.log(nthPrime(5));
console.log(nthPrime(10));
console.log(nthPrime(16));
console.log(nthPrime(99));
console.log(nthPrime(1000));

console.log(nthPrime(1));
console.log(nthPrime(2));
console.log(nthPrime(3));

// --- TEST SUITE ---

const testsText = `
1. nthPrime(5) should return 11.
2. nthPrime(10) should return 29.
3. nthPrime(16) should return 53.
4. nthPrime(99) should return 523.
5. nthPrime(1000) should return 7919.
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