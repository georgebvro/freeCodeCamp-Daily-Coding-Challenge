function ticTacToe(board) {

  return checkWinConditions(board, "O") ? "O wins" : checkWinConditions(board, "X") ? "X wins" : "Draw";
}

const checkWinConditions = (board, player) => {
  return (horizontalLineWinCondition(board, player) 
    || verticalLineWinCondition(board, player) 
    || mainDiagonalWinCondition(board, player) 
    || antidiagonalWinCondition(board, player)
  );
};

const horizontalLineWinCondition = (board, player) => {
  for (const row of board)
    if (row.every(mark => mark === player))
      return true;

  return false;
};

const verticalLineWinCondition = (board, player) => {
  for (let j = 0; j < board[0].length; ++j) {
    let verticalLineCompleted = true;

    for (let i = 0; i < board.length; ++i) {
      if (board[i][j] !== player) {
        verticalLineCompleted = false;
        break;
      }
    }

    if (verticalLineCompleted)
      return true;
  }
};

const mainDiagonalWinCondition = (board, player) => {
  for (let k = 0; k < board.length; ++k) {
    if (board[k][k] !== player)
      return false;
  }

  return true;
};

const antidiagonalWinCondition = (board, player) => {
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j)
      if (i + j === board.length - 1 && board[i][j] !== player)
        return false;
  }

  return true;
};

// --- TEST SUITE ---

const testsText = String.raw`
1. ticTacToe([["X", "X", "X"], ["O", "O", "X"], ["O", "X", "O"]]) should return "X wins".
2. ticTacToe([["X", "O", "X"], ["X", "O", "X"], ["O", "O", "X"]]) should return "O wins".
3. ticTacToe([["X", "O", "X"], ["O", "X", "O"], ["O", "X", "O"]]) should return "Draw".
4. ticTacToe([["X", "X", "O"], ["X", "O", "X"], ["O", "X", "X"]]) should return "O wins".
5. ticTacToe([["X", "O", "O"], ["O", "X", "O"], ["O", "X", "X"]]) should return "X wins".
6. ticTacToe([["O", "X", "X"], ["X", "O", "O"], ["X", "O", "X"]]) should return "Draw".
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