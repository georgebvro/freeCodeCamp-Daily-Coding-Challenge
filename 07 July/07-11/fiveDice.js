function fiveDice(dice) {
  const diceCount = {};

  for (const die of dice) {
    diceCount[die] = diceCount[die] + 1 || 1;
  }

  const counts = Object.values(diceCount);

  // Five of a kind
  if (counts.length === 1) {
    return "five of a kind";
  }

  // Four of a kind
  if (counts.includes(4)) {
    return "four of a kind";
  }

  // Full house
  if (counts.includes(3) && counts.includes(2)) {
    return "full house";
  }

  // Large straight and Small straight
  const sortedDice = dice.toSorted();
  const differences = Array.from({ length: sortedDice.length - 1 }, (_, i) => sortedDice[i + 1] - sortedDice[i]);
  
  if (differences.every(difference => difference === 1)) {
    return "large straight";
  }

  if (differences.slice(0, -1).every(difference => difference === 1) || differences.slice(1).every(difference => difference === 1)) {
    return "small straight";
  }

  // Three of a kind
  if (counts.includes(3)) {
    return "three of a kind";
  }

  // Two pair and One pair
  const countsCounts = {};
  for (const count of counts) {
    countsCounts[count] = countsCounts[count] + 1 || 1;
  }

  if (countsCounts[2] === 2) {
    return "two pair";
  }

  if (countsCounts[2] === 1) {
    return "pair";
  }

  // No pair
  return "no pair";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. fiveDice([1, 1, 1, 1, 1]) should return "five of a kind".
2. fiveDice([5, 5, 5, 6, 5]) should return "four of a kind".
3. fiveDice([2, 5, 6, 4, 3]) should return "large straight".
4. fiveDice([4, 3, 3, 3, 1]) should return "three of a kind".
5. fiveDice([4, 6, 2, 6, 5]) should return "pair".
6. fiveDice([1, 4, 5, 6, 2]) should return "no pair".
7. fiveDice([1, 3, 4, 6, 2]) should return "small straight".
8. fiveDice([2, 2, 5, 2, 5]) should return "full house".
9. fiveDice([6, 4, 5, 6, 4]) should return "two pair".
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