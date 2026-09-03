function goldilocksZone(mass) {
  const luminosity = mass ** 3.5;
  const goldilocksZoneStart = 0.95 * Math.sqrt(luminosity);
  const goldilocksZoneEnd = 1.37 * Math.sqrt(luminosity);

  return [+parseFloat(goldilocksZoneStart).toFixed(2), Math.round(goldilocksZoneEnd * 100) / 100];
}

console.log(goldilocksZone(1));
console.log(goldilocksZone(0.5));
console.log(goldilocksZone(6));
console.log(goldilocksZone(3.7));
console.log(goldilocksZone(20));

// --- TEST SUITE ---

const testsText = `
1. goldilocksZone(1) should return [0.95, 1.37].
2. goldilocksZone(0.5) should return [0.28, 0.41].
3. goldilocksZone(6) should return [21.85, 31.51].
4. goldilocksZone(3.7) should return [9.38, 13.52].
5. goldilocksZone(20) should return [179.69, 259.13].
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let allPassed = true;
  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);
    let comparison;

    if (Array.isArray(testOutput))
      comparison = arraysEqual(functionCallOutput, testOutput);
    else
      comparison = functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      allPassed = false;
      failCount ++;
    }
  })

  console.log("----------------------------");

  if (allPassed)
    console.log("🎉SUCCESS: All tests PASSED.");
  else
    console.log(`⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`);
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (const index in a) {
    if (Array.isArray(a[index])) {
      if (Array.isArray(b[index])) {
        if (!arraysEqual(a[index], b[index]))
          return false;
      }
      else 
        return false;
    }

    else if (a[index] !== b[index])
      return false;
  }

  return true;
}

runTests(testData);