function elevatorStops(currentFloor, stops) {
  const orderedStops = stops.toSorted((a, b) => a - b);
  const stopsAbove = orderedStops.filter(floor => floor > currentFloor);
  const stopsBelow = orderedStops.filter(floor => floor < currentFloor).toSorted((a, b) => b - a);
  const distanceAbove = stopsAbove.at(-1) - currentFloor;
  const distanceBelow = currentFloor - stopsBelow.at(-1);

  return distanceAbove <= distanceBelow ? stopsAbove.concat(stopsBelow) : stopsBelow.concat(stopsAbove);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. elevatorStops(5, [2, 8, 3, 9]) should return [3, 2, 8, 9].
2. elevatorStops(6, [2, 10, 8, 3, 1, 9]) should return [8, 9, 10, 3, 2, 1].
3. elevatorStops(1, [4, 8, 3, 6, 9]) should return [3, 4, 6, 8, 9].
4. elevatorStops(12, [6, 10, 7, 3, 1, 4]) should return [10, 7, 6, 4, 3, 1].
5. elevatorStops(11, [2, 8, 23, 5, 12, 10, 6, 9, 19]) should return [10, 9, 8, 6, 5, 2, 12, 19, 23].
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