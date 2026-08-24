function primeFactorization(n) {
/* Solution using while() loop
  const primeFactors = [];

  while (n !== 1) {
    let factorFound = n;
    
    for (let possibleFactor = 2; possibleFactor < n / 2; ++possibleFactor) {
      if (!(n % possibleFactor)) {
        factorFound = possibleFactor;
        break;
      }
    }

    primeFactors.push(factorFound);
    n = n / factorFound;
  }

  return primeFactors;
*/

// Solution using recursion
  let factorFound = n;

  for (let possibleFactor = 2; possibleFactor < n / 2; ++possibleFactor) {
    if (!(n % possibleFactor)) {
      factorFound = possibleFactor;
      break;
    }
  }

  return factorFound === n ? [n] : [factorFound].concat(primeFactorization(n / factorFound));
}

// --- TEST SUITE ---

const testsText = String.raw`
1. primeFactorization(20) should return [2, 2, 5].
2. primeFactorization(17) should return [17].
3. primeFactorization(15) should return [3, 5].
4. primeFactorization(35) should return [5, 7].
5. primeFactorization(999) should return [3, 3, 3, 37].
6. primeFactorization(360) should return [2, 2, 2, 3, 3, 5].
7. primeFactorization(510510) should return [2, 3, 5, 7, 11, 13, 17].
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