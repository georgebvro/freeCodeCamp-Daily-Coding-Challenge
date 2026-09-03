function isValidSchema(obj) {
  const ROLES = ["user", "creator", "moderator", "staff", "admin"];

  return obj.hasOwnProperty('username') && typeof obj['username'] === "string"
    && obj.hasOwnProperty('posts') && typeof obj['posts'] === "number"
    && obj.hasOwnProperty('verified') && typeof obj['verified'] === "boolean"
    && obj.hasOwnProperty('role') && ROLES.includes(obj['role'])
    && (!obj.hasOwnProperty('supporter') || obj.hasOwnProperty('supporter') && typeof obj['supporter'] === "boolean");
}

// --- TEST SUITE ---

const testsText = String.raw`
1. isValidSchema({ username: "vivian", posts: 1, verified: false, role: "user", supporter: true }) should return true.
2. isValidSchema({ username: "rudolph", posts: 15, verified: true, role: "creator" }) should return true.
3. isValidSchema({ username: "hernandez", posts: 35, verified: true, role: "moderator", supporter: false, followers: 55 }) should return true.
4. isValidSchema({ username: "julia", posts: 50, verified: true, role: "admin", supporter: "true" }) should return false.
5. isValidSchema({ username: "bernard", posts: 0, verified: true, role: "friend", supporter: true }) should return false.
6. isValidSchema({ username: "felix", posts: 40, verified: "yes", role: "staff", supporter: false }) should return false.
7. isValidSchema({ username: "jimmy", posts: true, verified: false, role: "creator", supporter: true }) should return false.
8. isValidSchema({ username: true, posts: 30, verified: true, role: "moderator", supporter: false }) should return false.
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