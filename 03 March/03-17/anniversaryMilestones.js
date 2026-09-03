function getMilestone(years) {
  const anniversaryMilestones = new Map([
    ['1', "Paper"],
    ['5', "Wood"],
    ['10', "Tin"],
    ['25', "Silver"],
    ['40', "Ruby"],
    ['50', "Gold"],
    ['60', "Diamond"],
    ['70', "Platinum"]
  ].reverse());

  for (const [yearsMarried, milestone] of anniversaryMilestones) {
    if (years >= yearsMarried)
      return milestone;
  }

  return "Newlyweds";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getMilestone(0) should return "Newlyweds".
2. getMilestone(1) should return "Paper".
3. getMilestone(8) should return "Wood".
4. getMilestone(10) should return "Tin".
5. getMilestone(26) should return "Silver".
6. getMilestone(45) should return "Ruby".
7. getMilestone(50) should return "Gold".
8. getMilestone(64) should return "Diamond".
9. getMilestone(71) should return "Platinum".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
  })

  console.log("----------------------------",
    failCount
    ? `\n⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "\n🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i]))
          return false;
      }
      else 
        return false;
    }

    else if (a[i] !== b[i])
      return false;
  }

  return true;
}

runTests(testData);