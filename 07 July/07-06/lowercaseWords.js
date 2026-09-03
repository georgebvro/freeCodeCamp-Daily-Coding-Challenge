function getLowercaseWords(str) {

  return str
    .split(" ")
    .filter(word => word === word.toLowerCase())
    .join(" ");
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getLowercaseWords("hello GOOD world") should return "hello world".
2. getLowercaseWords("these are all lowercase") should return "these are all lowercase".
3. getLowercaseWords("less is NoT more") should return "less is more".
4. getLowercaseWords("DonT eat pizza every OTHER day") should return "eat pizza every day".
5. getLowercaseWords("the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog") should return "the quick brown fox jumped over the lazy dog".
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