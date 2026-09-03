function getLuckyNumber(name) {
  const { firstName, lastName } = /^(?<firstName>.+) (?<lastName>.+)$/.exec(name).groups,
    firstNameVowelCount = firstName.match(/[aeiou]/gi)?.length ?? 0,
    lastNameVowelCount = lastName.match(/[aeiou]/gi)?.length ?? 0,
    firstNameConsonantCount = firstName.match(/[b-df-hj-np-tv-z]/gi)?.length ?? 0,
    lastNameConsonantCount = lastName.match(/[b-df-hj-np-tv-z]/gi)?.length ?? 0,
    smallerVowelCount = Math.min(firstNameVowelCount, lastNameVowelCount),
    smallerConsonantCount = Math.min(firstNameConsonantCount, lastNameConsonantCount),
    smallerNameLength = Math.min(firstName.length, lastName.length),
    largerVowelCount = Math.max(firstNameVowelCount, lastNameVowelCount),
    largerConsonantCount = Math.max(firstNameConsonantCount, lastNameConsonantCount),
    largerNameLength = Math.max(firstName.length, lastName.length);

  return largerVowelCount * largerConsonantCount * largerNameLength 
    - smallerVowelCount * smallerConsonantCount * smallerNameLength 
    || 13;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getLuckyNumber("John Doe") should return 21.
2. getLuckyNumber("Olivia Lewis") should return 52.
3. getLuckyNumber("James Wilson") should return 18.
4. getLuckyNumber("Elizabeth Hernandez") should return 81.
5. getLuckyNumber("Mike Walker") should return 32.
6. getLuckyNumber("Chloe Perez") should return 13.
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