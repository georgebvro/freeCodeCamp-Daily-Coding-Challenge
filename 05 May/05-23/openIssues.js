function getOpenIssues(issues, prs) {

  return issues.filter(issue => {
    issue = String(issue);

    for (let i = 0; i < issue.length; ++i) {
      const issueRotation = issue.slice(i) + issue.slice(0, i);

      for (let pr of prs) {
        pr = String(pr);
        
        if (issue === pr) {
          continue;
        }

        for (let j = 0; j < pr.length; ++j) {
          const prRotation = pr.slice(j) + pr.slice(0, j);

          if (Number(issueRotation) === Number(prRotation)) {
            return false;
          }
        }
      }
    }

    return true;
  });
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getOpenIssues([123, 234], [231]) should return [234].
2. getOpenIssues([123, 345, 16], [345, 231]) should return [345, 16].
3. getOpenIssues([456, 332, 12, 15], [201, 945, 180]) should return [456, 332, 15].
4. getOpenIssues([12, 115, 296, 170, 24], [17, 18, 19, 20, 21]) should return [115, 296, 24].
5. getOpenIssues([19, 95, 422, 395, 754, 102, 296, 709, 237, 4400, 1802], [395, 440, 9001, 95, 242, 21, 287, 169, 14]) should return [95, 395, 754, 296, 709, 237, 1802].
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