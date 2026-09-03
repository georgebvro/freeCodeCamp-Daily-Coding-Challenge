function isValidSchema(obj) {

  return obj.hasOwnProperty('username') && typeof obj['username'] === "string"
    && obj.hasOwnProperty('posts') && typeof obj['posts'] === "number"
    && obj.hasOwnProperty('verified') && typeof obj['verified'] === "boolean";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. isValidSchema({ username: "alice", posts: 10, verified: false }) should return true.
2. isValidSchema({ username: "carol", posts: 15, verified: true, followers: 25 }) should return true.
3. isValidSchema({ username: "frank", posts: "21", verified: true }) should return false.
4. isValidSchema({ username: "sam", posts: 17, verified: "false" }) should return false.
5. isValidSchema({ username: "bill", verified: true }) should return false.
6. isValidSchema({ username: "fred", verified: true }) should return false.
7. isValidSchema({ username: 5, posts: 10, verified: true }) should return false.
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