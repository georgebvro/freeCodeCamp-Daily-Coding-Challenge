function getItineraryCount(stops) {
  const allStops = [...stops, "lunch", "dinner"];
  let validArrangements = 0;

  const backtrack = (pathSoFar, remainingStops) => {
    const breakfastIndex = pathSoFar.indexOf("breakfast");
    const lunchIndex = pathSoFar.indexOf("lunch");
    const dinnerIndex = pathSoFar.indexOf("dinner");
    let isValidArrangement = true;

    if (lunchIndex !== -1 && lunchIndex - breakfastIndex < 2
      || lunchIndex !== -1 && dinnerIndex !== -1 && dinnerIndex - lunchIndex < 2
      || lunchIndex === -1 && dinnerIndex !== -1
      || dinnerIndex !== -1 && pathSoFar.length - dinnerIndex > 2
    ) {
      isValidArrangement = false;
    }

    if (isValidArrangement) {
      validArrangements += pathSoFar.length === allStops.length + 1 ? 1 : 0;

      for (let i = 0; i < remainingStops.length; ++i) {
        pathSoFar.push(remainingStops[i]);
        backtrack(pathSoFar, remainingStops.toSpliced(i, 1));
        pathSoFar.pop();
      }
    }
  }

  backtrack(["breakfast"], allStops);

  return validArrangements;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getItineraryCount(["library", "park"]) should return 2.
2. getItineraryCount(["library", "park", "arcade"]) should return 18.
3. getItineraryCount(["library", "park", "arcade", "store"]) should return 120.
4. getItineraryCount(["library", "park", "arcade", "store", "cafe"]) should return 840.
5. getItineraryCount(["library", "park", "arcade", "store", "cafe", "market", "museum"]) should return 55440.
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