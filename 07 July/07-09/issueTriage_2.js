function triageIssue(title, labels) {
  let updatedLabels = [];

  if (labels.length === 0) {
    if (title.includes("error") || title.includes("bug")) {
      updatedLabels = ["bug", "needs triage"];
    }

    if (title.includes("feature") || title.includes("add")) {
      updatedLabels = ["enhancement", "discussing"];
    }
  }

  if (labels.includes("needs triage") || labels.includes("discussing")) {
    if (labels.includes("needs triage") && (title.includes("simple") || title.includes("easy"))) {
      updatedLabels = labels.filter(label => label !== "needs triage").concat("good first issue");
    } else if (labels.includes("discussing") && (title.includes("planned") || title.includes("next"))) {
      updatedLabels = labels.filter(label => label !== "discussing").concat("on the roadmap");
    } else {
      updatedLabels = labels.filter(label => label !== "needs triage" && label !== "discussing").concat("help wanted");
    }
  }

  return title.includes("security") ? updatedLabels.concat("critical") : updatedLabels;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. triageIssue("app crashes with error", []) should return ["bug", "needs triage"].
2. triageIssue("app crashes with error", ["bug", "needs triage"]) should return ["bug", "help wanted"].
3. triageIssue("add dark mode", []) should return ["enhancement", "discussing"].
4. triageIssue("add dark mode", ["enhancement", "discussing"]) should return ["enhancement", "help wanted"].
5. triageIssue("xss security bug", []) should return ["bug", "needs triage", "critical"].
6. triageIssue("security vulnerability in auth", []) should return ["critical"].
7. triageIssue("easy a11y fix", ["bug", "needs triage"]) should return ["bug", "good first issue"].
8. triageIssue("planned api migration", ["enhancement", "discussing"]) should return ["enhancement", "on the roadmap"].
9. triageIssue("improve security", ["enhancement", "discussing"]) should return ["enhancement", "help wanted", "critical"].
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