function cast(spells) {
  const SPELLS = {
    "f": { spell: "Fire", category: "Destruction", score: 3},
    "l": { spell: "Lightning", category: "Destruction", score: 3},
    "i": { spell: "Ice", category: "Control", score: 2},
    "w": { spell: "Wind", category: "Control", score: 2},
    "h": { spell: "Heal", category: "Restoration", score: 1},
    "s": { spell: "Shield", category: "Restoration", score: 1}
  };
  let multiplier;

  return spells
    .split("")
    .reduce((acc, spellCode, index, source) => {
      multiplier = index > 0 && SPELLS[spellCode]['category'] !== SPELLS[source[index - 1]]['category'] 
        ? multiplier + 1 
        : 1;
        
      return acc + SPELLS[spellCode]['score'] * multiplier;
    }, 0);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. cast("fihwl") should return 33.
2. cast("lwswfi") should return 45.
3. cast("wislhfl") should return 37.
4. cast("sihwlih") should return 50.
5. cast("wishlfihwslwifihl") should return 101.
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