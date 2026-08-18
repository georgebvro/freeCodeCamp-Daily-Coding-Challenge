function analyzeIdeas(ideas) {
  const calculateExpectedTime = ([ideaName, optimistic, realistic, pessimistic]) => 
    (optimistic + 4 * realistic + pessimistic) / 6 * ideaName.length;

  return ideas
    .sort((a, b) => calculateExpectedTime(a) - calculateExpectedTime(b))
    .map(idea => idea[0]);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. analyzeIdeas([["Add logging", 2, 5, 15], ["SEO optimization", 4, 8, 20], ["Fix bug", 1, 3, 5]]) should return ["Fix bug", "Add logging", "SEO optimization"].
2. analyzeIdeas([["Dark mode", 1, 3, 8], ["Real-time collaboration feature", 6, 12, 20], ["Add tooltip", 1, 2, 4]]) should return ["Add tooltip", "Dark mode", "Real-time collaboration feature"].
3. analyzeIdeas([["Update user profile page", 3, 7, 14], ["Add pagination", 2, 5, 10], ["Add tags", 2, 3, 6], ["Fix login bug", 1, 4, 8]]) should return ["Add tags", "Fix login bug", "Add pagination", "Update user profile page"].
4. analyzeIdeas([["Migrate database", 14, 25, 40], ["Add chat assistant", 8, 15, 24], ["Redesign onboarding flow", 3, 7, 13], ["Add language support", 6, 11, 18]]) should return ["Redesign onboarding flow", "Add language support", "Add chat assistant", "Migrate database"].
5. analyzeIdeas([["Add email notifications", 3, 7, 10], ["Migrate deployment flow", 6, 10, 16], ["Add push notifications", 2, 6, 10], ["Optimize continuous integration", 5, 8, 15], ["Analyze user patterns", 5, 10, 18], ["Create onboarding curriculum", 6, 15, 25]]) should return ["Add push notifications", "Add email notifications", "Analyze user patterns", "Migrate deployment flow", "Optimize continuous integration", "Create onboarding curriculum"].
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