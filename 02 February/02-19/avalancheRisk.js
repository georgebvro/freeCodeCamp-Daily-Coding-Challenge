function avalancheRisk(snowDepth, slope) {
/* Solution using Map()
  const avalancheRisk = new Map([
    ['Gentle|Shallow', 'Safe'],
    ['Gentle|Moderate', 'Safe'],
    ['Gentle|Deep', 'Safe'],
    ['Steep|Shallow', 'Safe'],
    ['Steep|Moderate', 'Risky'],
    ['Steep|Deep', 'Risky'],
    ['Very Steep|Shallow', 'Safe'],
    ['Very Steep|Moderate', 'Risky'],
    ['Very Steep|Deep', 'Risky']
  ]);

  return avalancheRisk.get(`${slope}|${snowDepth}`);
*/

/* Solution using nested object
  const avalancheRisk = {
    'Gentle':     { Shallow: "Safe", Moderate: "Safe" , Deep: "Safe"  },
    'Steep':      { Shallow: "Safe", Moderate: "Risky", Deep: "Risky" },
    'Very Steep': { Shallow: "Safe", Moderate: "Risky", Deep: "Risky" }
  };

  return avalancheRisk[slope][snowDepth];
*/

/* Solution using matrix
  const slopeIndex = { 'Gentle': 0, 'Steep': 1, 'Very Steep': 2 };
  const depthIndex = { 'Shallow': 0, 'Moderate': 1, 'Deep': 2 };

  const avalancheRisk = [
    ["Safe", "Safe", "Safe"],
    ["Safe", "Risky", "Risky"],
    ["Safe", "Risky", "Risky"]
  ];

  return avalancheRisk[slopeIndex[slope]][depthIndex[snowDepth]];
*/

// Solution using logic function
  if (slope === 'Gentle' || snowDepth === 'Shallow')
    return "Safe";

  return "Risky";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. avalancheRisk("Shallow", "Gentle") should return "Safe".
2. avalancheRisk("Shallow", "Steep") should return "Safe".
3. avalancheRisk("Shallow", "Very Steep") should return "Safe".
4. avalancheRisk("Moderate", "Gentle") should return "Safe".
5. avalancheRisk("Moderate", "Steep") should return "Risky".
6. avalancheRisk("Moderate", "Very Steep") should return "Risky".
7. avalancheRisk("Deep", "Gentle") should return "Safe".
8. avalancheRisk("Deep", "Steep") should return "Risky".
9. avalancheRisk("Deep", "Very Steep") should return "Risky".
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