function getCleanupScore(items) {
  const ITEM_BASE_VALUES = {
    "bottle": 10,
    "can": 6,
    "bag": 8,
    "tire": 35,
    "straw": 4,
    "cardboard": 3,
    "newspaper": 3,
    "shoe": 12,
    "electronics": 25,
    "battery": 18,
    "mattress": 38
  };
  let streakBonus = 0;

  return items.reduce((cleanupScore, item, index, source) => {
    let currentItemValue;

    if (item[0] === "rare") {
      currentItemValue = item[1];
    } else {
      streakBonus = item === source[index - 1] ? streakBonus + 1 : 0;
      currentItemValue = ITEM_BASE_VALUES[item] + streakBonus;
    }

    const fifthItemMultiplier = !((index + 1) % 5) ? (index + 1) / 5 + 1 : 1;

    currentItemValue *= fifthItemMultiplier;

    return cleanupScore + currentItemValue;
  }, 0);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getCleanupScore(["bottle", "straw", "shoe", "battery"]) should return 44.
2. getCleanupScore(["electronics", "straw", "newspaper", "bottle", "bag"]) should return 58.
3. getCleanupScore(["shoe", "can", "can", "can", "bottle", "bottle", "straw", "straw", "straw"]) should return 79.
4. getCleanupScore(["mattress", ["rare", 80], "tire", "tire", "tire", ["rare", 95]]) should return 358.
5. getCleanupScore(["bottle", "can", "can", "shoe", "shoe", ["rare", 56], "bottle", "bottle", "can", "can", "electronics", "bottle", ["rare", 48], "bottle", "can", "can", "can", "can", "can", "can", "can"]) should return 383.
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
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i])) {
          return false;
        }
      } else {
        return false;
      }
    } else if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

runTests(testData);