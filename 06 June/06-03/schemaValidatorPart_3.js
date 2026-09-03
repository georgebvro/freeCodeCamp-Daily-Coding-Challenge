function isValidSchema(obj) {
  const ROLES = ["user", "creator", "moderator", "staff", "admin"];

  return obj.hasOwnProperty('username') && typeof obj['username'] === "string"
    && obj.hasOwnProperty('posts') && typeof obj['posts'] === "number"
    && obj.hasOwnProperty('verified') && typeof obj['verified'] === 'boolean'
    && obj.hasOwnProperty('role') && ROLES.includes(obj['role']);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. isValidSchema({ username: "henry", posts: 0, verified: true, role: "staff" }) should return true.
2. isValidSchema({ username: "sara", posts: 45, verified: false, role: "creator", followers: 70 }) should return true.
3. isValidSchema({ username: "penelope", posts: 20, verified: true, role: "admin" }) should return true.
4. isValidSchema({ username: "kevin", posts: 0, verified: false, role: "user" }) should return true.
5. isValidSchema({ username: "george", posts: 15, verified: true, role: "moderator" }) should return true.
6. isValidSchema({ username: "david", posts: 0, verified: false, role: "guest" }) should return false.
7. isValidSchema({ username: "wendy", posts: 10, verified: true }) should return false.
8. isValidSchema({ username: "fabian", posts: 1, verified: true, role: true }) should return false.
9. isValidSchema({ username: 8, posts: 1, verified: true, role: "user" }) should return false.
10. isValidSchema({ username: "penny", posts: "10", verified: true, role: "staff" }) should return false.
11. isValidSchema({ username: "john", posts: "1", verified: "true", role: "admin" }) should return false.
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