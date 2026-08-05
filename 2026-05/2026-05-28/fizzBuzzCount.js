function fizzBuzzCount(start, end) {
  const fizzBuzzCounts = {'fizz': 0, 'buzz': 0};

  for (let number = start; number <= end; ++number) {
    if (!(number % 3)) {
      fizzBuzzCounts['fizz'] += 1;
    }
    
    if (!(number % 5)) {
      fizzBuzzCounts['buzz'] += 1;
    }
  }

  return fizzBuzzCounts;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. fizzBuzzCount(1, 11) should return {fizz: 3, buzz: 2}.
2. fizzBuzzCount(14, 41) should return {fizz: 9, buzz: 6}.
3. fizzBuzzCount(24, 100) should return {fizz: 26, buzz: 16}.
4. fizzBuzzCount(-635, -14) should return {fizz: 207, buzz: 125}.
5. fizzBuzzCount(-5432, 6789) should return {fizz: 4074, buzz: 2444}.
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