function navigateTrail(map) {
  const start = 'C';
  const traversableOrGoal = ['T', 'G'];
  const currentLocation = { };
  let trailMoves = "";

  for (const verticalCoordinate in map) {
    const horizontalCoordinate = map[verticalCoordinate].indexOf(start);
    
    if (horizontalCoordinate !== -1) {
      currentLocation['type'] = start;
      currentLocation['vertical'] = Number(verticalCoordinate);
      currentLocation['horizontal'] = horizontalCoordinate;
    }
  }

/* Solution using four if statements, one for each direction
  while (currentLocation['type'] !== 'G') {
    const indexOfOneRowUp = currentLocation['vertical'] - 1;
    const upLocation = indexOfOneRowUp >= 0 ? map[indexOfOneRowUp][currentLocation['horizontal']] : undefined;
    if (trailMoves[trailMoves.length - 1] !== "D" && traversableOrGoal.includes(upLocation)) {
      currentLocation['type'] = upLocation;
      currentLocation['vertical'] -= 1;
      trailMoves += "U";
      continue;
    }

    const indexOfOneRowDown = currentLocation['vertical'] + 1;
    const downLocation = indexOfOneRowDown < map.length ? map[indexOfOneRowDown][currentLocation['horizontal']] : undefined;
    if (trailMoves[trailMoves.length - 1] !== "U" && traversableOrGoal.includes(downLocation)) {
      currentLocation['type'] = downLocation;
      currentLocation['vertical'] += 1;
      trailMoves += "D";
      continue;
    }    

    const indexOfOneColumnLeft = currentLocation['horizontal'] - 1;
    const leftLocation = indexOfOneColumnLeft >= 0 ? map[currentLocation['vertical']][indexOfOneColumnLeft] : undefined;
    if (trailMoves[trailMoves.length - 1] !== "R" && traversableOrGoal.includes(leftLocation)) {
      currentLocation['type'] = leftLocation;
      currentLocation['horizontal'] -= 1;
      trailMoves += "L";
      continue;
    }

    const indexOfOneColumnRight = currentLocation['horizontal'] + 1;
    const rightLocation = indexOfOneColumnRight < map[currentLocation['vertical']].length ? map[currentLocation['vertical']][indexOfOneColumnRight] : undefined;
    if (trailMoves[trailMoves.length - 1] !== "L" && traversableOrGoal.includes(rightLocation)) {
      currentLocation['type'] = rightLocation;
      currentLocation['horizontal'] += 1;
      trailMoves += "R";
    }
  }
*/

// A more elegant condensed solution using an object for directions
  const directions = {
      'U': {verticalOffset: -1, horizontalOffset: 0, oppositeDirection: "D"},
      'D': {verticalOffset: 1, horizontalOffset: 0, oppositeDirection: "U"},
      'L': {verticalOffset: 0, horizontalOffset: -1, oppositeDirection: "R"},
      'R': {verticalOffset: 0, horizontalOffset: 1, oppositeDirection: "L"}
  };

  while (currentLocation['type'] !== 'G') {
    for (const [direction, {verticalOffset, horizontalOffset, oppositeDirection}] of Object.entries(directions)) {
      const targetVertical = currentLocation['vertical'] + verticalOffset;
      const targetHorizontal = currentLocation['horizontal'] + horizontalOffset;
      const targetLocation = map[targetVertical]?.[targetHorizontal];

      if (traversableOrGoal.includes(targetLocation) && !trailMoves.endsWith(oppositeDirection)) {
        currentLocation['type'] = targetLocation;
        currentLocation['vertical'] = targetVertical;
        currentLocation['horizontal'] = targetHorizontal;
        trailMoves += direction;
        break;
      }
    }
  }

  return trailMoves;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. navigateTrail(["-CT--", "--T--", "--TT-", "---T-", "---G-"]) should return "RDDRDD".
2. navigateTrail(["-----", "--TTG", "--T--", "--T--", "CTT--"]) should return "RRUUURR".
3. navigateTrail(["-C----", "TT----", "T-----", "TTTTT-", "----G-"]) should return "DLDDRRRRD".
4. navigateTrail(["--------", "-CTTT---", "----T---", "---GT---", "--------"]) should return "RRRDDL".
5. navigateTrail(["TTTTTTT-", "T-----T-", "T-----T-", "TTTT--TG", "---C----"]) should return "ULLLUUURRRRRRDDDR".
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