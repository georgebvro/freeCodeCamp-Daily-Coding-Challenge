function isValidSchema(obj) {
  const ROLES = ["user", "creator", "moderator", "staff", "admin"];

  return obj.hasOwnProperty('username') && typeof obj['username'] === "string"
    && obj.hasOwnProperty('posts') && typeof obj['posts'] === "number"
    && obj.hasOwnProperty('verified') && typeof obj['verified'] === "boolean"
    && obj.hasOwnProperty('role') && ROLES.includes(obj['role'])
    && (!obj.hasOwnProperty('supporter') || obj.hasOwnProperty('supporter') && typeof obj['supporter'] === "boolean")
    && obj.hasOwnProperty('badges') && Array.isArray(obj['badges']) && obj['badges'].every(badge => typeof badge === "string");
}

// --- TEST SUITE ---

const testsText = String.raw`
1. isValidSchema({ username: "gill", posts: 12, verified: false, role: "creator", supporter: false, badges: [ "early-adopter", "popular" ] }) should return true.
2. isValidSchema({ username: "tonya", posts: 299, verified: true, role: "moderator", supporter: true, badges: [ "streak-master", "veteran" ], followers: 1233 }) should return true.
3. isValidSchema({ username: "zara", posts: 0, verified: false, role: "user", supporter: false, badges: [] }) should return true.
4. isValidSchema({ username: "nicole", posts: 65, verified: true, role: "admin", supporter: false, badges: [ "first-post", 18 ] }) should return false.
5. isValidSchema({ username: "tim", posts: 25, verified: true, role: "staff", supporter: false }) should return false.
6. isValidSchema({ username: "charlie", posts: 0, verified: false, role: "user", supporter: "no", badges: [ "first-post", "anniversary" ] }) should return false.
7. isValidSchema({ username: "wanda", posts: 15, verified: true, role: "friend", supporter: true, badges: [ "popular" ] }) should return false.
8. isValidSchema({ username: "guy", posts: 5, verified: "false", role: "staff", supporter: true, badges: [ "helper" ] }) should return false.
9. isValidSchema({ username: "carrie", verified: true, role: "moderator", supporter: true, badges: [ "helper", "sharer" ] }) should return false.
10. isValidSchema({ username: true, posts: 75, verified: true, role: "creator", supporter: true, badges: [ "veteran" ] }) should return false.
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