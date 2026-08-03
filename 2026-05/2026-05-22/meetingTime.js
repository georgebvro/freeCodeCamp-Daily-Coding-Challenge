function getMeetingTime(availability) {

  const result = Math.min(...Array.from(availability
    .map(person => person
        .map(interval => Array.from({ length: interval[1] - interval[0] }, (_, i) => interval[0] + i))
        .reduce((acc, hours) => acc.concat(hours))
    )
    .map(hours => new Set(hours))
    .reduce((acc, hours) => acc.intersection(hours))
  ));

  return result === Infinity ? "None" : result;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getMeetingTime([[[10, 12], [15, 16]], [[11, 14], [15, 16]]]) should return 11.
2. getMeetingTime([[[9, 10], [12, 15]], [[10, 11], [13, 14]], [[9, 11], [10, 14]]]) should return 13.
3. getMeetingTime([[[7, 8], [9, 11], [12, 14], [15, 16]], [[8, 11], [12, 13], [14, 15]]]) should return 9.
4. getMeetingTime([[[7, 8], [10, 12], [13, 15]], [[8, 11], [12, 13], [14, 15]], [[6, 7], [8, 9], [12, 13]]]) should return "None".
5. getMeetingTime([[[1, 3], [4, 6], [8, 10], [20, 23]], [[15, 16], [17, 18], [19, 22], [23, 24]], [[14, 16], [17, 23]], [[2, 4], [5, 6], [18, 19], [21, 22], [23, 24]]]) should return 21.
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