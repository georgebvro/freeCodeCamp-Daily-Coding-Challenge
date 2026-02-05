// Overcomplicated solution using class

function findPawnMoves(position) {
  
  return new Position({ chessboardPosition: position })
    .chessboardPositionToMatrixIndices()
    .determineMovePositions();
}

class Position {
  constructor({ matrixRow, matrixColumn, chessboardPosition } = {}) {
    this.matrixRow = matrixRow;
    this.matrixColumn = matrixColumn;
    this.chessboardPosition = chessboardPosition;
  }

  static BOARD_SIZE = 8;

  chessboardPositionToMatrixIndices() {
    this.matrixRow = Position.BOARD_SIZE - this.chessboardPosition[1];
    this.matrixColumn = this.chessboardPosition[0].charCodeAt() - "A".charCodeAt();
    return this;
  }

  determineMovePositions() {
    const movePositions = [this.chessboardPosition[0] + (Position.BOARD_SIZE - this.matrixRow + 1)];
    
    if (this.chessboardPosition[1] === "2")
      movePositions.push(this.chessboardPosition[0] + (Position.BOARD_SIZE - this.matrixRow + 2));
    
    return movePositions;
  }
}

// --- TEST SUITE ---

const testsText = String.raw`
1. findPawnMoves("D4") should return ["D5"].
2. findPawnMoves("B2") should return ["B3", "B4"].
3. findPawnMoves("A7") should return ["A8"].
4. findPawnMoves("G2") should return ["G3", "G4"].
5. findPawnMoves("E3") should return ["E4"].
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