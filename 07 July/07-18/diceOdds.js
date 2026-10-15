function getOdds(dice, target) {
  const DIE_SIDES = 6;
  const possibleRollsCount = DIE_SIDES ** dice;

/* Top-down approach using recursion with memoization
  const cache = new Map();

  const countSuccessfulRolls = (diceLeft, targetRemaining) => {
    const key = `${diceLeft}_${targetRemaining}`;

    if (cache.has(key)) {
      return cache.get(key);
    }

    if (diceLeft === 0) {
      return targetRemaining === 0 ? 1 : 0;
    }

    if (targetRemaining < diceLeft || targetRemaining > diceLeft * DIE_SIDES) {
      return 0;
    }

    let targetHitCount = 0;

    for (let dieFace = 1; dieFace <= DIE_SIDES; ++dieFace) {
      targetHitCount += countSuccessfulRolls(diceLeft - 1, targetRemaining - dieFace);
    }

    cache.set(key, targetHitCount);

    return targetHitCount;
  }

  return `1 in ${Math.round(possibleRollsCount / countSuccessfulRolls(dice, target))}`;
*/

/* Bottom-up approach using iteration with a table
  const table = Array.from(
    { length: 1 }, () => Array.from(
      { length: dice * DIE_SIDES }, (_, index) => index < DIE_SIDES ? 1 : 0
    )
  );

  for (let die = 1; die < dice; ++die) {
    const newRow = [];

    for (let i = 0; i < dice * DIE_SIDES; ++i) {
      newRow.push(
        table[die - 1]
          .slice(i - DIE_SIDES < 0 ? 0 : i - DIE_SIDES, i)
          .reduce((acc, value) => acc + value, 0)
      );
    }

    table.push(newRow);
  }

  return `1 in ${Math.round(possibleRollsCount / table[dice - 1][target - 1])}`;
*/

// Same bottom-up approach using iteration but the table is optimized to a one dimension array
  let table = Array.from({ length: dice * DIE_SIDES }, (_, index) => index < DIE_SIDES ? 1 : 0);

  for (let die = 2; die <= dice; ++die) {
    table = table.map((_, index, source) => source
      .slice(index - DIE_SIDES < 0 ? 0 : index - DIE_SIDES, index)
      .reduce((acc, value) => acc + value, 0)
    );
  }

  return `1 in ${Math.round(possibleRollsCount / table[target - 1])}`;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getOdds(1, 5) should return "1 in 6".
2. getOdds(2, 4) should return "1 in 12".
3. getOdds(3, 10) should return "1 in 8".
4. getOdds(4, 7) should return "1 in 65".
5. getOdds(5, 26) should return "1 in 111".
6. getOdds(6, 35) should return "1 in 7776".
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