function compareEnergy(caloriesBurned, wattHoursUsed) {
  const CALORIES_TO_JOULES_CONVERSION_RATE = 4184;
  const WATT_HOUR_TO_JOULES_CONVERSION_RATE = 3600;

  const workoutEnergyJoules = caloriesBurned * CALORIES_TO_JOULES_CONVERSION_RATE;
  const devicesEnergyJoules = wattHoursUsed * WATT_HOUR_TO_JOULES_CONVERSION_RATE;

  return workoutEnergyJoules > devicesEnergyJoules ? "Workout" 
    : workoutEnergyJoules < devicesEnergyJoules ? "Devices" 
    : "Equal";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. compareEnergy(250, 50) should return "Workout".
2. compareEnergy(100, 200) should return "Devices".
3. compareEnergy(450, 523) should return "Equal".
4. compareEnergy(300, 75) should return "Workout".
5. compareEnergy(200, 250) should return "Devices".
6. compareEnergy(900, 1046) should return "Equal".
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