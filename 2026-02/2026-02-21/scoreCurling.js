function scoreCurling(house) {
  const teams = ['R', 'Y'];
  let winnerScore = 0;

  const ringIndices = {
    0: [[2, 2]],
    1: [
        [1, 1], [1, 2], [1, 3],
        [2, 1],         [2, 3],
        [3, 1], [3, 2], [3, 3]
       ],
    2: [
        [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
        [1, 0],                         [1, 4],
        [2, 0],                         [2, 4],
        [3, 0],                         [3, 4],
        [4, 0], [4, 1], [4, 2], [4, 3], [4, 4]
       ]
  };

  const houseStones = {
    0: { [teams[0]]: 0, [teams[1]]: 0 },
    1: { [teams[0]]: 0, [teams[1]]: 0 },
    2: { [teams[0]]: 0, [teams[1]]: 0 }
  };

  const lowestRings = {
    [teams[0]]: undefined,
    [teams[1]]: undefined
  };

  for (const ring in ringIndices)
    for (const indices of ringIndices[ring])
      for (const team of teams)
        if (house[indices[0]][indices[1]] === team)
          ++houseStones[ring][team];

  for (const team of teams)
    for (const ring in houseStones)
      if (houseStones[ring][team] > 0) {
        lowestRings[team] = ring;
        break;
      }

  const scoringTeam = 
    lowestRings[teams[0]] < lowestRings[teams[1]] ? teams[0] 
    : lowestRings[teams[1]] < lowestRings[teams[0]] ? teams[1] 
    : undefined;

  if (!scoringTeam)
    return "No points awarded";

  const losingTeam = teams.find(team => team !== scoringTeam);

  for (let ring = 0; ring < lowestRings[losingTeam]; ++ring)
    winnerScore += houseStones[ring][scoringTeam];

  return(`${scoringTeam}: ${winnerScore}`);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. scoreCurling([[".", ".", "R", ".", "."], [".", "R", ".", ".", "."], ["Y", ".", ".", ".", "."], [".", "R", ".", ".", "."], [".", ".", ".", ".", "."]]) should return "R: 2".
2. scoreCurling([[".", ".", "R", ".", "."], [".", ".", ".", ".", "."], [".", ".", "Y", ".", "R"], [".", ".", "Y", "Y", "."], [".", "Y", "R", "R", "."]]) should return "Y: 3".
3. scoreCurling([[".", "R", "Y", ".", "."], ["Y", ".", ".", ".", "."], [".", ".", ".", ".", "."], [".", "Y", "R", "Y", "."], [".", ".", "R", "R", "."]]) should return "No points awarded".
4. scoreCurling([[".", "Y", "Y", ".", "."], ["Y", ".", ".", "R", "."], [".", ".", "R", ".", "."], [".", ".", "R", "R", "."], [".", "Y", "R", "Y", "."]]) should return "R: 4".
5. scoreCurling([["Y", "Y", "Y", "Y", "Y"], ["Y", "R", "R", "R", "Y"], ["Y", "R", "Y", "R", "Y"], ["Y", "R", "R", "R", "Y"], ["Y", "Y", "Y", "Y", "Y"]]) should return "Y: 1".
6. scoreCurling([["Y", "R", "Y", "R", "Y"], ["R", ".", ".", ".", "R"], ["Y", ".", ".", ".", "Y"], ["R", ".", ".", ".", "R"], ["Y", ".", ".", "R", "Y"]]) should return "No points awarded".
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