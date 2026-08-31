function getMood(genre, bpm) {
  const MOOD_TABLE = [
    { mood: "focus", genre: "classical", bpmRange: 60 <= bpm && bpm <= 109 },
    { mood: "focus", genre: "electronic", bpmRange: 60 <= bpm && bpm <= 89 },
    { mood: "happy", genre: "pop", bpmRange: 60 <= bpm && bpm <= 180 },
    { mood: "happy", genre: "classical", bpmRange: 110 <= bpm && bpm <= 180 },
    { mood: "happy", genre: "rock", bpmRange: 60 <= bpm && bpm <= 129 },
    { mood: "happy", genre: "electronic", bpmRange: 90 <= bpm && bpm <= 134 },
    { mood: "hype", genre: "rock", bpmRange: 130 <= bpm && bpm <= 180 },
    { mood: "hype", genre: "electronic", bpmRange: 135 <= bpm && bpm <= 180 }
  ];

  return MOOD_TABLE
    .find(config => config.genre == genre && config.bpmRange)
    .mood;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getMood("rock", 111) should return "happy".
2. getMood("electronic", 74) should return "focus".
3. getMood("classical", 180) should return "happy".
4. getMood("rock", 155) should return "hype".
5. getMood("electronic", 90) should return "happy".
6. getMood("classical", 67) should return "focus".
7. getMood("pop", 100) should return "happy".
8. getMood("electronic", 135) should return "hype".
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