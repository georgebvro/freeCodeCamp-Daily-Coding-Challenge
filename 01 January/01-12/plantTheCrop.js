function getNumberOfPlants(fieldSize, unit, crop) {
  const ACRES_TO_SQUARE_METERS_CONVERSION_RATE = 4046.86;
  const HECTARES_TO_SQUARE_METERS_CONVERSION_RATE = 10000;
  const cropAreas = new Map([
    ['corn', 1], 
    ['wheat', 0.1], 
    ['soybeans', 0.5], 
    ['tomatoes', 0.25], 
    ['lettuce', 0.2]
  ]);

  const fieldSizeSquareMeters = 
    unit === 'acres' ? fieldSize * ACRES_TO_SQUARE_METERS_CONVERSION_RATE : 
    unit === 'hectares' ? fieldSize * HECTARES_TO_SQUARE_METERS_CONVERSION_RATE : 
    undefined;

  return Math.floor(fieldSizeSquareMeters / cropAreas.get(crop));
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getNumberOfPlants(1, "acres", "corn") should return 4046.
2. getNumberOfPlants(2, "hectares", "lettuce") should return 100000.
3. getNumberOfPlants(20, "acres", "soybeans") should return 161874.
4. getNumberOfPlants(3.75, "hectares", "tomatoes") should return 150000.
5. getNumberOfPlants(16.75, "acres", "tomatoes") should return 271139.
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