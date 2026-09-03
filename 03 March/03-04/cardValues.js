function cardValues(cards) {

  return cards.map(card => {
    const { cardRank } = /^(?<cardRank>[0-9]|[A-Z]|10)[SCDH]$/.exec(card).groups;
    
    switch(cardRank) {
      case "A":
        return 1;

      case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case "10":
        return Number(cardRank);

      case "J": case "Q": case "K":
        return 10;
    }

  });
}

// --- TEST SUITE ---

const testsText = String.raw`
1. cardValues(["3H", "4D", "5S"]) should return [3, 4, 5].
2. cardValues(["AS", "10S", "10H", "6D", "7D"]) should return [1, 10, 10, 6, 7].
3. cardValues(["8D", "QS", "2H", "JC", "9C"]) should return [8, 10, 2, 10, 9].
4. cardValues(["AS", "KS"]) should return [1, 10].
5. cardValues(["10H", "JH", "QH", "KH", "AH"]) should return [10, 10, 10, 10, 1].
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