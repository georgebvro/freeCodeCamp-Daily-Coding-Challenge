function makeLeet(str) {
  const LEET_SUBSTITUTIONS = {
    a: "4",
    e: "3",
    g: "9",
    i: "1",
    l: "1",
    o: "0",
    s: "5",
    t: "7"
  };
  let leet_str = str;

  for (const letter in LEET_SUBSTITUTIONS) {
    leet_str = leet_str.replaceAll(letter, LEET_SUBSTITUTIONS[letter]);
  }

  return leet_str;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. makeLeet("cool") should return "c001".
2. makeLeet("leet") should return "1337".
3. makeLeet("hacker") should return "h4ck3r".
4. makeLeet("satellite") should return "547311173".
5. makeLeet("abcdefghijklmnopqrstuvwxyz") should return "4bcd3f9h1jk1mn0pqr57uvwxyz".
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