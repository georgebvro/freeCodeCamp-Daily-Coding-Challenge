function canDonate(donor, recipient) {
  const { donorLetter, donorRh } = /^(?<donorLetter>AB|A|B|O)(?<donorRh>\+|-)$/.exec(donor).groups;
  const { recipientLetter, recipientRh } = /^(?<recipientLetter>AB|A|B|O)(?<recipientRh>\+|-)$/.exec(recipient).groups;

  if (donorRh === "+" && recipientRh === "-")
    return false;

  switch (donorLetter) {
    case "A":
      if (recipientLetter !== "A" && recipientLetter !== "AB")
        return false;
      break;
    case "B":
      if (recipientLetter !== "B" && recipientLetter !== "AB")
        return false;
      break;
    case "AB":
      if (recipientLetter !== "AB")
        return false;
      break;
  }

  return true;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. canDonate("B+", "B+") should return true.
2. canDonate("O-", "AB-") should return true.
3. canDonate("O+", "A-") should return false.
4. canDonate("A+", "AB+") should return true.
5. canDonate("A-", "B-") should return false.
6. canDonate("B-", "AB+") should return true.
7. canDonate("B-", "A+") should return false.
8. canDonate("O-", "O+") should return true.
9. canDonate("O+", "O-") should return false.
10. canDonate("AB+", "AB-") should return false.
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