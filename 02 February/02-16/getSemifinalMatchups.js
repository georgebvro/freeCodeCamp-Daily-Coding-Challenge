function getSemifinalMatchups(teams) {
  const regex = /^(?<name>.{3}): (?<wins>\d)-(?<overtimeWins>\d)-(?<overtimeLosses>\d)-(?<losses>\d)$/;
  const winPoints = 3;
  const overtimeWinPoints = 2;
  const overtimeLossPoints = 1;
  const lossPoints = 0;

  const teamObjects = teams.map(teamRecord => {
    const { name, wins, overtimeWins, overtimeLosses, losses } = regex.exec(teamRecord).groups;
    const totalPoints = 
      wins * winPoints 
      + overtimeWins * overtimeWinPoints 
      + overtimeLosses * overtimeLossPoints 
      + losses * lossPoints;

    return new TeamRecord(name, totalPoints);
  });

  teamObjects.sort((a, b) => b.points - a.points);

  return `The semi-final games will be ${teamObjects[0].name} vs ${teamObjects[3].name} and ${teamObjects[1].name} vs ${teamObjects[2].name}.`;
}

class TeamRecord {
  constructor (name, points) {
    this.name = name;
    this.points = points;
  }
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getSemifinalMatchups(["CAN: 2-2-0-1", "FIN: 2-2-1-0", "GER: 1-0-1-3", "SUI: 0-1-3-1", "SWE: 1-1-2-1", "USA: 2-1-0-2"]) should return "The semi-final games will be FIN vs SWE and CAN vs USA.".
2. getSemifinalMatchups(["CAN: 2-1-1-1", "CZE: 1-1-1-2", "FIN: 1-2-1-1", "NOR: 0-1-1-3", "SLO: 1-0-1-3", "USA: 5-0-0-0"]) should return "The semi-final games will be USA vs CZE and CAN vs FIN.".
3. getSemifinalMatchups(["CAN: 3-2-0-0", "CZE: 2-1-2-0", "LAT: 0-0-1-4", "ITA: 1-1-1-2", "DEN: 1-0-0-4", "USA: 3-1-1-0"]) should return "The semi-final games will be CAN vs ITA and USA vs CZE.".
4. getSemifinalMatchups(["AUT: 2-2-1-0", "DEN: 1-0-0-4", "ITA: 1-1-1-2", "JPN: 3-2-0-0", "KOR: 2-1-2-0", "LAT: 0-0-1-4"]) should return "The semi-final games will be JPN vs ITA and AUT vs KOR.".
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