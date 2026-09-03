function triageBlood(bank, patients) {
  const COMPATIBILITY = {
    'O': ["O"],
    'A': ["A", "O"],
    'B': ["B", "O"],
    'AB': ["AB", "A", "B", "O"]
  };
  const patientsCount = {};
  let orderedPatients = [];
  let servedPatients = 0;

  for (const patient of patients) {
    patientsCount[patient] = patientsCount[patient] + 1 || 1;
  }

  for (const bloodType of ["O", "A", "B", "AB"]) {
    orderedPatients = orderedPatients.concat(Array.from({ length: patientsCount[bloodType] }, _ => bloodType));
  }

  for (const patient of orderedPatients) {
    for (const possibleDonor of COMPATIBILITY[patient]) {
      if (bank.includes(possibleDonor)) {
        bank.splice(bank.indexOf(possibleDonor), 1);
        ++servedPatients;
        break;
      }
    }
  }

  return `${servedPatients} of ${patients.length} patients served`;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. triageBlood(["O", "A", "B", "AB"], ["O", "A", "B", "AB"]) should return "4 of 4 patients served".
2. triageBlood(["A", "A", "B", "B", "AB"], ["O", "A", "B", "B", "B"]) should return "3 of 5 patients served".
3. triageBlood(["O", "A", "B", "AB"], ["AB", "AB", "AB", "AB", "AB"]) should return "4 of 5 patients served".
4. triageBlood(["O", "O", "O", "O", "O"], ["O", "A", "B", "AB"]) should return "4 of 4 patients served".
5. triageBlood(["A", "O", "B", "AB", "B", "AB", "O", "A", "A"], ["O", "A", "B", "AB", "A", "B", "A", "A", "B", "A", "B"]) should return "8 of 11 patients served".
6. triageBlood(["O", "B", "AB", "AB", "O", "A", "A", "AB", "O", "B", "B", "AB", "A", "B", "AB"], ["O", "A", "B", "B", "A", "B", "AB", "A", "B", "A", "O", "AB", "AB", "O"]) should return "13 of 14 patients served".
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