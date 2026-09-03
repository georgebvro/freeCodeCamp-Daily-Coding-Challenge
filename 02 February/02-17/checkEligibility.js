function checkEligibility(athleteWeights, sledWeight) {
  const onePersonBobsledMinWeight = 162;
  const twoPersonBobsledMinWeight = 170;
  const fourPersonBobsledMinWeight = 210;
  const onePersonMaxTotalWeight = 247;
  const twoPersonMaxTotalWeight = 390;
  const fourPersonMaxTotalWeight = 630;

  const totalWeight = athleteWeights.reduce((total, weight) => total + weight) + sledWeight;

  switch (athleteWeights.length) {
    case 1:
      if (sledWeight < onePersonBobsledMinWeight || totalWeight > onePersonMaxTotalWeight)
        return "Not Eligible";
      break;
    case 2:
      if (sledWeight < twoPersonBobsledMinWeight || totalWeight > twoPersonMaxTotalWeight)
        return "Not Eligible";
      break;
    case 4:
      if (sledWeight < fourPersonBobsledMinWeight || totalWeight > fourPersonMaxTotalWeight)
        return "Not Eligible";
  }

  return "Eligible";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. checkEligibility([78], 165) should return "Eligible".
2. checkEligibility([80], 160) should return "Not Eligible".
3. checkEligibility([80], 170) should return "Not Eligible".
4. checkEligibility([85, 90], 170) should return "Eligible".
5. checkEligibility([85, 95], 168) should return "Not Eligible".
6. checkEligibility([112, 97], 185) should return "Not Eligible".
7. checkEligibility([110, 102, 90, 106], 222) should return "Eligible".
8. checkEligibility([106, 99, 90, 88], 205) should return "Not Eligible".
9. checkEligibility([106, 99, 103, 96], 227) should return "Not Eligible".
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