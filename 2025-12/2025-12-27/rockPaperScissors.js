function rockPaperScissors(player1, player2) {
  const choices = ["Rock", "Paper", "Scissors"];
  const player1Choice = choices.indexOf(player1);
  const player2Choice = choices.indexOf(player2);

  if (player1 === player2)
    return "Tie";

  if (Math.abs(player1Choice - player2Choice) === 1)
    return player1Choice > player2Choice ? "Player 1 wins" : "Player 2 wins";
  else
    return player1Choice > player2Choice ? "Player 2 wins" : "Player 1 wins";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. rockPaperScissors("Rock", "Rock") should return "Tie".
2. rockPaperScissors("Rock", "Paper") should return "Player 2 wins".
3. rockPaperScissors("Scissors", "Paper") should return "Player 1 wins".
4. rockPaperScissors("Rock", "Scissors") should return "Player 1 wins".
5. rockPaperScissors("Scissors", "Scissors") should return "Tie".
6. rockPaperScissors("Scissors", "Rock") should return "Player 2 wins".
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