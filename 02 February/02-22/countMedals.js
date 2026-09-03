function countMedals(winners) {
  const medalsObject = { };
  const indexToMedalMap = new Map([
    [0, 'Gold'],
    [1, 'Silver'],
    [2, 'Bronze']
  ]);
  const csvHeader = "Country,Gold,Silver,Bronze,Total";

  winners.forEach(event => {
    event.forEach((country, index) => {
      if (!medalsObject[country])
        medalsObject[country] = { 'Gold': 0, 'Silver': 0, 'Bronze': 0 };

      ++medalsObject[country][indexToMedalMap.get(index)];
    });
  });

  const medalsArray = Object.entries(medalsObject);
  medalsArray.sort().sort((a, b) => b[1]['Gold'] - a[1]['Gold']);

  return medalsArray.reduce((csv, country) => {
    const total = country[1]['Gold'] + country[1]['Silver'] + country[1]['Bronze'];

    return csv + `\n${country[0]},${country[1]['Gold']},${country[1]['Silver']},${country[1]['Bronze']},${total}`;
  }, csvHeader);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. countMedals([["USA", "CAN", "NOR"], ["NOR", "USA", "CAN"], ["USA", "NOR", "SWE"]]) should return "Country,Gold,Silver,Bronze,Total\nUSA,2,1,0,3\nNOR,1,1,1,3\nCAN,0,1,1,2\nSWE,0,0,1,1".
2. countMedals([["NOR","SWE","FIN"]]) should return "Country,Gold,Silver,Bronze,Total\nNOR,1,0,0,1\nFIN,0,0,1,1\nSWE,0,1,0,1".
3. countMedals([["ITA", "CHN", "CHN"], ["JPN", "ITA", "JPN"]]) should return "Country,Gold,Silver,Bronze,Total\nITA,1,1,0,2\nJPN,1,0,1,2\nCHN,0,1,1,2".
4. countMedals([["USA","CAN","NOR"], ["GER","FRA","ITA"], ["JPN","KOR","CHN"], ["SWE","FIN","NOR"], ["CAN","USA","SWE"], ["FRA","GER","ITA"]]) should return "Country,Gold,Silver,Bronze,Total\nCAN,1,1,0,2\nFRA,1,1,0,2\nGER,1,1,0,2\nJPN,1,0,0,1\nSWE,1,0,1,2\nUSA,1,1,0,2\nCHN,0,0,1,1\nFIN,0,1,0,1\nITA,0,0,2,2\nKOR,0,1,0,1\nNOR,0,0,2,2".
5. countMedals([["ESP","ITA","FRA"], ["ITA","ESP","GER"], ["NOR","SWE","FIN"], ["FIN","NOR","SWE"], ["USA","CAN","MEX"], ["CAN","USA","MEX"], ["JPN","KOR","CHN"], ["CHN","JPN","KOR"]]) should return "Country,Gold,Silver,Bronze,Total\nCAN,1,1,0,2\nCHN,1,0,1,2\nESP,1,1,0,2\nFIN,1,0,1,2\nITA,1,1,0,2\nJPN,1,1,0,2\nNOR,1,1,0,2\nUSA,1,1,0,2\nFRA,0,0,1,1\nGER,0,0,1,1\nKOR,0,1,1,2\nMEX,0,0,2,2\nSWE,0,1,1,2".
6. countMedals([["USA","CAN","GER"], ["NOR","SWE","FIN"], ["USA","NOR","SWE"], ["GER","FRA","ITA"], ["JPN","KOR","CHN"], ["USA","GER","CAN"], ["SWE","NOR","FIN"], ["CAN","USA","NOR"], ["FRA","GER","ITA"], ["JPN","CHN","KOR"], ["SWE","FIN","NOR"], ["GER","ITA","FRA"]]) should return "Country,Gold,Silver,Bronze,Total\nUSA,3,1,0,4\nGER,2,2,1,5\nJPN,2,0,0,2\nSWE,2,1,1,4\nCAN,1,1,1,3\nFRA,1,1,1,3\nNOR,1,2,2,5\nCHN,0,1,1,2\nFIN,0,1,2,3\nITA,0,1,2,3\nKOR,0,1,1,2".
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