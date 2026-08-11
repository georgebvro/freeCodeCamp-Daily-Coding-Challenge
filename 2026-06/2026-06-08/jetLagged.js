function getJetLagHours(departureCity, arrivalCity, flightDuration, direction) {
  const CITIES_UTC_OFFSET = {
    "Los Angeles": -8,
    "New York": -5,
    "London": 0,
    "Istanbul": +3,
    "Dubai": +4,
    "Hong Kong": +8,
    "Tokyo": +9
  };
  const timezoneDifference = Math.abs(CITIES_UTC_OFFSET[arrivalCity] - CITIES_UTC_OFFSET[departureCity]);
  const directionMultiplier = direction === "east" ? 1.5 : 1.0;

  return timezoneDifference + (flightDuration * 0.1) * directionMultiplier;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getJetLagHours("Istanbul", "Hong Kong", 10, "east") should return 6.5.
2. getJetLagHours("London", "New York", 8, "west") should return 5.8.
3. getJetLagHours("Hong Kong", "Tokyo", 4, "east") should return 1.6.
4. getJetLagHours("Dubai", "London", 7, "west") should return 4.7.
5. getJetLagHours("Los Angeles", "Hong Kong", 15, "west") should return 17.5.
6. getJetLagHours("Tokyo", "Dubai", 9, "west") should return 5.9.
7. getJetLagHours("New York", "Istanbul", 10, "east") should return 9.5.
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