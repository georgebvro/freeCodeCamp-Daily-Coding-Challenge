function isValidSchema(obj) {
  const ROLES = ["user", "creator", "moderator", "staff", "admin"];

  return obj.hasOwnProperty('users') && Array.isArray(obj['users']) && obj['users'].every(userProfile => 
    userProfile.hasOwnProperty('username') && typeof userProfile['username'] === "string"
    && userProfile.hasOwnProperty('posts') && typeof userProfile['posts'] === "number"
    && userProfile.hasOwnProperty('verified') && typeof userProfile['verified'] === "boolean"
    && userProfile.hasOwnProperty('role') && ROLES.includes(userProfile['role'])
    && (!userProfile.hasOwnProperty('supporter') || userProfile.hasOwnProperty('supporter') && typeof userProfile['supporter'] === "boolean")
    && userProfile.hasOwnProperty('badges') && Array.isArray(userProfile['badges']) && userProfile['badges'].every(badge => typeof badge === "string")
  );
}

// --- TEST SUITE ---

const testsText = String.raw`
1. isValidSchema({ users: [{ username: "ron", posts: 14, verified: true, role: "creator", badges: [ "early-adopter" ]}, { username: "cher", posts: 25, verified: true, role: "moderator", supporter: true, followers: 20, badges: [ "helper" ]}]}) should return true.
2. isValidSchema({ users: [] }) should return true.
3. isValidSchema({ users: { username: "anne", posts: 0, verified: false, role: "user", supporter: false, badges: []}}) should return false.
4. isValidSchema({ users: [{ username: "tony", posts: 10, verified: true, role: "creator", supporter: true, badges: ["liked", 6]}]}) should return false.
5. isValidSchema({ users: [{ username: "ursula", posts: 3, verified: false, role: "user", supporter: "false", badges: ["comeback"]}]}) should return false.
6. isValidSchema({ users: [{ username: "benny", posts: 55, verified: true, role: "superstar", supporter: true, badges: ["veteran"]}]}) should return false.
7. isValidSchema({ users: [{ username: "chase", posts: 1, verified: "yes", role: "staff", supporter: false, badges: ["superstar"]}]}) should return false.
8. isValidSchema({ users: [{ username: "carla", posts: "10", verified: false, role: "user", supporter: false, badges: ["newbie"]}]}) should return false.
9. isValidSchema({ users: [{ posts: 4, verified: false, role: "admin", supporter: false, badges: ["superuser", "veteran"]}]}) should return false.
10. isValidSchema({ users: [{ username: "harold", posts: 80, verified: true, role: "creator", supporter: true, badges: ["liked", "hero"]}, { username: "kim", posts: 11, verified: false, role: "admin", supporter: true, badges: ["first"]}, {}]}) should return false.
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